// ================================================
// Contoh 1: For...of pada Array
// ================================================
console.log("--- For...of pada Array ---");
let buah = ["Apel", "Jeruk", "Mangga"];
for (let item of buah) {
  console.log(item);
}


// ================================================
// Contoh 2: Perbandingan For Biasa vs For...of
// ================================================
console.log("\n--- Perbandingan ---");
console.log("For biasa (perlu index manual):");
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}

console.log("\nFor...of (langsung dapat nilai):");
for (let item of buah) {
  console.log(item);
}


// ================================================
// Contoh 3: For...of pada String
// ================================================
console.log("\n--- For...of pada String ---");
let kata = "Halo";
for (let huruf of kata) {
  console.log(huruf);
}


// ================================================
// Contoh 4: Mendapatkan Index dengan entries()
// ================================================
console.log("\n--- For...of dengan entries() ---");
for (let [index, item] of buah.entries()) {
  console.log(`${index}: ${item}`);
}


// ================================================
// Contoh 5: For...of dengan break dan continue
// ================================================
console.log("\n--- For...of dengan break ---");
let angka = [10, 20, 30, 40, 50];
for (let n of angka) {
  if (n === 30) break;
  console.log(n);
}

console.log("\n--- For...of dengan continue ---");
for (let n of angka) {
  if (n % 20 !== 0) continue; // hanya tampilkan kelipatan 20
  console.log(n);
}


// ================================================
// Contoh 6: Studi Kasus - Menghitung Total Belanja
// ================================================
console.log("\n--- Studi Kasus: Total Belanja ---");
let hargaBarang = [15000, 25000, 8000, 12000];
let total = 0;

for (let harga of hargaBarang) {
  total += harga;
}
console.log("Total belanja: Rp" + total);


// ================================================
// Contoh 7: Studi Kasus - Validasi Semua Data
// ================================================
console.log("\n--- Studi Kasus: Validasi Umur ---");
let daftarUmur = [20, 17, 25, 15, 30];
let semuaValid = true;

for (let umur of daftarUmur) {
  if (umur < 18) {
    console.log(`Ditemukan umur tidak valid: ${umur}`);
    semuaValid = false;
    break; // berhenti begitu ketemu yang tidak valid
  }
}
console.log("Semua data valid?", semuaValid);


// ================================================
// Contoh 8: For...of pada Map (Struktur Data Lain)
// ================================================
console.log("\n--- For...of pada Map ---");
let nilaiSiswa = new Map([
  ["Andi", 85],
  ["Budi", 90],
]);

for (let [nama, nilai] of nilaiSiswa) {
  console.log(`${nama}: ${nilai}`);
}
