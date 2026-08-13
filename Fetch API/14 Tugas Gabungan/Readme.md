# 14. Tugas Gabungan — GitHub User Explorer

> Satu proyek kecil yang memaksa kamu memakai **semua konsep Fetch API dari materi 01–12** dalam satu alur nyata: GET request, error handling, POST-style query params, Promise.all/allSettled, AbortController, dan timeout.

Ini bukan materi baca-baca — kerjakan langsung di `tugas.js`. Tidak ada kunci jawaban di file ini karena tugas ini dirancang untuk dikerjakan sendiri. Semua fungsi memakai **GitHub REST API** (`api.github.com`) — publik, gratis, tidak butuh API key untuk permintaan dasar.

**Penting:** jalankan `node tugas.js` dengan koneksi internet aktif. Kalau muncul hasil `undefined` berulang atau pesan "API rate limit exceeded", itu bukan tugas kamu yang salah — GitHub membatasi jumlah request per jam untuk pengguna anonim (biasanya 60/jam). Tunggu beberapa saat lalu coba lagi kalau itu terjadi.

## Requirement

Kerjakan berurutan. Tiap fungsi memakai konsep dari materi tertentu — dicantumkan di dalam kurung.

1. **`ambilUser(username)`** *(materi 02/04 – GET Request & Error Handling)*
   GET request ke `https://api.github.com/users/{username}`. Jika `response.ok` bernilai `false`, `throw` Error dengan pesan `` `User ${username} tidak ditemukan` ``. Jika berhasil, kembalikan data user (objek hasil `.json()`). Bungkus dengan `try/catch` di titik pemanggilannya (bukan di dalam fungsi ini) — biarkan fungsi ini melempar error apa adanya ke pemanggil.

2. **`cariRepoPopuler(kataKunci, jumlah = 5)`** *(materi 09 – Query Parameters)*
   Gunakan `URLSearchParams` untuk menyusun query ke `https://api.github.com/search/repositories` dengan parameter `q` (kata kunci), `sort: "stars"`, `order: "desc"`, dan `per_page` (jumlah). Kembalikan array berisi `{ nama: repo.full_name, bintang: repo.stargazers_count }` dari hasil pencarian.

3. **`ambilBeberapaUserParalel(usernames)`** *(materi 10 – Promise.allSettled)*
   Ambil semua `username` di array **secara paralel** dengan `Promise.allSettled`. Kembalikan array objek `{ username, berhasil, data }` — `data` berisi objek user jika berhasil, atau pesan error (string) jika gagal. Manfaatkan `ambilUser()` dari langkah 1.

4. **`fetchDenganTimeout(url, timeoutMs = 5000)`** *(materi 11/12 – AbortController & Timeout)*
   Fungsi pembantu generik: lakukan fetch ke `url` mana pun, otomatis dibatalkan jika lebih lama dari `timeoutMs`. Lempar Error `` `Request timeout setelah ${timeoutMs}ms` `` khusus untuk kasus timeout (`error.name === "AbortError"`). Jangan lupa `clearTimeout` di `finally`.

5. **`ringkasanUser(username)`** *(materi 08 – menggabungkan semua)*
   Fungsi `async` utama:
   - Panggil `fetchDenganTimeout` (langkah 4) ke `https://api.github.com/users/{username}` dengan timeout 5 detik.
   - Jika berhasil, panggil lagi `fetchDenganTimeout` ke `data.repos_url` milik user tersebut untuk mendapatkan daftar repo-nya.
   - Kembalikan objek ringkasan: `{ nama: data.name, username: data.login, followers: data.followers, jumlahRepo: <panjang array repo> }`.
   - Bungkus semuanya dengan `try/catch`. Jika gagal di titik mana pun, kembalikan `null` dan cetak pesan error yang jelas ke console.

## Kriteria Penilaian (self-check)

- [ ] Semua fetch memakai `async/await`, bukan rangkaian `.then()` panjang.
- [ ] Tidak ada fetch yang lupa mengecek `response.ok` sebelum memproses datanya.
- [ ] `fetchDenganTimeout` benar-benar membersihkan timer dengan `clearTimeout` di `finally`, walau fetch selesai lebih cepat dari timeout.
- [ ] `ambilBeberapaUserParalel` menggunakan `Promise.allSettled` (bukan `Promise.all`), supaya satu username salah tidak menggagalkan semuanya.
- [ ] Tidak ada *unhandled promise rejection* saat `node tugas.js` dijalankan.
- [ ] Kode mengikuti clean code: nama fungsi/variabel deskriptif, tidak ada duplikasi logic fetch yang bisa digabung jadi satu fungsi pembantu.

## Cara Menguji

```bash
node tugas.js
```

Runner di bagian bawah `tugas.js` sudah menyiapkan pemanggilan untuk kelima fungsi di atas, termasuk skenario username yang valid maupun yang sengaja tidak ada, supaya kamu bisa melihat penanganan error-nya juga.

## Bantuan

Kalau mentok, baca ulang materi terkait secara berurutan:
`02 GET Request Dasar` → `04 Error Handling pada Fetch` → `08 Async Await dengan Fetch` → `09 Query Parameters` → `10 Promise.all` → `11 AbortController` → `12 Timeout`. Semua pola yang dibutuhkan di tugas ini sudah pernah dicontohkan di materi-materi tersebut — tugas ini hanya menggabungkannya dalam satu alur.

---

[← Kuis Fetch API](../13%20Kuis%20Fetch%20API/Readme.md)
