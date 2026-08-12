// ============================================================
// 05 - Default Parameters
// ============================================================

// --- Contoh 1: default parameter dasar ---
function sapa(nama = "Tamu") {
  return `Halo, ${nama}`;
}
console.log(sapa("Syauqi"));
console.log(sapa());
console.log(sapa(0)); // tetap "Halo, 0", beda dengan cara lama pakai ||

// --- Contoh 2: beberapa default parameter ---
function buatAkun(nama, peran = "member", aktif = true) {
  return { nama, peran, aktif };
}
console.log(buatAkun("Syauqi"));
console.log(buatAkun("Admin1", "admin"));

// --- Contoh 3: default parameter berupa ekspresi ---
function hargaSetelahPajak(harga, pajak = harga * 0.1) {
  return harga + pajak;
}
console.log("Dengan pajak otomatis:", hargaSetelahPajak(100000));
console.log("Dengan pajak custom:", hargaSetelahPajak(100000, 5000));

// --- Latihan: buatProduk ---
function buatProduk(nama, harga, stok = 0) {
  return { nama, harga, stok };
}
console.log(buatProduk("Buku", 25000, 10));
console.log(buatProduk("Pensil", 3000));
