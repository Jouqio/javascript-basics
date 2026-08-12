# 09. Classes di JavaScript

> Syntax berbasis class untuk membuat objek dari 'cetakan' yang sama, dibangun di atas prototype yang sudah ada sejak dulu.

## Tujuan Pembelajaran

- Membuat class dengan constructor dan method
- Menggunakan konsep inheritance dengan extends dan super
- Memahami bahwa class adalah 'sintaks manis' di atas prototype JavaScript

## Sebelum Class: Function Constructor

Sebelum ES6, JavaScript membuat banyak objek serupa memakai *function constructor* dan `prototype` — cara ini masih valid, tapi kurang intuitif dibanding bahasa berorientasi objek lain.

```js
function Hewan(nama, suara) {
  this.nama = nama;
  this.suara = suara;
}

Hewan.prototype.bersuara = function () {
  return this.nama + " berbunyi " + this.suara;
};

var kucing = new Hewan("Kucing", "Meong");
console.log(kucing.bersuara()); // Kucing berbunyi Meong
```

## Class: Syntax yang Lebih Rapi

`class` di ES6 adalah **sintaks manis (syntactic sugar)** di atas mekanisme prototype yang sama — bukan konsep baru, hanya cara penulisan yang lebih rapi dan familiar.

```js
class Hewan {
  constructor(nama, suara) {
    this.nama = nama;
    this.suara = suara;
  }

  bersuara() {
    return `${this.nama} berbunyi ${this.suara}`;
  }
}

const kucing = new Hewan("Kucing", "Meong");
console.log(kucing.bersuara()); // Kucing berbunyi Meong
```

> **Perhatian:** `constructor` adalah method spesial yang otomatis dijalankan saat objek dibuat dengan `new`. Setiap class hanya boleh punya satu `constructor`.

## Inheritance dengan extends dan super

Class bisa **mewarisi** properti dan method dari class lain memakai `extends`. Di dalam constructor class turunan, `super(...)` dipakai untuk memanggil constructor dari class induk.

```js
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  perkenalan() {
    return `Saya adalah ${this.nama}`;
  }
}

class Kucing extends Hewan {
  constructor(nama, ras) {
    super(nama); // memanggil constructor Hewan
    this.ras = ras;
  }

  bersuara() {
    return "Meong!";
  }
}

const kucing = new Kucing("Milo", "Anggora");
console.log(kucing.perkenalan()); // Saya adalah Milo (dari class Hewan)
console.log(kucing.bersuara());   // Meong! (method milik Kucing sendiri)
console.log(kucing.ras);          // Anggora
```

## Getter dan Setter

Class juga mendukung `get` dan `set` untuk properti yang dihitung, terlihat seperti properti biasa tapi sebenarnya menjalankan method di baliknya.

```js
class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  get luas() {
    return this.sisi * this.sisi;
  }
}

const kotak = new Persegi(5);
console.log(kotak.luas); // 25 - dipanggil tanpa tanda kurung, seperti properti biasa
```

> **Tips:** Class akan sangat sering ditemui saat belajar framework seperti React (class component) atau saat bekerja dengan data terstruktur yang punya banyak instance serupa.

## Latihan

Buat class `Kendaraan` dengan constructor `(merek, kecepatanMaks)` dan method `info()` yang mengembalikan template literal berisi merek dan kecepatan maksimal. Lalu buat class `Motor extends Kendaraan` yang menambahkan method `bunyikanKlakson()` mengembalikan `"Teet teet!"`.

<details>
<summary>Lihat Jawaban</summary>

```js
class Kendaraan {
  constructor(merek, kecepatanMaks) {
    this.merek = merek;
    this.kecepatanMaks = kecepatanMaks;
  }

  info() {
    return `${this.merek} - maks ${this.kecepatanMaks} km/jam`;
  }
}

class Motor extends Kendaraan {
  bunyikanKlakson() {
    return "Teet teet!";
  }
}

const motor1 = new Motor("Honda", 120);
console.log(motor1.info());
console.log(motor1.bunyikanKlakson());
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Enhanced Object Literals](../08 Enhanced Object Literals/Readme.md) | [Modules (Import dan Export) →](../10 Modules (Import dan Export)/Readme.md)
