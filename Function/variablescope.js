//local Scope

function randomValue() {
    var a = 5
    console.log(a)
}
randomValue() //output = 5

//Global Scope

var a = 10

function randomValue1() {
    var a = 2
}
console.log(a) //output = 10


var c = 15

function randomValue2() {
    var c = 8
    console.log(window.c)
}
randomValue2() //output = 15

//mix scope

let z = 7

function randomValue3(z) {
    console.log(z)
}
randomValue3(4)
console.log(z)