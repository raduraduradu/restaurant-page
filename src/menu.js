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
addItem("sarmale", sarmalejpg, "reteta romaneasca de la turci", "13$");

export default menuContainer;
