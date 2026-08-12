// ============================================
// 01. PENGANTAR DOM
// ============================================

// document adalah objek utama untuk mengakses DOM
console.log("Objek document:", document);

// Mengambil judul halaman (dari tag <title>)
console.log("Judul halaman:", document.title);

// Mengambil elemen body
console.log("Elemen body:", document.body);

// Mengambil seluruh elemen html
console.log("Elemen html (root):", document.documentElement);

// Melihat URL halaman saat ini
console.log("URL halaman:", document.URL);

// Mencoba membaca salah satu elemen di halaman
const judul = document.querySelector("h1");
console.log("Elemen <h1> pertama yang ditemukan:", judul);
console.log("Isi teks <h1>:", judul.textContent);

// Coba sendiri:
// Buka DevTools -> Console, lalu ketik "document" dan tekan Enter
// untuk mengeksplorasi seluruh struktur DOM halaman ini secara interaktif.
