function PeopleName(name, energy) {
  this.name = name;
  this.energy = energy;
}

PeopleName.prototype.books = function (value) {
  this.energy += value;
  return `Halo ${this.name}, Selamat membaca, poin anda sekarang ${this.energy}`;
};

PeopleName.prototype.gadget = function (value) {
  this.energy -= value;
  return `Halo ${this.name}, Selamat bermain, poin anda sekarang ${this.energy}`;
};

PeopleName.prototype.library = function (value) {
  this.energy += value;
  return `Halo ${this.name}, Selamat belajar, poin anda sekarang ${this.energy}`;
};

let Object1 = new PeopleName("Naufal Nabil Ramadhan", 0);

