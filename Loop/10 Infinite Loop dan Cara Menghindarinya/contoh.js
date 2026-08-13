// ================================================
// PERINGATAN: File ini SENGAJA tidak menjalankan infinite loop
// sungguhan (supaya tidak membuat program hang).
// Contoh infinite loop yang berbahaya ditulis sebagai STRING/KOMENTAR saja.
// ================================================

// ================================================
// Contoh 1: Kode Infinite Loop (HANYA DITULISKAN, TIDAK DIJALANKAN)
// ================================================
console.log("--- Contoh Kode Infinite Loop (tidak dijalankan) ---");
console.log(`
// JANGAN DIJALANKAN - contoh kode yang salah:
let i = 0;
while (i < 5) {
  console.log(i);
  // lupa i++ -> INFINITE LOOP!
}
`);


// ================================================
// Contoh 2: Versi yang Diperbaiki (Aman Dijalankan)
// ================================================
console.log("--- Versi yang Sudah Diperbaiki ---");
let i = 0;
while (i < 5) {
  console.log(i);
  i++; // update ditambahkan, loop akan berhenti dengan benar
}


// ================================================
// Contoh 3: Kesalahan Arah Update (Hanya Ditampilkan sebagai Teks)
// ================================================
console.log("\n--- Kesalahan Arah Update (tidak dijalankan) ---");
console.log(`
// JANGAN DIJALANKAN:
let x = 10;
while (x > 0) {
  console.log(x);
  x++; // SALAH! seharusnya x--, ini malah membuat x makin besar
}
`);

console.log("Versi yang benar:");
let x = 10;
while (x > 0) {
  console.log(x);
  x--; // benar, x akan mengecil menuju 0
}


// ================================================
// Contoh 4: Kesalahan Assignment (=) vs Perbandingan (===)
// ================================================
console.log("\n--- Kesalahan = vs === (tidak dijalankan) ---");
console.log(`
// JANGAN DIJALANKAN:
let y = 0;
while (y = 5) { // SALAH! ini assignment, bukan perbandingan
  console.log(y);
  y++;
  // "y = 5" akan SELALU meng-assign 5 ke y, dan 5 dianggap truthy -> infinite loop
}
`);

console.log("Versi yang benar (pakai === ):");
let y = 0;
while (y === 0) {
  console.log("y masih 0, akan diubah sekarang");
  y = 1; // sengaja diubah supaya loop berhenti
}


// ================================================
// Contoh 5: Safety Limit - Batas Pengaman
// ================================================
console.log("\n--- Safety Limit ---");
function cariAngkaAcakTertentu(target) {
  let percobaan = 0;
  let maksimalPercobaan = 1000; // batas pengaman, mencegah infinite loop kalau ada bug
  let angka;

  do {
    angka = Math.floor(Math.random() * 10);
    percobaan++;
  } while (angka !== target && percobaan < maksimalPercobaan);

  if (angka === target) {
    console.log(`Ditemukan angka ${target} pada percobaan ke-${percobaan}`);
  } else {
    console.log(`Gagal menemukan angka ${target} setelah ${maksimalPercobaan} percobaan`);
  }
}
cariAngkaAcakTertentu(7);


// ================================================
// Contoh 6: while(true) yang Disengaja, TAPI ADA break
// ================================================
console.log("\n--- while(true) dengan break (aman) ---");
let daftarPerintah = ["mulai", "proses", "proses", "selesai"]; // simulasi input
let indexPerintah = 0;

while (true) {
  // sengaja infinite, TAPI ada break di dalamnya
  let perintah = daftarPerintah[indexPerintah];
  console.log("Menjalankan perintah:", perintah);
  indexPerintah++;

  if (perintah === "selesai" || indexPerintah >= daftarPerintah.length) {
    console.log("Berhenti karena kondisi break terpenuhi");
    break; // inilah yang mencegah ini jadi infinite loop SUNGGUHAN
  }
}


// ================================================
// Contoh 7: Menguji Loop dengan Data Kecil Dulu
// ================================================
console.log("\n--- Uji Loop dengan Data Kecil Dulu ---");
function prosesData(n) {
  let hasil = [];
  for (let angka = 1; angka <= n; angka++) {
    hasil.push(angka * angka);
  }
  return hasil;
}

// Uji dulu dengan angka kecil sebelum dipakai untuk data besar
console.log("Uji dengan n=5:", prosesData(5));
console.log("Setelah yakin logikanya benar, baru pakai untuk data lebih besar, misal n=1000...");
