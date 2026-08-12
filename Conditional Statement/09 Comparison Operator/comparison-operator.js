// ============================================
// 09. COMPARISON OPERATOR
// ============================================

// --- 1. Perbedaan == dan === ---
console.log(5 == "5");    // true  -> "5" dikonversi jadi angka 5
console.log(5 === "5");   // false -> tipe data beda (number vs string)

console.log(0 == false);  // true  -> false dikonversi jadi 0
console.log(0 === false); // false -> tipe data beda

console.log(null == undefined);  // true
console.log(null === undefined); // false


// --- 2. Perbedaan != dan !== ---
console.log(5 != "5");   // false (nilainya dianggap sama setelah konversi)
console.log(5 !== "5");  // true  (tipe data beda)


// --- 3. Operator perbandingan angka ---
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(5 >= 5);   // true
console.log(4 <= 5);   // true


// --- 4. Penggunaan dalam if statement ---
let umur = 20;

if (umur === 20) {
  console.log("Umur kamu tepat 20 tahun");
}

if (umur !== 18) {
  console.log("Umur kamu bukan 18 tahun");
}

if (umur >= 17) {
  console.log("Sudah cukup umur");
}


// --- 5. Membandingkan string ---
console.log("apel" === "apel"); // true
console.log("apel" === "Apel"); // false, huruf besar/kecil berbeda
console.log("a" < "b");         // true, "a" lebih dulu secara alfabet


// --- 6. Kenapa === lebih disarankan ---
let nilaiUjian = "80"; // misal nilai berasal dari input form (selalu string)

// Kurang aman, karena == melakukan konversi otomatis
if (nilaiUjian == 80) {
  console.log("(==) Nilai terdeteksi 80");
}

// Lebih aman & eksplisit, harus dikonversi manual dulu
if (Number(nilaiUjian) === 80) {
  console.log("(===) Nilai terdeteksi 80 setelah dikonversi ke number");
}


// Coba sendiri:
// Tebak dulu hasilnya sebelum menjalankan kode, lalu cocokkan!
console.log("1" == 1);       // ?
console.log("1" === 1);      // ?
console.log(" " == 0);       // ?
console.log([] == false);    // ?
