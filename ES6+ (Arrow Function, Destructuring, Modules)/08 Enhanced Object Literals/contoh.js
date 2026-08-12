// ============================================================
// 08 - Enhanced Object Literals
// ============================================================

// --- Contoh 1: property shorthand ---
const nama = "Syauqi";
const umur = 20;
const user = { nama, umur };
console.log("Property shorthand:", user);

// --- Contoh 2: method shorthand ---
const kalkulator = {
  tambah(a, b) {
    return a + b;
  },
  kurang(a, b) {
    return a - b;
  },
};
console.log("Tambah:", kalkulator.tambah(2, 3));
console.log("Kurang:", kalkulator.kurang(5, 2));

// --- Contoh 3: computed property names ---
const kunci = "warnaFavorit";
const objDinamis = {
  [kunci]: "Biru",
};
console.log("Computed property:", objDinamis);

function buatFilter(field, nilai) {
  return { [field]: nilai };
}
console.log("Filter kategori:", buatFilter("kategori", "elektronik"));

// --- Latihan: produk dengan method shorthand ---
const namaProduk = "Sepatu";
const hargaProduk = 250000;

const produk = {
  nama: namaProduk,
  harga: hargaProduk,
  info() {
    return `${this.nama} - Rp${this.harga}`;
  },
};
console.log(produk.info());
