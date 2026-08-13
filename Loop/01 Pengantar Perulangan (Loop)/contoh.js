// ================================================
// Contoh 1: Tanpa Loop (Berulang Manual) vs Dengan Loop
// ================================================
console.log("--- Tanpa Loop (berantakan) ---");
console.log("Halo orang ke-1");
console.log("Halo orang ke-2");
console.log("Halo orang ke-3");
console.log("Halo orang ke-4");
console.log("Halo orang ke-5");
// Bayangkan kalau harus sampai 100 kali, sangat tidak efisien!

console.log("\n--- Dengan Loop (efisien) ---");
for (let i = 1; i <= 5; i++) {
  console.log(`Halo orang ke-${i}`);
}


// ================================================
// Contoh 2: 3 Komponen Dasar Loop
// ================================================
console.log("\n--- 3 Komponen Dasar Loop ---");
// 1. Inisialisasi: let i = 0
// 2. Kondisi: i < 5
// 3. Update: i++
for (let i = 0; i < 5; i++) {
  console.log(`Iterasi ke-${i}`);
}


// ================================================
// Contoh 3: Loop untuk Menghitung Total
// ================================================
console.log("\n--- Studi Kasus: Menghitung Total ---");
let angka = [10, 25, 30, 15, 20];
let total = 0;

for (let i = 0; i < angka.length; i++) {
  total += angka[i]; // menambahkan setiap elemen ke total
}

console.log("Daftar angka:", angka);
console.log("Total:", total); // 100


// ================================================
// Contoh 4: Loop untuk Menampilkan Daftar Produk
// ================================================
console.log("\n--- Studi Kasus: Daftar Produk ---");
let produk = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < produk.length; i++) {
  console.log(`${i + 1}. ${produk[i]}`);
}


// ================================================
// Contoh 5: Loop untuk Membuat Pola Sederhana
// ================================================
console.log("\n--- Studi Kasus: Pola Bintang ---");
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
// Hasil:
// *
// **
// ***
// ****
// *****
