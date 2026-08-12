// ============================================================
// 03 - Template Literals
// ============================================================

// --- Contoh 1: interpolasi variabel dasar ---
const nama = "Syauqi";
const umur = 20;
const pesan = `Halo, nama saya ${nama} dan umur saya ${umur} tahun.`;
console.log(pesan);

// --- Contoh 2: interpolasi dengan ekspresi ---
const harga = 15000;
const qty = 3;
console.log(`Total: Rp${harga * qty}`);

function sapa(nm) {
  return "Halo, " + nm;
}
console.log(`Pesan: ${sapa("Syauqi")}`);

const nilai = 85;
console.log(`Status: ${nilai >= 75 ? "Lulus" : "Tidak Lulus"}`);

// --- Contoh 3: string multi-baris ---
const pesanMultiline = `Baris satu
Baris dua
Baris tiga`;
console.log(pesanMultiline);

// --- Latihan: konversi ke template literal ---
const produk = "Sepatu";
const hargaProduk = 250000;
const diskon = 10;
const pesanProduk = `Produk ${produk} harga Rp${hargaProduk} diskon ${diskon}%`;
console.log(pesanProduk);
