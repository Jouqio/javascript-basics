// ================================================
// Contoh 1: Nilai Boolean Dasar
// ================================================
let sudahLogin = true;
let sudahBayar = false;
console.log("Sudah login?", sudahLogin);
console.log("Sudah bayar?", sudahBayar);
console.log("Tipe data:", typeof sudahLogin);


// ================================================
// Contoh 2: Operator Perbandingan
// ================================================
console.log("\n--- Operator Perbandingan ---");
console.log("5 === 5 ->", 5 === 5);   // true
console.log("5 === '5' ->", 5 === "5"); // false (beda tipe data, angka vs string)
console.log("5 !== 3 ->", 5 !== 3);   // true
console.log("5 > 3 ->", 5 > 3);       // true
console.log("5 < 3 ->", 5 < 3);       // false
console.log("5 >= 5 ->", 5 >= 5);     // true


// ================================================
// Contoh 3: Operator Logika
// ================================================
console.log("\n--- Operator Logika ---");
let punyaKTP = true;
let umurCukup = true;
console.log("punyaKTP && umurCukup ->", punyaKTP && umurCukup); // true

let adaDiskon = false;
let adaVoucher = true;
console.log("adaDiskon || adaVoucher ->", adaDiskon || adaVoucher); // true

console.log("!punyaKTP ->", !punyaKTP); // false


// ================================================
// Contoh 4: Boolean dalam Kondisi (if)
// ================================================
console.log("\n--- Boolean dalam if ---");
let umur = 20;
let sudahDewasa = umur >= 18;

if (sudahDewasa) {
  console.log("Boleh mendaftar (umur", umur, ")");
} else {
  console.log("Belum boleh mendaftar");
}


// ================================================
// Contoh 5: Truthy dan Falsy
// ================================================
console.log("\n--- Truthy dan Falsy ---");

// 6 nilai FALSY (dianggap false di dalam konteks boolean)
const nilaiFalsy = [false, 0, "", null, undefined, NaN];
console.log("Nilai-nilai FALSY:");
nilaiFalsy.forEach((nilai) => {
  console.log(`  ${JSON.stringify(nilai)} -> Boolean(${JSON.stringify(nilai)}) = ${Boolean(nilai)}`);
});

// Contoh nilai yang SERING DIKIRA falsy, padahal sebenarnya TRUTHY
console.log("\nNilai yang sering dikira falsy (padahal TRUTHY):");
console.log(`  "0" (string) -> ${Boolean("0")}`);       // true!
console.log(`  "false" (string) -> ${Boolean("false")}`); // true!
console.log(`  [] (array kosong) -> ${Boolean([])}`);    // true!
console.log(`  {} (object kosong) -> ${Boolean({})}`);   // true!


// ================================================
// Contoh 6: Studi Kasus - Validasi Form Sederhana
// ================================================
console.log("\n--- Studi Kasus: Validasi Form ---");
function validasiForm(nama, email, umur) {
  const namaValid = nama !== "" && nama !== undefined;
  const emailValid = email.includes("@");
  const umurValid = umur >= 17;

  return namaValid && emailValid && umurValid;
}

console.log(validasiForm("Andi", "andi@email.com", 20)); // true
console.log(validasiForm("", "andi@email.com", 20));      // false (nama kosong)
console.log(validasiForm("Budi", "budi-email.com", 20));  // false (email tidak valid)
console.log(validasiForm("Citra", "citra@email.com", 15)); // false (umur kurang)
