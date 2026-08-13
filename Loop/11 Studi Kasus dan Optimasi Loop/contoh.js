// ================================================
// Studi Kasus 1: Sistem Absensi Sederhana
// ================================================
console.log("=== Studi Kasus 1: Sistem Absensi ===");
let absensi = [
  { nama: "Andi", hadir: true },
  { nama: "Budi", hadir: false },
  { nama: "Citra", hadir: true },
  { nama: "Dedi", hadir: true },
  { nama: "Eka", hadir: false },
];

// Menghitung total hadir dengan for biasa
let totalHadir = 0;
for (let i = 0; i < absensi.length; i++) {
  if (absensi[i].hadir) {
    totalHadir++;
  }
}
console.log("Total hadir (pakai for):", totalHadir);

// Cara modern: filter + length
let siswaTidakHadir = absensi.filter((s) => !s.hadir).map((s) => s.nama);
console.log("Siswa tidak hadir:", siswaTidakHadir);

let persentaseHadir = (totalHadir / absensi.length) * 100;
console.log(`Persentase hadir: ${persentaseHadir.toFixed(1)}%`);


// ================================================
// Studi Kasus 2: Validasi Form Bertingkat dengan Early Exit
// ================================================
console.log("\n=== Studi Kasus 2: Validasi Form ===");
let dataForm = [
  { field: "nama", nilai: "Andi" },
  { field: "email", nilai: "" }, // ini akan gagal validasi
  { field: "umur", nilai: 20 },
];

let formValid = true;
let pesanError = "";

for (let item of dataForm) {
  if (item.nilai === "" || item.nilai === null || item.nilai === undefined) {
    formValid = false;
    pesanError = `Field "${item.field}" tidak boleh kosong`;
    break; // langsung berhenti begitu ketemu error, tidak perlu cek sisanya
  }
}

console.log("Form valid?", formValid);
if (!formValid) {
  console.log("Error:", pesanError);
}


// ================================================
// Studi Kasus 3: Generate Laporan dari Data Transaksi
// ================================================
console.log("\n=== Studi Kasus 3: Laporan Transaksi ===");
let transaksi = [
  { id: 1, produk: "Laptop", kategori: "Elektronik", total: 8000000 },
  { id: 2, produk: "Buku Tulis", kategori: "ATK", total: 15000 },
  { id: 3, produk: "Mouse", kategori: "Elektronik", total: 150000 },
  { id: 4, produk: "Pulpen", kategori: "ATK", total: 5000 },
  { id: 5, produk: "Keyboard", kategori: "Elektronik", total: 300000 },
];

// Total penjualan kategori Elektronik saja
let totalElektronik = transaksi
  .filter((t) => t.kategori === "Elektronik")
  .reduce((total, t) => total + t.total, 0);
console.log("Total penjualan Elektronik: Rp" + totalElektronik.toLocaleString("id-ID"));

// Daftar nama produk yang harganya di atas Rp100.000
let produkMahal = transaksi.filter((t) => t.total > 100000).map((t) => t.produk);
console.log("Produk di atas Rp100.000:", produkMahal);

// Mengelompokkan total per kategori (menggunakan reduce untuk object)
let totalPerKategori = transaksi.reduce((hasil, t) => {
  hasil[t.kategori] = (hasil[t.kategori] || 0) + t.total;
  return hasil;
}, {});
console.log("Total per kategori:", totalPerKategori);


// ================================================
// Studi Kasus 4: Pencarian Efisien dengan Early Exit
// ================================================
console.log("\n=== Studi Kasus 4: Pencarian Efisien ===");
let dataBesar = [];
for (let i = 1; i <= 100000; i++) {
  dataBesar.push(i);
}

// Tanpa early exit (memproses SEMUA data walaupun sudah ketemu)
console.time("Tanpa break");
let hasilTanpaBreak = null;
for (let i = 0; i < dataBesar.length; i++) {
  if (dataBesar[i] === 50) {
    hasilTanpaBreak = dataBesar[i];
    // sengaja TIDAK break, untuk demonstrasi
  }
}
console.timeEnd("Tanpa break");

// Dengan early exit (berhenti begitu ketemu)
console.time("Dengan break");
let hasilDenganBreak = null;
for (let i = 0; i < dataBesar.length; i++) {
  if (dataBesar[i] === 50) {
    hasilDenganBreak = dataBesar[i];
    break; // langsung berhenti
  }
}
console.timeEnd("Dengan break");

console.log("Hasil ditemukan:", hasilDenganBreak);
console.log("(Perhatikan: versi 'Dengan break' jauh lebih cepat karena tidak memproses 99.950 data sisanya)");


// ================================================
// Studi Kasus 5: Kombinasi Nested Loop dengan Optimasi
// ================================================
console.log("\n=== Studi Kasus 5: Mencari Pasangan Angka dengan Total Tertentu ===");
function cariPasangan(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]]; // langsung return begitu ketemu, hemat proses
      }
    }
  }
  return null;
}

let daftarAngka = [2, 7, 11, 15, 3, 5];
let target = 9;
console.log(`Mencari pasangan angka yang jumlahnya ${target}:`, cariPasangan(daftarAngka, target));
