// ============================================================
// 04 - Arrow Function
// ============================================================

// --- Contoh 1: function biasa vs arrow function ---
function tambah(a, b) {
  return a + b;
}
const tambahArrow = (a, b) => {
  return a + b;
};
console.log(tambah(2, 3), tambahArrow(2, 3));

// --- Contoh 2: implicit return ---
const kaliSingkat = (a, b) => a * b;
console.log("Kali:", kaliSingkat(4, 5));

const kuadrat = n => n * n; // satu parameter, kurung boleh dihilangkan
console.log("Kuadrat:", kuadrat(6));

const sapaSemua = () => "Halo semuanya!";
console.log(sapaSemua());

// --- Contoh 3: arrow function sebagai callback ---
const angka = [1, 2, 3, 4, 5];
const kuadratSemua = angka.map((n) => n * n);
console.log("Kuadrat semua:", kuadratSemua);

const genap = angka.filter((n) => n % 2 === 0);
console.log("Angka genap:", genap);

// --- Contoh 4: lexical this pada arrow function ---
const timer = {
  detik: 0,
  tampilkanSekali: function () {
    // arrow function "meminjam" this dari tampilkanSekali()
    const tampilkan = () => {
      this.detik++;
      console.log("Detik:", this.detik);
    };
    tampilkan();
  },
};
timer.tampilkanSekali();
timer.tampilkanSekali();

// --- Latihan: konversi ke arrow function ---
const sapaFormal = (nama) => `Selamat datang, ${nama}!`;
console.log(sapaFormal("Syauqi"));
