# 07. Import Dinamis (Dynamic Import)

> Memuat module hanya saat benar-benar dibutuhkan, bukan langsung di awal — berguna untuk mempercepat waktu muat aplikasi.

## Tujuan Pembelajaran

- Memahami perbedaan static import dan dynamic import
- Menggunakan import() sebagai fungsi yang mengembalikan Promise
- Mengetahui kapan dynamic import bermanfaat

## Static Import: Semua Dimuat di Awal

Semua contoh `import ... from ...` di materi sebelumnya disebut **static import** — letaknya harus di bagian paling atas file, dan **selalu dimuat** begitu file dijalankan, dipakai atau tidak.

```js
// Static import - selalu dimuat begitu file ini dijalankan,
// bahkan jika fiturBerat ternyata tidak pernah dipakai
import { fiturBerat } from "./fitur-berat.mjs";

if (false) {
  fiturBerat(); // meski tidak pernah dipanggil, modulnya tetap sudah dimuat di awal
}
```

## Dynamic Import: Dimuat Hanya Saat Dibutuhkan

`import()` (ditulis sebagai **fungsi**, dengan tanda kurung) memuat module **secara dinamis** — hanya saat baris kode itu benar-benar dijalankan. Ia mengembalikan sebuah **Promise**, jadi bisa dipakai dengan `.then()` atau `await`.

```js
async function muatFiturSaatDibutuhkan() {
  console.log("Sebelum modul dimuat...");

  const modul = await import("./fitur-berat.mjs");

  console.log("Modul berhasil dimuat!");
  modul.fiturBerat();
}

muatFiturSaatDibutuhkan();
```

> **Perhatian:** Hasil dari `import()` adalah objek berisi **semua named export** dari module tersebut (plus properti `default` jika ada default export) — bukan langsung nilai ekspor itu sendiri. Karena itu perlu destructuring: `const { fiturBerat } = await import(...)`.

## Kapan Dynamic Import Bermanfaat

- **Fitur yang jarang dipakai** — misalnya modul export-ke-PDF yang hanya dibutuhkan sebagian kecil pengguna, tidak perlu dimuat di awal untuk semua orang.
- **Conditional loading** — memuat modul berbeda tergantung kondisi tertentu (misalnya bahasa pengguna, jenis perangkat).
- **Mempercepat waktu muat awal** — aplikasi web besar bisa terasa jauh lebih cepat dimuat kalau modul-modul berat ditunda sampai benar-benar dibutuhkan (dikenal sebagai *code splitting* di dunia frontend modern).

```js
async function muatBerdasarkanBahasa(kodeBahasa) {
  let modul;

  if (kodeBahasa === "id") {
    modul = await import("./bahasa/indonesia.mjs");
  } else {
    modul = await import("./bahasa/inggris.mjs");
  }

  console.log(modul.sapaan);
}

muatBerdasarkanBahasa("id"); // hanya memuat file bahasa Indonesia, bukan keduanya
```

## Latihan

Buat fungsi async `muatModulOpsional(namaFitur)` yang mencoba memuat module secara dinamis dari path `` `./fitur/${namaFitur}.mjs` ``, dan menangkap error dengan `try/catch` jika file-nya tidak ditemukan (misalnya mencetak `"Fitur tidak tersedia"`).

<details>
<summary>Lihat Jawaban</summary>

```js
async function muatModulOpsional(namaFitur) {
  try {
    const modul = await import(`./fitur/${namaFitur}.mjs`);
    return modul;
  } catch (error) {
    console.log("Fitur tidak tersedia:", namaFitur);
    return null;
  }
}
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.mjs`) ada di file [fitur-berat.mjs](./fitur-berat.mjs), [bahasa/indonesia.mjs](./bahasa/indonesia.mjs), [bahasa/inggris.mjs](./bahasa/inggris.mjs), [fitur/laporan.mjs](./fitur/laporan.mjs), [contoh.mjs](./contoh.mjs) pada folder ini.

[← Re-export dan Barrel File](../06 Re-export dan Barrel File/Readme.md) | [Circular Dependency (Ketergantungan Melingkar) →](../08 Circular Dependency/Readme.md)
