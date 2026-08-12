// ================================================
// Contoh 1: Operasi Matematika Dasar
// ================================================
console.log("--- Operasi Matematika ---");
console.log("5 + 3 =", 5 + 3);   // 8
console.log("5 - 3 =", 5 - 3);   // 2
console.log("5 * 3 =", 5 * 3);   // 15
console.log("5 / 3 =", 5 / 3);   // 1.6666666666666667
console.log("5 % 3 =", 5 % 3);   // 2 (sisa bagi 5 dibagi 3)
console.log("5 ** 2 =", 5 ** 2); // 25 (5 pangkat 2)


// ================================================
// Contoh 2: NaN (Not a Number)
// ================================================
console.log("\n--- NaN ---");
let hasilAneh = "halo" / 2;
console.log("halo / 2 =", hasilAneh); // NaN

console.log("NaN === NaN ?", NaN === NaN); // false, ini KEUNIKAN NaN!
console.log("Number.isNaN(hasilAneh) ?", Number.isNaN(hasilAneh)); // true, cara yang BENAR mengecek NaN


// ================================================
// Contoh 3: Infinity
// ================================================
console.log("\n--- Infinity ---");
console.log("1 / 0 =", 1 / 0);   // Infinity
console.log("-1 / 0 =", -1 / 0); // -Infinity
console.log("Infinity > 999999999 ?", Infinity > 999999999); // true


// ================================================
// Contoh 4: Masalah Ketelitian Desimal
// ================================================
console.log("\n--- Ketelitian Desimal ---");
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004 (bukan 0.3!)

// Solusi: bulatkan dengan toFixed() saat ditampilkan
let hasil = 0.1 + 0.2;
console.log("Dibulatkan:", hasil.toFixed(2)); // "0.30" (hasilnya string!)


// ================================================
// Contoh 5: Method Number dan Math yang Berguna
// ================================================
console.log("\n--- Method Number & Math ---");
console.log("Number.isInteger(10) ?", Number.isInteger(10));   // true
console.log("Number.isInteger(10.5) ?", Number.isInteger(10.5)); // false

console.log("Math.round(4.6) =", Math.round(4.6)); // 5
console.log("Math.floor(4.9) =", Math.floor(4.9)); // 4 (dibulatkan ke bawah)
console.log("Math.ceil(4.1) =", Math.ceil(4.1));   // 5 (dibulatkan ke atas)

// Angka acak antara 1 - 10
let angkaAcak = Math.floor(Math.random() * 10) + 1;
console.log("Angka acak (1-10):", angkaAcak);


// ================================================
// Contoh 6: Studi Kasus - Menghitung Diskon Belanja
// ================================================
console.log("\n--- Studi Kasus: Diskon Belanja ---");
let hargaAwal = 150000;
let persenDiskon = 15; // 15%

let besarDiskon = (hargaAwal * persenDiskon) / 100;
let hargaAkhir = hargaAwal - besarDiskon;

console.log(`Harga awal: Rp${hargaAwal}`);
console.log(`Diskon ${persenDiskon}%: Rp${besarDiskon}`);
console.log(`Harga akhir: Rp${hargaAkhir}`);
