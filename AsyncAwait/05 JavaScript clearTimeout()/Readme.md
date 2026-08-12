# 05. JavaScript clearTimeout()

> Membatalkan timer yang dijadwalkan oleh setTimeout() sebelum callback-nya sempat dijalankan.

## Tujuan Pembelajaran

- Memahami kegunaan clearTimeout()
- Menyimpan dan menggunakan timer ID dengan benar
- Menerapkan pola debounce sederhana menggunakan clearTimeout()

## Kenapa Perlu Membatalkan Timer?

Setiap kali `setTimeout()` dipanggil, ia mengembalikan sebuah **ID timer** (angka). ID ini disimpan agar timer bisa **dibatalkan** sebelum waktunya habis, menggunakan `clearTimeout(id)`.

```js
const timerId = setTimeout(() => {
  console.log("Ini tidak akan pernah tampil");
}, 5000);

clearTimeout(timerId); // Timer dibatalkan sebelum 5 detik berlalu
```

## Contoh Kasus Nyata: Tombol Notifikasi

Bayangkan notifikasi otomatis hilang setelah 3 detik, tapi harus langsung hilang jika pengguna menekan tombol "Tutup".

```js
let timerNotifikasi = setTimeout(() => {
  sembunyikanNotifikasi();
}, 3000);

tombolTutup.addEventListener("click", () => {
  clearTimeout(timerNotifikasi);
  sembunyikanNotifikasi();
});
```

## Pola Debounce Sederhana

`clearTimeout()` adalah dasar dari teknik *debounce*: menunda eksekusi sampai pengguna berhenti mengetik selama jeda tertentu — umum dipakai di kolom pencarian.

```js
let debounceId;

function saatMengetik(kataKunci) {
  clearTimeout(debounceId); // batalkan timer sebelumnya
  debounceId = setTimeout(() => {
    console.log("Mencari:", kataKunci);
  }, 500);
}

// Setiap kali dipanggil sebelum 500ms, timer lama dibatalkan
saatMengetik("j");
saatMengetik("ja");
saatMengetik("jav"); // hanya ini yang akhirnya dieksekusi
```

> **Tips:** Selalu simpan ID dari `setTimeout()` ke variabel jika ada kemungkinan timer perlu dibatalkan. ID yang tidak disimpan tidak bisa dibatalkan lagi.

## Latihan

Kenapa pada contoh debounce di atas, hanya `"jav"` yang akhirnya tercetak, bukan ketiga-tiganya?

<details>
<summary>Lihat Jawaban</summary>

Karena setiap pemanggilan `saatMengetik()` membatalkan timer sebelumnya lewat `clearTimeout(debounceId)`. Hanya panggilan **terakhir** yang timernya sempat berjalan penuh 500ms tanpa dibatalkan.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← JavaScript setTimeout()](../04 JavaScript setTimeout()/Readme.md) | [setInterval() dan clearInterval() →](../06 setInterval dan clearInterval/Readme.md)
