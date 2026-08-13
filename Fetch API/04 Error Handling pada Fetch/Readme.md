# 04. Error Handling pada Fetch

> Menangani kegagalan fetch dengan benar: error jaringan vs status HTTP gagal, dua hal yang berbeda dan butuh penanganan berbeda.

## Tujuan Pembelajaran

- Memahami dua jenis kegagalan: error jaringan dan status HTTP gagal
- Menulis try/catch yang benar di sekitar fetch
- Melempar error manual saat response.ok bernilai false

## Dua Jenis Kegagalan yang Berbeda

Ini konsep terpenting di materi ini. Fetch bisa "gagal" dengan dua cara yang **butuh penanganan berbeda**:

1. **Error jaringan** — tidak ada koneksi internet, domain tidak ditemukan (DNS error), server tidak merespons. Kasus ini membuat **Promise dari `fetch()` reject**, sehingga tertangkap oleh `catch`.
2. **Status HTTP gagal** — server berhasil merespons, tapi dengan status error seperti `404` (tidak ditemukan) atau `500` (error server). Kasus ini **TIDAK** membuat Promise reject — `fetch()` tetap resolve normal, hanya `response.ok` bernilai `false`.

> **Perhatian:** Kesalahan paling umum pemula: mengira `try/catch` saja cukup untuk menangkap semua jenis kegagalan fetch. Padahal status 404/500 tidak akan masuk ke `catch` kecuali kamu melempar error secara manual.

## Pola Error Handling yang Benar

Pola yang direkomendasikan: cek `response.ok` di dalam `try`, dan `throw` error manual jika `false` — supaya kedua jenis kegagalan sama-sama berakhir di `catch` yang sama.

```js
async function ambilUserAman(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`Gagal mengambil data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
    return null;
  }
}

ambilUserAman("octocat").then((user) => console.log(user));
ambilUserAman("user-tidak-ada-123").then((user) => console.log(user)); // null
```

## Mensimulasikan Error Jaringan

Untuk melihat bagaimana `catch` menangkap error jaringan sungguhan (bukan status HTTP), coba fetch ke domain yang tidak ada.

```js
async function contohErrorJaringan() {
  try {
    await fetch("https://domain-ini-tidak-pernah-ada-12345.com");
  } catch (error) {
    console.log("Ini contoh error jaringan asli:", error.message);
  }
}
contohErrorJaringan();
```

> **Tips:** Selalu bungkus fetch dengan pola ini di kode produksi: cek `response.ok` DAN sediakan `try/catch` di sekitarnya. Dua-duanya perlu ada untuk menangani kedua jenis kegagalan sekaligus.

## Latihan

Perbaiki kode berikut supaya menangani status 404 dengan benar (saat ini kode hanya mengandalkan try/catch tanpa mengecek response.ok):

```js
async function ambilRepo(owner, repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Gagal:", error.message);
  }
}
```

<details>
<summary>Lihat Jawaban</summary>

```js
async function ambilRepo(owner, repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

    if (!response.ok) {
      throw new Error(`Repo tidak ditemukan. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Gagal:", error.message);
    return null;
  }
}
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Menangani Response](../03 Menangani Response/Readme.md) | [POST Request — Mengirim Data →](../05 POST Request/Readme.md)
