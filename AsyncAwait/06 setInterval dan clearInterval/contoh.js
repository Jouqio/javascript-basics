// ============================================================
// 06 - setInterval dan clearInterval
// ============================================================

// --- Contoh 1: hitung mundur berhenti otomatis ---
let detik = 0;
const idHitung = setInterval(() => {
  detik++;
  console.log(detik + " detik");
  if (detik === 5) {
    clearInterval(idHitung);
    console.log("Hitung mundur selesai");
  }
}, 1000);

// --- Latihan: timer mundur dari 3 ke 0 ---
let sisa = 3;
const idMundur = setInterval(() => {
  console.log(sisa);
  sisa--;
  if (sisa < 0) {
    clearInterval(idMundur);
    console.log("Waktu habis!");
  }
}, 1000);
