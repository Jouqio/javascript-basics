# 12. Optional Chaining (?.) dan Nullish Coalescing (??)

> Dua operator modern untuk menangani nilai null/undefined dengan aman, tanpa banyak pengecekan manual.

## Tujuan Pembelajaran

- Menggunakan optional chaining untuk mengakses properti bersarang dengan aman
- Menggunakan nullish coalescing untuk memberi nilai fallback
- Memahami perbedaan nullish coalescing (??) dengan OR (||)

## Masalah Mengakses Properti Bersarang

Mengakses properti yang bersarang dalam (misalnya `user.alamat.kota`) akan **error** kalau salah satu bagian di tengah bernilai `null`/`undefined`. Cara lama harus mengecek setiap level satu per satu.

```js
const user = { nama: "Syauqi" }; // tidak ada properti alamat

// console.log(user.alamat.kota); // Error! Cannot read properties of undefined

// Cara lama: pengecekan manual berlapis
var kota = user && user.alamat && user.alamat.kota;
console.log(kota); // undefined, tidak error
```

## Optional Chaining (?.)

Operator `?.` mengakses properti secara aman — jika bagian sebelumnya `null`/`undefined`, ekspresi langsung berhenti dan menghasilkan `undefined`, **tanpa error**.

```js
const user = { nama: "Syauqi" };

console.log(user?.alamat?.kota); // undefined, tidak error
console.log(user?.nama);         // "Syauqi"

// Juga berlaku untuk pemanggilan method yang mungkin tidak ada
const obj = {};
console.log(obj.metodeTidakAda?.()); // undefined, tidak error

// Dan untuk elemen array
const daftar = null;
console.log(daftar?.[0]); // undefined, tidak error
```

## Nullish Coalescing (??)

Operator `??` memberi nilai **fallback** hanya jika nilai di kirinya `null` atau `undefined` — berbeda dengan `||` yang juga menganggap `0`, `""`, atau `false` sebagai alasan memakai fallback.

```js
const kuotaOR = 0 || 10;
console.log(kuotaOR); // 10 -- SALAH! 0 dianggap falsy, padahal sengaja diisi 0

const kuotaNullish = 0 ?? 10;
console.log(kuotaNullish); // 0 -- BENAR, karena 0 bukan null/undefined

const namaOR = "" || "Tamu";
console.log(namaOR); // "Tamu" -- string kosong dianggap falsy

const namaNullish = "" ?? "Tamu";
console.log(namaNullish); // "" -- string kosong tetap dipertahankan
```

> **Perhatian:** Kesalahan umum pemula: memakai `||` untuk nilai default padahal nilai `0`, string kosong, atau `false` adalah nilai valid yang sengaja diisi. Di situasi seperti ini, `??` adalah pilihan yang benar.

## Menggabungkan Keduanya

Optional chaining dan nullish coalescing sering dipakai berdampingan: akses properti bersarang dengan aman, lalu beri nilai fallback jika hasilnya `undefined`.

```js
const konfigurasi = {
  tampilan: {
    tema: "gelap",
  },
};

const tema = konfigurasi?.tampilan?.tema ?? "terang";
console.log(tema); // "gelap"

const bahasa = konfigurasi?.tampilan?.bahasa ?? "id";
console.log(bahasa); // "id" (properti bahasa tidak ada, pakai fallback)
```

> **Tips:** Pola `objek?.properti?.dalam ?? nilaiDefault` sangat umum dipakai saat bekerja dengan data dari API yang strukturnya tidak selalu lengkap.

## Latihan

Diberikan objek berikut, ambil `data?.pengguna?.email` dengan aman, lalu beri fallback `"tidak ada email"` jika hasilnya kosong:

```js
const data = { pengguna: { nama: "Syauqi" } }; // tidak ada properti email
```

<details>
<summary>Lihat Jawaban</summary>

```js
const data = { pengguna: { nama: "Syauqi" } };
const email = data?.pengguna?.email ?? "tidak ada email";
console.log(email); // "tidak ada email"
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Map dan Set](../11 Map dan Set/Readme.md) | [Kuis: ES6+ →](../13 Kuis ES6+/Readme.md)
