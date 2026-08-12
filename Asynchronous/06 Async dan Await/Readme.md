# 06 - Async dan Await

## Apa itu Async/Await?

**Async/Await** adalah sintaks modern (ES2017) yang dibangun **di atas Promise**, yang memungkinkan kita menulis kode asynchronous **dengan gaya penulisan seperti kode synchronous** — lebih mudah dibaca dan ditulis, terutama untuk proses berurutan.

Async/Await **bukan** konsep baru yang berbeda dari Promise — ini hanyalah "gula sintaks" (syntactic sugar) yang membuat Promise lebih enak dibaca.

## Kata Kunci `async`

Kata kunci `async` diletakkan di depan fungsi, membuat fungsi tersebut **selalu mengembalikan Promise**, walaupun di dalamnya tidak ada `return` promise secara eksplisit.

```js
async function contoh() {
  return "Halo"; // otomatis dibungkus jadi Promise.resolve("Halo")
}
```

## Kata Kunci `await`

Kata kunci `await` **hanya bisa dipakai di dalam fungsi `async`**. Fungsinya adalah untuk "menunggu" sebuah Promise selesai (settled), lalu mengambil hasilnya secara langsung — tanpa perlu `.then()`.

```js
async function ambilData() {
  const hasil = await fetch("https://api.contoh.com/data");
  console.log(hasil); // kode ini BARU jalan setelah fetch selesai
}
```

Perhatikan: `await` **tidak memblokir seluruh program** (JavaScript tetap single-threaded, non-blocking) — `await` hanya menjeda eksekusi **di dalam fungsi async tersebut**, sementara bagian lain program tetap bisa berjalan.

## Error Handling dengan Try/Catch

Karena gaya penulisannya mirip synchronous, penanganan error pada async/await memakai `try...catch` seperti biasa — bukan `.catch()`:

```js
async function ambilData() {
  try {
    const hasil = await prosesYangBisaGagal();
    console.log(hasil);
  } catch (error) {
    console.log("Terjadi error:", error);
  }
}
```

## Perbandingan dengan Promise Chaining

| Promise Chaining | Async/Await |
|---|---|
| `.then().then().then()` | `await` berurutan seperti kode biasa |
| `.catch()` di akhir chain | `try...catch` |
| Bisa membingungkan kalau banyak `.then()` | Lebih mudah dibaca, mirip kode synchronous |

Kedua-duanya **sama-sama valid** dan sama-sama memakai Promise di baliknya — async/await hanyalah cara penulisan yang lebih nyaman.

## Menjalankan Beberapa Proses Paralel dengan Async/Await

Kalau proses tidak saling bergantung, tetap gunakan `Promise.all()` supaya berjalan paralel, baru di-`await`:

```js
async function ambilSemua() {
  const [a, b] = await Promise.all([ambilA(), ambilB()]);
}
```

Kalau di-`await` satu-satu secara terpisah, prosesnya akan berjalan **berurutan (lebih lambat)**, bukan paralel.

## Poin Penting

- `async function` selalu mengembalikan Promise
- `await` menunggu Promise selesai, hanya bisa dipakai di dalam fungsi `async`
- Error ditangani dengan `try...catch`, bukan `.catch()`
- Async/await adalah "gula sintaks" di atas Promise, bukan konsep baru yang terpisah
- Untuk proses paralel, tetap gabungkan dengan `Promise.all()`

Lanjut ke → [07 Simulasi Asynchronous Proses](../07%20Simulasi%20Asynchronous%20Proses/Readme.md)
