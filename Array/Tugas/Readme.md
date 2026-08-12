/* ============================================================
   TUGAS AKHIR — ARRAY & IMMUTABLE ARRAY (JavaScript)
   Materi gabungan: 01–09
   Nama   : ______________________
   NIM    : ______________________
   ============================================================
   PETUNJUK:
   - Kerjakan semua soal langsung di bawah komentar masing-masing.
   - Dilarang menggunakan for-loop biasa, gunakan method array
     (filter, map, reduce, dll) kecuali disebutkan sebaliknya.
   - Pastikan array/objek ASLI tidak pernah berubah (immutable).
   ============================================================ */


/* ============================================================
   BAGIAN 1 — DASAR ARRAY (Materi 01)
   ============================================================ */

// Soal 1.1
// Buat array bernama `mataKuliah` berisi 5 nama mata kuliah yang kamu
// ambil semester ini. Tampilkan mata kuliah ke-2 dan ke-4 saja.

const mataKuliah = [/* isi di sini */];
// console.log(...)


// Soal 1.2
// Menggunakan Array.from(), ubah string "Bontang" menjadi array karakter.
// Simpan ke variabel `hurufBontang`.



/* ============================================================
   BAGIAN 2 — MUTABLE VS IMMUTABLE (Materi 02)
   ============================================================ */

// Soal 2.1
// Diberikan array berikut:
const stokBarang = [10, 25, 5, 40];

// Buat array baru `stokDiskon` yang seluruh nilainya dikurangi 5,
// TANPA mengubah array `stokBarang` asli. Buktikan dengan mencetak
// keduanya setelahnya.



// Soal 2.2
// Jelaskan (dalam bentuk komentar // di bawah ini, 3-4 kalimat)
// apa perbedaan mutable dan immutable, dan beri 1 contoh method
// masing-masing yang BELUM dipakai di soal 2.1.
//
// Jawaban:
// ...



/* ============================================================
   BAGIAN 3 — ARRAY FILTER (Materi 03)
   ============================================================ */

// Soal 3.1
// Diberikan data mahasiswa berikut:
const mahasiswa = [
  { nama: "Andi", nim: "202512001", ipk: 3.8 },
  { nama: "Budi", nim: "202512002", ipk: 2.9 },
  { nama: "Citra", nim: "202512003", ipk: 3.5 },
  { nama: "Dewi", nim: "202512004", ipk: 2.5 },
];

// a. Ambil mahasiswa dengan IPK >= 3.0, simpan ke `mahasiswaCumlaude`.
// b. Ambil mahasiswa dengan NIM yang berakhiran angka genap.



/* ============================================================
   BAGIAN 4 — ARRAY MAP (Materi 04)
   ============================================================ */

// Soal 4.1
// Dari array `mahasiswa` di atas, buat array baru berisi string
// berformat: "Andi (202512001) - IPK: 3.8" untuk setiap mahasiswa.
// Simpan ke `daftarProfil`.



// Soal 4.2
// Naikkan IPK setiap mahasiswa sebesar 0.1 (maksimal 4.0), simpan
// ke `mahasiswaUpdate`, TANPA mengubah array `mahasiswa` asli.



/* ============================================================
   BAGIAN 5 — ARRAY REDUCE (Materi 05)
   ============================================================ */

// Soal 5.1
// Hitung rata-rata IPK seluruh mahasiswa menggunakan reduce().
// Simpan ke `rataRataIPK`.



// Soal 5.2
// Diberikan data transaksi UKM:
const transaksi = [
  { tanggal: "2026-08-01", jenis: "masuk", jumlah: 500000 },
  { tanggal: "2026-08-02", jenis: "keluar", jumlah: 120000 },
  { tanggal: "2026-08-03", jenis: "masuk", jumlah: 300000 },
  { tanggal: "2026-08-04", jenis: "keluar", jumlah: 75000 },
];

// Hitung saldo akhir (masuk - keluar) menggunakan reduce().
// Simpan ke `saldoAkhir`.



/* ============================================================
   BAGIAN 6 — KOMBINASI FILTER + MAP + REDUCE (Materi 06)
   ============================================================ */

// Soal 6.1
// Dari array `mahasiswa`, buat satu chaining filter().map().reduce()
// untuk menghitung TOTAL IPK dari mahasiswa yang IPK-nya >= 3.0 saja.
// Simpan ke `totalIPKCumlaude`.



// Soal 6.2
// Dari array `transaksi`, hitung TOTAL jumlah transaksi "masuk" yang
// nilainya lebih besar dari 200000, menggunakan chaining
// filter().reduce(). Simpan ke `totalMasukBesar`.



/* ============================================================
   BAGIAN 7 — STUDI KASUS IMMUTABLE (Materi 07)
   ============================================================ */

// Soal 7.1
// Buat sistem "Daftar Tugas Kuliah" sederhana dengan aturan IMMUTABLE
// (setiap operasi mengembalikan array baru, tidak mengubah array asli).
//
// Data awal:
const tugasKuliah = [
  { id: 1, judul: "Laporan Praktikum OS", deadline: "2026-08-20", selesai: false },
  { id: 2, judul: "Tugas Automata", deadline: "2026-08-18", selesai: true },
];

// a. Buat fungsi tambahTugas(daftar, judulBaru, deadlineBaru)
//    -> mengembalikan array baru dengan tugas tambahan.

// b. Buat fungsi tandaiSelesai(daftar, id)
//    -> mengembalikan array baru dengan status `selesai` di-toggle
//       untuk tugas dengan id tersebut.

// c. Buat fungsi hapusTugas(daftar, id)
//    -> mengembalikan array baru tanpa tugas tersebut.

// d. Buat fungsi tugasMendekatiDeadline(daftar, tanggalSekarang)
//    -> mengembalikan array tugas yang BELUM selesai dan deadline-nya
//       kurang dari atau sama dengan tanggalSekarang (bandingkan string
//       tanggal format YYYY-MM-DD).

// e. Jalankan skenario berikut secara berurutan dan cetak hasil setiap
//    langkah, lalu buktikan `tugasKuliah` (variabel awal) TIDAK berubah:
//      1. Tambahkan tugas baru "Kuis Linear Algebra" deadline "2026-08-19"
//      2. Tandai tugas id 1 sebagai selesai
//      3. Hapus tugas id 2
//      4. Tampilkan sisa tugas yang mendekati deadline sebelum "2026-08-21"



/* ============================================================
   BAGIAN 8 — REFLEKSI (Materi 08 - Rangkuman)
   ============================================================ */

// Soal 8.1 (Essay, jawab dalam komentar)
// Jelaskan kapan sebaiknya kamu memakai filter(), map(), atau reduce()
// masing-masing, beri 1 contoh kasus nyata (boleh dari kampus/UKM/
// proyek pribadimu) untuk tiap method.
//
// Jawaban:
// - filter(): ...
// - map()   : ...
// - reduce(): ...



/* ============================================================
   BAGIAN 9 — TANTANGAN BONUS (Materi 09 - Quiz level lanjut)
   ============================================================ */

// Soal 9.1 (Bonus, opsional)
// Diberikan nested array nilai ujian per kelas:
const nilaiPerKelas = [
  { kelas: "A", nilai: [80, 90, 70] },
  { kelas: "B", nilai: [60, 75, 85, 95] },
];

// Menggunakan reduce() + map(), buat array baru berisi
// { kelas, rataRata } untuk setiap kelas TANPA mengubah data asli.
// Simpan ke `rataRataPerKelas`.



/* ============================================================
   SELESAI. Pastikan seluruh soal sudah dijawab sebelum dikumpulkan.
   ============================================================ */