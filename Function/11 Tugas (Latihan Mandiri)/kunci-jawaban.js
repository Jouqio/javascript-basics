/*
  ===============================================
  KUNCI JAWABAN - LATIHAN MANDIRI FUNCTION
  ===============================================
  Coba kerjakan latihan.js dulu secara mandiri sebelum melihat file ini!
  Jalankan dengan: node kunci-jawaban.js
*/

// ===== Soal 1 — Function Declaration =====
function hitungKeliling(panjang, lebar) {
  return 2 * (panjang + lebar);
}
console.log("Soal 1:", hitungKeliling(5, 3)); // 16


// ===== Soal 2 — Function Expression =====
const hitungDiskon = function (harga, persenDiskon) {
  return harga - (harga * persenDiskon / 100);
};
console.log("Soal 2:", hitungDiskon(100000, 10)); // 90000


// ===== Soal 3 — Arrow Function =====
const kuadrat = (n) => n * n;
console.log("Soal 3:", kuadrat(6)); // 36


// ===== Soal 4 — Higher Order Function =====
const siswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Ani", nilai: 60 },
  { nama: "Rina", nilai: 90 },
  { nama: "Dedi", nilai: 55 }
];

const siswaLulus = siswa.filter((s) => s.nilai >= 70);
const namaSiswaLulus = siswaLulus.map((s) => s.nama);
console.log("Soal 4:", namaSiswaLulus); // ["Budi", "Rina"]


// ===== Soal 5 — IIFE =====
const counterApp = (function () {
  let counter = 0;
  return {
    tambah: function () {
      counter++;
      return counter;
    },
    reset: function () {
      counter = 0;
      return counter;
    }
  };
})();

console.log("Soal 5:", counterApp.tambah()); // 1
console.log("Soal 5:", counterApp.tambah()); // 2
console.log("Soal 5:", counterApp.reset());  // 0


// ===== Soal 6 — Recursive Function =====
function hitungPangkat(basis, pangkat) {
  if (pangkat === 0) return 1; // base case
  return basis * hitungPangkat(basis, pangkat - 1); // recursive case
}
console.log("Soal 6:", hitungPangkat(2, 4)); // 16


// ===== Soal 7 — Generator Function =====
function* generatorGenap() {
  let angka = 2;
  while (true) {
    yield angka;
    angka += 2;
  }
}

const gen = generatorGenap();
const lima_genap_pertama = [];
for (let i = 0; i < 5; i++) {
  lima_genap_pertama.push(gen.next().value);
}
console.log("Soal 7:", lima_genap_pertama); // [2, 4, 6, 8, 10]


// ===== Soal 8 — Gabungan (Tantangan!) =====
function buatValidator(minPanjang) {
  return function (str) {
    return str.length >= minPanjang;
  };
}

const validatorPassword = buatValidator(8);
console.log("Soal 8a:", validatorPassword("12345"));       // false
console.log("Soal 8b:", validatorPassword("password123")); // true
