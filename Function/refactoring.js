//sebelum refactoring
function jumlahVolumeDuaKubus(a, b) {
    let volumeA;
    let volumeB;
    let total;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

//setelah refactoring

function jumlahVolumeDuaKubusr(a, b) {
    return a * a * a + b * b * b
}
console.log(jumlahVolumeDuaKubus(10, 20))
console.log(jumlahVolumeDuaKubusr(10, 20))