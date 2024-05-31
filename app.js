const mainEl = document.querySelector("main");

const bodyEl = document.querySelector("body");

const h1 = document.createElement("h1");

// adding text to html element
h1.innerHTML = "CandlesByKhloe";
h1.style.fontFamily = "Birthstone Bounce", "cursive";
h1.style.color = "Chocolate";
h1.style.fontWeight = "500";
h1.style.fontSize = "110px";


mainEl.appendChild(h1);
console.log(mainEl)

// create email form
const form = document.createElement("form");

// create form inputs
const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "userEmail";
inputEmail.placeholder = "Email";

const inputNumber = document.createElement("input");
inputNumber.type = "number";
inputNumber.name = "phoneNumber";
inputNumber.placeholder = "Phone Number";

const buttonSubmit = document.createElement("input");
buttonSubmit.type = "submit";
buttonSubmit.value = "Submit";

// add elements to form
form.appendChild(inputEmail);
form.appendChild(inputNumber);
form.appendChild(buttonSubmit);

// add form to DOM
mainEl.appendChild(form);

// creating action for submit button
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(inputNumber.value)
    alert(`Thank You For Subscribing ${inputEmail.value}`)
});

const arr = [{name:"Lavender", URL: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmhxhywDiG6sZOoFkzfLwEfhpw2woBHlIFv04BD1xDt2um5Fb_"},
{name:"Eucalyptus", URL: "https://m.media-amazon.com/images/I/61ng8B2to8L._AC_UF894,1000_QL80_.jpg"},
{name:"Vanilla", URL: "https://qph.cf2.quoracdn.net/main-qimg-9d83b0ec32027d2c9c74753c73966d1c-lq"},
];
 
const main =  document.getElementById("main")


for ( let i = 0; i < arr.length; i++){

    let h2 = document.createElement("h2")
    h2.style.color = "white"
    let image = document.createElement("img")
    console.log(h2)
    console.log(main)
    h2.innerText = arr[i].name
    image.src = arr[i].URL
    main.appendChild(h2)
    main.appendChild(image)
    
}

URL.style.width = "50px";
URL.style.height = "50px";


