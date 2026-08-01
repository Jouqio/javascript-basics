/**
 * TODO:
 * 1. Buatlah variabel bernama `companyName` menggunakan `const` yang menyimpan nilai string
 *    nama sebuah perusahaan, misalnya 'Dicoding Indonesia'.
 *
 * 2. Buatlah variabel bernama `employeeCount` menggunakan `let` yang menyimpan nilai number,
 *    misalnya 25.
 *
 * 3. Ubahlah nilai `employeeCount` menjadi 30 (bukan membuat variabel baru, tapi meng-assign
 *    ulang nilainya).
 *
 * 4. Buatlah sebuah function bernama `printCompanyInfo` yang di dalamnya terdapat variabel
 *    bernama `name` (nilai bebas, misalnya 'PT Maju Jaya'). Cetak nilainya dengan console.log.
 *
 * 5. Buatlah sebuah function lain bernama `printEmployeeInfo` yang di dalamnya juga terdapat
 *    variabel bernama `name` (nilai bebas, misalnya 'Budi'). Cetak nilainya dengan console.log.
 *    Pastikan program tidak error meskipun kedua function memiliki variabel dengan nama yang sama.
 *
 * 6. Perhatikan potongan kode berikut. Tentukan mana saja yang penamaan variabelnya SALAH,
 *    lalu perbaiki agar valid sesuai aturan penamaan variabel di JavaScript:
 *
 *    const first-name = 'Fulan';
 *    const 1stAddress = 'Jakarta';
 *    const last name = 'Lestari';
 *    const $price = 15000;
 *    const _isActive = true;
 *    const @email = 'fulan@mail.com';
 *
 * 7. Panggil kedua function `printCompanyInfo` dan `printEmployeeInfo` yang sudah dibuat
 *    pada soal No. 4 dan No. 5.
 */

// 1. const untuk nilai yang tidak akan berubah
const companyName = "Dicoding Indonesia";

// 2. let untuk nilai yang bisa berubah
let employeeCount = 25;

// 3. Re-assign nilai employeeCount
employeeCount = 30;

// 4. Function pertama dengan variabel `name`
function printCompanyInfo() {
  const name = "PT Maju Jaya";
  console.log("Company name:", name);
}

// 5. Function kedua dengan variabel `name` yang sama (scope berbeda, jadi valid)
function printEmployeeInfo() {
  const name = "Budi";
  console.log("Employee name:", name);
}

// 6. Perbaikan penamaan variabel yang salah
// SALAH -> const first-name = 'Fulan';        (mengandung karakter -)
// BENAR:
const firstName = "Fulan";

// SALAH -> const 1stAddress = 'Jakarta';      (diawali angka)
// BENAR:
const firstAddress = "Jakarta";

// SALAH -> const last name = 'Lestari';       (mengandung spasi)
// BENAR:
const lastName = "Lestari";

// BENAR (tidak perlu diubah, sudah valid):
const $price = 15000;
const _isActive = true;

// SALAH -> const @email = 'fulan@mail.com';   (mengandung karakter @ di nama variabel)
// BENAR:
const email = "fulan@mail.com";

// 7. Memanggil kedua function
printCompanyInfo(); // Output: Company name: PT Maju Jaya
printEmployeeInfo(); // Output: Employee name: Budi
