const Numbers = [1, 5, 3, 7, 8, -1, -2, -11, -23, 43, 2, 3, 8, 7, 6, 9, -9, -8];

const filterNum = Numbers.filter((a) => a <= 3);
const filterNum2 = Numbers.filter(function (a) {
  return a >= 10;
});
console.log(filterNum);
console.log(filterNum2);

const perkalian = Numbers.map((a) => a ** 3);
console.log(Numbers);
console.log(perkalian);

const combinations = Numbers.reduce((accumulators, curretValue) => {
  return accumulators + curretValue;
});
console.log(combinations);

//Method Chaining
// Cari
const FirstMethod = Numbers.filter((a) => a <= 20);
const SecondMethod = FirstMethod.map((a) => a ** 2);
const ThirdMethod = FirstMethod.reduce((params1, params2) => {
  return params1 + params2;
});

// Reallllll ==============

console.log("=============================");

const MergedMethod = Numbers.filter((a) => a >= 0)
  .map((a) => a * 5)
  .map((a) => a * 2)
  .map((a) => a ** 2)
  .map((a) => a / 10)
  .reduce((param1, param2) => {
    return param1 + param2;
  });
console.log(MergedMethod);

//soal
