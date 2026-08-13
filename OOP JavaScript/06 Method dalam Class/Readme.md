# 06. Method dalam Class

## Apa itu Method?

**Method** adalah **fungsi yang dimiliki oleh sebuah class**, merepresentasikan **perilaku/aksi** yang bisa dilakukan oleh objek. Jika properti adalah "apa yang dimiliki" objek, method adalah "apa yang bisa dilakukan" objek.

## Syntax Method dalam Class

```js
class NamaClass {
  constructor() { ... }

  namaMethod(parameter) {
    // kode method
  }
}
```

Perhatikan: method **tidak** memerlukan keyword `function`, berbeda dengan cara lama.

## Contoh Method Sederhana

```js
class Manusia {
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

const budi = new Manusia("Budi");
budi.makan(); // Budi sedang makan
budi.tidur(); // Budi sedang tidur
```

## Method dengan Parameter

```js
class Kalkulator {
  constructor() {
    this.hasil = 0;
  }

  tambah(angka) {
    this.hasil += angka;
  }

  kali(angka) {
    this.hasil *= angka;
  }
}

const kalk = new Kalkulator();
kalk.tambah(10);
kalk.kali(3);
console.log(kalk.hasil); // 30
```

## Method yang Mengembalikan Nilai (`return`)

```js
class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  hitungLuas() {
    return this.sisi * this.sisi; // return nilai, tidak langsung console.log
  }
}

const persegi1 = new Persegi(4);
let luas = persegi1.hitungLuas();
console.log("Luas:", luas); // 16
```

**Kapan pakai `return` vs `console.log` di dalam method?** Gunakan `return` jika hasilnya perlu **dipakai lagi** di kode lain (misal disimpan ke variabel, dipakai untuk perhitungan lain). Gunakan `console.log` hanya untuk **menampilkan** informasi ke user/developer.

## Method yang Memanggil Method Lain dalam Class yang Sama

```js
class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  hitungLuas() {
    return this.sisi * this.sisi;
  }

  hitungKeliling() {
    return this.sisi * 4;
  }

  info() {
    // memanggil method lain lewat "this"
    console.log("Luas: " + this.hitungLuas() + ", Keliling: " + this.hitungKeliling());
  }
}

const persegi1 = new Persegi(5);
persegi1.info(); // Luas: 25, Keliling: 20
```

## Method Chaining: Me-return `this`

Jika sebuah method me-return `this` (objek itu sendiri), kamu bisa **memanggil beberapa method secara berantai** dalam satu baris:

```js
class Kalkulator {
  constructor() {
    this.hasil = 0;
  }

  tambah(angka) {
    this.hasil += angka;
    return this; // return objek itu sendiri
  }

  kurang(angka) {
    this.hasil -= angka;
    return this;
  }
}

const kalk = new Kalkulator();
kalk.tambah(10).tambah(5).kurang(3); // method chaining!
console.log(kalk.hasil); // 12
```

## Method yang Mengubah (Mutasi) vs Method yang Hanya Membaca

Sebaiknya bedakan dengan jelas antara method yang **mengubah state** objek dan method yang **hanya membaca/menghitung** tanpa mengubah apapun:

```js
class Keranjang {
  constructor() {
    this.items = [];
  }

  // Method mutasi: mengubah state (menambah item)
  tambahItem(nama) {
    this.items.push(nama);
  }

  // Method baca saja: hanya menghitung/membaca, tidak mengubah apapun
  jumlahItem() {
    return this.items.length;
  }
}

const keranjang = new Keranjang();
keranjang.tambahItem("Buku");
keranjang.tambahItem("Pulpen");
console.log(keranjang.jumlahItem()); // 2
```

➡️ Lanjut ke materi berikutnya: **07 Encapsulation**
