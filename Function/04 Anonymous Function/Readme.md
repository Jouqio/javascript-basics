# 04. Anonymous Function

## Apa itu Anonymous Function?

**Anonymous Function** adalah function yang **tidak memiliki nama**. Function seperti ini biasanya dibuat langsung di tempat ia dibutuhkan, tanpa perlu didefinisikan dan diberi nama terlebih dahulu.

```javascript
function (parameter) {
  // isi function
}
```

Perhatikan: tidak ada nama setelah kata kunci `function`. Kode di atas **tidak valid** jika berdiri sendiri — anonymous function **harus** digunakan dalam konteks tertentu, misalnya:

## 1. Disimpan ke Variabel (menjadi Function Expression)

```javascript
const sapa = function (nama) {   // anonymous function disimpan ke variabel "sapa"
  return "Halo, " + nama + "!";
};
```

Ini yang sudah kita pelajari di materi sebelumnya (**Function Expression**) — function-nya sendiri anonim, tapi diberi "nama" secara tidak langsung lewat nama variabel.

## 2. Sebagai Callback (Paling Umum!)

Anonymous function paling sering dipakai sebagai **callback** — function yang dikirim sebagai argument ke function lain, untuk dijalankan nanti.

```javascript
// Anonymous function dikirim langsung sebagai argument
setTimeout(function () {
  console.log("Ini dijalankan setelah 2 detik");
}, 2000);

button.addEventListener("click", function () {
  console.log("Tombol diklik!");
});

const angkaGenap = [1, 2, 3, 4, 5, 6].filter(function (angka) {
  return angka % 2 === 0;
});
```

Karena function ini **hanya dipakai sekali** di tempat itu saja, memberi nama pada function tersebut jadi tidak terlalu penting.

## Kelebihan Anonymous Function

- **Ringkas** — tidak perlu memikirkan nama untuk function yang hanya dipakai sekali
- Cocok untuk **callback** yang sifatnya sekali pakai
- Mengurangi "polusi" nama function di lingkup global

## Kekurangan Anonymous Function

- **Sulit di-debug** — saat terjadi error, stack trace di console browser akan menampilkan `<anonymous>` alih-alih nama function yang jelas
- **Tidak bisa dipanggil ulang** dari tempat lain (karena tidak punya nama)
- Tidak bisa melakukan **rekursi** langsung (kecuali di-assign nama internal seperti Named Function Expression)

```javascript
// Sulit di-debug: stack trace hanya menunjukkan "anonymous"
array.map(function (item) {
  return item.harga.toUpperCase(); // seandainya ada error di sini...
});
// Error: ... at <anonymous> (sulit tahu function mana yang error jika banyak)
```

👉 **Tips:** Untuk callback yang **kompleks** atau berpotensi error, sebaiknya beri nama pada function-nya agar lebih mudah di-debug:

```javascript
array.map(function ubahKeUppercase(item) {   // diberi nama
  return item.harga.toUpperCase();
});
```

## Kapan Menggunakan Anonymous Function?

- Callback sederhana dan sekali pakai (`setTimeout`, `addEventListener`, `.map()`, `.filter()`)
- Ketika function hanya relevan di satu tempat saja dan tidak perlu dipanggil ulang

Buka `contoh.html` untuk melihat berbagai penggunaan anonymous function sebagai callback.

➡️ Lanjut ke materi berikutnya: **05. Arrow Function**
