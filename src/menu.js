let menuContainer = document.createElement("div");
menuContainer.id = "menu-container";

let addItem = (title, photo, description, price) => {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    let h3 = document.createElement("h3");
    h3.textContent = title;
    menuItem.appendChild(h3);

    let img = document.createElement("img");
    img.src = photo;
    menuItem.appendChild(img);

    let p = document.createElement("p");
    p.textContent = `${description}\r\n\r\n${price}`;
    menuItem.appendChild(p);

    menuContainer.appendChild(menuItem);
}

import sarmalejpg from "./assets/sarmale.jpg";
addItem("Sarmale", sarmalejpg, "Mince wrapped in cabbage, the traditional romanian recipe", "13$");

import pancakes from "./assets/pancakes.jpg";
addItem("Pancakes", pancakes, "Sweet fluffy pancakes with syrup and sliced fruit", "15$");

import redpasta from "./assets/pasta.jpg";
addItem("Cajun Pasta", redpasta, "Penne with chicken savory tomato based sauce", "14$");

import greenpasta from "./assets/grinch-pasta.jpg";
addItem("Grinch Pasta", greenpasta, "Another Italian classic", "13$");

import sandwich from "./assets/sandwich.jpg";
addItem("Sandwich", sandwich, "Delicious meaty sandwich", "12$");

import burger from "./assets/burger.jpg";
addItem("Burger", burger, "Full of flavor beef burger", "14$");

export default menuContainer;
