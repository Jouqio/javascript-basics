// ================================================
// Contoh 1: typeof untuk Berbagai Tipe Data Primitif
// ================================================
console.log("--- typeof Tipe Data Primitif ---");
console.log("typeof 123 ->", typeof 123);           // "number"
console.log('typeof "halo" ->', typeof "halo");       // "string"
console.log("typeof true ->", typeof true);          // "boolean"
console.log("typeof undefined ->", typeof undefined); // "undefined"
console.log("typeof null ->", typeof null);           // "object" (bug historis!)
console.log('typeof Symbol("id") ->', typeof Symbol("id")); // "symbol"
console.log("typeof 10n ->", typeof 10n);              // "bigint"


// ================================================
// Contoh 2: typeof untuk Tipe Data Non-Primitif
// ================================================
console.log("\n--- typeof Tipe Data Non-Primitif ---");
console.log("typeof [1,2,3] ->", typeof [1, 2, 3]);   // "object"
console.log('typeof {a:1} ->', typeof { a: 1 });       // "object"
console.log("typeof function(){} ->", typeof function () {}); // "function"


// ================================================
// Contoh 3: Validasi Input dengan typeof
// ================================================
console.log("\n--- Validasi Input ---");
function tambahAngka(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("❌ Input harus berupa angka!");
    return undefined;
  }
  return a + b;
}

console.log("tambahAngka(5, 3) =", tambahAngka(5, 3));       // 8
console.log('tambahAngka("5", 3) =', tambahAngka("5", 3));   // Input harus berupa angka!


// ================================================
// Contoh 4: Membedakan Array dari Object dengan Array.isArray()
// ================================================
console.log("\n--- Array.isArray() ---");
let arr = [1, 2, 3];
let obj = { a: 1 };

console.log("typeof arr ->", typeof arr); // "object" (tidak cukup jelas)
console.log("typeof obj ->", typeof obj); // "object"

console.log("Array.isArray(arr) ->", Array.isArray(arr)); // true
console.log("Array.isArray(obj) ->", Array.isArray(obj)); // false


// ================================================
// Contoh 5: Mengecek null dengan Benar
// ================================================
console.log("\n--- Mengecek null ---");
let data = null;
console.log("typeof data === 'object' ->", typeof data === "object"); // true, TAPI ini bukan cara yang tepat
console.log("data === null ->", data === null); // true, INI cara yang BENAR


// ================================================
// Contoh 6: Studi Kasus - Fungsi Cek Tipe Data Universal
// ================================================
console.log("\n--- Studi Kasus: Cek Tipe Data Universal ---");
function cekTipeData(nilai) {
  if (nilai === null) return "null";
  if (Array.isArray(nilai)) return "array";
  return typeof nilai;
}

console.log(cekTipeData(123));        // "number"
console.log(cekTipeData("halo"));     // "string"
console.log(cekTipeData(null));       // "null" (sekarang benar!)
console.log(cekTipeData([1, 2, 3]));  // "array" (sekarang benar!)
console.log(cekTipeData({ a: 1 }));   // "object"
console.log(cekTipeData(undefined)); // "undefined"
