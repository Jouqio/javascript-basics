TUGAS: ALERT, PROMPT, DAN CONSOLE.LOG() - DASAR JAVASCRIPT
============================================================

PETUNJUK PENGERJAAN
- Kerjakan semua soal di bawah secara berurutan
- Soal praktik bisa dikerjakan di file .js terpisah atau langsung
  di Console browser (tekan F12)
- Untuk soal yang memakai alert()/prompt(), sertakan screenshot
  hasil running-nya

BAGIAN A - SOAL TEORI

1. Jelaskan perbedaan console.log(), alert(), dan prompt() dari
   segi: siapa yang bisa melihat outputnya, dan apakah bersifat
   blocking.

2. Apa yang dimaksud dengan sifat "blocking" pada alert() dan
   prompt()? Jelaskan dengan bahasa sendiri.

3. Tipe data apa yang SELALU dikembalikan oleh prompt(), walaupun
   user mengetik angka? Mengapa hal ini penting diperhatikan?

4. Apa yang dikembalikan (return value) oleh prompt() ketika user
   menekan tombol Cancel?

5. Mengapa alert() dan prompt() jarang dipakai di aplikasi web
   production sungguhan seperti Instagram atau Tokopedia?

BAGIAN B - SOAL PRAKTIK (CODING)

6. Buat program yang menampilkan teks "Halo, dunia!" ke console.

7. Buat variabel bernama "nama" berisi namamu sendiri, lalu
   tampilkan ke console dengan format: "Nama saya adalah <nama>"

8. Buat program yang menyapa pengguna memakai alert() dengan
   pesan: "Selamat datang di kelas Dasar Pemrograman!"

9. Buat program yang menanyakan nama pengguna memakai prompt(),
   lalu menyapa balik memakai alert() dengan format:
   "Halo, <nama>! Senang bertemu denganmu."

10. Buat program "kalkulator umur" sederhana:
    a. Tanyakan tahun lahir pengguna memakai prompt()
    b. Ubah hasilnya ke Number()
    c. Hitung umur pengguna (anggap tahun sekarang adalah 2026)
    d. Tampilkan hasilnya memakai alert()

BAGIAN C - SOAL TANTANGAN (BONUS)

11. Kode berikut menghasilkan "51", bukan 6. Jelaskan kenapa, lalu
    perbaiki kodenya supaya hasilnya benar-benar 6:

    let x = prompt("Masukkan angka:"); // user mengetik 5
    console.log(x + 1);

12. Prediksikan hasil dari kode berikut, lalu jelaskan alasannya:

    console.log(alert === prompt);

SELAMAT MENGERJAKAN!