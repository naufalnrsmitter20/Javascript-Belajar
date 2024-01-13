const newButton = document.createElement("button");
const newTextButton = document.createTextNode("Klik Untuk Menambahkan Paragraf");

newButton.appendChild(newTextButton);

const sectionA = document.querySelector("section#a");
const p1 = document.getElementsByClassName("p1")[0];

sectionA.insertBefore(newButton, p1);

const link = document.querySelector("section#a a");
sectionA.removeChild(link);

newButton.addEventListener("click", function () {
  const newParagraph = document.createElement("p");
  const newTextParagraph = document.createTextNode("Paragraf Baru");

  newParagraph.appendChild(newTextParagraph);
  sectionA.appendChild(newParagraph);
});
