console.log("Helllo from the console!");


const hamburger = document.getElementById('hamburger');
const lines = document.querySelectorAll('.hamburger-lines');


function hamburgerToggle() {
    lines.forEach(function(line) {
        line.classList.toggle("change");       
    });
    // navOpen.style.display = navOpen.style.display === 'block' ? '' : 'block'; 
    // navOpen.classList.add("menu-ani")
};

hamburger.addEventListener("click", hamburgerToggle);