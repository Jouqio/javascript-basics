// ============================================
// CONTOH: Inline JavaScript (versi "logic"-nya)
// File ini cuma buat perbandingan -- inline JS SEBENARNYA
// ditulis di dalam HTML, bukan di file .js terpisah.
// Buka contoh.html di browser buat lihat versi aslinya.
// ============================================

// Ini logic yang ada di tombol 4 pada contoh.html, kalau dipisah
// jadi fungsi biasa:
function kalikanDua() {
  let x = prompt("Masukkan angka:");
  let hasil = Number(x) * 2;
  alert("Hasil dikali 2: " + hasil);
}

// Perhatikan bedanya dibanding versi inline di contoh.html:
// - Di sini, logic-nya punya NAMA FUNGSI yang jelas (kalikanDua)
// - Gampang dibaca, gampang dites, gampang dipakai ulang di tombol lain
// - Ini salah satu alasan kenapa Internal/External JS jauh lebih
//   disarankan dibanding nulis semuanya di dalam atribut onclick

// Jalankan di Console browser (F12) buat coba, ketik: kalikanDua();
