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

let text = document.querySelectorAll('.text-car');



function textCarousel() {
    text.forEach(function(destination) {
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



