# 03 - While Loop

## Apa itu While Loop?

**While loop** menjalankan blok kode **selama kondisi tertentu masih bernilai `true`**. Berbeda dengan `for` loop yang punya struktur inisialisasi-kondisi-update dalam satu baris, `while` hanya fokus pada **kondisi** saja — inisialisasi dan update ditulis terpisah oleh kita sendiri.

## Struktur While Loop

```js
// inisialisasi (di luar loop)
while (kondisi) {
  // kode yang diulang
  // update (di dalam loop)
}
```

Contoh:
```js
let i = 0; // inisialisasi
while (i < 5) { // kondisi
  console.log(i);
  i++; // update, WAJIB ditulis manual, kalau lupa -> infinite loop!
}
// Output: 0, 1, 2, 3, 4
```

## Kapan Menggunakan While, Bukan For?

`while` lebih cocok dipakai ketika **jumlah perulangan tidak diketahui pasti di awal**, dan bergantung pada suatu kondisi yang bisa berubah selama program berjalan.

Contoh skenario yang cocok untuk `while`:
- Meminta input user sampai mereka memasukkan data yang valid
- Mengulang proses sampai mencapai target tertentu (misalnya sampai saldo mencukupi)
- Membaca data sampai menemukan tanda "akhir data"

```js
// Contoh: mengulang sampai ketemu angka tertentu (jumlah percobaan tidak pasti)
let angka = 0;
let percobaan = 0;

while (angka !== 7) {
  angka = Math.floor(Math.random() * 10); // angka acak 0-9
  percobaan++;
}
console.log(`Ketemu di percobaan ke-${percobaan}`);
```

## Perbandingan For vs While

| | `for` | `while` |
|---|---|---|
| Struktur | Inisialisasi, kondisi, update dalam 1 baris | Hanya kondisi, inisialisasi & update terpisah |
| Cocok untuk | Jumlah perulangan **sudah diketahui/dihitung** | Jumlah perulangan **tidak pasti**, bergantung kondisi |
| Risiko lupa update | Kecil (update ada di header loop) | **Lebih besar** (update harus diingat ditulis manual) |

Sebenarnya, **apapun yang bisa dilakukan `for` bisa juga dilakukan `while`**, dan sebaliknya — pemilihannya lebih ke soal **kejelasan maksud kode (readability)**.

## Peringatan: Jangan Lupa Update Kondisi!

Kesalahan paling umum pada `while` adalah **lupa mengubah variabel yang dicek di kondisi**, menyebabkan loop tidak pernah berhenti (infinite loop):

```js
let i = 0;
while (i < 5) {
  console.log(i);
  // LUPA i++ di sini -> INFINITE LOOP! program akan macet/hang
}
```

## Poin Penting

- While loop menjalankan kode selama kondisi bernilai `true`
- Cocok dipakai ketika jumlah perulangan **tidak pasti**, bergantung pada suatu kondisi
- Inisialisasi dan update harus ditulis manual (tidak seperti `for` yang sudah dalam satu baris)
- Selalu pastikan ada perubahan pada variabel kondisi di dalam loop, supaya tidak infinite loop

Lanjut ke → [04 Do While Loop](../04%20Do%20While%20Loop/Readme.md)
