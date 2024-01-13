function percobaan1(nama, kelas, nilai, status) {
  (this.nama = nama), (this.kelas = kelas), (this.nilai = nilai), (this.status = status);
  console.log(nama, ", ", kelas, ", ", nilai, ", ", status);
}

let siswa = new percobaan1("Naufal Nabil Ramadhan", 10, 100, "Online");
let siswa2 = new percobaan1("Muhammad Keefa Syawal", 10, 200, "Online");

function Validate() {
  let x = 20;
  let y = 21;
  document.getElementById("Click").innerHTML = x + y;
}
