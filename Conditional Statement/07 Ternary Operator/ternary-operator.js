// ============================================
// 07. TERNARY OPERATOR
// ============================================

// Contoh 1: Perbandingan if-else vs ternary
let umur = 20;

// Versi if-else
let statusIfElse;
if (umur >= 18) {
  statusIfElse = "Dewasa";
} else {
  statusIfElse = "Anak-anak";
}
console.log("If-else:", statusIfElse);

// Versi ternary (hasil sama, lebih ringkas)
let statusTernary = umur >= 18 ? "Dewasa" : "Anak-anak";
console.log("Ternary :", statusTernary);


// Contoh 2: Cek kelulusan
let nilai = 75;
let hasil = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log(hasil); // Lulus


// Contoh 3: Cek genap/ganjil
let angka = 7;
console.log(angka % 2 === 0 ? "Genap" : "Ganjil"); // Ganjil


// Contoh 4: Ternary langsung di dalam template string
let namaUser = "Rudi";
let sudahLogin = true;
console.log(`Halo, ${sudahLogin ? namaUser : "Tamu"}!`);
// Output: Halo, Rudi!


// Contoh 5: Ternary bertingkat (nested ternary) - gunakan secukupnya
let nilaiAkhir = 75;
let grade = nilaiAkhir >= 90 ? "A"
          : nilaiAkhir >= 80 ? "B"
          : nilaiAkhir >= 70 ? "C"
          : "D";

console.log("Grade:", grade); // Grade: C


// Contoh 6: Kapan sebaiknya TIDAK pakai ternary
// Jika butuh banyak aksi, if-else biasa lebih mudah dibaca
let umurCek = 20;

if (umurCek >= 18) {
  console.log("Dewasa");
  console.log("Boleh mendaftar");
} else {
  console.log("Anak-anak");
}


// Coba sendiri:
// Ubah nilai "umur", "nilai", "angka", atau "nilaiAkhir"
// untuk melihat hasil yang berbeda.
