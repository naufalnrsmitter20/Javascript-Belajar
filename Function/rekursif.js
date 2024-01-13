function cetakAngka(n) {
    if (n === 0) return; //base case
    console.log(n);
    return cetakAngka(n - 1);
}
cetakAngka(10);

//faktorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
var hasil = console.log(factorial(10))