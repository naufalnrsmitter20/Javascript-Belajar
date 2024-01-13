// let Type = ["A", "B", "C", "D", "E"];

// Type.forEach((element) => { 
//   console.log(element);
// });

// for (const element of Type) {
//   console.log(element);
// }

const elements = document.querySelectorAll(".text");

elements.forEach((element) => {
  console.log(element.textContent);
});
