const mainEl = document.querySelector("main");

const h1 = document.createElement("h1");

// adding text to html element
h1.innerHTML = "CandlesByKhloe";
h1.style.fontFamily = "Birthstone Bounce", "cursive";
h1.style.color = "Chocolate";
h1.style.fontWeight = "500";
h1.style.fontSize = "110px";

mainEl.appendChild(h1);
console.log(mainEl)


