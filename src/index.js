import "./style.css"
import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";


const content = document.querySelector("#content");

content.appendChild(homePage);

let gotoPage = (page) => {
    console.log("switching page");
    content.innerHTML = "";
    content.appendChild(page);
}

const homeBtn = document.querySelector("#home-btn");
homeBtn.onclick = () => gotoPage(homePage);

const menuBtn = document.querySelector("#menu-btn");
menuBtn.onclick = () => gotoPage(menuPage);

const aboutBtn = document.querySelector("#about-btn");
aboutBtn.onclick = () => gotoPage(aboutPage);
