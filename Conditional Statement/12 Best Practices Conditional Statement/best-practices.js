// ============================================
// 12. BEST PRACTICES CONDITIONAL STATEMENT
// ============================================

// --- 1. Gunakan === bukan == ---
let nilai = 80;
if (nilai === 80) {
  console.log("Nilai tepat 80 (pakai ===)");
}


// --- 2. Selalu gunakan kurung kurawal { } ---
let umur = 20;
if (umur >= 18) {
  console.log("Dewasa");
  console.log("Boleh mendaftar");
}


// --- 3. Urutkan kondisi dari yang paling ketat ---
let skor = 95;
if (skor >= 90) {
  console.log("Grade A");
} else if (skor >= 60) {
  console.log("Grade B/C/D");
}


// --- 4. Guard clause, pengganti nested if yang dalam ---
function prosesUser(user) {
  if (!user) {
    console.log("User tidak ditemukan");
    return;
  }
  if (!user.aktif) {
    console.log("Akun tidak aktif");
    return;
  }
  if (user.role !== "admin") {
    console.log("Bukan admin, akses ditolak");
    return;
  }

  console.log("Akses diberikan untuk " + user.nama);
}

prosesUser({ nama: "Sinta", aktif: true, role: "admin" });
// Output: Akses diberikan untuk Sinta

prosesUser(null);
// Output: User tidak ditemukan


// --- 5. Nama variabel boolean yang jelas ---
let sudahLogin = true;
let hasAccess = true;

if (sudahLogin && hasAccess) {
  console.log("Selamat datang di dashboard");
}


// --- 6. Sederhanakan perbandingan boolean berlebihan ---
let isValid = true;

// Kurang disarankan
if (isValid === true) {
  console.log("(kurang disarankan) Data valid");
}

// Disarankan
if (isValid) {
  console.log("(disarankan) Data valid");
}


// --- 7. Ekstrak kondisi kompleks ke variabel bernama jelas ---
let umurPemilih = 20;
let punyaKTP = true;
let isBanned = false;
let statusAkun = "aktif";

let cukupUmur = umurPemilih >= 17;
let memenuhiSyarat = cukupUmur && punyaKTP && !isBanned && statusAkun === "aktif";

if (memenuhiSyarat) {
  console.log("Boleh mencoblos");
} else {
  console.log("Belum memenuhi syarat mencoblos");
}


// Coba sendiri:
// Refactor kode nested-if di file "05 Nested If Statement" menggunakan
// guard clause atau logical operator seperti contoh di atas!
