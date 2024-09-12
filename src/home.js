import image from "./assets/pexels-chanwalrus-958545.jpg";

let homeContainer = document.createElement("div");
homeContainer.id = "home-container";

let cell1 = document.createElement("h1");
cell1.textContent = "Welcome to the best culinary experience of your life";
homeContainer.appendChild(cell1);


let cell2 = document.createElement("div");
(function () {
    let h3 = document.createElement("h3");
    h3.textContent = "Truly the best culinary experience of my life"
    cell2.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = "-Satisfied Customer";
    cell2.appendChild(p);
})();
homeContainer.appendChild(cell2)


let cell3 = document.createElement("div");
(function () {
    let h2 = document.createElement("h2");
    h2.textContent = "Enjoy a diverse selection of dishes from across all of Europe in the luxury of an elegant dining space.";
    cell3.appendChild(h2);

    let img = document.createElement("img");
    img.src = image;
    cell3.appendChild(img);
})();
homeContainer.appendChild(cell3);


let cell4 = document.createElement("div");
(function () {
    let h2 = document.createElement("h2");
    h2.textContent = "Hours:";
    cell4.appendChild(h2);

    let p = document.createElement("p");
    p.textContent = `Monday-Friday: 10:00 - 24:00\r\nSaturday: 10:00 - 17:00\r\nSunday: closed`;
    cell4.appendChild(p);
})();
homeContainer.appendChild(cell4);


export default homeContainer;
