const nama = ["Siswa", "Naufal", "Syamil", "Aziz", "Abim", "Fahrel"];

const [name, ...values] = nama;
console.log(name, values);

let a = 1;
let b = 2;

console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

function objName() {
  return [1, 2];
}
const [x, z] = objName();

const objects = {
  names: "Naufal Nabil Ramadhan",
  classes: "X RPL 8",
};

const { names, classes } = objects;
console.log(names);
console.log(classes);

({ names1, classses } = {
  names1: "Naufal Nabil Ramadhan",
  Classsesss: "X RPL 8",
});
console.log(names1);

const car = {
  cars: "Alphard",
  color: "white",
  types: "B",
};
function objCar({ cars }) {
  return cars;
}

console.log(objCar(car));
