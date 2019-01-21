console.log("Helllo from the console!");

const hamburger = document.getElementById('hamburger');

function hamburgerToggle() {
    lines.forEach(function(line) {
        line.classList.toggle("change");       
    });
};
hamburger.addEventListener("click", hamburgerToggle);