# 09. Query Parameters dan URLSearchParams

> Menyusun URL dengan parameter pencarian secara rapi dan aman menggunakan URLSearchParams.

## Tujuan Pembelajaran

- Memahami apa itu query parameter pada URL
- Menyusun query string secara manual maupun dengan URLSearchParams
- Melakukan pencarian data lewat GitHub Search API

## Apa itu Query Parameter?

Query parameter adalah bagian URL setelah tanda tanya `?`, dipakai untuk mengirim data tambahan pada GET request — misalnya kata kunci pencarian, halaman, atau filter. Contoh: `https://api.github.com/search/repositories?q=react&sort=stars`.

## Cara Manual (Rawan Salah)

Menyusun query string manual dengan template literal terlihat mudah untuk kasus sederhana, tapi rawan bug saat nilainya mengandung karakter spesial seperti spasi atau simbol `&`.

```js
const kataKunci = "react framework"; // ada spasi!
const urlManual = `https://api.github.com/search/repositories?q=${kataKunci}`;
console.log(urlManual);
// Spasi tidak di-encode dengan benar, bisa menyebabkan request gagal atau salah
```

> **Perhatian:** Karakter seperti spasi, `&`, `#`, atau `=` di dalam nilai parameter HARUS di-*encode* dulu supaya tidak merusak struktur URL. Menyusun manual seperti contoh di atas mudah lupa melakukan ini.

## URLSearchParams: Cara yang Aman

`URLSearchParams` adalah fitur bawaan JavaScript untuk menyusun query string dengan benar — otomatis melakukan *encoding* karakter spesial.

```js
const params = new URLSearchParams({
  q: "react framework",
  sort: "stars",
  order: "desc",
});

console.log(params.toString());
// q=react+framework&sort=stars&order=desc

const url = `https://api.github.com/search/repositories?${params.toString()}`;
console.log(url);
```

## Contoh Lengkap: Mencari Repository di GitHub

```js
async function cariRepo(kataKunci, jumlah = 5) {
  const params = new URLSearchParams({
    q: kataKunci,
    sort: "stars",
    order: "desc",
    per_page: jumlah,
  });

  const response = await fetch(`https://api.github.com/search/repositories?${params}`);
  const data = await response.json();

  return data.items.map((repo) => ({
    nama: repo.full_name,
    bintang: repo.stargazers_count,
  }));
}

cariRepo("javascript framework", 3).then((hasil) => console.log(hasil));
```

> **Tips:** `URLSearchParams` juga bisa dipakai untuk **membaca** query parameter dari URL yang sudah ada, misalnya `new URLSearchParams(window.location.search)` di lingkungan browser.

## Latihan

Buat fungsi async `cariUserGitHub(kataKunci)` yang mencari user GitHub lewat endpoint `https://api.github.com/search/users` dengan query parameter `q`, lalu mengembalikan array berisi `login` dari 3 hasil teratas.

<details>
<summary>Lihat Jawaban</summary>

```js
async function cariUserGitHub(kataKunci) {
  const params = new URLSearchParams({ q: kataKunci, per_page: 3 });
  const response = await fetch(`https://api.github.com/search/users?${params}`);
  const data = await response.json();
  return data.items.map((user) => user.login);
}

cariUserGitHub("syauqi").then((hasil) => console.log(hasil));
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Async/Await dengan Fetch](../08 Async Await dengan Fetch/Readme.md) | [Multiple Requests Paralel dengan Promise.all →](../10 Multiple Requests Paralel dengan Promise.all/Readme.md)
