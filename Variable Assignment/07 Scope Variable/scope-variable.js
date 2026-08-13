// ============================================
// 07. SCOPE VARIABLE
// ============================================

// --- 1. Global Scope ---
let namaGlobal = "Saya global";

function tampilkan() {
  console.log("Diakses dari dalam fungsi:", namaGlobal);
}

tampilkan();
console.log("Diakses dari luar:", namaGlobal);


// --- 2. Function Scope ---
function contoh() {
  let namaLokal = "Saya lokal";
  console.log("Di dalam fungsi:", namaLokal);
}

contoh();
try {
  console.log(namaLokal); // akan ReferenceError
} catch (error) {
  console.log("Error akses namaLokal di luar fungsi:", error.message);
}


// --- 3. Block Scope (let/const) ---
if (true) {
  let pesan = "Halo dari dalam blok if";
  console.log("Di dalam blok if:", pesan);
}

try {
  console.log(pesan); // akan ReferenceError
} catch (error) {
  console.log("Error akses pesan di luar blok:", error.message);
}


// --- 4. Perbandingan var vs let dalam hal block scope ---
if (true) {
  var pakaiVar = "saya var";
  let pakaiLet = "saya let";
}

console.log("pakaiVar di luar blok (var bocor):", pakaiVar); // bisa diakses

try {
  console.log(pakaiLet); // akan ReferenceError
} catch (error) {
  console.log("Error akses pakaiLet di luar blok:", error.message);
}


// --- 5. Nested scope (scope bersarang) ---
let luar = "Saya di luar";

function fungsiLuar() {
  let tengah = "Saya di tengah";

  function fungsiDalam() {
    let dalam = "Saya di dalam";

    console.log(luar);  // bisa akses (scope luar)
    console.log(tengah); // bisa akses (scope tengah)
    console.log(dalam);  // bisa akses (scope sendiri)
  }

  fungsiDalam();
}

fungsiLuar();


// --- 6. Variable shadowing ---
let warna = "merah";

function tampilkanWarna() {
  let warna = "biru"; // shadowing, hanya berlaku di dalam fungsi ini
  console.log("Warna di dalam fungsi:", warna); // biru
}

tampilkanWarna();
console.log("Warna di luar fungsi:", warna); // merah, tidak berubah


// Coba sendiri:
// Coba deklarasikan variabel baru di dalam sebuah blok if/for,
// lalu coba akses di luar blok tersebut untuk melihat error-nya sendiri.
