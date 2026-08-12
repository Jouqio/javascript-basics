// ============================================
// 11. BEST PRACTICES DOM MANIPULATION
// ============================================

// --- 1. Cache elemen ke variabel ---
const kotak = document.querySelector("#kotak"); // query sekali saja
kotak.style.color = "white"; // pakai variabel, bukan query ulang


// --- 2. style manual vs classList ---
const btnStyleBuruk = document.querySelector("#btn-style-buruk");
const btnStyleBaik = document.querySelector("#btn-style-baik");

btnStyleBuruk.addEventListener("click", function () {
  // Cara kurang disarankan: banyak baris style manual
  kotak.style.color = "#facc15";
  kotak.style.fontWeight = "bold";
  kotak.style.textDecoration = "underline";
  console.log("Style diubah manual satu-satu");
});

btnStyleBaik.addEventListener("click", function () {
  // Cara lebih disarankan: cukup toggle class yang sudah didefinisikan di CSS
  kotak.classList.toggle("teks-peringatan");
  console.log("Style diubah lewat classList (lebih rapi)");
});


// --- 3. Perbandingan render: innerHTML += di loop (buruk) vs sekali di akhir (baik) ---
const hasil = document.querySelector("#hasil");
const waktuRender = document.querySelector("#waktu-render");
const btnRenderBuruk = document.querySelector("#btn-render-buruk");
const btnRenderBaik = document.querySelector("#btn-render-baik");

btnRenderBuruk.addEventListener("click", function () {
  hasil.innerHTML = "";
  const mulai = performance.now();

  // KURANG EFISIEN: innerHTML di-parse ulang setiap iterasi
  for (let i = 1; i <= 50; i++) {
    hasil.innerHTML += "<p>Baris ke-" + i + " (cara kurang efisien)</p>";
  }

  const selesai = performance.now();
  waktuRender.textContent = "Waktu render (kurang efisien): " + (selesai - mulai).toFixed(3) + " ms";
  console.log("Render kurang efisien selesai dalam", (selesai - mulai).toFixed(3), "ms");
});

btnRenderBaik.addEventListener("click", function () {
  const mulai = performance.now();

  // LEBIH EFISIEN: bangun string dulu, baru assign SEKALI ke innerHTML
  let html = "";
  for (let i = 1; i <= 50; i++) {
    html += "<p>Baris ke-" + i + " (cara lebih efisien)</p>";
  }
  hasil.innerHTML = html;

  const selesai = performance.now();
  waktuRender.textContent = "Waktu render (lebih efisien): " + (selesai - mulai).toFixed(3) + " ms";
  console.log("Render lebih efisien selesai dalam", (selesai - mulai).toFixed(3), "ms");
});


// --- 4. Selalu cek elemen sebelum digunakan ---
const elemenMungkinTakAda = document.querySelector("#tidak-ada-di-html");
if (elemenMungkinTakAda) {
  elemenMungkinTakAda.textContent = "Ditemukan!";
} else {
  console.log("Elemen #tidak-ada-di-html memang tidak ada, dan kita cek dulu supaya tidak error");
}


// Coba sendiri:
// Klik kedua tombol render dan bandingkan waktu render di antara
// keduanya (biasanya perbedaannya lebih terasa jika jumlah baris lebih banyak, misal 1000+).
