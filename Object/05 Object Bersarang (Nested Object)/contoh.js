// ================================================
// Contoh 1: Object Bersarang Dasar
// ================================================
console.log("--- Object Bersarang ---");
let siswa = {
  nama: "Rina",
  alamat: {
    jalan: "Jl. Merdeka No. 10",
    kota: "Bontang",
    provinsi: "Kalimantan Timur",
  },
  nilai: {
    matematika: 85,
    bahasaInggris: 90,
  },
};

console.log(siswa);
console.log("Kota:", siswa.alamat.kota);           // "Bontang"
console.log("Nilai Matematika:", siswa.nilai.matematika); // 85


// ================================================
// Contoh 2: Object Bersarang dengan Array
// ================================================
console.log("\n--- Object dengan Array ---");
let andi = {
  nama: "Andi",
  hobi: ["membaca", "coding", "futsal"],
  temanDekat: [
    { nama: "Budi", umur: 21 },
    { nama: "Citra", umur: 20 },
  ],
};

console.log("Hobi pertama:", andi.hobi[0]); // "membaca"
console.log("Nama teman pertama:", andi.temanDekat[0].nama); // "Budi"
console.log("Umur teman kedua:", andi.temanDekat[1].umur);   // 20

// Looping semua teman dekat
andi.temanDekat.forEach((teman) => {
  console.log(`- ${teman.nama} (${teman.umur} tahun)`);
});


// ================================================
// Contoh 3: Error saat Properti Tidak Ada
// ================================================
console.log("\n--- Error Tanpa Optional Chaining ---");
let user = { nama: "Dinda" };

try {
  console.log(user.alamat.kota); // ERROR! alamat adalah undefined
} catch (error) {
  console.log("Terjadi error:", error.message);
}


// ================================================
// Contoh 4: Optional Chaining (?.) - Solusi Aman
// ================================================
console.log("\n--- Optional Chaining ---");
console.log("user.alamat?.kota ->", user.alamat?.kota); // undefined, TIDAK error

// Bisa dirangkai untuk struktur yang lebih dalam
console.log("user.alamat?.detail?.kodePos ->", user.alamat?.detail?.kodePos); // undefined, tetap aman


// ================================================
// Contoh 5: Optional Chaining dengan Array dan Method
// ================================================
console.log("\n--- Optional Chaining dengan Array/Method ---");
let dataKosong = {};
console.log("dataKosong.daftar?.[0] ->", dataKosong.daftar?.[0]); // undefined, aman walau daftar tidak ada
console.log("dataKosong.hitung?.() ->", dataKosong.hitung?.());   // undefined, aman walau hitung bukan fungsi


// ================================================
// Contoh 6: Studi Kasus - Data Perusahaan Bertingkat
// ================================================
console.log("\n--- Studi Kasus: Data Perusahaan ---");
let perusahaan = {
  nama: "PT Maju Jaya",
  departemen: {
    IT: {
      kepala: "Pak Hasan",
      anggota: ["Rudi", "Sari", "Tono"],
    },
    Marketing: {
      kepala: "Bu Wati",
      anggota: ["Dedi", "Fitri"],
    },
  },
};

console.log("Kepala departemen IT:", perusahaan.departemen.IT.kepala);
console.log("Anggota IT:", perusahaan.departemen.IT.anggota.join(", "));

// Departemen yang tidak ada - aman dengan optional chaining
console.log(
  "Kepala departemen Keuangan (tidak ada):",
  perusahaan.departemen.Keuangan?.kepala
); // undefined, tidak error
