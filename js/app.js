/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

//* Define Global Variables
const navParent = document.getElementById("navbar__list");
const sectionHeader = document.createElement("h2");
const firstPara = document.createElement("p");
const secondPara = document.createElement("p");
const main = document.getElementsByTagName("main");
const body = document.getElementsByTagName("body");
const noSections = document.getElementsByTagName("section");
const navbarMenu = document.getElementsByClassName("navbar__menu");
const html = document.getElementsByTagName("html");
//* End Global Variables

//* Start Helper Functions
html[0].style.scrollBehavior = "smooth";

function makeActive() {
  for (const section of noSections) {
    const box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= 150 && box.bottom >= 150) {
      section.classList.add("active");
      console.log("test1");
    } else {
      section.classList.remove("active");
      console.log("test2");
    }
  }
}
//* End Helper Functions

//* begin Main Functions

for (let i = 0; i < noSections.length; i++) {
  const anc = document.createElement("a");
  const navChild = document.createElement("li");
  anc.innerText = `Section ${i + 1}`;
  navChild.appendChild(anc);
  navParent.appendChild(navChild);
}

document.querySelector(".navbar__menu").style.cssText = `
        background-color: #222;
        overflow: hidden;
    `;

document.querySelector(".navbar__menu ul").style.cssText = `
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
    `;

const navbarItems = document.querySelectorAll(".navbar__menu li");
navbarItems.forEach((item) => {
  item.style.cssText = `
            float: left;
        `;

  item.querySelector("a").style.cssText = `
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            cursor: pointer;
        `;
});

//* build the nav

// Add class 'active' to section when near top of viewport
body[0].addEventListener("onscroll", makeActive);

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
