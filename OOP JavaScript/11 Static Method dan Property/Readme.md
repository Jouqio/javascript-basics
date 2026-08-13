# 11. Static Method dan Property

## Apa itu Static Method/Property?

**Static Method** dan **Static Property** adalah method/properti yang dimiliki oleh **class itu sendiri**, **bukan** oleh instance (objek) yang dibuat dari class tersebut. Artinya, static member diakses langsung lewat **nama class**, bukan lewat objek.

## Instance Member vs Static Member

```js
class Mahasiswa {
  constructor(nama) {
    this.nama = nama; // ini INSTANCE property, milik masing-masing objek
  }

  sapa() { // ini INSTANCE method, milik masing-masing objek
    console.log("Halo, saya " + this.nama);
  }
}

const budi = new Mahasiswa("Budi");
budi.sapa(); // diakses lewat OBJEK (instance)
```

```js
class MathHelper {
  static PI = 3.14159; // STATIC property, milik class itu sendiri

  static kuadrat(angka) { // STATIC method, milik class itu sendiri
    return angka * angka;
  }
}

console.log(MathHelper.PI);          // diakses lewat CLASS, bukan objek
console.log(MathHelper.kuadrat(5));  // 25, diakses lewat CLASS
```

## ⚠️ Static Member TIDAK BISA Diakses Lewat Instance

```js
const helper = new MathHelper();
console.log(helper.PI); // undefined! static property tidak ada di instance
```

## Kapan Menggunakan Static Method?

Static method cocok untuk **fungsi utilitas** yang **tidak bergantung** pada data spesifik dari sebuah instance — biasanya berupa fungsi bantu (helper) yang berkaitan dengan class tersebut secara umum.

```js
class Kalkulator {
  static tambah(a, b) {
    return a + b;
  }

  static kurang(a, b) {
    return a - b;
  }
}

// Tidak perlu membuat instance dengan "new" untuk memakainya
console.log(Kalkulator.tambah(5, 3)); // 8
console.log(Kalkulator.kurang(5, 3)); // 2
```

## Contoh Praktis: Static Method sebagai "Factory" (Pembuat Objek)

Static method sering dipakai sebagai **factory method** — method yang membuat dan mengembalikan instance baru dengan cara/parameter yang berbeda dari constructor biasa.

```js
class Tanggal {
  constructor(tahun, bulan, hari) {
    this.tahun = tahun;
    this.bulan = bulan;
    this.hari = hari;
  }

  static dariString(tanggalString) { // factory method
    const [tahun, bulan, hari] = tanggalString.split("-").map(Number);
    return new Tanggal(tahun, bulan, hari);
  }

  info() {
    console.log(`${this.hari}/${this.bulan}/${this.tahun}`);
  }
}

const tanggal1 = new Tanggal(2024, 1, 15); // cara biasa
const tanggal2 = Tanggal.dariString("2024-06-20"); // cara lewat factory method

tanggal1.info(); // 15/1/2024
tanggal2.info(); // 20/6/2024
```

## Contoh Praktis: Static Property untuk Menghitung Jumlah Instance

```js
class User {
  static jumlahUser = 0; // dibagikan oleh SEMUA instance, bukan milik satu objek

  constructor(nama) {
    this.nama = nama;
    User.jumlahUser++; // setiap kali objek baru dibuat, counter bertambah
  }
}

const user1 = new User("Budi");
const user2 = new User("Sari");
const user3 = new User("Andi");

console.log("Total user dibuat:", User.jumlahUser); // 3
```

## Static Method Memanggil Static Method Lain

Di dalam static method, gunakan nama class (bukan `this`, kecuali kondisi tertentu) untuk memanggil static method lain:

```js
class Validasi {
  static isEmailValid(email) {
    return email.includes("@");
  }

  static isPasswordValid(password) {
    return password.length >= 8;
  }

  static isFormValid(email, password) {
    return Validasi.isEmailValid(email) && Validasi.isPasswordValid(password);
  }
}

console.log(Validasi.isFormValid("budi@email.com", "12345678")); // true
console.log(Validasi.isFormValid("email-salah", "123")); // false
```

## Ringkasan Perbedaan

| | Instance Member | Static Member |
|---|-------------------|----------------|
| Diakses lewat | Objek (`new Class()`) | Nama class langsung |
| Butuh `new`? | Ya | Tidak |
| Cocok untuk | Data/perilaku spesifik tiap objek | Fungsi utilitas umum, counter, factory method |
| Contoh | `budi.sapa()` | `MathHelper.kuadrat(5)` |

➡️ Lanjut ke materi berikutnya: **12 Best Practices OOP**
