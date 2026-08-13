# 05. POST Request — Mengirim Data

> Mengirim data baru ke server menggunakan method POST, lengkap dengan body dan headers.

## Tujuan Pembelajaran

- Memahami perbedaan GET dan POST
- Mengirim data JSON lewat body request
- Mengatur header Content-Type dengan benar

## GET vs POST

Kalau **GET** dipakai untuk **mengambil** data, **POST** dipakai untuk **mengirim data baru** ke server — misalnya membuat akun baru, mengirim komentar, atau menambah item ke keranjang belanja.

**Catatan penting:** materi 05–07 memakai [JSONPlaceholder](https://jsonplaceholder.typicode.com) — API publik gratis yang memang dibuat khusus untuk latihan POST/PUT/DELETE tanpa perlu akun. Data yang dikirim **tidak benar-benar disimpan** di server mereka (hanya disimulasikan), jadi aman untuk latihan berkali-kali. Pastikan komputer kamu terhubung internet saat mencobanya.

## Struktur POST Request

Berbeda dari GET, POST request butuh **object konfigurasi** sebagai argumen kedua `fetch()`, berisi minimal: `method`, `headers`, dan `body`.

```js
async function buatPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Belajar Fetch API",
      body: "Materi ini membahas POST request",
      userId: 1,
    }),
  });

  const data = await response.json();
  console.log("Data baru dibuat dengan id:", data.id);
  console.log(data);
}

buatPost();
```

## Kenapa Perlu JSON.stringify()?

Properti `body` pada fetch **hanya menerima string** (atau format lain seperti `FormData`), bukan objek JavaScript langsung. Karena itu, objek data harus diubah dulu menjadi string JSON dengan `JSON.stringify()` sebelum dikirim.

```js
const dataObjek = { nama: "Syauqi", umur: 20 };

console.log(typeof dataObjek); // "object"

const dataString = JSON.stringify(dataObjek);
console.log(typeof dataString); // "string"
console.log(dataString); // '{"nama":"Syauqi","umur":20}'
```

> **Tips:** Header `"Content-Type": "application/json"` memberi tahu server bahwa body yang dikirim berformat JSON, supaya server tahu cara membacanya dengan benar. Header ini wajib disertakan setiap kali mengirim body berformat JSON.

## Latihan

Buat fungsi async `buatKomentar(postId, nama, isi)` yang melakukan POST ke `https://jsonplaceholder.typicode.com/comments` dengan body `{ postId, name: nama, body: isi }`, lalu mengembalikan data hasilnya.

<details>
<summary>Lihat Jawaban</summary>

```js
async function buatKomentar(postId, nama, isi) {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, name: nama, body: isi }),
  });

  const data = await response.json();
  return data;
}

buatKomentar(1, "Syauqi", "Materi ini sangat membantu!").then((hasil) => {
  console.log(hasil);
});
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Error Handling pada Fetch](../04 Error Handling pada Fetch/Readme.md) | [Request Headers dan Content-Type →](../06 Request Headers dan Content-Type/Readme.md)
