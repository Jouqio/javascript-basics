// ================================================
// Contoh 1: Symbol - Selalu Menghasilkan Nilai Unik
// ================================================
console.log("--- Symbol ---");
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log("id1:", id1.toString());
console.log("id2:", id2.toString());
console.log("id1 === id2 ?", id1 === id2); // false, walaupun deskripsinya sama!


// ================================================
// Contoh 2: Symbol sebagai Key Object yang Aman
// ================================================
console.log("\n--- Symbol sebagai Key ---");
const idUnik = Symbol("userId");

let user = {
  nama: "Budi",
  [idUnik]: 12345, // key berupa Symbol
};

console.log(user);
console.log("Akses via variabel Symbol:", user[idUnik]); // 12345

// Symbol TIDAK muncul di Object.keys() biasa, ini salah satu keunikannya
console.log("Object.keys(user):", Object.keys(user)); // hanya ["nama"], idUnik tidak muncul


// ================================================
// Contoh 3: Masalah Presisi pada Number Biasa
// ================================================
console.log("\n--- Masalah Presisi Number ---");
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log("9007199254740991 + 1 =", 9007199254740991 + 1); // benar: 9007199254740992
console.log("9007199254740991 + 2 =", 9007199254740991 + 2); // SALAH! seharusnya +993, tapi hasilnya sama seperti +1


// ================================================
// Contoh 4: BigInt - Solusi untuk Angka Sangat Besar
// ================================================
console.log("\n--- BigInt ---");
let angkaBesar = 9007199254740993n; // huruf 'n' di akhir = BigInt
console.log("angkaBesar:", angkaBesar);
console.log("angkaBesar + 1n =", angkaBesar + 1n); // tetap presisi!

console.log("typeof angkaBesar:", typeof angkaBesar); // "bigint"


// ================================================
// Contoh 5: BigInt Tidak Bisa Dicampur dengan Number
// ================================================
console.log("\n--- BigInt tidak bisa dicampur Number ---");
try {
  console.log(10n + 5); // ini akan ERROR
} catch (error) {
  console.log("Error terjadi:", error.message);
}

console.log("10n + 5n =", 10n + 5n); // 15n, ini yang BENAR (sama-sama BigInt)

// Kalau perlu mencampur, konversi dulu salah satunya
console.log("Number(10n) + 5 =", Number(10n) + 5); // 15 (konversi BigInt jadi Number dulu)
