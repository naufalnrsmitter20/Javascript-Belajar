// Implisit return
const test = (name) => `Hello ${name}`;
console.log(test(`Naufal Nabil Ramadhan`));

// Arrow

let dinamic = (name, place, clasess) => {
  return name + place + clasess;
};

// simple hello world
const helloWorld = () => `Hello World`;
// alert(`Hello Wolrd`);
console.log(`Hello Wolld`);
function helloWorld2() {
  return `Hello  World`;
}
helloWorld();
let helloWorld3 = (world) => `Hello ${world}`;

// array and objects

let Student = ["Naufal", "Abim", "Aaroon", "Farell", "Darwin"];

let tampilkan = Student.map((nama) => ({ nama, jumlahHuruf: nama.length, kelas: (kelas = "X RPL 8") }));
console.table(tampilkan);

// set
let Angka = function () {
  this.angka = 0;
  setInterval(() => {
    console.log(this.angka++);
  }, 500);
};
let tampil = new Angka();
