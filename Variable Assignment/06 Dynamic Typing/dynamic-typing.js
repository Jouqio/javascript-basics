// ============================================
// 06. DYNAMIC TYPING
// ============================================

// --- 1. Variabel yang berganti tipe data ---
let data = "Halo";
console.log(data, "->", typeof data); // string

data = 100;
console.log(data, "->", typeof data); // number

data = true;
console.log(data, "->", typeof data); // boolean


// --- 2. Contoh masalah: fungsi tambah dengan tipe data campur ---
function tambah(a, b) {
  return a + b;
}

console.log(tambah(5, 3));      // 8, sesuai harapan
console.log(tambah("5", "3"));  // "53", string digabung, bukan dijumlahkan
console.log(tambah(5, "3"));    // "53", tercampur, hasil tak terduga


// --- 3. Contoh nyata: input dari form (selalu string) ---
let umurInput = "25"; // seolah-olah dari input HTML form

console.log(umurInput + 5); // "255", BUKAN 30! karena digabung sebagai teks

// Solusi: konversi dulu ke number
let umurAngka = Number(umurInput);
console.log(umurAngka + 5); // 30, benar


// --- 4. Cara menghindari masalah: konsisten dengan satu tipe ---
// Kurang baik
let hasilCampur = 10;
hasilCampur = "sepuluh"; // membingungkan

// Lebih baik: pakai variabel terpisah sesuai kebutuhannya
let hasilAngka = 10;
let hasilTeks = "sepuluh";

console.log(hasilAngka, typeof hasilAngka);
console.log(hasilTeks, typeof hasilTeks);


// --- 5. Demonstrasi validasi sebelum operasi matematika ---
function hitungTotal(harga, jumlah) {
  // Pastikan kedua parameter benar-benar number sebelum dikalikan
  const hargaAngka = Number(harga);
  const jumlahAngka = Number(jumlah);

  if (isNaN(hargaAngka) || isNaN(jumlahAngka)) {
    return "Input tidak valid";
  }

  return hargaAngka * jumlahAngka;
}

console.log(hitungTotal(15000, 3));     // 45000
console.log(hitungTotal("15000", "3")); // 45000 (tetap benar karena dikonversi dulu)
console.log(hitungTotal("abc", 3));     // "Input tidak valid"


// Coba sendiri:
// Ubah nilai "data" beberapa kali dengan tipe berbeda,
// lalu cek hasil typeof-nya setiap kali.
