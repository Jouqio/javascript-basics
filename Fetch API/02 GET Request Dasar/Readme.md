# 02. GET Request Dasar

> Melakukan permintaan GET untuk mengambil data dari server menggunakan fetch().

## Tujuan Pembelajaran

- Menulis GET request dasar dengan fetch()
- Mengonversi response menjadi data JavaScript dengan .json()
- Menggunakan fetch() bersama async/await

## GET: Method Paling Umum

**GET** adalah HTTP method untuk **mengambil data** dari server, tanpa mengubah apa pun di sisi server. Ini method default `fetch()` — kalau tidak ditentukan method lain, `fetch(url)` otomatis melakukan GET request.

```js
fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
  .then((data) => {
    console.log("Nama:", data.name);
    console.log("Bio:", data.bio);
  });
```

## Versi async/await (Lebih Direkomendasikan)

Bentuk `.then()` di atas bisa ditulis ulang dengan `async/await` supaya lebih mudah dibaca dari atas ke bawah — pola yang akan dipakai di hampir semua materi selanjutnya.

```js
async function ambilUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
}

ambilUser("octocat").then((user) => {
  console.log(user.name, "-", user.location);
});
```

## Dua Tahap: Response, lalu Data

Perhatikan ada **dua** `await`/`.then()` berurutan: pertama menunggu `fetch()` selesai (mendapat objek `Response`), lalu **kedua** menunggu `.json()` selesai (mendapat data sebenarnya). Ini sering bikin bingung pemula — kedua tahap ini akan dijelaskan lebih detail di materi 03.

```js
async function contoh() {
  const response = await fetch("https://api.github.com/users/octocat"); // tahap 1
  console.log(typeof response); // "object" - ini objek Response, BUKAN data

  const data = await response.json(); // tahap 2
  console.log(typeof data); // "object" - ini baru data sebenarnya
}
contoh();
```

> **Tips:** Kesalahan paling umum pemula: lupa memanggil `.json()` dan langsung mencoba mengakses properti dari `response`. Ingat, `response` bukan datanya — `response.json()` yang menghasilkan data.

## Latihan

Buat fungsi async `ambilRepo(owner, repo)` yang melakukan GET request ke `https://api.github.com/repos/{owner}/{repo}` dan mengembalikan jumlah `stargazers_count` (bintang) repo tersebut.

<details>
<summary>Lihat Jawaban</summary>

```js
async function ambilRepo(owner, repo) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const data = await response.json();
  return data.stargazers_count;
}

ambilRepo("facebook", "react").then((bintang) => {
  console.log("Jumlah bintang:", bintang);
});
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Pengantar Fetch API](../01 Pengantar Fetch API/Readme.md) | [Menangani Response →](../03 Menangani Response/Readme.md)
