// Asychronous
// const token = null;
// function exsample(username) {
//   document.querySelector("body").innerHTML = "test";
//   return { username, token };
// }

// Callback
// Syncronus Callback

//

// function hello(name) {
//   alert(`Hello ${name}`);
// }

//

// function panggil(callback) {
//   const name = prompt(`Masukkan Nama Kamu : `);
//   callback(name);
// }

// panggil((name) => {
//   alert(`Hello ${name}`);
// });

// callback JSON dengan JQuery

console.log("Start");

$.ajax({
  url: "data.json",
  success: (result) => {
    result.forEach((e) => {
      console.log(e.Name);
    });
  },

  error: (err) => {
    console.log(err.responseText);
  },
});

console.log("Finish");

// Promise

let requestData = true;
let request = new Promise((resolve, reject) => {
  if (requestData) {
    resolve("Request Data Accept");
  } else {
    reject("Request Data Failed");
  }
});

request.then((response) => console.log("Access Complete, " + response)).catch((response) => console.log("Access Denied, " + response));
