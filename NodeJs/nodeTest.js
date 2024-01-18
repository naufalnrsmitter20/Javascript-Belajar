// const data = (id, callback) => {
//   setTimeout(() => {
//     const nama = id === 1 ? "Naufal" : "Fahrel";
//     callback({ id, nama });
//   }, 3000);
// };

// const Async1 = data(1, (result) => {
//   console.log(result);
// });

const getDataSiswa = (id, callback) => {
  setTimeout(() => {
    const nama = id === 1 ? "Naufal" : "Fahrel";
    const alamat = id === 1 ? "Malang" : "Kediri";
    const jk = id === 1 ? "Laki Laki" : "Laki Laki";
    const kelas = id === 1 ? "10 rpl 8" : "10 rpl 5";

    callback({ id, nama, alamat, jk, kelas });
  }, 2000);
};

const setData1 = getDataSiswa(1, (result) => {
  console.log(result);
});

const setData = getDataSiswa(2, (result) => {
  console.log(result);
});
