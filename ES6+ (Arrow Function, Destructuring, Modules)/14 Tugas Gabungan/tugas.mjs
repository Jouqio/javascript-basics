// ============================================================
// 14 - Tugas Gabungan: Sistem Manajemen Kontak Sederhana
// ============================================================
// Baca Readme.md di folder ini untuk penjelasan lengkap tiap requirement.
// Lengkapi setiap fungsi di bawah ini sesuai TODO masing-masing.
// Jangan ubah signature fungsi (nama & parameter) agar bagian "Runner"
// di paling bawah tetap bisa memanggilnya.
//
// File ini pakai ekstensi .mjs karena memakai import/export (materi 10).
// Jalankan dengan: node tugas.mjs

import { Kontak } from "./kontak-model.mjs";

// ------------------------------------------------------------
// 1. tambahKontak(daftarKontak, kontak)  -> materi 07 (Spread Operator)
// ------------------------------------------------------------
// TODO: Kembalikan array BARU hasil menambahkan `kontak` ke `daftarKontak`.
// Jangan gunakan .push() - gunakan spread operator agar array asli
// tidak berubah (immutability).
function tambahKontak(daftarKontak, kontak) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 2. cariKontak(daftarKontak, kataKunci)  -> materi 06/12 (Destructuring & Optional Chaining)
// ------------------------------------------------------------
// TODO: Cari kontak pertama yang nama-nya mengandung kataKunci
// (case-insensitive). Gunakan optional chaining (?.) saat mengakses
// properti nama agar tidak error jika ada elemen null/undefined.
// Kembalikan undefined jika tidak ketemu.
function cariKontak(daftarKontak, kataKunci) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 3. hapusDuplikatTelepon(daftarKontak)  -> materi 11 (Set)
// ------------------------------------------------------------
// TODO: Kembalikan array kontak baru tanpa duplikat berdasarkan nomor
// telepon (kontak PERTAMA dengan nomor tersebut yang dipertahankan).
// Gunakan Set untuk melacak nomor telepon yang sudah pernah dilihat.
function hapusDuplikatTelepon(daftarKontak) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 4. formatKontak(kontak, format)  -> materi 03/04/05
//    (Template Literal, Arrow Function, Default Parameter)
// ------------------------------------------------------------
// TODO: Ubah menjadi arrow function dengan default parameter
// format = "lengkap". Jika format === "singkat", kembalikan
// `${nama} - ${telepon}`. Jika "lengkap" (default), kembalikan
// hasil dari kontak.info().
const formatKontak = function (kontak, format) {
  // TODO: implementasikan (ubah jadi arrow function + default parameter)
};

// ------------------------------------------------------------
// 5. kelompokkanPerHurufAwal(daftarKontak)  -> materi 11 (Map)
// ------------------------------------------------------------
// TODO: Kembalikan sebuah Map: kunci = huruf pertama nama (kapital),
// nilai = array kontak yang namanya diawali huruf tersebut.
function kelompokkanPerHurufAwal(daftarKontak) {
  // TODO: implementasikan, return new Map()
}

// ------------------------------------------------------------
// 6. ringkasanKontak(daftarKontak)  -> materi 08 (Enhanced Object Literals)
// ------------------------------------------------------------
// TODO: Kembalikan objek ringkasan dengan property shorthand & method
// shorthand:
// {
//   total,               // jumlah kontak
//   tanpaEmail,           // jumlah kontak dengan email === "-"
//   tampilkanSemua() {    // return array formatKontak(k, "singkat") untuk semua
//     ...
//   }
// }
function ringkasanKontak(daftarKontak) {
  // TODO: implementasikan
}

// ============================================================
// Runner - JANGAN diubah, dipakai untuk menguji implementasimu
// ============================================================

let daftarKontak = [
  new Kontak("Ani Wijaya", "0812-1111-1111", "ani@mail.com"),
  new Kontak("Budi Santoso", "0812-2222-2222"),
  new Kontak("Andi Prasetyo", "0812-3333-3333", "andi@mail.com"),
  new Kontak("Citra Dewi", "0812-2222-2222"), // nomor sama dengan Budi (duplikat)
];

console.log("=== 1. Tambah Kontak ===");
const kontakBaru = new Kontak("Doni Saputra", "0812-4444-4444", "doni@mail.com");
// Fallback dengan ?? memastikan skrip tidak crash total selama tambahKontak
// masih berupa TODO (belum dikerjakan) - begitu diimplementasikan, hasil
// aslinyalah yang akan dipakai.
daftarKontak = tambahKontak(daftarKontak, kontakBaru) ?? daftarKontak;
console.log("Jumlah kontak setelah ditambah:", daftarKontak?.length);

console.log("\n=== 2. Cari Kontak ===");
console.log("Cari 'andi':", cariKontak(daftarKontak, "andi"));

console.log("\n=== 3. Hapus Duplikat Telepon ===");
const tanpaDuplikat = hapusDuplikatTelepon(daftarKontak);
console.log("Jumlah sebelum:", daftarKontak?.length, "| sesudah:", tanpaDuplikat?.length);

console.log("\n=== 4. Format Kontak ===");
console.log("Format lengkap:", formatKontak(daftarKontak[0]));
console.log("Format singkat:", formatKontak(daftarKontak[0], "singkat"));

console.log("\n=== 5. Kelompokkan per Huruf Awal ===");
const kelompok = kelompokkanPerHurufAwal(daftarKontak);
console.log(kelompok);

console.log("\n=== 6. Ringkasan Kontak ===");
const ringkasan = ringkasanKontak(daftarKontak);
console.log(ringkasan);
console.log("Tampilkan semua:", ringkasan?.tampilkanSemua?.());
