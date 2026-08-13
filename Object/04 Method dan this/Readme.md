# 04 - Method dan `this`

## Apa itu Method?

**Method** adalah properti object yang **nilainya berupa fungsi**. Sederhananya, method adalah "aksi/kemampuan" yang dimiliki oleh sebuah object.

```js
let mobil = {
  merk: "Toyota",
  nyalakanMesin: function () {
    console.log("Mesin dinyalakan!");
  },
};

mobil.nyalakanMesin(); // "Mesin dinyalakan!"
```

## Cara Penulisan Method (Shorthand)

JavaScript modern (ES6+) menyediakan penulisan yang lebih ringkas untuk method, tanpa perlu menulis `function`:

```js
// Cara lama
let mobil = {
  nyalakanMesin: function () {
    console.log("Mesin dinyalakan!");
  },
};

// Cara modern (method shorthand) - lebih ringkas
let mobil2 = {
  nyalakanMesin() {
    console.log("Mesin dinyalakan!");
  },
};
```

Keduanya berfungsi **persis sama**, cara modern hanya lebih ringkas untuk ditulis.

## Apa itu `this`?

`this` adalah keyword khusus yang **merujuk ke object tempat method itu dipanggil**. Dengan `this`, sebuah method bisa mengakses properti lain dari object yang sama.

```js
let siswa = {
  nama: "Rina",
  jurusan: "Teknik Informatika",
  perkenalan() {
    console.log(`Halo, saya ${this.nama}, jurusan ${this.jurusan}`);
  },
};

siswa.perkenalan(); // "Halo, saya Rina, jurusan Teknik Informatika"
```

Tanpa `this`, method tidak akan tahu object mana yang sedang memanggilnya — `this` adalah "jembatan" yang menghubungkan method dengan data object-nya.

## Nilai `this` Bergantung pada CARA Method Dipanggil

Ini yang sering membingungkan pemula: nilai `this` **tidak tetap**, tapi berubah tergantung **bagaimana fungsi tersebut dipanggil**, bukan di mana fungsi tersebut ditulis.

```js
let obj = {
  nama: "Objek A",
  tampilkan() {
    console.log(this.nama);
  },
};

obj.tampilkan(); // "Objek A" -> this merujuk ke obj, karena dipanggil via obj.tampilkan()

let fungsiLepas = obj.tampilkan;
fungsiLepas(); // undefined (atau error di strict mode) -> this TIDAK lagi merujuk ke obj!
```

## Hindari Arrow Function untuk Method yang Butuh `this`

**Arrow function (`=>`) TIDAK punya `this` sendiri** — ia akan "meminjam" `this` dari lingkungan kode di sekitarnya (bukan dari object tempat ia didefinisikan). Ini sering menjadi jebakan bagi pemula:

```js
let siswa = {
  nama: "Budi",
  // JANGAN pakai arrow function untuk method yang butuh this!
  perkenalanSalah: () => {
    console.log(`Halo, saya ${this.nama}`); // this DI SINI bukan merujuk ke siswa!
  },
};

siswa.perkenalanSalah(); // "Halo, saya undefined" -> SALAH!
```

**Aturan sederhana**: untuk method yang butuh mengakses properti object lewat `this`, selalu gunakan `function` biasa atau method shorthand, **jangan** arrow function.

## Poin Penting

- Method = properti object yang nilainya berupa fungsi
- Gunakan method shorthand (`nama() {...}`) untuk penulisan yang lebih ringkas
- `this` merujuk ke object yang memanggil method tersebut
- Nilai `this` ditentukan oleh **cara pemanggilan**, bukan tempat penulisan kode
- Hindari arrow function untuk method yang membutuhkan `this`

Lanjut ke → [05 Object Bersarang (Nested Object)](../05%20Object%20Bersarang%20(Nested%20Object)/Readme.md)
