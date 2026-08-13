# 01. Pengantar Fetch API

> Apa itu Fetch API, kenapa dibutuhkan, dan bagaimana perbandingannya dengan cara lama (XMLHttpRequest).

## Tujuan Pembelajaran

- Memahami apa itu Fetch API dan kegunaannya
- Mengetahui bahwa fetch() selalu mengembalikan Promise
- Bisa menjalankan permintaan fetch pertama menggunakan Node.js

## Apa itu Fetch API?

**Fetch API** adalah fitur bawaan JavaScript untuk melakukan **permintaan jaringan (network request)** — misalnya mengambil data dari server, mengirim data ke server, atau berkomunikasi dengan REST API. Fetch API sudah tersedia langsung di browser modern maupun Node.js (sejak versi 18), tanpa perlu install library tambahan.

Sebelum ada `fetch`, developer memakai `XMLHttpRequest` (sering disingkat XHR) — cara lama yang syntax-nya jauh lebih rumit dan bertingkat (mirip callback hell yang sudah pernah dibahas di materi Async/Await).

## fetch() Selalu Mengembalikan Promise

Ini fondasi paling penting: `fetch(url)` selalu mengembalikan sebuah **Promise**. Karena itu, memahami `Promise` dan `async/await` adalah syarat wajib sebelum lancar memakai Fetch API — kalau belum familiar, disarankan pelajari dulu materi Async/Await sebelum lanjut ke sini.

```js
fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Gagal:", error));
```

## Contoh Pertama: Mengambil Data dari GitHub API

Sepanjang materi ini, contoh kode banyak memakai **GitHub REST API** (`api.github.com`) karena bersifat publik, gratis, dan tidak butuh API key untuk permintaan dasar — cocok untuk latihan.

```js
async function ambilDataGitHub() {
  const response = await fetch("https://api.github.com/users/octocat");
  const data = await response.json();
  console.log("Username:", data.login);
  console.log("Jumlah repo publik:", data.public_repos);
}

ambilDataGitHub();
```

> **Tips:** Semua contoh yang memakai `api.github.com` butuh **koneksi internet aktif** saat dijalankan. Kalau muncul pesan limit/rate limit, itu wajar untuk API publik yang dipakai banyak orang — tunggu beberapa menit lalu coba lagi.

## Latihan

Tanpa menjalankan kode, jawab: apa yang dikembalikan oleh pemanggilan `fetch("https://api.github.com")` secara langsung — data JSON-nya, atau sesuatu yang lain?

<details>
<summary>Lihat Jawaban</summary>

`fetch()` **tidak langsung** mengembalikan data JSON. Ia mengembalikan sebuah **Promise** yang, jika berhasil, akan resolve dengan objek `Response`. Untuk mendapatkan data JSON-nya, masih perlu memanggil `response.json()` (yang lagi-lagi mengembalikan Promise) — dibahas lebih lanjut di materi 03.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[GET Request Dasar →](../02 GET Request Dasar/Readme.md)
