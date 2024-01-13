// Membuat Object

// Object Literal

var namaSiswa1 = {
  nama: "Naufal",
  kelas: "9H",
  email: "x3mnaufalnabilramadhan@gmail.com",
  telp: "08893669979",
};

// Function Declaration
function identitasSiswaMTsN(nama, kelas, email, telp) {
  var identitas = {};
  identitas.nama = nama;
  identitas.kelas = kelas;
  identitas.email = email;
  identitas.telp = telp;
  return identitas;
}

var namaSiswa2 = identitasSiswaMTsN("Naufal Nabil Ramadhan", "9H", "x3mnaufalnabilramadhan@gmail.com", "08893669979");
// function myFunction() {
//   document.getElementById("Trigger").innerHTML = namaSiswa2.identitasSiswaMTsN;
// }
// Construktor

function IdentitasSiswa2(nama, kelas, email, telp) {
  this.nama = nama;
  this.kelas = kelas;
  this.email = email;
  this.telp = telp;
}
var siswaPilihan = new IdentitasSiswa2("Bonil", "9H", "erdfreef@cloud.com", "0813345657289");
