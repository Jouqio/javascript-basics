// ============================================
// 12. BEST PRACTICES VARIABLE
// ============================================

// --- 1. const sebagai default, let jika perlu berubah ---
const namaAplikasi = "TodoApp";
let jumlahTugas = 0;
jumlahTugas += 1;

console.log(namaAplikasi, jumlahTugas);


// --- 2. Nama variabel deskriptif ---
// Kurang jelas
let d = new Date();
let x = 17;

// Lebih jelas
let tanggalSekarang = new Date();
let umurMinimal = 17;

console.log(umurMinimal);


// --- 3. camelCase konsisten ---
let namaLengkap = "Budi Santoso";
let jumlahBarang = 5;
let isValid = true;

console.log(namaLengkap, jumlahBarang, isValid);


// --- 4. Satu variabel, satu tujuan ---
// Kurang baik (dikomentari agar tidak membingungkan output)
// let data = "Budi";
// data = 25;

// Lebih baik
let nama = "Budi";
let umur = 25;
console.log(nama, umur);


// --- 5. Hindari variabel global yang tidak perlu ---
function hitung() {
  let hasilSementara = 10 + 5; // lokal, hanya ada selama fungsi berjalan
  return hasilSementara;
}
console.log("Hasil hitung:", hitung());


// --- 6. Konversi tipe data secara eksplisit ---
let hargaInput = "15000";
let jumlahInput = "3";

let totalAman = Number(hargaInput) * Number(jumlahInput);
console.log("Total (konversi eksplisit):", totalAman);


// --- 7. Gunakan destructuring untuk kode ringkas ---
let user = { nama: "Sari", umur: 28 };
let { nama: namaUser, umur: umurUser } = user;
console.log(namaUser, umurUser);


// --- 8. Hindari magic number, gunakan konstanta bernama ---
const PAJAK_PPN = 0.11;
const UMUR_MINIMAL_KTP = 17;

let harga = 100000;
let totalHarga = harga + (harga * PAJAK_PPN);
console.log("Total dengan pajak:", totalHarga);

let umurCek = 20;
if (umurCek >= UMUR_MINIMAL_KTP) {
  console.log("Sudah bisa membuat KTP");
}


// --- 9. Hanya deklarasikan variabel yang dipakai ---
let namaDipakai = "Budi";
console.log(namaDipakai);
// (tidak ada variabel yang dideklarasikan tapi tidak dipakai di contoh ini)


// --- 10. Contoh gabungan: fungsi menghitung total belanja dengan best practices ---
const DISKON_MEMBER = 0.1;

function hitungTotalBelanja(hargaInput, jumlahInput, isMember) {
  const harga = Number(hargaInput);
  const jumlah = Number(jumlahInput);

  if (isNaN(harga) || isNaN(jumlah)) {
    return "Input tidak valid";
  }

  let total = harga * jumlah;

  if (isMember) {
    total -= total * DISKON_MEMBER;
  }

  return total;
}

console.log(hitungTotalBelanja("50000", "2", true));  // dengan diskon member
console.log(hitungTotalBelanja("50000", "2", false)); // tanpa diskon


// Coba sendiri:
// Refactor salah satu kode "kurang baik" yang pernah kamu tulis sebelumnya
// menggunakan tips-tips di atas.
