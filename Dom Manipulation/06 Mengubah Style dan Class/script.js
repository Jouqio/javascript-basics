// ============================================
// 06. MENGUBAH STYLE DAN CLASS
// ============================================

const kotak = document.querySelector("#kotak");

// --- 1. Mengubah lewat properti style langsung ---
const btnStyleLangsung = document.querySelector("#btn-style-langsung");

btnStyleLangsung.addEventListener("click", function () {
  kotak.style.backgroundColor = "#f97316";
  kotak.style.color = "white";
  kotak.style.transform = "scale(1.05)";
  console.log("Style diubah langsung lewat .style");
});


// --- 2. Mengubah lewat classList (lebih disarankan) ---
const btnClass = document.querySelector("#btn-class");

btnClass.addEventListener("click", function () {
  kotak.classList.toggle("aktif");
  console.log("Class 'aktif' ada?", kotak.classList.contains("aktif"));
});


// --- 3. Style dinamis: progress bar ---
const progressBar = document.querySelector("#progress-bar");
const btnProgress = document.querySelector("#btn-progress");
let persentase = 0;

btnProgress.addEventListener("click", function () {
  persentase = Math.min(persentase + 10, 100);
  progressBar.style.width = persentase + "%";
  console.log("Progress:", persentase + "%");
});


// --- 4. Toggle dark mode ---
const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  console.log("Dark mode aktif?", document.body.classList.contains("dark"));
});


// Coba sendiri:
// Klik semua tombol di halaman untuk melihat perbedaan
// pendekatan style langsung vs classList.
