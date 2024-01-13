const siswa = {
  nama: "Naufal Nabil Ramdhan",
  kelas: "X RPL 8",
  id: "naufalnnrtd7",
};

function rest(strings, ...value) {
  return strings.reduce((result, current, i) => `${result}${current}${value[i] || ""}`, "");
}

const tampilkan = rest`nama saya ${siswa.nama}, saya duduk di kelas ${siswa.kelas}, ID saya *${siswa.id}*`;

console.log(tampilkan);
