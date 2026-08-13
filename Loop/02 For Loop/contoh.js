// ================================================
// Contoh 1: For Loop Dasar
// ================================================
console.log("--- For Loop Dasar ---");
for (let i = 0; i < 5; i++) {
  console.log(i);
}


// ================================================
// Contoh 2: Looping Mundur (Descending)
// ================================================
console.log("\n--- Looping Mundur ---");
for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log("Meluncur! 🚀");


// ================================================
// Contoh 3: Loncat Beberapa Angka (Step)
// ================================================
console.log("\n--- Loncat Angka (Step 2) ---");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}


// ================================================
// Contoh 4: Looping pada Array
// ================================================
console.log("\n--- Looping Array ---");
let buah = ["Apel", "Jeruk", "Mangga"];
for (let i = 0; i < buah.length; i++) {
  console.log(`Index ${i}: ${buah[i]}`);
}


// ================================================
// Contoh 5: Kesalahan Umum - Off-by-One Error
// ================================================
console.log("\n--- Kesalahan: Off-by-One Error ---");
console.log("Versi SALAH (pakai <=):");
for (let i = 0; i <= buah.length; i++) {
  console.log(`Index ${i}:`, buah[i]); // index 3 akan undefined!
}

console.log("\nVersi BENAR (pakai <):");
for (let i = 0; i < buah.length; i++) {
  console.log(`Index ${i}:`, buah[i]);
}


// ================================================
// Contoh 6: Studi Kasus - Tabel Perkalian
// ================================================
console.log("\n--- Studi Kasus: Tabel Perkalian 5 ---");
let angka = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${angka} x ${i} = ${angka * i}`);
}


// ================================================
// Contoh 7: Studi Kasus - Menghitung Faktorial
// ================================================
console.log("\n--- Studi Kasus: Faktorial ---");
function hitungFaktorial(n) {
  let hasil = 1;
  for (let i = 1; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
}
console.log("5! =", hitungFaktorial(5)); // 120
console.log("7! =", hitungFaktorial(7)); // 5040


// ================================================
// Contoh 8: Studi Kasus - Mencari Bilangan Genap dalam Rentang
// ================================================
console.log("\n--- Studi Kasus: Bilangan Genap ---");
let bilanganGenap = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    bilanganGenap.push(i);
  }
}
console.log("Bilangan genap 1-20:", bilanganGenap);
