'use strict';

const loader = document.querySelector('[data-preload]');

window.addEventListener('load', function (){
    loader.classList.add("loaded");
    document.body.classList.add("loaded");
});