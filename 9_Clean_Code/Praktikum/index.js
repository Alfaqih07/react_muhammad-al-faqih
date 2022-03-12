class kendaraan {
    let roda = 0;
    let kecepatanPerjam = 0;
} 

class mobil extends kendaraan {
    void berjalan () {
        tambahKecepatan(10);
    }

    tambahKecepatan(let kecepatanBaru){
        kecepatanPerjam = kecepatanPerjam + tambahKeBaru;
    }
}  

void main () {
    mobilCepat = new mobil();
    mobilCepat.berjalan();
    mobilCepat.berjalan();
    mobilCepat.berjalan();

    mobilLamban = new mobil();
    mobilLamban.berjalan();
}
