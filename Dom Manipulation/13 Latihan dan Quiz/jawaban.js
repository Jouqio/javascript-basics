// ============================================
// 13. KUNCI JAWABAN LATIHAN CODING
// Buka lewat jawaban-index.html untuk mencoba
// ============================================

// ---------- JAWABAN SOAL 1 ----------
const kotakSoal1 = document.querySelector("#kotak-soal1");

kotakSoal1.addEventListener("click", function () {
  kotakSoal1.classList.toggle("biru");
});


// ---------- JAWABAN SOAL 2 ----------
const inputSoal2 = document.querySelector("#input-soal2");
const counterSoal2 = document.querySelector("#counter-soal2");

inputSoal2.addEventListener("input", function () {
  counterSoal2.textContent = inputSoal2.value.length + " karakter";
});


// ---------- JAWABAN SOAL 3 & 4 ----------
const inputSoal3 = document.querySelector("#input-soal3");
const btnSoal3 = document.querySelector("#btn-soal3");
const daftarSoal3 = document.querySelector("#daftar-soal3");

btnSoal3.addEventListener("click", function () {
  const teks = inputSoal3.value.trim();
  if (teks === "") return;

  const li = document.createElement("li");
  li.innerHTML = `<span>${teks}</span><button class="btn-hapus-kecil">Hapus</button>`;
  daftarSoal3.appendChild(li);

  inputSoal3.value = "";
});

// Event delegation: satu listener di <ul>, bekerja untuk semua item termasuk yang baru
daftarSoal3.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-hapus-kecil")) {
    event.target.closest("li").remove();
  }
});


// ---------- JAWABAN SOAL 5 ----------
const formSoal5 = document.querySelector("#form-soal5");
const namaSoal5 = document.querySelector("#nama-soal5");
const umurSoal5 = document.querySelector("#umur-soal5");
const errorSoal5 = document.querySelector("#error-soal5");

formSoal5.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = namaSoal5.value.trim();
  const umur = Number(umurSoal5.value);

  if (nama === "") {
    errorSoal5.textContent = "Nama tidak boleh kosong";
    errorSoal5.style.color = "#f87171";
    return;
  }

  if (isNaN(umur) || umur < 17) {
    errorSoal5.textContent = "Umur harus diisi angka dan minimal 17";
    errorSoal5.style.color = "#f87171";
    return;
  }

  errorSoal5.textContent = "Form valid! Nama: " + nama + ", Umur: " + umur;
  errorSoal5.style.color = "#22c55e";
});


// ---------- JAWABAN SOAL 6 (BONUS) ----------
const passwordSoal6 = document.querySelector("#password-soal6");
const btnToggleSoal6 = document.querySelector("#btn-toggle-soal6");

btnToggleSoal6.addEventListener("click", function () {
  const tipeSaatIni = passwordSoal6.getAttribute("type");

  if (tipeSaatIni === "password") {
    passwordSoal6.setAttribute("type", "text");
    btnToggleSoal6.textContent = "🙈 Sembunyikan";
  } else {
    passwordSoal6.setAttribute("type", "password");
    btnToggleSoal6.textContent = "👁 Tampilkan";
  }
});
