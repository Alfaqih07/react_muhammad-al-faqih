var a = 5; 
let b = "Kampus Merdeka"; 
let a1 = b;
const nama = "budi";
let terdaftar = false; 
let lengkap_arr = [a, b, nama, terdaftar];
// console.log(nama);
function perkenalan (){
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya" +
        nama +
        "nomor urut" +
        a +
        "sekarang sedang mengikuti" + 
        b + 
        "berasal dari " +
        asal
    ); 
} 
perkenalan() 

console.log("a adalah =" + a1);
console.log("b adalah =" + b);

if (a === 5) {
    console.log(nama+" "+"terdaftar sebagai kegiatan kampus merdeka");
}