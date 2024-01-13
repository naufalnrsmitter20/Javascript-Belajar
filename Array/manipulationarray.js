// //manipulasi Array

// //1. Menambah Isi Array
// var arr = []
// arr[0] = "Naufal";
// arr[1] = 'Nabil';
// arr[2] = 'Ramadhan';
// console.log(arr)

// //2. Menghapus Array
// var angkaRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// angkaRandom[6] = undefined
// console.log(angkaRandom)

// //3. Menampilkan Isi Array
// var namaSiswa = ["Alif", "Anggito", "Ressa", "Athaku", "Bayu", "Bramantyo"]

// for (var jmlh = 0; jmlh < namaSiswa.length; jmlh++) {
//     console.log("Siswa Absen ke - " + (jmlh + 1) + " : " + namaSiswa[jmlh])
// }


//Method Pada Array

//1. Join
// var namaSiswa1 = ["Alif", "Anggito", "Ressa", "Athaku", "Bayu", "Bramantyo"]
// console.log(namaSiswa1.join(" - "))

//2. Push[menambah elemen array diakhir] & Pop[menghapus elemen array diakhir]
// namaSiswa1.push("Darwin", "Ryan")
// namaSiswa1.pop()
// namaSiswa1.pop()
// console.log(namaSiswa1.join(" - "))

//3.  Unshift[menambah elemen baru diawal] & Shift[menghapus elemen array diawal]
// namaSiswa1.unshift("Bonil")
// namaSiswa1.shift()
// console.log(namaSiswa1)

//4. splice [menghapus dan menambah array ditengah elemen]
// namaSiswa1.splice(indexawal, arraydelete, elementbaru1, elemenbaru2, ...dst)
// var namaSiswa1 = ["Alif", "Anggito", "Ressa", "Athaku", "Bayu", "Bramantyo"]
// namaSiswa1.splice(3, 0, "Refaya", "Tian", "Airil", "Zen")
// console.log(namaSiswa1.join(" - "))
// console.log(namaSiswa1.length)

// for (i = 0; i < namaSiswa1.length; i++) {
//     console.log(namaSiswa1[i])
// }

//5. Slice [mengiris array menjadi array yang baru]
// namaSiswa2.slice(awal,akhir)
// var namaSiswa1 = ["Alif", "Anggito", "Ressa", "Athaku", "Bayu", "Bramantyo"]
// var namaSiswa2 = namaSiswa1.slice(1, 5)
// console.log(namaSiswa1.join(" - "))
// console.log(namaSiswa2.join(" - "))
// namaSiswa2.splice(2, 2)
// console.log(namaSiswa2.join(" - "))

//6. Foreach [tidak mengembalikan array]
// var angkaRandomx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var namaSiswa1 = ["Alif", "Anggito", "Ressa", "Athaku", "Bayu", "Bramantyo"]


// for (var i = 0; i < angkaRandomx.length; i++) {
//     console.log(angkaRandomx[i])
// }

// namaSiswa1.forEach(function (e, i) {
//     console.log("Mahasiswa ke - " + i + " adalah " + e)
// })

//7. Map [mengembalikan array]
// var namaSiswa1 = ["Alif", "Anggito", "Ressa", "Athaku", "Bayu", "Bramantyo"]
// var namaFixSiswa = namaSiswa1.map(function (a) {
//     return a
// })
// console.log(namaFixSiswa.join(" ; "))

//8. Sort
// var nAmaAngka = [1, 3, 6, 5, 2, 4, 8, 6, 7, 9]
// nAmaAngka.sort()
// console.log(nAmaAngka.join(" - "))

// var angkaAngka = [1, 3, 5, 6, 70, 10, 4, 21, 25]
// angkaAngka.sort(function (a, b) {
//     return a - b
// })
// console.log(angkaAngka.join(" - "))

//9. Filter [mengembalikan banyak nilai]
// var Angka1 = [1, 2, 34, 56, 78, 98, 765, 8]
// var Angka2 = Angka1.filter(function (a) {
//     return a > 80
// })
// console.log(Angka2.join(' - '))

//10. Find [mengembalikan 1 nilai]
// var Angka1 = [1, 2, 34, 56, 78, 98, 765, 8]
// var Angka2 = Angka1.find(function (a) {
//     return a > 80
// })
// console.log(Angka2)
