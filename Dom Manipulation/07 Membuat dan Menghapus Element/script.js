// ============================================
// 07. MEMBUAT DAN MENGHAPUS ELEMENT
// ============================================

const daftar = document.querySelector("#daftar");
const input = document.querySelector("#input-item");
const tombolTambah = document.querySelector("#btn-tambah");

// --- 1. Membuat elemen baru dan menambahkannya ---
tombolTambah.addEventListener("click", function () {
  tambahItem();
});

// Bonus UX: bisa tekan Enter juga
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    tambahItem();
  }
});

function tambahItem() {
  const teks = input.value.trim();
  if (teks === "") {
    console.log("Input kosong, item tidak ditambahkan");
    return;
  }

  // createElement -> isi konten -> appendChild
  const liBaru = document.createElement("li");
  liBaru.textContent = teks;

  // pasang event listener hapus untuk item baru ini juga
  liBaru.addEventListener("click", function () {
    liBaru.remove();
    console.log("Item dihapus:", teks);
  });

  daftar.appendChild(liBaru);
  console.log("Item ditambahkan:", teks);

  input.value = ""; // kosongkan input
}


// --- 2. Memasang event hapus untuk item yang SUDAH ada di HTML awal ---
const itemAwal = document.querySelectorAll("#daftar li");
itemAwal.forEach(function (item) {
  item.addEventListener("click", function () {
    item.remove();
    console.log("Item awal dihapus:", item.textContent);
  });
});


// --- 3. Contoh insertAdjacentHTML ---
// daftar.insertAdjacentHTML("afterbegin", "<li>Item disisipkan di awal</li>");
// (baris di atas dinonaktifkan agar tidak otomatis menambah saat halaman dimuat,
//  hapus tanda komentar untuk mencobanya)


// Coba sendiri:
// - Ketik item baru di input, lalu klik "Tambah" atau tekan Enter
// - Klik salah satu item di daftar untuk menghapusnya
