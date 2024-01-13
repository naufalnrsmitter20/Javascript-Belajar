// getEelementById

const container = document.getElementById("container");
container.style.backgroundColor = "lightGreen";

const judul = document.getElementById("judul");
judul.innerHTML = "Naufal Nabil Ramadhan";
judul.style.color = "gray";
judul.style.backgroundColor = "yellow";
judul.style.textAlign = "center";

// getElementsByTagname
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.fontWeight = "bold";
  p[i].style.color = "red";
  p[i].style.display = "flex";
  p[i].style.justifyContent = "center";
}
p[3].style.color = "violet";
const a = document.getElementsByTagName("a");
for (let i = 0; i < a.length; i++) {
  a[i].style.display = "flex";
  a[i].style.justifyContent = "center";
}
// getElemetsByClassName

const item1 = document.getElementsByClassName("item");
item1[0].style.color = "purple";
item1[1].style.color = "brown";
item1[2].style.color = "green";
