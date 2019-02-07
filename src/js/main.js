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



let animateText = new TimelineMax({});

function animateTextInOut() {
    animateText.from(".text-car", .3, {
        y: "-80px", 
        ease: Ease.in
    })

}

let text = document.querySelectorAll('.text-car');
let currentTextIndex = 0;

setInterval(() => {
    animateTextInOut();

    let hideShowingText = function() {
        let activeText = document.querySelector('.showing');
        
        if (activeText) {
            activeText.classList.remove('showing');
        }
    }

    let showNewText = function() {
        text[currentTextIndex].classList.add('showing');
       
    }

    let next = function() {
        hideShowingText()
        currentTextIndex++
        if (currentTextIndex === text.length) {
			currentTextIndex = 0;
		}
		showNewText()
    }
		     // find .showing
    // hide the one that's currently .showing

    // currentTextIndex++
    // add .showing to text[currentTextIndex] 
    next()
}, 3000)




