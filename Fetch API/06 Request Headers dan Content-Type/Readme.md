# 06. Request Headers dan Content-Type

> Memahami apa itu HTTP headers, kenapa penting, dan cara mengatur serta membacanya lewat fetch.

## Tujuan Pembelajaran

- Memahami apa itu HTTP headers dan fungsinya
- Mengatur custom headers pada request
- Membaca headers dari response

## Apa itu HTTP Headers?

**Headers** adalah metadata tambahan yang menyertai setiap request maupun response — semacam "informasi di amplop surat", terpisah dari isi suratnya (body). Headers memberi tahu server (atau browser) hal-hal seperti: format data apa yang dikirim, siapa yang mengirim, jenis autentikasi yang dipakai, dan sebagainya.

## Header yang Paling Sering Dipakai

- **`Content-Type`** — memberi tahu format data pada `body` (misalnya `application/json` untuk JSON, `text/plain` untuk teks biasa).
- **`Authorization`** — membawa token/kredensial untuk mengakses API yang butuh login (dibahas sekilas di sini, detailnya di luar cakupan materi dasar).
- **`Accept`** — memberi tahu format response apa yang diinginkan client dari server.

```js
async function contohHeaders() {
  const response = await fetch("https://api.github.com/users/octocat", {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  const data = await response.json();
  console.log(data.login);
}
contohHeaders();
```

## Membaca Headers dari Response

Response juga membawa headers dari server, bisa dibaca lewat `response.headers`, yang punya method mirip `Map` seperti `.get()`.

```js
async function bacaResponseHeaders() {
  const response = await fetch("https://api.github.com/users/octocat");

  console.log("Content-Type:", response.headers.get("content-type"));
  console.log("Rate limit tersisa:", response.headers.get("x-ratelimit-remaining"));
}
bacaResponseHeaders();
```

> **Tips:** Nama header **tidak case-sensitive** — `"Content-Type"` dan `"content-type"` dianggap sama oleh `fetch()`. Meski begitu, kebiasaan menulis dengan huruf kapital di awal kata (seperti `Content-Type`) tetap jadi standar penulisan yang umum dipakai.

## Latihan

Buat fungsi async `ambilContentType(url)` yang melakukan GET request ke `url`, lalu mengembalikan nilai header `content-type` dari response-nya.

<details>
<summary>Lihat Jawaban</summary>

```js
async function ambilContentType(url) {
  const response = await fetch(url);
  return response.headers.get("content-type");
}

ambilContentType("https://api.github.com/users/octocat").then((tipe) => {
  console.log("Content-Type:", tipe);
});
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← POST Request — Mengirim Data](../05 POST Request/Readme.md) | [PUT dan DELETE Request →](../07 PUT dan DELETE Request/Readme.md)
