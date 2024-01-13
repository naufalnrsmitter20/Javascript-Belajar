// setAttribute
const link = document.querySelector("section#a a");
link.setAttribute("href", "http://instagram.com/sandhikagalih");
link.setAttribute("target", "_blank");

// Classlist

const button = document.querySelector("section#a button#button");
button.classList.toggle("bg-green"); //classlist class
button.setAttribute("type", "button");

// testing

const b = document.querySelector("section#b");
b.innerHTML = "Klik Button";

function addTagline() {
  document.getElementById("button").classList.toggle("bg-orange");
  document.getElementById("button").classList.toggle("color-yellow");
  document.querySelector("body").classList.toggle("bg-light-green");
}
