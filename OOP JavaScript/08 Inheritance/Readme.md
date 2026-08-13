# 08. Inheritance

## Apa itu Inheritance?

**Inheritance (Pewarisan)** adalah pilar OOP yang memungkinkan sebuah class **mewarisi** properti dan method dari class lain, sehingga kita **tidak perlu menulis ulang** kode yang sama di banyak tempat.

## Analogi Sederhana

Semua **Hewan** punya kesamaan: bisa makan dan tidur. Tapi **Kucing** dan **Anjing** masing-masing punya perilaku khusus (kucing mengeong, anjing menggonggong). Daripada menulis ulang "makan" dan "tidur" di setiap jenis hewan, kita bisa membuat class **Hewan** sebagai "induk", lalu class **Kucing** dan **Anjing** **mewarisi** dari `Hewan`.

## Istilah: Parent Class dan Child Class

- **Parent Class** (Superclass/Base Class): class yang **diwarisi** — berisi properti/method umum
- **Child Class** (Subclass/Derived Class): class yang **mewarisi** — bisa menambah properti/method khusus

## Syntax: `extends`

```js
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  makan() {
    console.log(this.nama + " sedang makan");
  }

  tidur() {
    console.log(this.nama + " sedang tidur");
  }
}

class Kucing extends Hewan { // Kucing MEWARISI dari Hewan
  mengeong() {
    console.log(this.nama + " berkata: Meong!");
  }
}

const milo = new Kucing("Milo");
milo.makan();    // Milo sedang makan (method dari Hewan, otomatis diwarisi)
milo.tidur();    // Milo sedang tidur (method dari Hewan)
milo.mengeong(); // Milo berkata: Meong! (method khusus Kucing)
```

Perhatikan: `Kucing` **tidak perlu** menulis ulang `makan()` dan `tidur()` — method itu otomatis "diwarisi" dari `Hewan`.

## Keyword `super`

`super` digunakan di dalam child class untuk **memanggil constructor atau method dari parent class**.

### `super()` untuk Memanggil Constructor Parent

```js
class Hewan {
  constructor(nama, jenisSuara) {
    this.nama = nama;
    this.jenisSuara = jenisSuara;
  }
}

class Kucing extends Hewan {
  constructor(nama) {
    super(nama, "Meong"); // memanggil constructor Hewan dengan 2 argumen
    this.jenis = "Kucing"; // properti tambahan khusus Kucing
  }
}

const milo = new Kucing("Milo");
console.log(milo.nama);        // Milo (dari parent)
console.log(milo.jenisSuara);  // Meong (dari parent)
console.log(milo.jenis);       // Kucing (khusus child)
```

**Aturan penting:** jika child class punya `constructor()` sendiri, ia **wajib** memanggil `super()` **sebelum** menggunakan `this` di dalam constructor tersebut. Jika tidak, akan terjadi error.

### `super.namaMethod()` untuk Memanggil Method Parent

```js
class Hewan {
  bersuara() {
    console.log(this.nama + " mengeluarkan suara");
  }
}

class Kucing extends Hewan {
  bersuara() {
    super.bersuara(); // memanggil versi method dari Hewan dulu
    console.log(this.nama + " berkata: Meong!"); // lalu tambahkan perilaku khusus
  }
}

const milo = new Kucing();
milo.nama = "Milo";
milo.bersuara();
// Output:
// Milo mengeluarkan suara
// Milo berkata: Meong!
```

## Overriding Method (Menimpa Method Parent)

Child class bisa **menimpa (override)** method dari parent dengan mendefinisikan ulang method dengan **nama yang sama**:

```js
class Hewan {
  bersuara() {
    console.log("Hewan mengeluarkan suara umum");
  }
}

class Anjing extends Hewan {
  bersuara() { // override total, tidak memanggil super.bersuara()
    console.log("Guk guk!");
  }
}

const anjing1 = new Anjing();
anjing1.bersuara(); // Guk guk! (bukan "Hewan mengeluarkan suara umum")
```

## Multi-level Inheritance (Pewarisan Bertingkat)

```js
class Hewan {
  makan() {
    console.log("Hewan sedang makan");
  }
}

class Mamalia extends Hewan {
  menyusui() {
    console.log("Mamalia menyusui anaknya");
  }
}

class Kucing extends Mamalia { // Kucing mewarisi dari Mamalia, yang mewarisi dari Hewan
  mengeong() {
    console.log("Meong!");
  }
}

const milo = new Kucing();
milo.makan();    // dari Hewan (2 tingkat di atas)
milo.menyusui(); // dari Mamalia (1 tingkat di atas)
milo.mengeong(); // dari Kucing sendiri
```

## Kenapa Inheritance Berguna?

1. **Mengurangi duplikasi kode** — logika umum cukup ditulis sekali di parent class
2. **Memudahkan maintenance** — jika ada bug di logika umum, cukup diperbaiki di satu tempat (parent class)
3. **Merepresentasikan hubungan "is-a"** secara natural — Kucing **adalah** Hewan, Mobil **adalah** Kendaraan, dst

➡️ Lanjut ke materi berikutnya: **09 Polymorphism**
