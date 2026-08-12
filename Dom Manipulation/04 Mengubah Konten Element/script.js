// ============================================
// 04. MENGUBAH KONTEN ELEMENT
// ============================================

const judul = document.querySelector("#judul");
const kotak = document.querySelector("#kotak");
const tersembunyi = document.querySelector(".tersembunyi");

// --- 1. textContent: membaca & mengubah teks murni ---
console.log("textContent judul:", judul.textContent);

// --- 2. innerText: menghormati tampilan CSS (elemen tersembunyi diabaikan) ---
console.log("textContent elemen tersembunyi:", tersembunyi.textContent); // tetap terbaca
console.log("innerText elemen tersembunyi:", tersembunyi.innerText); // string kosong, karena display:none


// --- 3. innerHTML: memproses tag HTML ---
console.log("innerHTML kotak (awal):", kotak.innerHTML);


// --- 4. Demo interaktif lewat tombol ---
const btnText = document.querySelector("#btn-text");
const btnHtml = document.querySelector("#btn-html");

btnText.addEventListener("click", function () {
  // textContent: tag HTML akan ditampilkan APA ADANYA sebagai teks
  kotak.textContent = "<strong>Ini tidak akan tebal</strong> (pakai textContent)";
});

btnHtml.addEventListener("click", function () {
  // innerHTML: tag HTML akan DIPROSES dan dirender
  kotak.innerHTML = "<strong>Ini akan tebal</strong> (pakai innerHTML)";
});


// --- 5. Peringatan keamanan innerHTML (contoh, TIDAK dijalankan) ---
// let inputUser = "<img src=x onerror=alert('Diretas!')>";
// elemen.innerHTML = inputUser; // BAHAYA jika inputUser dari user tanpa validasi!
console.log("Ingat: gunakan textContent untuk data dari user demi keamanan (hindari XSS)");


// Coba sendiri:
// Klik kedua tombol di halaman untuk melihat perbedaan hasil
// textContent vs innerHTML secara langsung.
