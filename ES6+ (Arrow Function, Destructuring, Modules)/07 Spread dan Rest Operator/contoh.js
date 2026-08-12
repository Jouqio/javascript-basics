// ============================================================
// 07 - Spread dan Rest Operator
// ============================================================

// --- Contoh 1: spread pada array ---
const buah = ["apel", "jeruk"];
const salinanBuah = [...buah];
salinanBuah.push("mangga");
console.log("buah asli:", buah);
console.log("salinan:", salinanBuah);

const sayur = ["bayam", "kangkung"];
const belanjaan = [...buah, ...sayur];
console.log("Gabungan:", belanjaan);

// --- Contoh 2: spread pada objek ---
const user = { nama: "Syauqi", umur: 20 };
const userLengkap = { ...user, kota: "Bontang" };
console.log("User lengkap:", userLengkap);

const userUlangTahun = { ...user, umur: 21 };
console.log("User asli:", user);
console.log("User ulang tahun:", userUlangTahun);

// --- Contoh 3: spread pada pemanggilan fungsi ---
function jumlahkanTiga(a, b, c) {
  return a + b + c;
}
const angkaArr = [10, 20, 30];
console.log("Jumlah:", jumlahkanTiga(...angkaArr));
console.log("Max:", Math.max(...[5, 12, 3, 9]));

// --- Contoh 4: rest operator ---
function jumlahkanSemua(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}
console.log("Jumlahkan semua:", jumlahkanSemua(1, 2, 3, 4, 5));

const [pertama, ...sisanya] = [1, 2, 3, 4, 5];
console.log("Pertama, sisanya:", pertama, sisanya);

const { nama, ...detailLain } = { nama: "Syauqi", umur: 20, kota: "Bontang" };
console.log("Nama, detail lain:", nama, detailLain);

// --- Latihan: gabungkanNama ---
function gabungkanNama(pemisah, ...nama) {
  return nama.join(pemisah);
}
console.log(gabungkanNama(", ", "Ani", "Budi", "Citra"));
