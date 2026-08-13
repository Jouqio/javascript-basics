// ============================================
// 08. HOISTING
// ============================================

// --- 1. Hoisting pada var ---
console.log("var sebelum deklarasi:", nama); // undefined, bukan error
var nama = "Budi";
console.log("var setelah deklarasi:", nama); // Budi


// --- 2. Hoisting pada let (Temporal Dead Zone) ---
try {
  console.log(umur); // akan ReferenceError
} catch (error) {
  console.log("Error akses let sebelum deklarasi:", error.message);
}
let umur = 25;
console.log("let setelah deklarasi:", umur);


// --- 3. Hoisting pada const (Temporal Dead Zone) ---
try {
  console.log(skor); // akan ReferenceError
} catch (error) {
  console.log("Error akses const sebelum deklarasi:", error.message);
}
const skor = 100;
console.log("const setelah deklarasi:", skor);


// --- 4. Hoisting pada Function Declaration ---
sapa(); // bisa dipanggil SEBELUM deklarasi karena function declaration di-hoisting penuh

function sapa() {
  console.log("Halo! (dipanggil sebelum deklarasi tertulis di kode)");
}


// --- 5. Function Expression TIDAK bisa dipanggil sebelum deklarasi ---
try {
  sapaLagi(); // akan error
} catch (error) {
  console.log("Error memanggil function expression sebelum deklarasi:", error.message);
}

const sapaLagi = function () {
  console.log("Halo lagi!");
};

sapaLagi(); // ini baru bisa dipanggil, SETELAH deklarasi


// --- 6. Praktik yang baik: deklarasikan dulu, baru gunakan ---
let total = 100; // deklarasi + inisialisasi dulu
console.log("Total (setelah dideklarasikan dengan benar):", total);


// Coba sendiri:
// Hapus try-catch di atas dan jalankan ulang untuk melihat
// bagaimana ReferenceError sebenarnya muncul di console/terminal.
