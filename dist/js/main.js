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
//# sourceMappingURL=main.js.map
