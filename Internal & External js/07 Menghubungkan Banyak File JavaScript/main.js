// ============================================
// main.js -- logic utama, MEMAKAI fungsi dari utils.js
// File ini harus dimuat SETELAH utils.js
// ============================================

console.log(sapaUser("Syauqi")); // fungsi ini datang dari utils.js
console.log("Luas 5x3:", hitungLuasPersegiPanjang(5, 3)); // ini juga dari utils.js

// Kalau file ini dijalankan TANPA utils.js dimuat duluan,
// akan muncul error: "sapaUser is not defined"
//
// Catatan: kalau dites lewat "node main.js" langsung (tanpa utils.js),
// akan error juga -- karena Node membaca file ini SENDIRIAN, sama
// seperti browser yang belum memuat utils.js. Coba buka contoh.html
// untuk melihat cara menghubungkan keduanya dengan benar.
