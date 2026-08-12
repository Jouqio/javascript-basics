// ============================================
// 08. EVENT HANDLING DASAR
// ============================================

// --- 1. Event click ---
const tombol = document.querySelector("#btn-klik");

tombol.addEventListener("click", function (event) {
  console.log("Tombol diklik!");
  console.log("event.type:", event.type);
  console.log("event.target:", event.target);

  // "this" di function biasa merujuk ke elemen pemicu event
  this.textContent = "Terima kasih sudah klik!";
});


// --- 2. Event mouseover / mouseout ---
const hoverBox = document.querySelector("#hover-box");

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.background = "#334155";
  console.log("Mouse masuk ke kotak");
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.background = "#1e293b";
  console.log("Mouse keluar dari kotak");
});


// --- 3. Event input (real-time / live preview) ---
const inputNama = document.querySelector("#input-nama");
const hasil = document.querySelector("#hasil");

inputNama.addEventListener("input", function (event) {
  hasil.textContent = "Halo, " + (event.target.value || "...");
});


// --- 4. Event keydown ---
const tombolDitekan = document.querySelector("#tombol-ditekan");

document.addEventListener("keydown", function (event) {
  tombolDitekan.textContent = event.key;
  console.log("Tombol ditekan:", event.key);

  if (event.key === "Enter") {
    console.log("Enter ditekan!");
  }
});


// --- 5. Menambah & menghapus event listener ---
function handleClickSekali() {
  console.log("Fungsi ini bisa dihapus dari event listener");
  tombol.removeEventListener("click", handleClickSekali);
  console.log("Event listener handleClickSekali sudah dihapus");
}

tombol.addEventListener("click", handleClickSekali);


// Coba sendiri:
// - Klik tombol, arahkan mouse ke kotak, ketik di input,
//   dan tekan tombol keyboard apapun untuk melihat event-event ini bekerja.
