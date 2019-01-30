'use strict';

console.log("Helllo from the console!");

var hamburger = document.getElementById('hamburger');
var lines = document.querySelectorAll('.lines');
var overlay = document.querySelector('.overlay');
var overlayTextNav = document.querySelector('.overlay-nav');

function hamburgerToggle() {
    lines.forEach(function (line) {
        line.classList.toggle("change");
        overlay.classList.toggle('open');
        overlayTextNav.classList.toggle('open');
    });
};
hamburger.addEventListener("click", hamburgerToggle);

var text = document.querySelectorAll('.text-car');

function textCarousel() {
    text.forEach(function (destination) {
        // var randomNum = text[Math.floor(Math.random() * text.length)];
        // console.log(randomNum);
        // console.log(destination); 

        if (destination.classList.contains("showing")) {
            destination.style.display = "block";
        } else {
            destination.style.display = "none";
        }
    });
}

textCarousel();
//# sourceMappingURL=main.js.map
