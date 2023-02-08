/*const slider = document.querySelector('.slider');
const container = document.querySelector('.slider_container');
const slides = document.querySelectorAll('.slide');
const navigations = document.querySelectorAll('.navigation');
let activeOrder = 0;
init();

function init() {
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];

        slide.dataset.order = i;
        slide.style.transform = "translate(-50%, -50%)";
        
    }

    activeOrder = Math.floor(slides.length / 2);

    update();
}

function update() {
    const {
        width,
        height
    } = container.getBoundingClientRect();
    const a = width / 2;
    const b = height / 2;
    const delta = Math.PI / slides.length / 2 - delta * i * 2;
    
    for (let i = 0; i < slides.length; i++) {
        const leftSlide = document.querySelector(`.slide[data-order="${activeOrder - i}"]`);
        if (leftSlide) {
            leftSlide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2)}px`;
            leftSlide.style.top = `${-b * Math.sin((Math.PI * 3) / 2 - delta * i * 2)}px`;
        }
        const rightSlide = document.querySelector(`slide[data-order="${activeOrder + i}"]`);
    }
}*/


/*let slideIndex = 1;
showSlides(slideIndex);*/

// Next/previous controls
/*function plusSlides(n) {
    showSlides(slideIndex += n);
}*/

// Thumbnail image controls
/*function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/
/*

3D Carousel images gallery. inspired from David DeSandro's tutorial (https://3dtransforms.desandro.com/)

*/

window.addEventListener('load', function () {
    carouselRUN();
}, false);

function carouselRUN() {
    var carousel = document.getElementById("carousel");
    var scene = document.getElementById("scene");
    var carousel_items_Arrey = document.getElementsByClassName("carousel_item");
    var carousel_btn = document.getElementById("carousel_btn");
    var n = carousel_items_Arrey.length;
    var curr_carousel_items_Arrey = 0;
    var theta = Math.PI * 2 / n;
    var interval = null;
    var autoCarousel = carousel.dataset.auto;

    setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    window.addEventListener('resize', function () {
        clearInterval(interval);
        setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    }, false);
    setupNavigation();


    function setupCarousel(n, width) {
        var apothem = width / (2 * Math.tan(Math.PI / n));
        scene.style.transformOrigin = `50% 50% ${- apothem}px`;

        for (i = 1; i < n; i++) {
            carousel_items_Arrey[i].style.transformOrigin = `50% 50% ${- apothem}px`;
            carousel_items_Arrey[i].style.transform = `rotateY(${i * theta}rad)`;
        }

        if (autoCarousel === "true") {
            setCarouselInterval();
        }
    }

    function setCarouselInterval() {
        interval = setInterval(function () {
            curr_carousel_items_Arrey++;
            scene.style.transform = `rotateY(${(curr_carousel_items_Arrey) * -theta}rad)`;
        }, 3000);
    }

    function setupNavigation() {
        carousel_btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var target = e.target;

            if (target.classList.contains('next')) {
                curr_carousel_items_Arrey++;
            } else if (target.classList.contains('prev')) {
                curr_carousel_items_Arrey--;
            }
            clearInterval(interval);
            scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;

            if (autoCarousel === "true") {
                setTimeout(setCarouselInterval(), 3000);
            }
        }, true);
    }
}