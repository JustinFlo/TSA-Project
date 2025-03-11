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
    const isScrollButtom = lastScrollPos < window.scrollY;

    if(isScrollButtom){
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