// ================================================
// Contoh 1: Destructuring Dasar
// ================================================
console.log("--- Destructuring Dasar ---");
let user = { nama: "Andi", umur: 20, kota: "Bontang" };

// Cara lama
let namaLama = user.nama;
let umurLama = user.umur;
console.log("Cara lama:", namaLama, umurLama);

// Cara modern
let { nama, umur } = user;
console.log("Cara modern:", nama, umur);


// ================================================
// Contoh 2: Mengganti Nama Variabel (Aliasing)
// ================================================
console.log("\n--- Aliasing ---");
let { nama: namaUser, umur: umurUser } = user;
console.log("namaUser:", namaUser);
console.log("umurUser:", umurUser);


// ================================================
// Contoh 3: Nilai Default
// ================================================
console.log("\n--- Nilai Default ---");
let userTanpaKota = { nama: "Budi" };
let { nama: nm, kota = "Tidak diketahui" } = userTanpaKota;
console.log("nama:", nm);
console.log("kota (default):", kota);


// ================================================
// Contoh 4: Destructuring Object Bersarang
// ================================================
console.log("\n--- Destructuring Nested ---");
let siswa = {
  nama: "Rina",
  alamat: { kota: "Bontang", provinsi: "Kalimantan Timur" },
};

let {
  nama: namaSiswa,
  alamat: { kota: kotaSiswa, provinsi },
} = siswa;

console.log("Nama:", namaSiswa);
console.log("Kota:", kotaSiswa);
console.log("Provinsi:", provinsi);


// ================================================
// Contoh 5: Destructuring pada Parameter Fungsi
// ================================================
console.log("\n--- Destructuring di Parameter Fungsi ---");

// Cara lama
function tampilkanProfilLama(user) {
  console.log(`${user.nama} berumur ${user.umur} tahun`);
}
tampilkanProfilLama({ nama: "Wati", umur: 22 });

// Cara modern
function tampilkanProfilBaru({ nama, umur }) {
  console.log(`${nama} berumur ${umur} tahun`);
}
tampilkanProfilBaru({ nama: "Doni", umur: 21 });


// ================================================
// Contoh 6: Rest Pattern
// ================================================
console.log("\n--- Rest Pattern ---");
let produk = { nama: "Laptop", harga: 8000000, stok: 5, kategori: "elektronik" };

let { nama: namaProduk, ...sisanya } = produk;
console.log("namaProduk:", namaProduk);
console.log("sisanya:", sisanya);


// ================================================
// Contoh 7: Studi Kasus - Fungsi Format Data User dengan Destructuring
// ================================================
console.log("\n--- Studi Kasus: Format Data User ---");
function formatDataUser({ nama, email, umur = "Tidak diketahui", alamat: { kota } = {} }) {
  return `Nama: ${nama} | Email: ${email} | Umur: ${umur} | Kota: ${kota || "Tidak diketahui"}`;
}

console.log(
  formatDataUser({
    nama: "Fajar",
    email: "fajar@email.com",
    umur: 24,
    alamat: { kota: "Balikpapan" },
  })
);

console.log(
  formatDataUser({
    nama: "Gita",
    email: "gita@email.com",
    // umur dan alamat sengaja tidak diisi, akan pakai default
  })
);
