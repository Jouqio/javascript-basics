// ============================================
// 11. TYPE CONVERSION DAN COERCION
// ============================================

// --- 1. Type Conversion ke Number ---
let teksAngka = "25";
console.log(Number(teksAngka));   // 25
console.log(parseInt("25px"));    // 25
console.log(parseFloat("3.14"));  // 3.14
console.log(+teksAngka);          // 25
console.log(Number("abc"));       // NaN


// --- 2. Type Conversion ke String ---
let angka = 100;
console.log(String(angka));    // "100"
console.log(angka.toString()); // "100"
console.log(angka + "");       // "100"


// --- 3. Type Conversion ke Boolean ---
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean("teks"));    // true
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false


// --- 4. Type Coercion (implisit, otomatis oleh JS) ---
console.log("5" + 3);    // "53"
console.log("5" - 3);    // 2
console.log("5" * "2");  // 10
console.log(5 + true);   // 6
console.log(5 + false);  // 5
console.log("5" == 5);   // true (coercion karena ==)


// --- 5. Operator + yang membingungkan ---
console.log(1 + 2);       // 3
console.log("1" + 2);     // "12"
console.log(1 + "2");     // "12"
console.log(1 + 2 + "3"); // "33"
console.log("1" + 2 + 3); // "123"


// --- 6. Contoh masalah nyata: harga dari input form ---
let hargaBarang = "15000"; // string, seolah dari input form
let jumlahBeli = 3;

console.log("Perkalian (benar):", hargaBarang * jumlahBeli); // 45000, karena * memaksa konversi
console.log("Penjumlahan (SALAH):", hargaBarang + jumlahBeli); // "150003", digabung sebagai string!


// --- 7. Solusi: konversi eksplisit sebelum operasi ---
let hargaInput = "15000";

// Kurang aman
let totalTidakAman = hargaInput + 1000;
console.log("Tidak aman (salah):", totalTidakAman); // "150001000"

// Lebih aman
let hargaAngka = Number(hargaInput);
let totalAman = hargaAngka + 1000;
console.log("Aman (benar):", totalAman); // 16000


// --- 8. Fungsi bantu untuk validasi & konversi input ---
function hitungTotalBelanja(hargaInput, jumlahInput) {
  const harga = Number(hargaInput);
  const jumlah = Number(jumlahInput);

  if (isNaN(harga) || isNaN(jumlah)) {
    return "Input tidak valid";
  }

  return harga * jumlah;
}

console.log(hitungTotalBelanja("15000", "3")); // 45000
console.log(hitungTotalBelanja("abc", "3"));   // "Input tidak valid"


// Coba sendiri:
// Tebak dulu hasil dari ekspresi berikut sebelum menjalankan kode!
console.log("10" + 5 - 3);   // ?
console.log(10 + 5 + "3");   // ?
console.log(true + true);    // ?
console.log("5" + null);     // ?
