// ============================================
// 03. DOM TRAVERSAL
// ============================================

// --- 1. Mengakses Parent ---
const target = document.querySelector(".target");
console.log("Parent dari .target:", target.parentElement);


// --- 2. Mengakses Children ---
const parent = document.querySelector(".parent");
console.log("Semua children:", parent.children);
console.log("Anak pertama:", parent.firstElementChild.textContent);
console.log("Anak terakhir:", parent.lastElementChild.textContent);
console.log("Jumlah anak:", parent.childElementCount);


// --- 3. Mengakses Sibling ---
console.log("Sibling sebelumnya:", target.previousElementSibling.textContent);
console.log("Sibling setelahnya:", target.nextElementSibling.textContent);


// --- 4. children vs childNodes ---
console.log("children (hanya elemen HTML):", parent.children.length);
console.log("childNodes (termasuk teks/whitespace):", parent.childNodes.length);


// --- 5. Contoh praktis: hapus item lewat traversal ---
const tombolHapus = document.querySelectorAll(".btn-hapus");

tombolHapus.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    // "this" adalah tombol yang diklik
    // parentElement-nya adalah <li> yang ingin dihapus
    this.parentElement.remove();
    console.log("Item berhasil dihapus");
  });
});


// Coba sendiri:
// Klik tombol "Hapus" di halaman untuk melihat traversal
// (this.parentElement) bekerja menghapus item yang benar.
