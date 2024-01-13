//Object Literal

let TambahNilai = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let nilaiAwal = [100, 200, 300, 400, 500, 600, 700, 900, 1000];

// <<<>>>
let Names = {
  Nama: "Naufal Nabil Ramadhan",
  Kelas: 10,
  nilaiAwal: [100, 200, 300, 400, 500, 600, 700, 900, 1000],
  Tambah: function () {
    const result = [];
    for (let i = 0; i < this.nilaiAwal.length; i++) {
      result.push(this.nilaiAwal[i] + TambahNilai[i]);
    }
    console.log(`Nilai ${this.Nama} adalah ${result}`);
  },
};
// <<<>>>
function NameDeclaration() {
  // Assuming you want to set the HTML content with the result
  const result = nilaiAwal[1] + TambahNilai[3];
  document.getElementById("n1").innerHTML = "Nilai Awal : " + nilaiAwal[4];
  document.getElementById("n2").innerHTML = "Bonus Nilai : " + TambahNilai[3];
  document.getElementById("Quack").innerHTML = "Total Nilai :" + result;
}

//Function Declaration

function namaMahasiswa(nama, power) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.power = power;

  mahasiswa.prosesPlus = function (plus) {
    this.power += plus;
    console.log(`Hallo ${this.nama}, Powermu bertambah menjadi ${this.power}`);
  };
  mahasiswa.prosesMin = function (min) {
    this.power -= min;
    console.log(`Halo ${nama}, Powermu berkurang menjadi ${this.power}`);
  };
  return mahasiswa;
}
let objectIdentify = namaMahasiswa(`Naufal Nabil Ramadhan`, 0);
let siswa1 = namaMahasiswa(`Naufal Nabil Ramadhan`, 0);
let siswa2 = namaMahasiswa(`Bisma Aditama`, 0);
let siswa3 = namaMahasiswa(`Fanani Akbar Abimanyu`, 0);
let siswa4 = namaMahasiswa(`Aaron Cahya Kurniawan`, 0);
// cara pakai :
// 1. input objectIdentify
// 2. tambahkan fungsi "proses"
// 3. ketik lagi objectIdentify

//Constructor Function
//this & new
function namaMahasiswa2(nama, power) {
  this.nama = nama;
  this.power = power;

  this.prosesPlus = function (plus) {
    this.power += plus;
    console.log(`Hallo ${this.nama}, Powermu bertambah menjadi ${this.power}`);
  };
  this.prosesMin = function (min) {
    this.power -= min;
    console.log(`Halo ${this.nama}, Powermu berkurang menjadi ${this.power}`);
  };
}

let siswaBaru = new namaMahasiswa2(`Moh Abdul Aziz`, 20);

// new
function namaMahasiswa2(name, classes, score) {
  this.name = name;
  this.classes = classes;
  this.score = score;

  this.ObjectDamageWithDistruct1 = function (minus = 10) {
    this.score = score - minus;
    console.log("Distraction 1");
    console.log(`Hello ${this.name}, Your score -${this.minus}, \n Score : ${this.score}`);
  };
  this.ObjectDamageWithDistruct2 = function (minus = 20) {
    this.score = score - minus;
    console.log("Distraction 1");
    console.log(`Hello ${this.name}, Your score -${this.minus}, \n Score : ${this.score}`);
  };
  this.ObjectTouchHeal1 = function (plus = 10) {
    this.score = score + plus;
    console.log(`Hello ${this.name}, Yoour score +${this.plus}, \n Score : ${this.score}`);
  };
}
