// ============================================
// CONTOH: alert()
// alert() adalah fungsi bawaan BROWSER, bukan Node.js.
// Cara menjalankan: buka Console browser manapun (tekan F12),
// lalu copy-paste kode di bawah ini, atau ketik satu per satu.
// ============================================

// 1. Alert sederhana
alert("Selamat datang di JavaScript!");

// 2. Alert dengan isi dari variabel
let pesan = "Ini pesan yang disimpan di variabel dulu";
alert(pesan);

// 3. Membuktikan alert() itu blocking — perhatikan urutan yang muncul
console.log("1. Sebelum alert dipanggil");
alert("Program berhenti di sini sampai kamu klik OK");
console.log("2. Baris ini baru jalan SETELAH alert ditutup");

// 4. Return value alert() — selalu undefined, gak ada info berguna
let hasil = alert("Coba lihat return value-nya di console");
console.log("Return value dari alert():", hasil); // undefined

// 5. alert() dipakai buat kasih tau hasil sebuah proses
let totalBelanja = 25000 + 15000;
alert("Total belanja kamu: Rp" + totalBelanja);
