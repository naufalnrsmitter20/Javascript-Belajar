// const test = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("finish");
//   }, 2000);
// });

// test.then(() => console.log(test));

function testPromise() {
  return new Promise((resolve, reject) => {
    const time = 6000;
    if (time < 5000) {
      setTimeout(() => {
        resolve("finish");
      }, 2000);
    } else {
      reject("Woylah yang bener klo ngetik");
    }
  });
}

// const test = testPromise();
// test.then(() => console.log(test)).catch(() => console.log(test));

async function testAsync() {
  try {
    const promise = await testPromise();
    console.log(promise);
  } catch (err) {
    console.error(err);
  }
}

testAsync();
