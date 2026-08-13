// ============================================
// 02. OBJECT LITERAL
// ============================================

// --- 1. Membuat object literal ---
const buku = {
  judul: "Laskar Pelangi",
  penulis: "Andrea Hirata",
  tahunTerbit: 2005,
  halaman: 529
};

console.log(buku.judul);
console.log(buku.penulis);


// --- 2. Dot notation vs bracket notation ---
console.log(buku["judul"]); // sama seperti buku.judul

let namaProperti = "penulis";
console.log(buku[namaProperti]); // Andrea Hirata, memakai variabel


// --- 3. Mengubah dan menambah properti ---
buku.tahunTerbit = 2010;
buku.penerbit = "Bentang Pustaka";
console.log(buku);


// --- 4. Menghapus properti ---
delete buku.halaman;
console.log(buku);


// --- 5. Method di dalam object literal ---
const kalkulator = {
  hasil: 0,
  tambah(angka) {
    this.hasil += angka;
    return this.hasil;
  },
  reset() {
    this.hasil = 0;
  }
};

console.log(kalkulator.tambah(5));  // 5
console.log(kalkulator.tambah(10)); // 15
kalkulator.reset();
console.log(kalkulator.hasil); // 0


// --- 6. "this" di dalam method ---
const orang = {
  nama: "Budi",
  sapa() {
    console.log("Halo, nama saya " + this.nama);
  }
};

orang.sapa(); // Halo, nama saya Budi


// --- 7. Perbandingan: method biasa vs arrow function (this berbeda!) ---
const orangSalah = {
  nama: "Budi",
  sapa: () => {
    // "this" di sini TIDAK merujuk ke orangSalah
    console.log("Arrow function - this.nama:", this.nama); // undefined
  }
};

orangSalah.sapa();


// --- 8. Shorthand property ---
let nama = "Sari";
let umur = 28;

const user1 = { nama: nama, umur: umur }; // cara lama
const user2 = { nama, umur };             // shorthand, hasil sama

console.log(user1);
console.log(user2);


// --- 9. Nested object ---
const mahasiswa = {
  nama: "Rina",
  alamat: {
    kota: "Bandung",
    kodePos: "40123"
  }
};

console.log(mahasiswa.alamat.kota); // Bandung
console.log(mahasiswa.alamat.kodePos); // 40123


// Coba sendiri:
// Buat object literal "produk" dengan properti (nama, harga, stok)
// dan method "jual(jumlah)" yang mengurangi stok saat dipanggil.
