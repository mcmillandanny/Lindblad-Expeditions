'use strict';

console.log("Helllo from the console!");

var hamburger = document.getElementById('hamburger');
var lines = document.querySelectorAll('.lines');

function hamburgerToggle() {
    lines.forEach(function (line) {
        line.classList.toggle("change");
    });
};
hamburger.addEventListener("click", hamburgerToggle);
//# sourceMappingURL=main.js.map
