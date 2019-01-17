'use strict';

console.log("Helllo from the console!");

var hamburger = document.getElementById('hamburger');
var lines = document.querySelectorAll('.hamburger-lines');

function hamburgerToggle() {
    lines.forEach(function (line) {
        line.classList.toggle("change");
    });
    // navOpen.style.display = navOpen.style.display === 'block' ? '' : 'block'; 
    // navOpen.classList.add("menu-ani")
};

hamburger.addEventListener("click", hamburgerToggle);
//# sourceMappingURL=main.js.map
