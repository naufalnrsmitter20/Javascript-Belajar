const MethodPeople = {
  Books: function (value) {
    this.power += value;
    console.log(`Hello ${this.name}, Your Power is ${this.power}`);
  },
  Gadget: function (value) {
    this.power -= value;
    console.log(`Hello ${this.name}, Your Power is ${this.power}`);
  },
  Library: function (value) {
    this.power += value * 2;
    console.log(`Hello ${this.name}, Your Power is ${this.power}`);
  },
};

function callMethod(name, power) {
  let namePeople = Object.create(MethodPeople);
  namePeople.name = name;
  namePeople.power = power;
  return namePeople;
}

let Naufal = callMethod("Naufal Nabil Ramadhan", 0);
let Abim = callMethod("Fanani Akbar Abimanyu", 0);
let Aaroon = callMethod("Aaron Cahya Kurniawan", 0);
let Syamil = callMethod("Muhammad Syamil Muwahhid", 0);
let Aziz = callMethod("Mohammad Abdul Aziz", 0);
