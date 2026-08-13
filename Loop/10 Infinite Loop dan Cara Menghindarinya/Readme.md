# 10 - Infinite Loop dan Cara Menghindarinya

## Apa itu Infinite Loop?

**Infinite loop (loop tak berhenti)** adalah loop yang **kondisinya tidak pernah menjadi `false`**, sehingga program akan terus berjalan **selamanya** — biasanya menyebabkan program **hang/macet**, atau browser/aplikasi menjadi tidak responsif.

```js
// CONTOH INFINITE LOOP - JANGAN DIJALANKAN SUNGGUHAN!
let i = 0;
while (i < 5) {
  console.log(i);
  // lupa i++ -> i akan SELAMANYA 0, kondisi (0 < 5) SELAMANYA true
}
```

## Penyebab Umum Infinite Loop

### 1. Lupa Meng-update Variabel Kondisi
```js
for (let i = 0; i < 5; ) { // lupa i++ di bagian update
  console.log(i);
}
```

### 2. Update Variabel yang Salah
```js
let i = 0;
while (i < 5) {
  console.log(i);
  i--; // SALAH! seharusnya i++, ini malah membuat i makin kecil, tidak akan pernah >= 5
}
```

### 3. Kondisi yang Salah Logika
```js
let i = 10;
while (i > 0) {
  console.log(i);
  i++; // SALAH! ini membuat i makin besar, tidak akan pernah <= 0
}
```

### 4. Kondisi Selalu True karena Kesalahan Penulisan
```js
let i = 0;
while (i = 5) { // SALAH! pakai = (assignment) bukan == atau === (perbandingan)
  console.log(i);
  i++;
}
// "i = 5" akan MENG-ASSIGN nilai 5 ke i, dan hasil assignment (5) dianggap truthy -> infinite loop!
```

**Tips**: selalu gunakan `===` untuk perbandingan, jangan sampai salah ketik jadi `=` saja.

## Cara Mendeteksi dan Menghindari Infinite Loop

### 1. Selalu Pastikan Ada Perubahan Menuju Kondisi Berhenti
Sebelum menjalankan loop, tanyakan pada diri sendiri: *"Apakah variabel yang dicek di kondisi PASTI akan berubah menuju arah yang membuat kondisi jadi `false`?"*

### 2. Gunakan `for` Daripada `while` Kalau Jumlah Iterasi Sudah Diketahui
`for` loop secara struktur "memaksa" kita menulis update di header, mengurangi risiko lupa.

### 3. Tambahkan Batas Pengaman (Safety Limit)
Untuk loop dengan kondisi yang kompleks, tambahkan penghitung maksimum sebagai jaring pengaman:

```js
let i = 0;
let maksimalPercobaan = 1000; // batas pengaman
let percobaan = 0;

while (kondisiKompleks() && percobaan < maksimalPercobaan) {
  // proses...
  percobaan++;
}
```

### 4. Uji Loop dengan Data Kecil Dulu
Sebelum menjalankan loop pada data besar, coba dulu dengan range kecil (misalnya 1-5) untuk memastikan logikanya benar.

## Apa yang Terjadi Kalau Infinite Loop Terjadi?

- **Di Node.js**: program akan hang, harus dihentikan manual dengan `Ctrl+C`
- **Di browser**: tab bisa menjadi tidak responsif ("Aw, Snap!" atau freeze), kadang browser menawarkan untuk menghentikan skrip
- Bisa menghabiskan resource CPU/memory secara signifikan

## Infinite Loop yang DISENGAJA (Kadang Berguna!)

Kadang-kadang infinite loop memang **sengaja dibuat**, misalnya untuk game loop atau server yang harus terus berjalan — tapi **selalu ada `break` di dalamnya** untuk kondisi berhenti tertentu:

```js
while (true) { // sengaja infinite
  let perintah = ambilPerintahDariUser(); // fungsi simulasi
  if (perintah === "keluar") {
    break; // ini yang membuatnya BUKAN infinite loop sungguhan
  }
  // proses perintah lainnya...
}
```

## Poin Penting

- Infinite loop = loop yang kondisinya tidak pernah `false`, menyebabkan program hang
- Penyebab umum: lupa update variabel, update yang salah arah, atau salah tulis `=` alih-alih `===`
- Selalu pastikan ada perubahan variabel menuju kondisi berhenti
- Gunakan safety limit (batas maksimal percobaan) untuk loop dengan kondisi kompleks
- `while (true)` yang disengaja **harus** punya `break` di dalamnya

Lanjut ke → [11 Studi Kasus dan Optimasi Loop](../11%20Studi%20Kasus%20dan%20Optimasi%20Loop/Readme.md)
