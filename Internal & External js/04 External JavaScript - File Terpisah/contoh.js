// ============================================
// CONTOH: External JavaScript
// File ini dihubungkan dari contoh.html lewat:
//   <script src="contoh.js"></script>
// Buka contoh.html di browser untuk melihatnya bekerja --
// file ini butuh DOM (document), jadi TIDAK bisa dijalankan
// langsung pakai node, harus lewat contoh.html di browser.
// ============================================

console.log("File contoh.js berhasil dimuat dan dijalankan");

document.getElementById("output").textContent =
  "Teks ini diubah oleh file JavaScript EXTERNAL (contoh.js).";

document.getElementById("tombolSapa").addEventListener("click", function () {
  let nama = prompt("Siapa nama kamu?");
  if (nama) {
    alert("Halo, " + nama + "! Salam dari file external.");
  }
});
