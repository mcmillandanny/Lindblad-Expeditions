console.log("Helllo from the console!");

const hamburger = document.getElementById('hamburger');
const lines = document.querySelectorAll('.lines');
let overlay = document.querySelector('.overlay');
let overlayTextNav = document.querySelector('.overlay-nav');

function hamburgerToggle() {
    lines.forEach(function(line) {
        line.classList.toggle("change"); 
        overlay.classList.toggle('open');
        overlayTextNav.classList.toggle('open');        
    });
};
hamburger.addEventListener("click", hamburgerToggle);



