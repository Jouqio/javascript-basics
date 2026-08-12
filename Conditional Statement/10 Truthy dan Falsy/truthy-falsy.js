// ============================================
// 10. TRUTHY DAN FALSY
// ============================================

// --- 1. Ketujuh nilai FALSY ---
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false


// --- 2. Contoh nilai TRUTHY (sering mengecoh pemula) ---
console.log(Boolean("0"));   // true! string berisi karakter "0"
console.log(Boolean(" "));   // true! ada karakter spasi
console.log(Boolean([]));    // true! array kosong tetap truthy
console.log(Boolean({}));    // true! object kosong tetap truthy
console.log(Boolean(-1));    // true! hanya 0 yang falsy, negatif tetap truthy
console.log(Boolean("false")); // true! ini string, bukan boolean false


// --- 3. Penggunaan dalam if ---
let nama = "";

if (nama) {
  console.log("Halo, " + nama);
} else {
  console.log("Nama tidak boleh kosong");
}
// Output: Nama tidak boleh kosong


let daftarBelanja = [];

if (daftarBelanja.length) {
  console.log("Ada barang di keranjang");
} else {
  console.log("Keranjang masih kosong");
}
// Output: Keranjang masih kosong


// --- 4. Menyederhanakan validasi dengan truthy/falsy ---
let namaUser = "Budi";

// Cara panjang
if (namaUser !== "" && namaUser !== null && namaUser !== undefined) {
  console.log("(Cara panjang) Nama valid: " + namaUser);
}

// Cara singkat
if (namaUser) {
  console.log("(Cara singkat) Nama valid: " + namaUser);
}


// --- 5. Hati-hati: 0 sebagai nilai valid, bukan "kosong" ---
let jumlahBarang = 0; // stok memang habis, ini valid

// KURANG TEPAT
if (jumlahBarang) {
  console.log("Stok: " + jumlahBarang);
} else {
  console.log("(Kurang tepat) Data tidak valid"); // padahal stoknya memang 0
}

// LEBIH TEPAT: gunakan perbandingan eksplisit
if (jumlahBarang === 0) {
  console.log("(Lebih tepat) Stok habis");
} else if (jumlahBarang > 0) {
  console.log("(Lebih tepat) Stok: " + jumlahBarang);
} else {
  console.log("(Lebih tepat) Data tidak valid");
}


// Coba sendiri:
// Tebak dulu truthy/falsy dari nilai-nilai berikut, baru cocokkan hasilnya!
console.log(Boolean(NaN));      // ?
console.log(Boolean("Hello"));  // ?
console.log(Boolean(null));     // ?
console.log(Boolean(100));      // ?
