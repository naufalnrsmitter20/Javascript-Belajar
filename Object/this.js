// This === window
console.log(this);

// Function Declaration
function testing() {
    console.log("halo")
    console.log(this)
}
this.testing()

// Object Literal
var obj = { nama: "Bonil", Kelas: 9 }
obj.halo = function () {
    console.log(this);
    console.log('halo');
}
obj.halo()
//this mengembal;ikan object yang bersangkutan

//Constructor

function Constructor() {
    console.log(this);
    console.log('Hii!');
}

var data = new Constructor()
data = {
    nama: "NNR",
    index: 1469
}
console.log(data)