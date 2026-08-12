// ============================================
// 08. LOGICAL OPERATOR
// ============================================

// --- 1. Operator && (AND) ---
let umur = 25;
let punyaKTP = true;

if (umur >= 17 && punyaKTP) {
  console.log("Boleh mencoblos");
} else {
  console.log("Tidak boleh mencoblos");
}
// Output: Boleh mencoblos


// --- 2. Operator || (OR) ---
let hariLibur = false;
let tanggalMerah = true;

if (hariLibur || tanggalMerah) {
  console.log("Hari ini tidak masuk kerja");
} else {
  console.log("Hari ini tetap masuk kerja");
}
// Output: Hari ini tidak masuk kerja


// --- 3. Operator ! (NOT) ---
let sudahBayar = false;

if (!sudahBayar) {
  console.log("Silakan lakukan pembayaran terlebih dahulu");
}
// Output: Silakan lakukan pembayaran terlebih dahulu


// --- 4. Menggabungkan beberapa operator logika ---
let umurMasuk = 20;
let punyaTiket = true;
let dilarangMasuk = false;

if (umurMasuk >= 17 && punyaTiket && !dilarangMasuk) {
  console.log("Silakan masuk");
} else {
  console.log("Tidak diizinkan masuk");
}
// Output: Silakan masuk


// --- 5. Menyederhanakan nested if dengan && ---
let umurPemilih = 20;
let punyaKTPPemilih = true;

// Versi nested if
if (umurPemilih >= 17) {
  if (punyaKTPPemilih) {
    console.log("(Nested if) Boleh mencoblos");
  }
}

// Versi disederhanakan dengan &&
if (umurPemilih >= 17 && punyaKTPPemilih) {
  console.log("(Logical operator) Boleh mencoblos");
}


// --- 6. Tabel kebenaran (truth table) untuk latihan pemahaman ---
console.log("--- Tabel kebenaran && ---");
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

console.log("--- Tabel kebenaran || ---");
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

console.log("--- Operator ! ---");
console.log(!true);  // false
console.log(!false); // true


// Coba sendiri:
// Ubah nilai variabel boolean di atas (umur, punyaKTP, hariLibur, dll)
// untuk melihat bagaimana hasilnya berubah.
