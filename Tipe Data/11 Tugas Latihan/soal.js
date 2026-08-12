// ====================================================================
// SOAL 1 — Number (Level: Mudah)
// Buat fungsi hitungLuasLingkaran(jariJari) -> luas = π × r × r
// Bulatkan 2 angka desimal dengan toFixed(2)
// ====================================================================

// TODO: Soal 1 - Tulis kode kamu di sini
function hitungLuasLingkaran(jariJari) {
  // ketik jawabanmu di sini
}

// Contoh cara memanggil (uncomment untuk mencoba):
// console.log("Soal 1 - Luas lingkaran (r=7):", hitungLuasLingkaran(7)); // harus "153.94"


// ====================================================================
// SOAL 2 — String (Level: Mudah)
// Buat fungsi formatNamaLengkap(namaDepan, namaBelakang)
// Hasil: huruf awal tiap kata KAPITAL, gunakan template literal
// Contoh: formatNamaLengkap("budi", "santoso") -> "Budi Santoso"
// ====================================================================

// TODO: Soal 2 - Tulis kode kamu di sini
function formatNamaLengkap(namaDepan, namaBelakang) {
  // ketik jawabanmu di sini
  // Petunjuk: gunakan .charAt(0).toUpperCase() + .slice(1)
}

// Contoh cara memanggil (uncomment untuk mencoba):
// console.log("Soal 2 -", formatNamaLengkap("budi", "santoso")); // "Budi Santoso"


// ====================================================================
// SOAL 3 — Boolean (Level: Mudah-Sedang)
// Buat fungsi bolehMasuk(umur, punyaTiket)
// true jika umur >= 17 DAN punyaTiket, selain itu false
// ====================================================================

// TODO: Soal 3 - Tulis kode kamu di sini
function bolehMasuk(umur, punyaTiket) {
  // ketik jawabanmu di sini
}

// Contoh cara memanggil (uncomment untuk mencoba):
// console.log("Soal 3 -", bolehMasuk(20, true));  // true
// console.log("Soal 3 -", bolehMasuk(15, true));  // false
// console.log("Soal 3 -", bolehMasuk(20, false)); // false


// ====================================================================
// SOAL 4 — Null vs Undefined (Level: Sedang)
// Buat fungsi cekStatusData(nilai) yang membedakan:
// undefined -> "Data belum diisi"
// null -> "Data sengaja dikosongkan"
// lainnya -> "Data terisi"
// ====================================================================

// TODO: Soal 4 - Tulis kode kamu di sini
function cekStatusData(nilai) {
  // ketik jawabanmu di sini
}

// Contoh cara memanggil (uncomment untuk mencoba):
// console.log("Soal 4 -", cekStatusData(undefined)); // "Data belum diisi"
// console.log("Soal 4 -", cekStatusData(null));       // "Data sengaja dikosongkan"
// console.log("Soal 4 -", cekStatusData("Halo"));     // "Data terisi"


// ====================================================================
// SOAL 5 — Array (Level: Sedang)
// nilaiUjian = [70, 85, 60, 90, 55, 78]
// 1. Filter nilai lulus (>= 70)
// 2. Map jadi predikat: >=90 "A", >=80 "B", sisanya "C"
// 3. Reduce untuk rata-rata nilai yang lulus
// ====================================================================

const nilaiUjian = [70, 85, 60, 90, 55, 78];

// TODO: Soal 5 - Tulis kode kamu di sini
// let nilaiLulus = ...
// let predikat = ...
// let rataRata = ...

// Contoh cara mencoba (uncomment setelah mengisi jawaban):
// console.log("Soal 5 - Nilai lulus:", nilaiLulus);
// console.log("Soal 5 - Predikat:", predikat);
// console.log("Soal 5 - Rata-rata:", rataRata);


// ====================================================================
// SOAL 6 — Object (Level: Sedang)
// Buat object produk dengan properti nama, harga, stok
// Buat method .info() yang mencetak:
// "Produk [nama] tersedia [stok] pcs dengan harga Rp[harga]"
// ====================================================================

// TODO: Soal 6 - Tulis kode kamu di sini
const produk = {
  // ketik jawabanmu di sini
};

// Contoh cara memanggil (uncomment untuk mencoba):
// produk.info(); // "Produk Laptop tersedia 10 pcs dengan harga Rp8500000"


// ====================================================================
// SOAL 7 — Type Conversion/Coercion (Level: Menantang)
// Input dari form SELALU string. Buat fungsi jumlahkanInput(input1, input2)
// yang mengembalikan hasil PENJUMLAHAN yang benar (bukan digabung string)
// ====================================================================

// TODO: Soal 7 - Tulis kode kamu di sini
function jumlahkanInput(input1, input2) {
  // ketik jawabanmu di sini
}

// Contoh cara memanggil (uncomment untuk mencoba):
// console.log("Soal 7 -", jumlahkanInput("120", "35")); // 155 (number, BUKAN "12035")


// ====================================================================
// SOAL 8 — typeof (Level: Menantang)
// Buat fungsi validasiUmur(nilai):
// - bukan number -> "Umur harus berupa angka"
// - number tapi negatif -> "Umur tidak boleh negatif"
// - valid -> "Umur valid: " + nilai
// ====================================================================

// TODO: Soal 8 - Tulis kode kamu di sini
function validasiUmur(nilai) {
  // ketik jawabanmu di sini
}

// Contoh cara memanggil (uncomment untuk mencoba):
// console.log("Soal 8 -", validasiUmur("20"));  // "Umur harus berupa angka"
// console.log("Soal 8 -", validasiUmur(-5));      // "Umur tidak boleh negatif"
// console.log("Soal 8 -", validasiUmur(20));      // "Umur valid: 20"

// Jalankan file ini dengan: node soal.js
