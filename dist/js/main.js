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

var animateText = new TimelineMax({});

function animateTextInOut() {
    animateText.from(".text-car", .3, {
        y: "-80px",
        ease: Ease.in
    });
}

var text = document.querySelectorAll('.text-car');
var currentTextIndex = 0;

setInterval(function () {
    // animateTextInOut();

    var hideShowingText = function hideShowingText() {
        var activeText = document.querySelector('.showing');

        if (activeText) {
            activeText.classList.remove('showing');
        }
    };

    var showNewText = function showNewText() {
        text[currentTextIndex].classList.add('showing');
    };

    var next = function next() {
        hideShowingText();
        currentTextIndex++;
        if (currentTextIndex === text.length) {
            currentTextIndex = 0;
        }
        showNewText();
    };
    // find .showing
    // hide the one that's currently .showing

    // currentTextIndex++
    // add .showing to text[currentTextIndex] 
    next();
}, 3000);
//# sourceMappingURL=main.js.map
