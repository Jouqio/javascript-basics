// ============================================================
// 02 - Sejarah Modularisasi JavaScript
// ============================================================

// --- Contoh 1: IIFE dasar ---
(function () {
  var pesanRahasia = "Ini tidak bisa diakses dari luar";
  function bantu() {
    return pesanRahasia;
  }
  console.log("IIFE:", bantu());
})();

// --- Contoh 2: Module Pattern ---
var KalkulatorModule = (function () {
  let riwayat = [];

  function catatRiwayat(operasi) {
    riwayat.push(operasi);
  }

  return {
    tambah: function (a, b) {
      const hasil = a + b;
      catatRiwayat(`${a} + ${b} = ${hasil}`);
      return hasil;
    },
    lihatRiwayat: function () {
      return riwayat;
    },
  };
})();

console.log("Hasil tambah:", KalkulatorModule.tambah(2, 3));
console.log("Riwayat:", KalkulatorModule.lihatRiwayat());
console.log("Akses langsung riwayat (harus undefined):", KalkulatorModule.riwayat);

// --- Latihan: buat module pattern sederhana untuk penghitung (counter) ---
var CounterModule = (function () {
  let hitung = 0;
  return {
    tambah() {
      hitung++;
      return hitung;
    },
    reset() {
      hitung = 0;
    },
  };
})();
console.log("\nCounter:", CounterModule.tambah(), CounterModule.tambah(), CounterModule.tambah());
CounterModule.reset();
console.log("Setelah reset:", CounterModule.tambah());
