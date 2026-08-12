// ============================================================
// 06 - Destructuring Array dan Object
// ============================================================

// --- Contoh 1: destructuring array ---
const koordinat = [10, 20];
const [x, y] = koordinat;
console.log("x, y:", x, y);

const warna = ["merah", "hijau", "biru"];
const [, kedua] = warna; // melewati elemen pertama
console.log("Warna kedua:", kedua);

let a = 1;
let b = 2;
[a, b] = [b, a]; // tukar nilai tanpa variabel bantu
console.log("Setelah ditukar:", a, b);

// --- Contoh 2: destructuring object ---
const user = { nama: "Syauqi", umur: 20, kota: "Bontang" };
const { nama, umur } = user;
console.log("Nama, umur:", nama, umur);

const { nama: namaLengkap } = user;
console.log("Rename:", namaLengkap);

const { profesi = "Belum diisi" } = user;
console.log("Default value:", profesi);

// --- Contoh 3: destructuring bersarang ---
const mahasiswa = {
  nama: "Syauqi",
  kampus: {
    nama: "STITEK Bontang",
    jurusan: "Teknik Informatika",
  },
};
const {
  nama: namaMhs,
  kampus: { jurusan },
} = mahasiswa;
console.log("Nested:", namaMhs, jurusan);

// --- Contoh 4: destructuring pada parameter fungsi ---
function tampilkanUser({ nama, kota }) {
  console.log(`${nama} - ${kota}`);
}
tampilkanUser({ nama: "Syauqi", kota: "Bontang", umur: 20 });

// --- Latihan: buku ---
const buku = { judul: "Laskar Pelangi" };
const { judul, penulis = "Anonim" } = buku;
console.log("Buku:", judul, penulis);
