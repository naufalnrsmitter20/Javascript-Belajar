// querySelector

const paragraf1 = document.querySelector("section#a p.p1");
paragraf1.style.color = "green";
paragraf1.style.backgroundColor = "orange";

const paragraf3 = document.querySelector("section#a p:nth-child(4)");
paragraf3.style.color = "red";
paragraf3.style.backgroundColor = "violet";

// querySelectorAll

const even = document.querySelectorAll("section#b ul li");
for (let i = 0; i < even.length; i++) {
  even[i].style.backgroundColor = "lightgreen";
}

// modifikasi node list

const b = document.getElementById("b");
const p4 = b.getElementsByTagName("p")[0];
p4.style.backgroundColor = "grey";
