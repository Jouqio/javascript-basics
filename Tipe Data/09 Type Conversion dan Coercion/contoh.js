// ================================================
// Contoh 1: Type Conversion - Mengubah ke Number
// ================================================
console.log("--- Konversi ke Number ---");
console.log('Number("123") =', Number("123"));       // 123
console.log('Number("123abc") =', Number("123abc")); // NaN
console.log('Number("") =', Number(""));             // 0
console.log("Number(true) =", Number(true));          // 1
console.log("Number(false) =", Number(false));        // 0
console.log('parseInt("123px") =', parseInt("123px"));     // 123
console.log('parseFloat("3.14m") =', parseFloat("3.14m")); // 3.14


// ================================================
// Contoh 2: Type Conversion - Mengubah ke String
// ================================================
console.log("\n--- Konversi ke String ---");
console.log("String(123) =", String(123));   // "123"
console.log("String(true) =", String(true)); // "true"
console.log("String(null) =", String(null)); // "null"
console.log("(123).toString() =", (123).toString()); // "123"


// ================================================
// Contoh 3: Type Conversion - Mengubah ke Boolean
// ================================================
console.log("\n--- Konversi ke Boolean ---");
console.log("Boolean(1) =", Boolean(1));     // true
console.log("Boolean(0) =", Boolean(0));     // false
console.log('Boolean("") =', Boolean(""));   // false
console.log('Boolean("halo") =', Boolean("halo")); // true


// ================================================
// Contoh 4: Type Coercion - Operator + dengan String
// ================================================
console.log("\n--- Coercion: Operator + ---");
console.log('"5" + 3 =', "5" + 3);   // "53" (string!)
console.log('5 + "3" =', 5 + "3");   // "53" (string!)
console.log('"5" + "3" =', "5" + "3"); // "53" (string)
console.log("5 + 3 =", 5 + 3);       // 8 (number, keduanya angka)


// ================================================
// Contoh 5: Type Coercion - Operator -, *, / Memaksa jadi Number
// ================================================
console.log("\n--- Coercion: Operator -, *, / ---");
console.log('"5" - 3 =', "5" - 3);   // 2 (number)
console.log('"5" * 2 =', "5" * 2);   // 10 (number)
console.log('"10" / 2 =', "10" / 2); // 5 (number)


// ================================================
// Contoh 6: == vs === - Kenapa Harus Hati-hati
// ================================================
console.log("\n--- == vs === ---");
console.log('0 == "0" ->', 0 == "0");     // true (mengejutkan!)
console.log('0 == "" ->', 0 == "");       // true (mengejutkan!)
console.log("0 == false ->", 0 == false); // true (mengejutkan!)
console.log('"" == false ->', "" == false); // true (mengejutkan!)

console.log("\nBandingkan dengan === (lebih aman & terprediksi):");
console.log('0 === "0" ->', 0 === "0");     // false
console.log('0 === "" ->', 0 === "");       // false
console.log("0 === false ->", 0 === false); // false


// ================================================
// Contoh 7: Studi Kasus - Bug Umum karena Coercion
// ================================================
console.log("\n--- Studi Kasus: Bug Input Form ---");
// Input dari form HTML SELALU berupa string, walaupun user mengetik angka!
let inputHarga1 = "50000"; // dari form
let inputHarga2 = "25000"; // dari form

// Bug: kalau lupa dikonversi, hasilnya SALAH karena jadi penggabungan string
let totalSalah = inputHarga1 + inputHarga2;
console.log("Tanpa konversi (SALAH):", totalSalah); // "5000025000" (string digabung!)

// Solusi: konversi dulu ke Number sebelum dijumlahkan
let totalBenar = Number(inputHarga1) + Number(inputHarga2);
console.log("Dengan konversi (BENAR):", totalBenar); // 75000 (number dijumlahkan)
