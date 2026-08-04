import { makeCoffee } from "./coffee.mjs";

console.log("Saya memesan kopi di kafe.");

makeCoffee();

console.log("Pramusaji memberikan kopi pesanan.");
console.log("Saya mendapatkan kopi dan menghabiskannya.");

// Pada proses **asynchronous**, kode yang membutuhkan waktu (misalnya `setTimeout`) tidak menghentikan 
// eksekusi program. Akibatnya, kode setelahnya tetap dijalankan terlebih dahulu meskipun proses sebelumnya 
// belum selesai.

// Contohnya, saat kopi masih dibuat, program sudah menjalankan perintah "kopi diberikan" dan "kopi diminum". 
// Setelah waktu tunggu selesai, barulah muncul pesan **"Pramusaji selesai membuat kopi."**

// Intinya, **asynchronous bersifat non-blocking**, sehingga proses lain dapat berjalan sambil menunggu 
// proses yang lebih lama selesai.
