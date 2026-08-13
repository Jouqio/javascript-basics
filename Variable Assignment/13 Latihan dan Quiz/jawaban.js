// ============================================
// 13. KUNCI JAWABAN LATIHAN CODING
// Cocokkan hasil pengerjaanmu di latihan.js dengan file ini
// ============================================

// ---------- JAWABAN SOAL 1: Deklarasi dan Assignment Dasar ----------
const namaToko = "Toko Maju Jaya";
let stokBarang = 50;
const hargaSatuan = 12000;

console.log("Nama toko:", namaToko);
console.log("Stok barang:", stokBarang);
console.log("Harga satuan:", hargaSatuan);


// ---------- JAWABAN SOAL 2: Praktik Assignment Operator ----------
let saldo = 100000;

saldo -= 25000; // belanja
saldo += 50000; // top up

console.log("Saldo akhir:", saldo); // 125000


// ---------- JAWABAN SOAL 3: Cek Tipe Data ----------
let contohString = "Halo";
let contohNumber = 100;
let contohBoolean = true;
let contohNull = null;

console.log(typeof contohString);  // string
console.log(typeof contohNumber);  // number
console.log(typeof contohBoolean); // boolean
console.log(typeof contohNull);    // object (quirk JavaScript)


// ---------- JAWABAN SOAL 4: Scope Variable ----------
function hitungLuasPersegi(sisi) {
  let luas = sisi * sisi; // variabel lokal, hanya ada di dalam fungsi
  return luas;
}

console.log("Luas persegi (sisi 5):", hitungLuasPersegi(5)); // 25

try {
  console.log(luas); // akan ReferenceError, karena "luas" hanya ada di dalam fungsi
} catch (error) {
  console.log("Error mengakses luas di luar fungsi:", error.message);
}


// ---------- JAWABAN SOAL 5: Destructuring ----------
const produk = { nama: "Laptop", harga: 8000000, stok: 5 };
const { nama, harga } = produk;

console.log(`${nama} seharga Rp${harga}`); // Laptop seharga Rp8000000


// ---------- JAWABAN SOAL 6: Type Conversion ----------
let hargaInput = "25000";
let jumlahInput = "4";

let totalHarga = Number(hargaInput) * Number(jumlahInput);
console.log("Total harga:", totalHarga); // 100000


// ---------- JAWABAN SOAL 7 (BONUS): Swap Tanpa Variabel Bantu ----------
let a = "kiri";
let b = "kanan";

[a, b] = [b, a]; // swap dalam 1 baris

console.log("a:", a, "| b:", b); // a: kanan | b: kiri


// ---------- JAWABAN SOAL 8 (BONUS): const Berisi Object ----------
const keranjang = { items: [], total: 0 };

keranjang.items.push("Buku"); // mengubah ISI array, bukan mengganti seluruh object
keranjang.total = 50000;      // mengubah ISI properti, bukan mengganti seluruh object

console.log("Keranjang:", keranjang);
// { items: ['Buku'], total: 50000 }
