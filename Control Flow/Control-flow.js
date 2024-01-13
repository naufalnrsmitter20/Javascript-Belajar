/*
CONTROL FLOW / ALUR KENDALI
=> normal flow

    - pengulangan ==> loop/iteration 
        syntax :
            - for
            - while
            - do while
    - pengkondisian ==> percabangan
        syntax :
            - if
            - if.. else
            - if.. else if.. else
            - switch
*/

/* infinity loop
var ulang = true ;
while(ulang === true) {
    alert('Hello World')
}
*/

//Cara menghentikan infinity loop

//user
/*var ulang = true;
string = 'Hello World';
while(ulang === true) {
    alert('Hello World')
    console.log(string)
    ulang = confirm("Coba Lagi?")
}
*/

//program
var nilaiAwal = 1;
while (nilaiAwal <= 100) {
  console.log("hello world " + nilaiAwal + "x");
  nilaiAwal = nilaiAwal + 1;
}
