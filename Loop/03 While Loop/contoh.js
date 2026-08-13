// ================================================
// Contoh 1: While Loop Dasar
// ================================================
console.log("--- While Loop Dasar ---");
let i = 0;
while (i < 5) {
  console.log(i);
  i++; // update, JANGAN LUPA!
}


// ================================================
// Contoh 2: While Loop untuk Kondisi yang Tidak Pasti
// ================================================
console.log("\n--- Contoh: Mengulang Sampai Kondisi Terpenuhi ---");
let angka = 0;
let percobaan = 0;

while (angka !== 7) {
  angka = Math.floor(Math.random() * 10); // angka acak 0-9
  percobaan++;
}
console.log(`Angka 7 ditemukan pada percobaan ke-${percobaan}`);


// ================================================
// Contoh 3: While Loop untuk Menghitung Mundur
// ================================================
console.log("\n--- Hitung Mundur ---");
let hitungMundur = 5;
while (hitungMundur > 0) {
  console.log(hitungMundur);
  hitungMundur--;
}
console.log("Meluncur! 🚀");


// ================================================
// Contoh 4: Studi Kasus - Simulasi Saldo Menabung
// ================================================
console.log("\n--- Studi Kasus: Menabung Sampai Target ---");
let saldo = 0;
let targetSaldo = 500000;
let tabunganPerBulan = 75000;
let bulan = 0;

while (saldo < targetSaldo) {
  saldo += tabunganPerBulan;
  bulan++;
  console.log(`Bulan ke-${bulan}: saldo Rp${saldo}`);
}
console.log(`Target tercapai dalam ${bulan} bulan!`);


// ================================================
// Contoh 5: Studi Kasus - Membagi Angka Sampai Habis (Simulasi)
// ================================================
console.log("\n--- Studi Kasus: Membagi Angka dengan 2 ---");
let bilangan = 100;
let langkah = 0;

while (bilangan > 1) {
  bilangan = bilangan / 2;
  langkah++;
  console.log(`Langkah ${langkah}: ${bilangan}`);
}


// ================================================
// Contoh 6: Peringatan - Lupa Update = Infinite Loop
// ================================================
console.log("\n--- Peringatan: Infinite Loop (kode ini TIDAK dijalankan) ---");
console.log(`
// CONTOH KODE YANG SALAH (jangan dijalankan!):
let x = 0;
while (x < 5) {
  console.log(x);
  // lupa x++ di sini -> program akan HANG selamanya!
}
`);
