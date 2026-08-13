// ============================================
// 01. PENGANTAR OOP
// ============================================

// Contoh 1: Objek sederhana menggabungkan data & perilaku
const kucing = {
  nama: "Milo",
  warna: "Oren",
  umur: 2,
  mengeong() {
    console.log(this.nama + " berkata: Meong!");
  }
};

console.log(kucing.nama);  // Milo
console.log(kucing.warna); // Oren
kucing.mengeong();          // Milo berkata: Meong!


// Contoh 2: Tanpa OOP (data dan fungsi terpisah, kurang terorganisir)
let namaKucing = "Milo";
let warnaKucing = "Oren";

function kucingMengeong(nama) {
  console.log(nama + " berkata: Meong!");
}

kucingMengeong(namaKucing);
// Perhatikan: data (namaKucing) dan fungsi (kucingMengeong) terpisah,
// tidak ada "ikatan" jelas antara keduanya seperti pada objek


// Contoh 3: Objek untuk merepresentasikan hal lain di dunia nyata
const mobil = {
  merek: "Toyota",
  warna: "Merah",
  kecepatan: 0,
  jalan() {
    this.kecepatan = 60;
    console.log(this.merek + " sedang berjalan dengan kecepatan " + this.kecepatan + " km/jam");
  },
  berhenti() {
    this.kecepatan = 0;
    console.log(this.merek + " berhenti");
  }
};

mobil.jalan();    // Toyota sedang berjalan dengan kecepatan 60 km/jam
mobil.berhenti(); // Toyota berhenti


// Contoh 4: Sekilas sintaks class (akan dibahas detail di materi 04)
class Kucing {
  constructor(nama) {
    this.nama = nama;
  }

  mengeong() {
    console.log(this.nama + " berkata: Meong!");
  }
}

const milo = new Kucing("Milo");
const luna = new Kucing("Luna");

milo.mengeong(); // Milo berkata: Meong!
luna.mengeong(); // Luna berkata: Meong!
// Perhatikan: class memudahkan kita membuat BANYAK objek dengan struktur yang sama


// Coba sendiri:
// Buat objek "anjing" sendiri dengan properti (nama, ras, umur)
// dan method (menggonggong) seperti contoh "kucing" di atas.
