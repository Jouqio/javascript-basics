// ============================================
// 06. SWITCH CASE
// ============================================

// Contoh 1: Nama hari berdasarkan angka
let hari = 3;

switch (hari) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  default:
    console.log("Akhir pekan");
}
// Output: Rabu


// Contoh 2: Kesalahan umum - lupa break (fall-through tidak disengaja)
let hariKedua = 2;

console.log("--- Contoh lupa break (SALAH) ---");
switch (hariKedua) {
  case 1:
    console.log("Senin");
  case 2:
    console.log("Selasa");   // ini dijalankan
  case 3:
    console.log("Rabu");     // ikut dijalankan juga (bug!)
  default:
    console.log("Hari tidak dikenali");
}
// Output: Selasa, Rabu, Hari tidak dikenali (SEHARUSNYA hanya "Selasa")


// Contoh 3: Versi benar dengan break
console.log("--- Versi benar (pakai break) ---");
switch (hariKedua) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  default:
    console.log("Hari tidak dikenali");
}
// Output: Selasa


// Contoh 4: Fall-through yang DISENGAJA (mengelompokkan case)
let bulan = 2;
let tahun = 2024;
let jumlahHari;

switch (bulan) {
  case 1: case 3: case 5: case 7:
  case 8: case 10: case 12:
    jumlahHari = 31;
    break;
  case 4: case 6: case 9: case 11:
    jumlahHari = 30;
    break;
  case 2:
    jumlahHari = (tahun % 4 === 0) ? 29 : 28;
    break;
  default:
    jumlahHari = "Bulan tidak valid";
}

console.log("Jumlah hari di bulan " + bulan + " tahun " + tahun + ":", jumlahHari);
// Output: Jumlah hari di bulan 2 tahun 2024: 29


// Contoh 5: Switch dengan nilai string
let buah = "apel";

switch (buah) {
  case "apel":
    console.log("Harga: Rp 15.000/kg");
    break;
  case "jeruk":
    console.log("Harga: Rp 12.000/kg");
    break;
  default:
    console.log("Buah tidak tersedia");
}
// Output: Harga: Rp 15.000/kg


// Coba sendiri:
// Ubah nilai "hari", "bulan", atau "buah" untuk melihat hasil berbeda.
