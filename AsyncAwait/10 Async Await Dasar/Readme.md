# 10. Async/Await Dasar

> Menulis kode asynchronous yang terbaca seperti kode synchronous, dibangun langsung di atas Promise.

## Tujuan Pembelajaran

- Memahami bahwa async/await adalah 'sintaks manis' di atas Promise
- Menulis fungsi async dan menggunakan await di dalamnya
- Mengonversi Promise chaining menjadi async/await

## async: Menandai Fungsi sebagai Asynchronous

Kata kunci `async` di depan fungsi membuat fungsi tersebut **selalu mengembalikan Promise**, bahkan jika kamu hanya menulis `return` nilai biasa.

```js
async function sapa() {
  return "Halo!";
}

sapa().then((pesan) => console.log(pesan)); // "Halo!"
```

## await: Menunggu Promise Selesai

Kata kunci `await` hanya boleh dipakai **di dalam fungsi async**. Ia menjeda eksekusi fungsi sampai Promise di sebelah kanannya selesai, lalu mengembalikan nilai hasilnya secara langsung — tanpa `.then()`.

```js
function tunggu(detik) {
  return new Promise((resolve) => {
    setTimeout(resolve, detik * 1000);
  });
}

async function jalankan() {
  console.log("Mulai");
  await tunggu(2);
  console.log("2 detik kemudian");
}

jalankan();
```

## Membandingkan: Promise Chain vs Async/Await

Kode Promise chaining dari materi 08 bisa ditulis ulang jadi jauh lebih mudah dibaca.

```js
// Versi Promise chaining
function ambilDataUser() {
  ambilUser(1)
    .then((user) => ambilProfil(user.id))
    .then((profil) => console.log("Bio:", profil.bio))
    .catch((error) => console.error(error));
}

// Versi async/await - dibaca dari atas ke bawah
async function ambilDataUserV2() {
  try {
    const user = await ambilUser(1);
    const profil = await ambilProfil(user.id);
    console.log("Bio:", profil.bio);
  } catch (error) {
    console.error(error);
  }
}
```

> **Tips:** `async/await` tidak menggantikan Promise — ia dibangun **di atas** Promise. Penanganan error memakai `try/catch` biasa, dibahas lebih dalam di materi 11.

## Latihan

Ubah fungsi berikut dari Promise chaining menjadi async/await:

```js
function proses() {
  return ambilData().then(data => data.length);
}
```

<details>
<summary>Lihat Jawaban</summary>

```js
async function proses() {
  const data = await ambilData();
  return data.length;
}
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Promise.all() dan Promise.allSettled()](../09 Promise.all dan Promise.allSettled/Readme.md) | [Error Handling dengan Try/Catch →](../11 Error Handling dengan Try Catch/Readme.md)
