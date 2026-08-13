/*
  ===============================================
  KUNCI JAWABAN - LATIHAN MANDIRI OPERATOR
  ===============================================
  Coba kerjakan latihan.js dulu secara mandiri sebelum melihat file ini!
  Jalankan dengan: node kunci-jawaban.js
*/

// ===== Soal 1 — Operator Aritmatika =====
function cekGenapGanjil(angka) {
  return angka % 2 === 0 ? "genap" : "ganjil";
}
console.log("Soal 1:", cekGenapGanjil(7));  // "ganjil"
console.log("Soal 1:", cekGenapGanjil(10)); // "genap"


// ===== Soal 2 — Operator Perbandingan =====
function bandingkanTipe(a, b) {
  return {
    looseEqual: a == b,
    strictEqual: a === b
  };
}
console.log("Soal 2:", bandingkanTipe(5, "5")); // { looseEqual: true, strictEqual: false }


// ===== Soal 3 — Operator Logika =====
function bolehMasukWahana(umur, tinggiCm) {
  return umur >= 12 && tinggiCm >= 140;
}
console.log("Soal 3:", bolehMasukWahana(13, 150)); // true
console.log("Soal 3:", bolehMasukWahana(10, 150)); // false


// ===== Soal 4 — Operator Ternary =====
function kategoriBMI(bmi) {
  return bmi < 18.5 ? "Kurus"
       : bmi < 25   ? "Normal"
       : "Gemuk";
}
console.log("Soal 4:", kategoriBMI(17)); // "Kurus"
console.log("Soal 4:", kategoriBMI(22)); // "Normal"
console.log("Soal 4:", kategoriBMI(28)); // "Gemuk"


// ===== Soal 5 — Operator String (Template Literals) =====
function buatKartuNama(nama, jabatan, perusahaan) {
  return `${nama} - ${jabatan} di ${perusahaan}`;
}
console.log("Soal 5:", buatKartuNama("Budi", "Developer", "PT Maju Jaya"));
// "Budi - Developer di PT Maju Jaya"


// ===== Soal 6 — Operator Modern (?? dan ?.) =====
function ambilInfoProduk(produk) {
  return {
    diskonTampil: produk.diskon ?? "Tidak ada diskon",
    ramTampil: produk.spesifikasi?.ram ?? "Tidak diketahui"
  };
}

const produk1 = { nama: "Laptop", diskon: 0, spesifikasi: null };
console.log("Soal 6:", ambilInfoProduk(produk1));
// { diskonTampil: 0, ramTampil: "Tidak diketahui" }


// ===== Soal 7 — Operator Precedence (Tantangan!) =====
// Tebakan baris 1: 2+3*4=14, 14>10=true, true && (5>3=true) -> true
// Tebakan baris 2: 2*3=6, 10-6=4, 4===4=true, true || false -> true

console.log("Soal 7a:", 2 + 3 * 4 > 10 && 5 > 3); // true
console.log("Soal 7b:", 10 - 2 * 3 === 4 || false); // true
