// ====================================================================
// SOAL 1 — Membuat dan Mengakses Object (Level: Mudah)
// Buat object buku dengan properti judul, penulis, tahunTerbit
// Tampilkan dalam satu kalimat dengan template literal
// ====================================================================

// TODO: Soal 1 - Tulis kode kamu di sini
const buku = {
  // ketik jawabanmu di sini
};

// Contoh cara mencoba (uncomment setelah mengisi jawaban):
// console.log(`Soal 1 - Buku "${buku.judul}" karya ${buku.penulis}, terbit tahun ${buku.tahunTerbit}`);


// ====================================================================
// SOAL 2 — Menambah/Mengubah/Menghapus Properti (Level: Mudah)
// mahasiswa = { nama: "Sinta", nim: "12345" }
// 1. Tambah properti jurusan = "Teknik Informatika"
// 2. Ubah nim jadi "67890"
// 3. Hapus properti nim
// Tampilkan hasil di setiap tahap
// ====================================================================

let mahasiswa = { nama: "Sinta", nim: "12345" };
console.log("Soal 2 - Awal:", mahasiswa);

// TODO: Soal 2 - Tulis kode kamu di sini (tambah, ubah, hapus)


// ====================================================================
// SOAL 3 — Method dan this (Level: Sedang)
// Buat object rekening dengan saldo (mulai 0), method setor() dan tarik()
// tarik() tidak boleh membuat saldo minus
// ====================================================================

// TODO: Soal 3 - Tulis kode kamu di sini
const rekening = {
  saldo: 0,
  // setor(jumlah) { ... }
  // tarik(jumlah) { ... }
};

// Contoh cara mencoba (uncomment setelah mengisi jawaban):
// rekening.setor(100000);
// console.log("Soal 3 - Saldo setelah setor:", rekening.saldo); // 100000
// rekening.tarik(150000); // harus mencetak "Saldo tidak cukup"
// console.log("Soal 3 - Saldo setelah tarik gagal:", rekening.saldo); // tetap 100000
// rekening.tarik(50000);
// console.log("Soal 3 - Saldo setelah tarik berhasil:", rekening.saldo); // 50000


// ====================================================================
// SOAL 4 — Object Bersarang (Level: Sedang)
// sekolah = { nama, kepalaSekolah: { nama, nomorHP } }
// Akses kepalaSekolah.nomorHP dengan optional chaining
// ====================================================================

// TODO: Soal 4 - Tulis kode kamu di sini
const sekolah = {
  // ketik jawabanmu di sini
};

// Contoh cara mencoba (uncomment setelah mengisi jawaban):
// console.log("Soal 4 - Nomor HP kepala sekolah:", sekolah.kepalaSekolah?.nomorHP);


// ====================================================================
// SOAL 5 — Perulangan pada Object (Level: Sedang)
// Gunakan Object.entries() untuk cetak status Lulus/Tidak Lulus tiap mapel
// ====================================================================

let nilaiMapel = { matematika: 75, fisika: 60, kimia: 88, biologi: 92 };

// TODO: Soal 5 - Tulis kode kamu di sini


// ====================================================================
// SOAL 6 — Object Reference dan Copy (Level: Menantang)
// Buat shallow copy dataSalinan dari dataAsli, ubah dataSalinan.nama
// Jelaskan (via komentar) kenapa dataAsli.skor ikut berubah jika diubah lewat dataSalinan
// ====================================================================

let dataAsli = { nama: "Rian", skor: [80, 90, 70] };

// TODO: Soal 6 - Tulis kode kamu di sini
// let dataSalinan = ...
// dataSalinan.nama = "Budi";

// Contoh cara mencoba (uncomment setelah mengisi jawaban):
// console.log("Soal 6 - dataAsli:", dataAsli);
// console.log("Soal 6 - dataSalinan:", dataSalinan);
//
// dataSalinan.skor.push(100); // coba ubah array skor lewat dataSalinan
// console.log("Soal 6 - dataAsli.skor setelah push:", dataAsli.skor); // ikut berubah?

// TODO: Tulis penjelasan kamu di sini kenapa itu terjadi:
// Jawaban: _______________


// ====================================================================
// SOAL 7 — Immutable Object (Level: Menantang)
// Buat konfigurasiAplikasi, freeze, coba ubah versi, buktikan tidak berubah
// ====================================================================

// TODO: Soal 7 - Tulis kode kamu di sini
const konfigurasiAplikasi = Object.freeze({
  // ketik jawabanmu di sini
});

// Contoh cara mencoba (uncomment setelah mengisi jawaban):
// konfigurasiAplikasi.versi = "2.0.0"; // coba ubah
// console.log("Soal 7 - konfigurasiAplikasi:", konfigurasiAplikasi); // versi harus tetap seperti semula


// ====================================================================
// SOAL 8 — Destructuring (Level: Menantang)
// tampilkanTiket({ nama, tujuan, kelas = "Ekonomi" })
// "[nama] memesan tiket ke [tujuan] kelas [kelas]"
// ====================================================================

// TODO: Soal 8 - Tulis kode kamu di sini
function tampilkanTiket(/* destructuring parameter di sini */) {
  // ketik jawabanmu di sini
}

// Contoh cara mencoba (uncomment setelah mengisi jawaban):
// tampilkanTiket({ nama: "Andi", tujuan: "Jakarta", kelas: "Bisnis" });
// tampilkanTiket({ nama: "Sari", tujuan: "Surabaya" }); // tanpa kelas, harus pakai default "Ekonomi"

// Jalankan file ini dengan: node soal.js
