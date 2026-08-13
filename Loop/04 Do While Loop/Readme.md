# 04 - Do While Loop

## Apa itu Do While Loop?

**Do...while loop** mirip dengan `while` loop, tapi dengan **satu perbedaan penting**: kode di dalam `do` **pasti dijalankan minimal 1 kali**, **sebelum** kondisi dicek. Ini berbeda dari `while` biasa yang mengecek kondisi **terlebih dahulu** sebelum menjalankan kode apapun.

## Struktur Do While Loop

```js
do {
  // kode yang diulang (dijalankan DULU, minimal 1 kali)
} while (kondisi); // kondisi dicek SETELAH kode dijalankan
```

## Perbedaan Utama dengan While Loop

| | `while` | `do...while` |
|---|---|---|
| Urutan | Cek kondisi **dulu**, baru jalankan kode | Jalankan kode **dulu**, baru cek kondisi |
| Minimal dijalankan | Bisa **0 kali** (kalau kondisi awal sudah `false`) | **Selalu minimal 1 kali**, walaupun kondisi awal `false` |

### Contoh Perbandingan

```js
// while: kalau kondisi awal false, kode TIDAK PERNAH dijalankan
let a = 10;
while (a < 5) {
  console.log("Ini tidak akan pernah tercetak");
}

// do...while: kode TETAP dijalankan minimal 1 kali, walau kondisi awal false
let b = 10;
do {
  console.log("Ini akan tercetak SATU KALI, walaupun kondisi awal false");
} while (b < 5);
```

## Kapan Do While Berguna?

`do...while` sangat cocok untuk skenario yang **harus dijalankan setidaknya sekali**, baru kemudian dicek apakah perlu diulang. Contoh paling umum:

- **Menu interaktif** — tampilkan menu dulu, baru tanya apakah user ingin mengulang
- **Validasi input** — minta input dulu, baru cek apakah valid, ulangi kalau belum valid
- **Game loop sederhana** — jalankan 1 ronde permainan dulu, baru tanya "main lagi?"

```js
// Contoh sederhana: simulasi menu yang minimal tampil 1 kali
let pilihan;
let percobaan = 0;

do {
  percobaan++;
  pilihan = percobaan < 3 ? "salah" : "keluar"; // simulasi input user
  console.log(`Percobaan ke-${percobaan}: pilihan = "${pilihan}"`);
} while (pilihan !== "keluar");
```

## Poin Penting

- `do...while` menjalankan kode **dulu**, baru mengecek kondisi setelahnya
- Kode di dalam `do` **selalu dijalankan minimal 1 kali**, bahkan jika kondisi awal `false`
- Cocok untuk skenario yang "harus dicoba dulu, baru dicek apakah perlu diulang" — misalnya menu, validasi input, atau game sederhana
- Jangan lupa titik koma (`;`) setelah `while(kondisi)` pada `do...while`

Lanjut ke → [05 Break dan Continue](../05%20Break%20dan%20Continue/Readme.md)
