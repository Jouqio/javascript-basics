// ============================================
// 11. SHORT CIRCUIT EVALUATION
// ============================================

// --- 1. Cara kerja && ---
console.log(false && "Halo");  // false (B tidak perlu dievaluasi)
console.log(true && "Halo");   // "Halo" (A truthy, jadi B dikembalikan)
console.log(0 && "Halo");      // 0 (short circuit, karena 0 falsy)


// --- 2. Cara kerja || ---
console.log(true || "Halo");   // true (short circuit, B diabaikan)
console.log(false || "Halo");  // "Halo" (A falsy, jadi B dikembalikan)
console.log("" || "Default");  // "Default" ("" falsy)


// --- 3. Kegunaan praktis: nilai default dengan || ---
function sapa(nama) {
  let namaFinal = nama || "Tamu";
  console.log("Halo, " + namaFinal + "!");
}

sapa("Rina"); // Halo, Rina!
sapa("");     // Halo, Tamu!
sapa();       // Halo, Tamu! (parameter tidak diisi = undefined)


// --- 4. Kegunaan praktis: guard clause dengan && ---
let sudahLogin = true;

// Cara if biasa
if (sudahLogin) {
  console.log("(if) Selamat datang!");
}

// Cara short circuit (setara, lebih ringkas)
sudahLogin && console.log("(short circuit) Selamat datang!");

let belumLogin = false;
belumLogin && console.log("Ini TIDAK akan pernah tercetak");


// --- 5. Kegunaan praktis: menghindari error saat data mungkin kosong ---
let user = null;

// Tanpa short circuit, ini akan ERROR:
// console.log(user.nama); // Uncaught TypeError: Cannot read properties of null

// Dengan short circuit, aman karena `user &&` berhenti duluan
console.log(user && user.nama); // null (tidak error)

let user2 = { nama: "Dina" };
console.log(user2 && user2.nama); // Dina


// --- 6. Menggabungkan beberapa nilai default berantai ---
let inputUser = "";
let namaDariProfil = null;
let namaFinal = inputUser || namaDariProfil || "Pengguna Anonim";
console.log(namaFinal); // Pengguna Anonim


// Coba sendiri:
// Ubah nilai "sudahLogin", "user", atau rantai "namaFinal" di atas
// untuk melihat bagaimana short circuit bekerja pada tiap kasus.
