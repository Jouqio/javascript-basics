// ============================================
// 09. EVENT HANDLING LANJUTAN
// ============================================

// --- 1. Event Bubbling ---
document.querySelector("#luar").addEventListener("click", function () {
  console.log("Luar diklik");
});
document.querySelector("#tengah").addEventListener("click", function () {
  console.log("Tengah diklik");
});
document.querySelector("#dalam").addEventListener("click", function (event) {
  console.log("Dalam diklik");
  // Coba nonaktifkan baris berikut untuk melihat perbedaan bubbling:
  // event.stopPropagation();
});


// --- 2. preventDefault pada form ---
const form = document.querySelector("#form-daftar");
const pesanForm = document.querySelector("#pesan-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // mencegah reload halaman
  const nama = document.querySelector("#nama-daftar").value;
  pesanForm.textContent = "Terima kasih sudah daftar, " + nama + "! (halaman tidak reload)";
  console.log("Form disubmit tanpa reload halaman. Nama:", nama);
});


// --- 3. Event Delegation ---
const daftar = document.querySelector("#daftar");
const btnTambahItem = document.querySelector("#btn-tambah-item");
let jumlahItem = 2;

// Satu listener saja di parent #daftar, bekerja untuk SEMUA item,
// termasuk item yang ditambahkan belakangan
daftar.addEventListener("click", function (event) {
  if (event.target.classList.contains("item")) {
    console.log("Item diklik (via delegation):", event.target.textContent);
    event.target.style.textDecoration = "line-through";
  }
});

btnTambahItem.addEventListener("click", function () {
  jumlahItem++;
  const liBaru = document.createElement("li");
  liBaru.classList.add("item");
  liBaru.textContent = "Item baru " + jumlahItem;
  daftar.appendChild(liBaru);
  console.log("Item baru ditambahkan, coba klik item ini juga!");
});


// Coba sendiri:
// 1. Klik tombol "Dalam" dan lihat urutan bubbling di console
// 2. Submit form dan lihat halaman TIDAK reload
// 3. Tambah item baru, lalu klik item tersebut - delegation tetap bekerja!
