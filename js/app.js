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

const navParent = document.getElementById("navbar__list");
const body = document.getElementsByTagName("body")[0];
const noSections = document.getElementsByTagName("section");
const html = document.getElementsByTagName("html")[0];
const head = document.getElementsByTagName("head")[0];
const css = "a:hover {background-color: red;}";
const style = document.createElement("style");

html.style.scrollBehavior = "smooth";

function makeActive() {
  for (const section of noSections) {
    const box = section.getBoundingClientRect();

    if (box.top <= 150 && box.bottom >= 150) {
      section.classList.add("your-active-class");
      const navItems = document.querySelectorAll("#navbar__list li");
      navItems.forEach((item, index) => {
        // check if the index of section equal the li
        // if true then i have to highlighted the li
        if (index === Array.from(noSections).indexOf(section)) {
          item.classList.add("active-nav");
        } else {
          item.classList.remove("active-nav");
        }
      });
    } else {
      section.classList.remove("your-active-class");
    }
  }
}
for (let i = 0; i < noSections.length; i++) {
  const anc = document.createElement("a");
  const navChild = document.createElement("li");
  anc.innerText = `Section ${i + 1}`;
  anc.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: noSections[i].offsetTop,
      behavior: "smooth",
    });
  });
  navChild.appendChild(anc);
  navParent.appendChild(navChild);
}

document.querySelector(".navbar__menu").style.cssText = `
  background-color: #fff;
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
    color: black; 
  `;
});

style.innerHTML = `
  a:hover {
    background-color: #E6D5D2;
    transition: 0.3s;
  }
  .active-nav a {
    background-color: #E6D5D2;
    color: white;
  }
`;
head.appendChild(style);

window.addEventListener("scroll", makeActive);
