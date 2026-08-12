# 04. JavaScript setTimeout()

> Menjadwalkan sebuah fungsi untuk dijalankan satu kali setelah jeda waktu tertentu.

## Tujuan Pembelajaran

- Memahami syntax dan parameter setTimeout()
- Mengetahui bahwa delay adalah waktu minimum, bukan waktu pasti
- Mengirim argumen tambahan ke dalam callback setTimeout

## Syntax Dasar

- **fungsiCallback** — fungsi yang dijalankan setelah delay berakhir.
- **delayMs** — jeda waktu dalam milidetik (1000 ms = 1 detik). Opsional, default 0.
- **arg1, arg2, ...** — argumen tambahan opsional yang diteruskan ke fungsiCallback.
- **timerId** — angka unik yang bisa dipakai untuk membatalkan timer dengan `clearTimeout()` (lihat materi 05).

```js
const timerId = setTimeout(fungsiCallback, delayMs, arg1, arg2);
```

## Contoh Penggunaan

Bentuk arrow function juga umum dipakai supaya lebih ringkas.

```js
function tampilkanPesan(nama) {
  console.log(nama + ", waktunya istirahat!");
}
setTimeout(tampilkanPesan, 3000, "Syauqi");
// Setelah 3 detik: "Syauqi, waktunya istirahat!"

setTimeout(() => {
  console.log("3 detik telah berlalu");
}, 3000);
```

## Delay Bukan Jaminan Waktu Pasti

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

// Output: A, C, B
// Walau delay 0 ms, callback tetap masuk queue
// dan menunggu call stack kosong terlebih dahulu.
```

> **Perhatian:** `setTimeout(fn, 1000)` berarti "jalankan *paling cepat* setelah 1000 ms", bukan "jalankan tepat di detik ke-1000". Jika call stack sedang sibuk, callback akan menunggu sampai stack kosong — sesuai konsep event loop di materi 01.

## Latihan

Buat kode yang menampilkan `"Pesanan diproses"` setelah 2 detik, lalu `"Pesanan dikirim"` setelah 2 detik berikutnya (total 4 detik dari awal).

<details>
<summary>Lihat Jawaban</summary>

```js
console.log("Pesanan diterima");

setTimeout(() => {
  console.log("Pesanan diproses");
}, 2000);

setTimeout(() => {
  console.log("Pesanan dikirim");
}, 4000);
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Callback Hell](../03 Callback Hell/Readme.md) | [JavaScript clearTimeout() →](../05 JavaScript clearTimeout()/Readme.md)
