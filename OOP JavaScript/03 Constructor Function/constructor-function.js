// ============================================
// 03. CONSTRUCTOR FUNCTION
// ============================================

// --- 1. Masalah: object literal berulang (kurang efisien) ---
const mahasiswaA = { nama: "Budi", umur: 20 };
const mahasiswaB = { nama: "Sari", umur: 21 };
console.log(mahasiswaA, mahasiswaB);


// --- 2. Solusi: Constructor Function ---
function Mahasiswa(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}

const mahasiswa1 = new Mahasiswa("Budi", 20);
const mahasiswa2 = new Mahasiswa("Sari", 21);

console.log(mahasiswa1.nama, mahasiswa1.umur); // Budi 20
console.log(mahasiswa2.nama, mahasiswa2.umur); // Sari 21


// --- 3. Melihat apa yang dilakukan "new" secara internal ---
function Contoh(nilai) {
  console.log("this saat fungsi dijalankan:", this); // objek kosong {}
  this.nilai = nilai;
}

const hasilContoh = new Contoh(100);
console.log("Hasil akhir objek:", hasilContoh);


// --- 4. Method di dalam constructor function (kurang efisien) ---
function MahasiswaV1(nama, umur) {
  this.nama = nama;
  this.umur = umur;
  this.sapa = function () {
    console.log("Halo, saya " + this.nama);
  };
}

const budiV1 = new MahasiswaV1("Budi", 20);
const sariV1 = new MahasiswaV1("Sari", 21);

budiV1.sapa(); // Halo, saya Budi
sariV1.sapa(); // Halo, saya Sari

// Setiap objek punya SALINAN method sendiri (boros memori)
console.log("Method sama?", budiV1.sapa === sariV1.sapa); // false


// --- 5. Method lewat prototype (lebih efisien) ---
function MahasiswaV2(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}

MahasiswaV2.prototype.sapa = function () {
  console.log("Halo, saya " + this.nama);
};

const budiV2 = new MahasiswaV2("Budi", 20);
const sariV2 = new MahasiswaV2("Sari", 21);

budiV2.sapa(); // Halo, saya Budi
sariV2.sapa(); // Halo, saya Sari

// Semua objek berbagi method yang SAMA (lebih efisien)
console.log("Method sama (prototype)?", budiV2.sapa === sariV2.sapa); // true


// --- 6. Menambahkan lebih dari satu method lewat prototype ---
function Mobil(merek, kecepatanAwal) {
  this.merek = merek;
  this.kecepatan = kecepatanAwal;
}

Mobil.prototype.jalan = function () {
  this.kecepatan = 60;
  console.log(this.merek + " berjalan dengan kecepatan " + this.kecepatan);
};

Mobil.prototype.berhenti = function () {
  this.kecepatan = 0;
  console.log(this.merek + " berhenti");
};

const mobil1 = new Mobil("Toyota", 0);
mobil1.jalan();
mobil1.berhenti();


// Coba sendiri:
// Buat constructor function "Produk(nama, harga)" dengan method
// "diskon(persen)" lewat prototype yang mengurangi harga sesuai persentase.
