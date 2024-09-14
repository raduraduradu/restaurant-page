let aboutContainer = document.createElement("div");
aboutContainer.id = "about-container";

let addItem = (heading, text, image) => {
    let item = document.createElement("div");
    item.classList.add("about-item");

    let h1 = document.createElement("h1");
    h1.textContent = heading;
    item.appendChild(h1);
    
    let p = document.createElement("p");
    p.textContent = text;
    item.appendChild(p);

    aboutContainer.appendChild(item);

    let img = document.createElement("img");
    img.src = image;
    aboutContainer.appendChild(img);
}


import chef from "./assets/chef.jpg";
addItem("About us", "The Crazy Unbelieveable Groundbreaking Restaurant is a place that provides luxurious comfort and food quality for a reasonable price. Our restaurant started off as a passion project and we made sure to keep that passion at the heart of our work here while using our resources to improve cutomer experience as we branched out into a larger enterprise.", chef);

import manStaring from "./assets/man-staring-at-food.jpg";
addItem("About our menu", "Our menu focuses on traditional recipes from acroos Europe. Our chefs have studied and experienced the history and culture of all these recipes to provide our customers with the real authentic experience of every dish.", manStaring);

import happypeople from "./assets/happypeople.jpg";
addItem("Why choose us?", "Our mission as a restaurant is to provide the best possible customer experience possible. Here you will find the best quality in terms of food, enviroment and service, all of that at a very accesible price. We don't just want to serve food, we want to change lives.", happypeople);

export default aboutContainer;
