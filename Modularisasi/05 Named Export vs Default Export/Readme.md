# 05. Named Export vs Default Export

> Kapan sebaiknya memakai named export, kapan default export, dan bagaimana menggabungkan keduanya dengan rapi.

## Tujuan Pembelajaran

- Memahami perbedaan mendasar named export dan default export
- Mengetahui kelebihan dan kekurangan masing-masing
- Menggabungkan named dan default export dalam satu file secara tepat

## Perbandingan Langsung

| | Named Export | Default Export |
|---|---|---|
| Jumlah per file | Boleh banyak | Maksimal satu |
| Syntax import | `import { nama } from ...` | `import namaBebas from ...` |
| Nama saat import | Harus sama (kecuali pakai `as`) | Bebas ditentukan |
| Cocok untuk | Banyak fungsi/nilai utilitas terkait | Satu nilai utama yang mewakili file itu |

## Kelebihan Named Export

- **Konsisten** — nama yang sama dipakai di seluruh proyek, memudahkan pencarian ("cari semua pemakaian `tambah`").
- **Auto-complete lebih baik** — editor kode bisa menyarankan nama-nama yang tersedia untuk di-import.
- **Bisa impor sebagian** — hanya mengimpor yang dibutuhkan, bukan semuanya.

```js
// utilitas.mjs
export function formatRupiah(angka) { /* ... */ }
export function formatTanggal(tanggal) { /* ... */ }
export function validasiEmail(email) { /* ... */ }

// di file lain, impor hanya yang dibutuhkan:
import { formatRupiah } from "./utilitas.mjs";
```

## Kelebihan Default Export

- **Cocok untuk satu nilai utama** — misalnya satu class, satu komponen, atau satu objek konfigurasi yang mewakili keseluruhan isi file.
- **Nama fleksibel** — pemanggil bebas memberi nama sesuai konteks pemakaian, tanpa perlu `as`.

```js
// Kendaraan.mjs - satu class utama, cocok default export
export default class Kendaraan {
  constructor(merek) {
    this.merek = merek;
  }
}

// di file lain, bebas beri nama apa saja:
import Mobil from "./Kendaraan.mjs";
import Motor from "./Kendaraan.mjs"; // sama-sama valid, nama bebas
```

> **Perhatian:** Fleksibilitas nama pada default import juga jadi **kelemahannya**: dua developer bisa memberi nama berbeda untuk hal yang sama, membuat kode kurang konsisten di seluruh proyek besar.

## Menggabungkan Keduanya dalam Satu File

Satu file boleh punya kombinasi keduanya: satu default export sebagai "nilai utama", plus beberapa named export sebagai pelengkap.

```js
// kalkulator.mjs
export const versi = "1.0.0"; // named export
export function tambah(a, b) {  // named export
  return a + b;
}

export default class Kalkulator { // default export
  hitung(a, b, operator) {
    if (operator === "+") return tambah(a, b);
    throw new Error("Operator tidak dikenali");
  }
}

// --- di file lain ---
import Kalkulator, { tambah, versi } from "./kalkulator.mjs";

const k = new Kalkulator();
console.log(k.hitung(2, 3, "+")); // 5
console.log(tambah(10, 5));       // 15
console.log(versi);               // "1.0.0"
```

> **Tips:** Aturan praktis yang umum dipakai tim profesional: gunakan **default export** untuk "benda utama" yang jadi alasan file itu ada (misal satu class atau satu komponen React), dan **named export** untuk hal-hal pendukung terkait (konstanta, fungsi utilitas kecil).

## Latihan

File `notifikasi.mjs` perlu mengekspor: (1) default export berupa fungsi `kirimNotifikasi(pesan)`, dan (2) named export berupa konstanta `TIPE_NOTIFIKASI` (array berisi `["info", "peringatan", "error"]`). Tulis isi file tersebut.

<details>
<summary>Lihat Jawaban</summary>

```js
// notifikasi.mjs
export const TIPE_NOTIFIKASI = ["info", "peringatan", "error"];

export default function kirimNotifikasi(pesan) {
  console.log(`Notifikasi: ${pesan}`);
}
```

Lalu dipakai dengan:

```js
import kirimNotifikasi, { TIPE_NOTIFIKASI } from "./notifikasi.mjs";
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.mjs`) ada di file [kalkulator.mjs](./kalkulator.mjs), [notifikasi.mjs](./notifikasi.mjs), [contoh.mjs](./contoh.mjs) pada folder ini.

[← ES Modules — export dan import Dasar](../04 ES Modules - Export dan Import Dasar/Readme.md) | [Re-export dan Barrel File →](../06 Re-export dan Barrel File/Readme.md)
