# 12. Praktik Terbaik Modularisasi

> Kumpulan prinsip yang membuat module tetap mudah dipahami, diuji, dan dipelihara seiring proyek berkembang.

## Tujuan Pembelajaran

- Menerapkan prinsip Single Responsibility pada module
- Menghindari efek samping (side effect) yang tersembunyi di dalam module
- Menulis module yang mudah diuji secara terisolasi

## 1. Satu Module, Satu Tanggung Jawab

Prinsip **Single Responsibility**: setiap module sebaiknya punya **satu alasan untuk berubah**. Kalau sebuah file bertanggung jawab atas validasi, pengiriman email, DAN penyimpanan database sekaligus, module itu terlalu "gemuk" dan sulit dipelihara.

```js
// KURANG BAIK - satu file mengerjakan terlalu banyak hal
// userManager.mjs
export function validasiEmail(email) { /* ... */ }
export function kirimEmailSelamatDatang(email) { /* ... */ }
export function simpanKeDatabase(user) { /* ... */ }
export function hitungUsiaDariTanggalLahir(tanggal) { /* ... */ }

// LEBIH BAIK - dipecah sesuai tanggung jawab masing-masing
// validasi.mjs      -> hanya validasiEmail()
// email.mjs         -> hanya kirimEmailSelamatDatang()
// database.mjs      -> hanya simpanKeDatabase()
// tanggal.mjs        -> hanya hitungUsiaDariTanggalLahir()
```

## 2. Hindari Efek Samping Tersembunyi

Module sebaiknya **tidak melakukan sesuatu yang tak terduga** hanya karena di-import — misalnya langsung menghubungkan ke database, mengubah data global, atau mencetak sesuatu ke console begitu file dimuat.

```js
// KURANG BAIK - efek samping langsung terjadi saat di-import
console.log("Modul database sedang dimuat..."); // langsung jalan saat di-import!
let koneksi = hubungkanKeDatabase(); // langsung connect saat import, meski belum tentu dipakai

export function ambilData() {
  return koneksi.query("SELECT * FROM users");
}

// LEBIH BAIK - efek samping ditunda sampai benar-benar dipanggil
let koneksiCache = null;

function dapatkanKoneksi() {
  if (!koneksiCache) {
    koneksiCache = hubungkanKeDatabase(); // baru connect saat benar-benar dibutuhkan
  }
  return koneksiCache;
}

export function ambilDataAman() {
  return dapatkanKoneksi().query("SELECT * FROM users");
}
```

> **Perhatian:** Efek samping tersembunyi membuat module sulit diuji (materi pengujian) karena mengimpornya saja sudah memicu hal-hal yang tidak diinginkan, seperti koneksi jaringan sungguhan.

## 3. Rancang untuk Mudah Diuji

Module yang baik bisa diuji **secara terisolasi**, tanpa perlu menyiapkan seluruh aplikasi. Salah satu triknya: pisahkan fungsi murni (*pure function* — hasilnya hanya bergantung pada input, tanpa efek samping) dari fungsi yang bergantung pada sumber luar (database, API, dsb).

```js
// Fungsi murni - MUDAH diuji, tidak butuh apa pun dari luar
export function hitungDiskon(harga, persenDiskon) {
  return harga - (harga * persenDiskon) / 100;
}

// Bandingkan dengan fungsi yang sulit diuji karena
// tercampur dengan pengambilan data dari luar:
export async function hitungDiskonDariAPI(idProduk) {
  const response = await fetch(`/api/produk/${idProduk}`); // butuh server sungguhan untuk dites!
  const produk = await response.json();
  return hitungDiskon(produk.harga, produk.diskon);
}
```

> **Tips:** Perhatikan bagaimana `hitungDiskonDariAPI` tetap memanfaatkan `hitungDiskon` yang sudah teruji — memisahkan logika murni dari logika yang bergantung sumber luar membuat **sebagian besar logika bisnis tetap mudah diuji**, meski sebagian kecil (pengambilan data) tetap butuh setup tambahan.

## Ringkasan Checklist

- [ ] Setiap module punya satu tanggung jawab yang jelas.
- [ ] Tidak ada efek samping yang langsung terjadi hanya karena file di-import.
- [ ] Fungsi murni dipisahkan dari fungsi yang bergantung pada sumber luar.
- [ ] Nama file dan fungsi jelas menggambarkan isinya.
- [ ] Antarmuka publik (yang diekspor) seminimal mungkin — jangan ekspor sesuatu hanya karena "mungkin nanti dibutuhkan".

## Latihan

Sebuah module `laporan.mjs` langsung mencetak `"Laporan siap dibuat"` ke console begitu file itu di-import, sebelum fungsi apa pun di dalamnya dipanggil. Prinsip praktik terbaik mana yang dilanggar, dan bagaimana cara memperbaikinya?

<details>
<summary>Lihat Jawaban</summary>

Ini melanggar prinsip **"hindari efek samping tersembunyi"** — mencetak ke console (atau efek samping apa pun) seharusnya terjadi hanya saat fungsi yang relevan dipanggil, bukan otomatis saat file di-import. Perbaikannya: pindahkan `console.log("Laporan siap dibuat")` ke dalam sebuah fungsi yang diekspor (misalnya `inisialisasiLaporan()`), sehingga efek sampingnya baru terjadi saat module lain **secara sengaja** memanggil fungsi tersebut.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file [contoh.js](./contoh.js) pada folder ini.

[← Module Scope dan Enkapsulasi](../11 Module Scope dan Enkapsulasi/Readme.md) | [Kuis: Modularisasi →](../13 Kuis Modularisasi/Readme.md)
