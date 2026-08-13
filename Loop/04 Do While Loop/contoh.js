// ================================================
// Contoh 1: Do While Loop Dasar
// ================================================
console.log("--- Do While Loop Dasar ---");
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);


// ================================================
// Contoh 2: Perbedaan While vs Do-While (kondisi awal FALSE)
// ================================================
console.log("\n--- Perbandingan while vs do-while ---");

console.log("while (kondisi awal false):");
let a = 10;
while (a < 5) {
  console.log("Ini TIDAK akan pernah tercetak");
}
console.log("(tidak ada output di atas, karena kondisi awal sudah false)");

console.log("\ndo...while (kondisi awal false):");
let b = 10;
do {
  console.log("Ini TETAP tercetak SATU KALI, walaupun kondisi awal false");
} while (b < 5);


// ================================================
// Contoh 3: Do While untuk Simulasi Menu
// ================================================
console.log("\n--- Studi Kasus: Simulasi Menu ---");
let percobaan = 0;
let pilihan;

do {
  percobaan++;
  // simulasi input user: keluar setelah percobaan ke-3
  pilihan = percobaan < 3 ? "lanjut" : "keluar";
  console.log(`Percobaan ke-${percobaan}: pilihan = "${pilihan}"`);
} while (pilihan !== "keluar");

console.log("Menu selesai.");


// ================================================
// Contoh 4: Do While untuk Validasi (Simulasi)
// ================================================
console.log("\n--- Studi Kasus: Validasi PIN (Simulasi) ---");
let daftarPercobaanPIN = ["1111", "2222", "1234"]; // simulasi input dari user
let indexPercobaan = 0;
let pinBenar = "1234";
let pinInput;

do {
  pinInput = daftarPercobaanPIN[indexPercobaan];
  console.log(`Mencoba PIN: ${pinInput}`);
  indexPercobaan++;
} while (pinInput !== pinBenar && indexPercobaan < daftarPercobaanPIN.length);

if (pinInput === pinBenar) {
  console.log("✅ PIN benar, akses diberikan!");
} else {
  console.log("❌ PIN salah, akses ditolak.");
}


// ================================================
// Contoh 5: Do While untuk Roll Dadu Sampai Dapat Angka 6
// ================================================
console.log("\n--- Studi Kasus: Roll Dadu Sampai Dapat 6 ---");
let hasilDadu;
let jumlahLempar = 0;

do {
  hasilDadu = Math.floor(Math.random() * 6) + 1; // angka 1-6
  jumlahLempar++;
  console.log(`Lemparan ke-${jumlahLempar}: dapat angka ${hasilDadu}`);
} while (hasilDadu !== 6);

console.log(`🎲 Dapat angka 6 setelah ${jumlahLempar} kali lemparan!`);
