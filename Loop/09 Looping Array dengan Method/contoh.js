// ================================================
// Contoh 1: forEach()
// ================================================
console.log("--- forEach() ---");
let buah = ["Apel", "Jeruk", "Mangga"];
buah.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});


// ================================================
// Contoh 2: map()
// ================================================
console.log("\n--- map() ---");
let angka = [1, 2, 3, 4, 5];
let dikali2 = angka.map((n) => n * 2);
console.log("Asli:", angka);
console.log("Dikali 2:", dikali2);


// ================================================
// Contoh 3: filter()
// ================================================
console.log("\n--- filter() ---");
let genapSaja = angka.filter((n) => n % 2 === 0);
console.log("Genap saja:", genapSaja);


// ================================================
// Contoh 4: reduce()
// ================================================
console.log("\n--- reduce() ---");
let total = angka.reduce((akumulator, n) => akumulator + n, 0);
console.log("Total:", total);


// ================================================
// Contoh 5: Method Array Tidak Bisa Di-break
// ================================================
console.log("\n--- forEach TIDAK bisa di-break ---");
angka.forEach((n) => {
  if (n === 3) {
    console.log("Ketemu 3, tapi forEach tetap lanjut ke elemen berikutnya!");
  }
  console.log("Memproses:", n);
});

console.log("\nSolusi: gunakan find() yang otomatis berhenti");
let hasilFind = angka.find((n) => n === 3);
console.log("Hasil find():", hasilFind);


// ================================================
// Contoh 6: Chaining - Merangkai Beberapa Method
// ================================================
console.log("\n--- Chaining Method ---");
let siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dedi", nilai: 55 },
];

let namaSiswaLulus = siswa
  .filter((s) => s.nilai >= 70)
  .map((s) => s.nama);

console.log("Siswa yang lulus:", namaSiswaLulus);


// ================================================
// Contoh 7: Perbandingan Loop Biasa vs Method Array
// ================================================
console.log("\n--- Perbandingan: Loop Biasa vs Method Array ---");

console.log("Cara loop biasa (for):");
let hasilLoopBiasa = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] % 2 === 0) {
    hasilLoopBiasa.push(angka[i] * 10);
  }
}
console.log(hasilLoopBiasa);

console.log("\nCara modern (method array, lebih ringkas):");
let hasilMethodArray = angka.filter((n) => n % 2 === 0).map((n) => n * 10);
console.log(hasilMethodArray);


// ================================================
// Contoh 8: Studi Kasus - Laporan Penjualan
// ================================================
console.log("\n--- Studi Kasus: Laporan Penjualan ---");
let transaksi = [
  { produk: "Laptop", harga: 8000000, qty: 2 },
  { produk: "Mouse", harga: 150000, qty: 5 },
  { produk: "Keyboard", harga: 300000, qty: 3 },
];

let totalPenjualan = transaksi
  .map((t) => t.harga * t.qty)
  .reduce((total, subtotal) => total + subtotal, 0);

console.log("Total penjualan: Rp" + totalPenjualan.toLocaleString("id-ID"));

let produkMahal = transaksi.filter((t) => t.harga > 200000).map((t) => t.produk);
console.log("Produk di atas Rp200.000:", produkMahal);
