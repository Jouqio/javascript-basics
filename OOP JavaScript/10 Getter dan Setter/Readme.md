# 10. Getter dan Setter

## Apa itu Getter dan Setter?

**Getter** dan **Setter** adalah method khusus yang memungkinkan kita **mengontrol** bagaimana sebuah properti **dibaca** (getter) dan **diubah** (setter), sambil tetap terlihat dan terasa seperti mengakses properti biasa (tanpa tanda kurung `()`).

## Kenapa Getter/Setter Dibutuhkan?

Tanpa getter/setter, kita hanya bisa mengakses properti secara langsung, tanpa ada "penjagaan" logika di tengahnya:

```js
class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }
}

const p = new Persegi(5);
p.sisi = -10; // BAHAYA! sisi negatif tidak masuk akal, tapi tidak ada yang mencegahnya
```

Dengan getter/setter, kita bisa menyisipkan **validasi** atau **perhitungan** setiap kali properti dibaca/diubah.

## Syntax Getter dengan `get`

```js
class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  get luas() { // getter, diakses TANPA tanda kurung ()
    return this.sisi * this.sisi;
  }
}

const p = new Persegi(5);
console.log(p.luas); // 25 -> diakses seperti PROPERTI biasa, bukan p.luas()
```

Perhatikan: `luas` diakses **seperti properti** (`p.luas`), **bukan** seperti method (`p.luas()`), meskipun di baliknya ada logika perhitungan.

## Syntax Setter dengan `set`

```js
class Persegi {
  constructor(sisi) {
    this._sisi = sisi; // gunakan nama berbeda untuk field internal (konvensi umum)
  }

  get sisi() {
    return this._sisi;
  }

  set sisi(nilaiBaru) { // setter, dipanggil otomatis saat "p.sisi = ..." dieksekusi
    if (nilaiBaru <= 0) {
      console.log("Sisi harus lebih dari 0, perubahan diabaikan");
      return;
    }
    this._sisi = nilaiBaru;
  }
}

const p = new Persegi(5);
console.log(p.sisi); // 5 (memanggil getter)

p.sisi = 10; // memanggil setter
console.log(p.sisi); // 10

p.sisi = -5; // setter menolak nilai tidak valid
console.log(p.sisi); // tetap 10, tidak berubah
```

## ⚠️ Kenapa Field Internal Diberi Nama Berbeda (`_sisi`, bukan `sisi`)?

Jika getter/setter menggunakan **nama yang sama persis** dengan field internal, akan terjadi **infinite loop** (rekursi tak berhenti):

```js
class Salah {
  constructor(nilai) {
    this.nilai = nilai; // ini akan memanggil setter "nilai" di bawah
  }

  get nilai() {
    return this.nilai; // ERROR! memanggil dirinya sendiri terus-menerus (infinite loop)
  }

  set nilai(v) {
    this.nilai = v; // ERROR! sama, infinite loop
  }
}
```

**Solusi:** gunakan nama field internal yang **berbeda**, biasanya diawali underscore (`_nilai`) atau menggunakan **private field** (`#nilai`, lebih direkomendasikan karena benar-benar privat):

```js
class Benar {
  #nilai; // private field, aman dari konflik nama

  constructor(nilai) {
    this.nilai = nilai; // memanggil setter "nilai" di bawah, AMAN karena field internal beda nama
  }

  get nilai() {
    return this.#nilai;
  }

  set nilai(v) {
    this.#nilai = v;
  }
}
```

## Contoh Praktis: Kombinasi Getter/Setter dengan Private Field

```js
class Suhu {
  #celsius;

  constructor(celsius) {
    this.#celsius = celsius;
  }

  get celsius() {
    return this.#celsius;
  }

  set celsius(nilai) {
    this.#celsius = nilai;
  }

  get fahrenheit() { // getter yang dihitung dari properti lain (computed property)
    return (this.#celsius * 9) / 5 + 32;
  }

  set fahrenheit(nilaiF) { // setter yang otomatis mengonversi balik ke celsius
    this.#celsius = ((nilaiF - 32) * 5) / 9;
  }
}

const suhu = new Suhu(25);
console.log(suhu.celsius);    // 25
console.log(suhu.fahrenheit); // 77 (dihitung otomatis dari celsius)

suhu.fahrenheit = 100; // set lewat fahrenheit
console.log(suhu.celsius.toFixed(2)); // 37.78 (celsius otomatis ikut berubah)
```

## Kenapa Getter/Setter Berguna?

1. **Validasi otomatis** setiap kali properti diubah
2. **Computed property** — properti yang nilainya dihitung dari properti lain, tapi tetap diakses seperti properti biasa
3. **Enkapsulasi lebih baik** — logika internal (private field) tetap tersembunyi, tapi antarmuka (interface) tetap terasa sederhana bagi pengguna class

➡️ Lanjut ke materi berikutnya: **11 Static Method dan Property**
