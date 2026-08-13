// ============================================
// 04. TIPE DATA PRIMITIF
// ============================================

// --- 1. String ---
let nama = "Budi";
let kalimat = 'Ini juga string';
let templateString = `Halo, ${nama}!`;

console.log(nama, "->", typeof nama);
console.log(templateString);


// --- 2. Number ---
let umur = 25;
let harga = 15000.50;
let negatif = -10;

console.log(umur, "->", typeof umur);
console.log(harga, "->", typeof harga);


// --- 3. Boolean ---
let sudahLogin = true;
let sudahBayar = false;

console.log(sudahLogin, "->", typeof sudahLogin);


// --- 4. Undefined ---
let alamat;
console.log(alamat, "->", typeof alamat);


// --- 5. Null ---
let dataUser = null;
console.log(dataUser, "->", typeof dataUser); // "object" (quirk JavaScript)


// --- 6. BigInt (jarang dipakai pemula) ---
let angkaBesar = 123456789012345678901234567890n;
console.log(angkaBesar, "->", typeof angkaBesar);


// --- 7. Symbol (jarang dipakai pemula) ---
let id = Symbol("id");
console.log(id, "->", typeof id);


// --- 8. Perbedaan undefined vs null ---
let a; // otomatis undefined
let b = null; // sengaja diisi null

console.log("a (undefined):", a);
console.log("b (null):", b);


// --- 9. typeof untuk berbagai nilai ---
console.log(typeof "Halo");       // string
console.log(typeof 25);           // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (bug lama JS)
console.log(typeof {});           // object
console.log(typeof []);           // object (array juga dianggap object)
console.log(typeof function(){}); // function


// --- 10. Primitif disalin sebagai NILAI, object disalin sebagai REFERENSI ---
let x = 5;
let y = x; // y menyalin NILAI dari x
y = 10;
console.log("x tetap:", x); // 5, x tidak ikut berubah
console.log("y berubah:", y); // 10

let obj1 = { angka: 5 };
let obj2 = obj1; // obj2 menyalin REFERENSI ke obj1
obj2.angka = 10;
console.log("obj1 ikut berubah:", obj1.angka); // 10, karena keduanya menunjuk objek yang sama


// Coba sendiri:
// Ubah nilai variabel di atas dan cek hasil typeof-nya masing-masing.
