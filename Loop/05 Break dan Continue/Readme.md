# 05 - Break dan Continue

## Mengontrol Alur Loop dari Dalam

Selain kondisi utama loop, JavaScript menyediakan 2 keyword untuk **mengontrol jalannya loop dari dalam**: `break` dan `continue`.

## `break` — Menghentikan Loop Sepenuhnya

`break` **langsung menghentikan loop**, keluar sepenuhnya, tidak peduli kondisi awal loop masih `true` atau tidak.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // loop LANGSUNG BERHENTI saat i = 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4  (angka 5 dan seterusnya tidak akan pernah tercetak)
```

### Kapan `break` Berguna?

Sangat berguna untuk **menghentikan pencarian begitu hasil ditemukan**, supaya tidak membuang waktu memproses sisa data yang tidak perlu lagi dicek.

```js
let daftarSiswa = ["Andi", "Budi", "Citra", "Dedi"];
let dicari = "Citra";

for (let i = 0; i < daftarSiswa.length; i++) {
  if (daftarSiswa[i] === dicari) {
    console.log(`Ditemukan di index ${i}`);
    break; // langsung berhenti, tidak perlu cek sisa data
  }
}
```

## `continue` — Melompati Iterasi Saat Ini

`continue` **tidak menghentikan seluruh loop**, tapi hanya **melompati sisa kode di iterasi saat ini**, lalu langsung lanjut ke iterasi berikutnya.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // lewati angka 2, lanjut ke iterasi berikutnya
  }
  console.log(i);
}
// Output: 0, 1, 3, 4  (angka 2 dilewati, TAPI loop tetap lanjut sampai selesai)
```

### Kapan `continue` Berguna?

Berguna untuk **melewati data yang tidak memenuhi syarat**, tanpa perlu menghentikan keseluruhan loop.

```js
let angka = [1, -2, 3, -4, 5, -6];
let totalPositif = 0;

for (let i = 0; i < angka.length; i++) {
  if (angka[i] < 0) {
    continue; // lewati angka negatif
  }
  totalPositif += angka[i];
}
console.log("Total angka positif:", totalPositif); // 1+3+5 = 9
```

## Perbandingan `break` vs `continue`

| | `break` | `continue` |
|---|---|---|
| Efek | **Menghentikan** loop sepenuhnya | **Melompati** iterasi saat ini saja |
| Loop lanjut? | Tidak, langsung keluar | Ya, lanjut ke iterasi berikutnya |
| Analogi | Keluar dari antrean sepenuhnya | Melompati 1 orang di antrean, tetap lanjut antre |

## Label untuk Loop Bersarang (Lanjutan)

Untuk kasus **nested loop** (loop di dalam loop), `break`/`continue` biasa hanya memengaruhi loop **terdalam**. Untuk menghentikan loop luar dari dalam loop dalam, bisa memakai **label**:

```js
luar: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      break luar; // menghentikan LOOP LUAR, bukan cuma loop dalam
    }
    console.log(`i=${i}, j=${j}`);
  }
}
```

Fitur label ini **jarang dipakai** karena bisa membuat kode lebih sulit dibaca — kebanyakan kasus lebih baik diselesaikan dengan fungsi terpisah atau flag boolean. Tapi penting untuk tahu keberadaannya.

## Poin Penting

- `break` = menghentikan loop **sepenuhnya**, langsung keluar
- `continue` = melompati **iterasi saat ini saja**, loop tetap lanjut
- `break` berguna untuk berhenti setelah hasil ditemukan (efisiensi)
- `continue` berguna untuk melewati data yang tidak memenuhi syarat
- Label memungkinkan `break`/`continue` memengaruhi loop luar pada nested loop, tapi jarang dipakai

Lanjut ke → [06 Nested Loop (Loop Bersarang)](../06%20Nested%20Loop%20(Loop%20Bersarang)/Readme.md)
