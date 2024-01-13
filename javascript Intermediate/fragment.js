const mahasiswa = {
  nama: "Naufal Nabil Ramadhan",
  kelas: "X RPL 8",
  type: "H",
};

const fragment = `<div class="container">
    <ul>
        <li>nama : ${mahasiswa.nama}</li>
        <li>kelas : ${mahasiswa.kelas}</li>
        <li>type : ${mahasiswa.type}</li>
    </ul>
</div>`;
document.querySelector(".nais1").innerHTML = fragment;

const SiswaR5 = [
  {
    nama: "Fahreil",
    kelas: "X RPL 5",
    type: "A",
  },
  {
    nama: "Haza",
    kelas: "X RPL 5",
    type: "B",
  },
  {
    nama: "Viki",
    kelas: "X RPL 5",
    type: "C",
  },
];

const panggil = `<div>
    ${SiswaR5.map(
      (s) => `<ul>
        <li>nama : ${s.nama}</li>
        <li>kelas : ${s.kelas}</li>
        <li>type : ${s.type}</li>
    </ul>`
    )}
</div>`;
document.querySelector(".nais2").innerHTML = panggil;

const gabungan = {
  kelas: "X RPL 8",
  jurusan: "REKAYASA PERANGKAT LUNAK",
  materi: ["Dasar Algoritma", "Dasar Pemrograman Java", "Dasar Pemrograman PHP", "Dasar Pembuatan Website Statis", "Dasar Dasar Database"],
};

function Print(materi) {
  return `
    <ol>
        ${materi.map((i) => `<li>${i}</li>`)}
    </ol>
    `;
}

const well = `<div>
    <h5>Kelas :${gabungan.kelas}</h5>
    <h5>Jurusan : ${gabungan.jurusan}</h5>
    <h5>Materi : </h5>
    ${Print(gabungan.materi)}
</div>`;

document.querySelector(".nested").innerHTML = well;
const ganti = document.querySelector(".nested");
ganti.style.marginLeft = "10px";
