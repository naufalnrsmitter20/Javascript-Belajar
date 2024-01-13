// Create Element, Create Text Node, Append Child
//buat
const newParagraph = document.createElement("p");
const textParagraph = document.createTextNode("Paragraf Tambahan");
//gabung
newParagraph.appendChild(textParagraph);
//masukkan
const sectionA = document.getElementById("a");
sectionA.appendChild(newParagraph);

//Append Child, Insert Before

// const itemTambahan1 = document.createElement("li");
// const textTambahan1 = document.createTextNode("Item Tambahan 1");

// itemTambahan1.appendChild(textTambahan1);

// const ull = document.getElementById("b");
// const li2 = ull.querySelector("li");

// ull.insertBefore(itemTambahan1, li2);

const newli = document.createElement("li");
const textNewli = document.createTextNode("New Text");

newli.appendChild(textNewli);

const ul = document.querySelector("section#b ul");
const li2 = document.querySelector("ul li:nth-child(2)");

const link = document.getElementsByTagName("a")[0];

// Remove Link
ul.insertBefore(newli, li2);
function removeButton() {
  const ps = document.getElementsByClassName("ps")[0];
  ps.innerHTML = "Munculkan";
  sectionA.removeChild(link);
}

function ChangeThemes() {
  document.querySelector("body").classList.toggle("bg-dark");
}

const button = document.getElementById("button");
button.style.display = "block";
