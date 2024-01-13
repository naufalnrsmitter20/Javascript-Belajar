// Closure

function time(time) {
  return function name(name) {
    console.log(`Hello ${name}, Good ${time}`);
  };
}

let Morning = time("Morning");
let Afternoon = time("Afternoon");
let Evening = time("Evening");

Morning(`Naufal Nabil Ramadhan`);

// Output : Hello Naufal Nabil Ramadhan, Good Morning

// Urutkan Angka tanpa distraksi

function UrutAngka() {
  let number = 0;
  return function Angka() {
    return ++number;
  };
}

let tampil = UrutAngka();

for (let i = 0; i < 10; i++) {
  console.log(tampil());
}

console.log("=================================");
// immediately

let counters = (function () {
  let counter = 0;
  return function value() {
    return ++counter;
  };
})();

for (let i = 0; i < 10; i++) {
  console.log(counters());
}
