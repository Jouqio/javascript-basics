// ============================================
// 05. NESTED IF STATEMENT
// ============================================

// Contoh 1: Cek syarat mencoblos (umur + KTP)
let umur = 20;
let punyaKTP = true;

if (umur >= 17) {
  if (punyaKTP) {
    console.log("Kamu boleh mencoblos");
  } else {
    console.log("Kamu perlu membuat KTP dulu");
  }
} else {
  console.log("Umur belum cukup untuk mencoblos");
}
// Output: Kamu boleh mencoblos


// Contoh 2: Cek login lalu cek role
let sudahLogin = true;
let role = "admin";

if (sudahLogin) {
  if (role === "admin") {
    console.log("Selamat datang, Admin!");
  } else {
    console.log("Selamat datang, User!");
  }
} else {
  console.log("Silakan login terlebih dahulu");
}
// Output: Selamat datang, Admin!


// Contoh 3: Nested if untuk cek kelulusan + nilai kehadiran
let nilaiAkhir = 80;
let kehadiran = 90; // dalam persen

if (nilaiAkhir >= 60) {
  if (kehadiran >= 75) {
    console.log("LULUS");
  } else {
    console.log("TIDAK LULUS (kehadiran kurang)");
  }
} else {
  console.log("TIDAK LULUS (nilai kurang)");
}
// Output: LULUS


// Contoh 4: Nested if yang terlalu dalam (contoh yang KURANG baik)
let a = true, b = true, c = true;

if (a) {
  if (b) {
    if (c) {
      console.log("Semua kondisi terpenuhi (versi nested)");
    }
  }
}

// Versi lebih baik menggunakan logical operator && (lihat materi 08)
if (a && b && c) {
  console.log("Semua kondisi terpenuhi (versi ringkas)");
}


// Coba sendiri:
// Ubah nilai "umur", "punyaKTP", "sudahLogin", "role", "nilaiAkhir",
// atau "kehadiran" untuk melihat hasil yang berbeda.
