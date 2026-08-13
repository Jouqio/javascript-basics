// ================================================
// Contoh 1: Nested Loop Dasar
// ================================================
console.log("--- Nested Loop Dasar ---");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
console.log("Total iterasi: 3 x 2 = 6 kali");


// ================================================
// Contoh 2: Pola Piramida Bintang
// ================================================
console.log("\n--- Pola Piramida ---");
for (let baris = 1; baris <= 5; baris++) {
  let pola = "";
  for (let kolom = 1; kolom <= baris; kolom++) {
    pola += "*";
  }
  console.log(pola);
}


// ================================================
// Contoh 3: Pola Piramida Terbalik
// ================================================
console.log("\n--- Pola Piramida Terbalik ---");
for (let baris = 5; baris >= 1; baris--) {
  let pola = "";
  for (let kolom = 1; kolom <= baris; kolom++) {
    pola += "*";
  }
  console.log(pola);
}


// ================================================
// Contoh 4: Tabel Perkalian Grid
// ================================================
console.log("\n--- Tabel Perkalian Grid ---");
for (let i = 1; i <= 5; i++) {
  let baris = "";
  for (let j = 1; j <= 5; j++) {
    baris += `${i * j}\t`;
  }
  console.log(baris);
}


// ================================================
// Contoh 5: Data Bersarang - Daftar Kelas dan Siswa
// ================================================
console.log("\n--- Studi Kasus: Data Kelas Bersarang ---");
let kelas = [
  ["Andi", "Budi"],
  ["Citra", "Dedi", "Eka"],
  ["Fajar"],
];

for (let i = 0; i < kelas.length; i++) {
  console.log(`Kelas ${i + 1} (${kelas[i].length} siswa):`);
  for (let j = 0; j < kelas[i].length; j++) {
    console.log(`  - ${kelas[i][j]}`);
  }
}


// ================================================
// Contoh 6: Studi Kasus - Mencari Pasangan Duplikat
// ================================================
console.log("\n--- Studi Kasus: Mencari Duplikat ---");
let daftarAngka = [3, 5, 2, 5, 8, 3];
let duplikat = [];

for (let i = 0; i < daftarAngka.length; i++) {
  for (let j = i + 1; j < daftarAngka.length; j++) {
    if (daftarAngka[i] === daftarAngka[j] && !duplikat.includes(daftarAngka[i])) {
      duplikat.push(daftarAngka[i]);
    }
  }
}
console.log("Daftar angka:", daftarAngka);
console.log("Angka duplikat:", duplikat); // [3, 5]


// ================================================
// Contoh 7: Papan Catur Sederhana (Pola X dan O)
// ================================================
console.log("\n--- Studi Kasus: Papan Catur ---");
for (let baris = 0; baris < 4; baris++) {
  let barisPapan = "";
  for (let kolom = 0; kolom < 4; kolom++) {
    barisPapan += (baris + kolom) % 2 === 0 ? "X " : "O ";
  }
  console.log(barisPapan);
}
