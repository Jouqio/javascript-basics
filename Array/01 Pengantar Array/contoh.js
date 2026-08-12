// ============================================
// 01. PENGANTAR ARRAY - Contoh Kode
// ============================================

// --- Membuat Array ---
const buah = ["Apel", "Jeruk", "Mangga"];
console.log("Array buah:", buah);
console.log("Elemen pertama:", buah[0]); // "Apel"
console.log("Elemen kedua:", buah[1]); // "Jeruk"
console.log("Panjang array:", buah.length); // 3

// --- Array Heterogen (tipe data campuran) ---
const campuran = [1, "dua", true, null, { nama: "Budi" }, [1, 2, 3]];
console.log("\nArray campuran:", campuran);
campuran.forEach((item, i) => {
  console.log(`Index ${i}: ${JSON.stringify(item)} (tipe: ${typeof item})`);
});

// --- Berbagai Cara Membuat Array ---
const angka = [1, 2, 3]; // array literal
const kosong = new Array(5); // 5 slot kosong
const satuAngka = Array.of(7); // [7]
const huruf = Array.from("abc"); // ["a", "b", "c"]

console.log("\nangka:", angka);
console.log("kosong.length:", kosong.length);
console.log("satuAngka:", satuAngka);
console.log("huruf:", huruf);

// --- Mengakses & Mengubah Elemen ---
const warna = ["merah", "hijau", "biru"];
console.log("\nSebelum diubah:", warna);
warna[0] = "kuning";
console.log("Setelah diubah:", warna);
console.log("Elemen terakhir (cara lama):", warna[warna.length - 1]);
console.log("Elemen terakhir (method .at):", warna.at(-1));

// --- Iterasi Array ---
console.log("\n--- Iterasi dengan for klasik ---");
for (let i = 0; i < angka.length; i++) {
  console.log(angka[i]);
}

console.log("\n--- Iterasi dengan for...of ---");
for (const n of angka) {
  console.log(n);
}

console.log("\n--- Iterasi dengan forEach ---");
angka.forEach((n, index) => {
  console.log(`Index ${index}: ${n}`);
});

// ============================================
// LATIHAN (kerjakan sendiri di bawah ini)
// ============================================

// 1. Buat array berisi 5 nama hari dalam seminggu,
//    tampilkan hari ke-3 menggunakan console.log.
const hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
console.log("\nJawaban No 1 - Hari ke-3:", hari[2]);

// 2. Buat array campuran (angka, string, boolean),
//    cetak tipe data setiap elemennya menggunakan typeof.
const dataCampuran = [10, "Halo", false];
dataCampuran.forEach((d) => console.log(`Jawaban No 2 - ${d}:`, typeof d));

// 3. Gunakan Array.from() untuk mengubah string "JavaScript"
//    menjadi array karakter.
const arrKarakter = Array.from("JavaScript");
console.log("Jawaban No 3:", arrKarakter);
