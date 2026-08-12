// ============================================================
// 05 - JavaScript clearTimeout()
// ============================================================

// --- Contoh 1: membatalkan timer ---
const timerId = setTimeout(() => {
  console.log("Ini tidak akan pernah tampil");
}, 5000);
clearTimeout(timerId);
console.log("Timer sudah dibatalkan");

// --- Contoh 2: pola debounce sederhana ---
let debounceId;
function saatMengetik(kataKunci) {
  clearTimeout(debounceId);
  debounceId = setTimeout(() => {
    console.log("Mencari:", kataKunci);
  }, 500);
}
saatMengetik("j");
saatMengetik("ja");
saatMengetik("jav"); // hanya ini yang akhirnya tercetak setelah 500ms
