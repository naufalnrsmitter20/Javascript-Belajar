var item = prompt('Masukkan Item \n (Jenis Benda Konduktor/Isolator)')

switch( item ) {
    case 'Besi' :
    case 'Panci' :
    case 'Wajan' :
        alert(item + " Adalah Konduktor");
        break;
    case 'Kayu' :
    case 'Batu Bata' :
    case 'Plastik' :
        alert(item + " Adalah Isolator")
        break;
    default :
        alert("Item yang anda masukkan salah")
}