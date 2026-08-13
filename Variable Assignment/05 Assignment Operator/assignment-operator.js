// ============================================
// 05. ASSIGNMENT OPERATOR
// ============================================

// --- 1. Assignment dasar ---
let umur = 20;
console.log("Umur:", umur);


// --- 2. Compound assignment operator ---
let skor = 0;

skor += 10; // skor = skor + 10
console.log("Setelah += 10:", skor); // 10

skor -= 3; // skor = skor - 3
console.log("Setelah -= 3:", skor); // 7

skor *= 2; // skor = skor * 2
console.log("Setelah *= 2:", skor); // 14

skor /= 7; // skor = skor / 7
console.log("Setelah /= 7:", skor); // 2

let angka = 10;
angka %= 3; // angka = angka % 3
console.log("Setelah %= 3:", angka); // 1

let basis = 2;
basis **= 3; // basis = basis ** 3 (pangkat)
console.log("Setelah **= 3:", basis); // 8


// --- 3. Increment dan Decrement ---
let hitung = 5;
hitung++;
console.log("Setelah ++:", hitung); // 6

hitung--;
console.log("Setelah --:", hitung); // 5


// --- 4. Perbedaan prefix (++x) vs postfix (x++) ---
let a = 5;
console.log("a++ (postfix):", a++); // 5, tampilkan dulu baru bertambah
console.log("a setelahnya:", a);    // 6

let b = 5;
console.log("++b (prefix):", ++b); // 6, bertambah dulu baru ditampilkan
console.log("b setelahnya:", b);   // 6


// --- 5. Contoh praktis: counter klik ---
let jumlahKlik = 0;
jumlahKlik++;
jumlahKlik++;
jumlahKlik++;
console.log("Tombol sudah diklik", jumlahKlik, "kali"); // 3


// --- 6. Contoh praktis: menghitung diskon ---
let harga = 100000;
const DISKON = 0.1; // 10%

harga -= harga * DISKON;
console.log("Harga setelah diskon:", harga); // 90000


// --- 7. Contoh praktis: akumulasi total belanja ---
let totalBelanja = 0;
const hargaBarang1 = 15000;
const hargaBarang2 = 25000;
const hargaBarang3 = 10000;

totalBelanja += hargaBarang1;
totalBelanja += hargaBarang2;
totalBelanja += hargaBarang3;

console.log("Total belanja:", totalBelanja); // 50000


// Coba sendiri:
// Ubah nilai awal "skor" atau "harga", lalu jalankan ulang
// untuk melihat bagaimana hasil setiap operator berubah.
