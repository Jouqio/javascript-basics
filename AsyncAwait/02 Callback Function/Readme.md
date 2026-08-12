# 02. Callback Function

> Fungsi yang dikirim sebagai argumen untuk dijalankan nanti — fondasi dari semua pola asynchronous di JavaScript.

## Tujuan Pembelajaran

- Memahami definisi callback function
- Membedakan callback synchronous dan asynchronous
- Menulis fungsi yang menerima callback sebagai parameter

## Fungsi adalah 'Warga Kelas Satu'

Di JavaScript, fungsi bisa diperlakukan seperti nilai biasa: disimpan ke variabel, dikirim sebagai argumen, atau dikembalikan dari fungsi lain. Fungsi yang **dikirim sebagai argumen untuk dipanggil di kemudian waktu** disebut *callback function*.

```js
function sapa(nama) {
  console.log("Halo, " + nama);
}

function proses(callback) {
  callback("Syauqi");
}

proses(sapa); // Halo, Syauqi
```

## Callback Synchronous vs Asynchronous

Tidak semua callback itu asynchronous. Contoh callback synchronous yang sudah sering dipakai: `array.map()`, `array.forEach()`.

Sedangkan callback **asynchronous** dijalankan nanti, setelah suatu operasi (timer, request jaringan, baca file) selesai.

```js
// Callback synchronous - dijalankan langsung, saat itu juga
[1, 2, 3].forEach((angka) => {
  console.log(angka * 2);
});

// Callback asynchronous - dijalankan nanti oleh Web API
setTimeout(() => {
  console.log("Dijalankan setelah 1 detik");
}, 1000);
```

## Membuat Fungsi Sendiri yang Menerima Callback

```js
function ambilData(id, onSelesai) {
  setTimeout(() => {
    const data = { id: id, nama: "Produk " + id };
    onSelesai(data);
  }, 1000);
}

ambilData(7, (data) => {
  console.log("Data diterima:", data);
});
```

> **Tips:** Pola inilah cikal bakal `Promise` dan `async/await`. Sebelum keduanya ada, callback adalah satu-satunya cara menangani operasi asynchronous di JavaScript.

## Latihan

Buat fungsi `hitungMundur(detik, selesai)` yang memanggil callback `selesai()` setelah menunggu sejumlah `detik` menggunakan `setTimeout`.

<details>
<summary>Lihat Jawaban</summary>

```js
function hitungMundur(detik, selesai) {
  setTimeout(() => {
    selesai();
  }, detik * 1000);
}

hitungMundur(3, () => {
  console.log("Waktu habis!");
});
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Pengantar Asynchronous JavaScript](../01 Pengantar Asynchronous JavaScript/Readme.md) | [Callback Hell →](../03 Callback Hell/Readme.md)
