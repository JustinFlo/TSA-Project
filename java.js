'use strict';

const loader = document.querySelector('[data-preload]');

window.addEventListener('load', function (){
    loader.classList.add("loaded");
    document.body.classList.add("loaded");
});

const addEventOnElements = function (elements, eventType, callback) {
    for( let i = 0, len = elements.length; i < len; i++ ) {
        elements[i].addEventListener(eventType, callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navbarToggle = document.querySelector("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navbarToggle, "click", toggleNavbar);


const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function () {
    const isScrollButton = lastScrollPos < window.scrollY;

    if(isScrollButton){
        header.classList.add("hide");
    } else{
        header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
    if(window.scrollY > 50) {
        header.classList.add("active");
        hideHeader();
    }
    else{
        header.classList.remove("active");
    }
})

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn");
const heroSliderNextBtn = document.querySelector("[data-next-btn");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];


const update = function () {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos]
}

const slideNext = function () {
   if( currentSlidePos > heroSliderItems.length - 1) {
        currentSlidePos = 0;
   } else{
    currentSlidePos++
   }

   update()
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
    if(currentSlidePos < 0) {
        currentSlidePos = heroSliderItems.length - 1;
    } else{
        currentSlidePos--;
    }

    update()
}

heroSliderPrevBtn.addEventListener("click", slidePrev)


let autoSlideInterval;

const autoSlide = function () {
    autoSlideInterval = setInterval(function () {
        slideNext();
    }, 6000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function(){
    clearInterval(autoSlideInterval)
})

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide)

window.addEventListener("load", autoSlide)

const parallaxItems = document.querySelectorAll("[data-parallax-item]");


window.addEventListener("mousemove", function (event){
    x =(event.clientX / window.innerWidth * 10) - 5;
    y =(event.clientY / window.innerWidth * 10) - 5;

    x = x - (x * 2);
    y = y - (y * 2);

    for (let i = 0; i < parallaxItems.length; i++) {
        x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
        y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
        parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`
        
    }

})
