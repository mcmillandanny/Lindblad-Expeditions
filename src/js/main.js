console.log("Helllo from the console!");

const hamburger = document.getElementById('hamburger');
const lines = document.querySelectorAll('.lines');

function hamburgerToggle() {
    lines.forEach(function(line) {
        line.classList.toggle("change");       
    });
};
hamburger.addEventListener("click", hamburgerToggle);