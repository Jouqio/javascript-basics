# 04. Class dalam JavaScript

## Apa itu Class?

**Class** adalah sintaks modern (diperkenalkan di **ES6/2015**) yang menyediakan cara yang lebih **rapi dan mudah dibaca** untuk membuat "cetakan/blueprint" objek, dibanding constructor function.

**Penting:** `class` di JavaScript **bukan** fitur OOP yang benar-benar baru — ia hanyalah **syntactic sugar** (pemanis sintaks) di atas mekanisme constructor function + prototype yang sudah dibahas di materi sebelumnya. Di balik layar, cara kerjanya **sama persis**.

## Syntax Dasar

```js
class NamaClass {
  constructor(parameter1, parameter2) {
    this.properti1 = parameter1;
    this.properti2 = parameter2;
  }

  method1() {
    // kode method
  }
}
```

## Contoh Sederhana

```js
class Mahasiswa {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log("Halo, saya " + this.nama);
  }
}

const budi = new Mahasiswa("Budi", 20);
const sari = new Mahasiswa("Sari", 21);

budi.sapa(); // Halo, saya Budi
sari.sapa(); // Halo, saya Sari
```

## Perbandingan: Constructor Function vs Class

```js
// Cara lama: Constructor Function + prototype
function MahasiswaLama(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}
MahasiswaLama.prototype.sapa = function () {
  console.log("Halo, saya " + this.nama);
};

// Cara modern: Class (lebih ringkas & rapi)
class MahasiswaBaru {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }
  sapa() {
    console.log("Halo, saya " + this.nama);
  }
}
```

Keduanya menghasilkan **perilaku yang identik**, tapi sintaks `class` jauh lebih mudah dibaca, terutama saat class-nya punya banyak method.

## Membuat Objek dari Class: Keyword `new`

Sama seperti constructor function, membuat objek dari class **wajib** menggunakan `new`:

```js
const mahasiswaBaru = new MahasiswaBaru("Andi", 22);
```

Objek yang dihasilkan dari sebuah class disebut **instance** dari class tersebut.

## Membuktikan Class Menggunakan Prototype di Balik Layar

```js
class Kucing {
  constructor(nama) {
    this.nama = nama;
  }
  mengeong() {
    console.log(this.nama + ": Meong!");
  }
}

console.log(typeof Kucing); // "function" -> class sebenarnya adalah fungsi!
console.log(Kucing.prototype.mengeong); // method tersimpan di prototype, sama seperti constructor function
```

## Aturan Penting Class

1. **`class` tidak di-hoisting** seperti function declaration — kamu harus mendeklarasikan class **sebelum** menggunakannya
2. Kode di dalam class **otomatis berjalan dalam strict mode**
3. Method di dalam class **tidak perlu** keyword `function`
4. **Tidak ada koma** antar method (berbeda dengan object literal)

```js
// SALAH (seperti object literal)
class Contoh {
  method1() { },  // <- koma di sini akan menyebabkan SyntaxError
  method2() { }
}

// BENAR
class Contoh {
  method1() { }
  method2() { }
}
```

## Kenapa Belajar Class Itu Penting?

Sintaks `class` adalah **standar modern** yang dipakai di hampir semua kode JavaScript/framework saat ini (React, Node.js, dll). Meski di balik layar mekanismenya sama dengan constructor function, class jauh lebih **umum digunakan** dalam praktik sehari-hari karena lebih mudah dibaca dan ditulis.

➡️ Lanjut ke materi berikutnya: **05 Constructor Method dan Property**
