// ================================================
// Contoh 1: for...in
// ================================================
console.log("--- for...in ---");
let siswa = { nama: "Rina", umur: 21, jurusan: "Teknik Informatika" };

for (let key in siswa) {
  console.log(key, "->", siswa[key]);
}


// ================================================
// Contoh 2: Object.keys()
// ================================================
console.log("\n--- Object.keys() ---");
let keys = Object.keys(siswa);
console.log("Daftar key:", keys);

// Karena hasilnya array, bisa pakai method array
keys.forEach((key) => {
  console.log(key, "->", siswa[key]);
});


// ================================================
// Contoh 3: Object.values()
// ================================================
console.log("\n--- Object.values() ---");
let values = Object.values(siswa);
console.log("Daftar value:", values);


// ================================================
// Contoh 4: Object.entries()
// ================================================
console.log("\n--- Object.entries() ---");
let entries = Object.entries(siswa);
console.log("Daftar entries:", entries);

Object.entries(siswa).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});


// ================================================
// Contoh 5: Menggabungkan Object.entries() dengan map/filter
// ================================================
console.log("\n--- entries() + map/filter ---");
let nilaiSiswa = {
  matematika: 85,
  bahasaInggris: 60,
  ipa: 90,
  ips: 55,
};

// Cari mata pelajaran dengan nilai >= 70 (lulus)
let mapelLulus = Object.entries(nilaiSiswa)
  .filter(([mapel, nilai]) => nilai >= 70)
  .map(([mapel]) => mapel);

console.log("Mapel yang lulus:", mapelLulus); // ["matematika", "ipa"]

// Hitung rata-rata semua nilai
let rataRata =
  Object.values(nilaiSiswa).reduce((total, nilai) => total + nilai, 0) /
  Object.values(nilaiSiswa).length;
console.log("Rata-rata nilai:", rataRata);


// ================================================
// Contoh 6: Studi Kasus - Menampilkan Struk Belanja
// ================================================
console.log("\n--- Studi Kasus: Struk Belanja ---");
let keranjang = {
  "Indomie Goreng": 3500,
  "Air Mineral": 4000,
  "Roti Tawar": 12000,
};

console.log("=== STRUK BELANJA ===");
let totalBelanja = 0;
Object.entries(keranjang).forEach(([namaBarang, harga]) => {
  console.log(`${namaBarang}: Rp${harga}`);
  totalBelanja += harga;
});
console.log("---------------------");
console.log(`Total: Rp${totalBelanja}`);
