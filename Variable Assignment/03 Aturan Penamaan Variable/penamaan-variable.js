// ============================================
// 03. ATURAN PENAMAAN VARIABLE
// ============================================

// --- 1. Contoh nama variabel yang VALID ---
let nama1 = "Budi";
let _privat = "rahasia";
let $harga = 5000;

console.log(nama1, _privat, $harga);


// --- 2. Contoh yang TIDAK VALID (dinonaktifkan dengan komentar) ---
// let 1nama = "Budi";     // SyntaxError: tidak boleh diawali angka
// let nama-user = "Budi"; // SyntaxError: tanda hubung tidak diperbolehkan
// let let = "Budi";       // SyntaxError: "let" adalah reserved keyword


// --- 3. Case-sensitive: nama dan Nama adalah variabel BERBEDA ---
let nama = "huruf kecil semua";
let Nama = "huruf N besar";
console.log(nama); // huruf kecil semua
console.log(Nama); // huruf N besar


// --- 4. camelCase (disarankan) vs gaya lain ---
let namaLengkap = "Budi Santoso";      // camelCase - disarankan
let nama_lengkap = "Budi Santoso";     // snake_case - jarang dipakai di JS
let NamaLengkapPascal = "Budi Santoso"; // PascalCase - biasanya untuk Class

console.log(namaLengkap);


// --- 5. Nama deskriptif vs tidak jelas ---
// Kurang jelas
let x = 25;
let d = "2024-01-01";

// Lebih jelas
let umur = 25;
let tanggalLahir = "2024-01-01";

console.log("Umur:", umur, "| Tanggal lahir:", tanggalLahir);


// --- 6. Variabel boolean dengan awalan is/has/sudah/bisa ---
let isValid = true;
let hasAccess = false;
let sudahBayar = true;
let bisaEdit = false;

console.log({ isValid, hasAccess, sudahBayar, bisaEdit });


// --- 7. Konstanta global UPPER_SNAKE_CASE ---
const MAX_UPLOAD_SIZE = 5000000;
const API_BASE_URL = "https://api.example.com";

console.log("Max upload:", MAX_UPLOAD_SIZE, "bytes");
console.log("API URL:", API_BASE_URL);


// --- 8. Variabel loop dengan nama "i" (pengecualian umum) ---
for (let i = 0; i < 5; i++) {
  console.log("Iterasi ke-" + i);
}


// Coba sendiri:
// Coba buat variabel dengan nama yang melanggar aturan (misal diawali angka)
// untuk melihat error yang muncul di console/terminal.
