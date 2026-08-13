/*
  ===============================================
  LATIHAN MANDIRI - OPERATOR JAVASCRIPT
  ===============================================
  Isi setiap function di bawah ini sesuai instruksi pada Readme.md.
  Jangan lihat kunci-jawaban.js dulu sebelum mencoba sendiri!
  Jalankan file ini dengan: node latihan.js
*/

// ===== Soal 1 — Operator Aritmatika =====
function cekGenapGanjil(angka) {
  // TODO: kembalikan "genap" atau "ganjil" menggunakan operator %
}

console.log("Soal 1:", cekGenapGanjil(7));  // seharusnya: "ganjil"
console.log("Soal 1:", cekGenapGanjil(10)); // seharusnya: "genap"


// ===== Soal 2 — Operator Perbandingan =====
function bandingkanTipe(a, b) {
  // TODO: kembalikan { looseEqual: a == b, strictEqual: a === b }
}

console.log("Soal 2:", bandingkanTipe(5, "5")); // seharusnya: { looseEqual: true, strictEqual: false }


// ===== Soal 3 — Operator Logika =====
function bolehMasukWahana(umur, tinggiCm) {
  // TODO: kembalikan true HANYA JIKA umur >= 12 DAN tinggiCm >= 140
}

console.log("Soal 3:", bolehMasukWahana(13, 150)); // seharusnya: true
console.log("Soal 3:", bolehMasukWahana(10, 150)); // seharusnya: false


// ===== Soal 4 — Operator Ternary =====
function kategoriBMI(bmi) {
  // TODO: gunakan ternary bersarang
  // < 18.5 -> "Kurus", 18.5-24.9 -> "Normal", >= 25 -> "Gemuk"
}

console.log("Soal 4:", kategoriBMI(17));   // seharusnya: "Kurus"
console.log("Soal 4:", kategoriBMI(22));   // seharusnya: "Normal"
console.log("Soal 4:", kategoriBMI(28));   // seharusnya: "Gemuk"


// ===== Soal 5 — Operator String (Template Literals) =====
function buatKartuNama(nama, jabatan, perusahaan) {
  // TODO: gunakan template literals, format: "nama - jabatan di perusahaan"
}

console.log("Soal 5:", buatKartuNama("Budi", "Developer", "PT Maju Jaya"));
// seharusnya: "Budi - Developer di PT Maju Jaya"


// ===== Soal 6 — Operator Modern (?? dan ?.) =====
function ambilInfoProduk(produk) {
  // TODO: gunakan ?? untuk diskonTampil (agar 0 tetap 0, bukan default)
  // TODO: gunakan ?. untuk ramTampil dari produk.spesifikasi?.ram, default "Tidak diketahui"
  return {
    diskonTampil: null, // ganti dengan kode yang benar
    ramTampil: null      // ganti dengan kode yang benar
  };
}

const produk1 = { nama: "Laptop", diskon: 0, spesifikasi: null };
console.log("Soal 6:", ambilInfoProduk(produk1));
// seharusnya: { diskonTampil: 0, ramTampil: "Tidak diketahui" }


// ===== Soal 7 — Operator Precedence (Tantangan!) =====
// TODO: Sebelum menjalankan kode ini, tulis dulu tebakanmu di komentar bawah ini:
// Tebakan baris 1: ...
// Tebakan baris 2: ...

console.log("Soal 7a:", 2 + 3 * 4 > 10 && 5 > 3);
console.log("Soal 7b:", 10 - 2 * 3 === 4 || false);
