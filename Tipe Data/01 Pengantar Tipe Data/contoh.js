// ================================================
// Contoh 1: JavaScript bersifat Dynamically Typed
// ================================================
let data = 10;
console.log(data, "->", typeof data); // 10 -> number

data = "Halo Dunia";
console.log(data, "->", typeof data); // Halo Dunia -> string

data = true;
console.log(data, "->", typeof data); // true -> boolean

// Perhatikan: variabel "data" yang SAMA bisa menampung tipe data yang berbeda-beda


// ================================================
// Contoh 2: 7 Tipe Data Primitif
// ================================================
console.log("\n--- Tipe Data Primitif ---");
let angka = 100;                 // Number
let teks = "Belajar JavaScript"; // String
let benar = true;                // Boolean
let belumDiisi;                  // Undefined (variabel dideklarasikan tapi belum diberi nilai)
let kosong = null;                // Null (sengaja dikosongkan)
let idUnik = Symbol("id");        // Symbol
let angkaBesar = 123456789012345678901234567890n; // BigInt

console.log(typeof angka);      // number
console.log(typeof teks);       // string
console.log(typeof benar);      // boolean
console.log(typeof belumDiisi); // undefined
console.log(typeof kosong);     // object (ini adalah "bug" bersejarah di JavaScript, dibahas lebih lanjut di materi 05)
console.log(typeof idUnik);     // symbol
console.log(typeof angkaBesar); // bigint


// ================================================
// Contoh 3: Tipe Data Non-Primitif
// ================================================
console.log("\n--- Tipe Data Non-Primitif ---");
let arrayContoh = [1, 2, 3];
let objectContoh = { nama: "Budi", umur: 20 };
let fungsiContoh = function () {};

console.log(typeof arrayContoh);  // object (array sebenarnya adalah jenis khusus object)
console.log(typeof objectContoh); // object
console.log(typeof fungsiContoh); // function


// ================================================
// Contoh 4: Primitif disalin sebagai NILAI (independen)
// ================================================
console.log("\n--- Primitif vs Referensi ---");
let a = 10;
let b = a; // b menyalin NILAI dari a
b = 20;
console.log("a =", a, ", b =", b); // a = 10, b = 20 -> a TIDAK ikut berubah


// ================================================
// Contoh 5: Non-Primitif disalin sebagai REFERENSI
// ================================================
let obj1 = { nilai: 10 };
let obj2 = obj1; // obj2 menyalin REFERENSI (alamat) dari obj1, bukan nilainya
obj2.nilai = 99;
console.log("obj1.nilai =", obj1.nilai); // obj1.nilai = 99 -> IKUT BERUBAH!
console.log("obj2.nilai =", obj2.nilai); // obj2.nilai = 99
// Ini karena obj1 dan obj2 menunjuk ke OBJECT YANG SAMA di memori
