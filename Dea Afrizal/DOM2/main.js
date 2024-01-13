const btn1 = document.querySelector(".btn-1");
btn1.style.padding = "5px";
btn1.style.display = "block";
const defaultBg = (btn1.style.backgroundColor = "violet");

const defaultText = (btn1.textContent = "Click me");

function Verifikasi() {
  btn1.innerHTML = "Cepat";
}

function Terverifikasi() {
  btn1.innerHTML = "Terverifikasi";
  btn1.style.backgroundColor = "aqua";
}

function oriText() {
  btn1.textContent = defaultText;
  btn1.style.backgroundColor = defaultBg;
}

//tugas coy

const body = document.body;
const btn2 = document.querySelector(".btn-2");
btn2.innerHTML = "Click me";
btn2.style.backgroundColor = "yellow";
btn2.style.padding = "5px";

const text = document.createElement("p");
body.append(text);

function munculText() {
  text.textContent = "Naufal Nabil Ramadhan";
}

function ngubahColor() {
  text.style.color = "tomato";
}
