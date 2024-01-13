
//function 1
let a = 8;
let b = 3;
let volumeA;
let volumeB;
let total;

volumeA = a * a * a;
volumeB = b * b * b;
total = volumeA + volumeB;

console.log(
    "Volume dari kubus A adalah " +
    volumeA +
    "\nVolume dari kubus B adalah " +
    volumeB +
    "\nTotal dari Volume kubus A dan kubus B adalah " +
    total
);

function jumlahVolumeDuaKubus(a, b) {
    let volumeA;
    let volumeB;
    let total;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

function luasPermukaanBalok(panjang, lebar, tinggi) {
    let luasPermukaan;

    luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

    return luasPermukaan;
}
console.log("luas permukaan balok 1 adalah = " + luasPermukaanBalok(12, 10, 8));
console.log("luas permukaan balok 2 adalah = " + luasPermukaanBalok(20, 10, 30));

//function 2

function volumeTabung1(p, l, t) {
    return p * l * t
}

var panjang = parseInt(prompt('masukkan Panjang :'))
var lebar = parseInt(prompt('masukkan lebar :'))
var tinggi = parseInt(prompt('masukkan Tinggi :'))

var hasil = console.log(volumeTabung1(panjang, lebar, tinggi))

function volumeTabung2(panjang, lebar, tinggi) {
    var hasil = panjang * lebar * tinggi
    return hasil;
}
console.log(volumeTabung2(3, 4, 5))

//function array 

function penjumlahan() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

console.log(penjumlahan(2, 3, 4, 5, 6, 7, 8, 9, 10))

//function aritmatika

function penjumlahan(a, b) {
    return a + b;
}
function perkalian(a, b) {
    return a * b;
}
function pengurangan(a, b) {
    return a - b;
}

console.log(perkalian(penjumlahan(12, 8), pengurangan(12, 8)))