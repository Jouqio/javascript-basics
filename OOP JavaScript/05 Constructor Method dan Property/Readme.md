# 05. Constructor Method dan Property

## Apa itu Constructor Method?

**Constructor method** adalah method **khusus** bernama `constructor()` di dalam sebuah class, yang **otomatis dijalankan** setiap kali objek baru dibuat dengan `new`. Fungsinya untuk **menginisialisasi (mengisi nilai awal)** properti objek.

```js
class Produk {
  constructor(nama, harga) {
    this.nama = nama;   // properti "nama" diisi dari parameter
    this.harga = harga; // properti "harga" diisi dari parameter
  }
}

const produk1 = new Produk("Kaos", 50000);
console.log(produk1.nama);  // Kaos
console.log(produk1.harga); // 50000
```

## Aturan Constructor

1. Nama method **harus** `constructor` (kata kunci khusus, tidak bisa diganti nama lain)
2. **Maksimal satu** `constructor` per class
3. **Otomatis dipanggil** saat `new NamaClass()` dieksekusi — kamu **tidak perlu** memanggilnya secara manual
4. Constructor **boleh tidak ada** — jika tidak ditulis, JavaScript akan memakai constructor kosong secara default

```js
class Sederhana {
  // tidak ada constructor, tapi tetap valid
  sapa() {
    console.log("Halo!");
  }
}

const s = new Sederhana();
s.sapa(); // Halo!
```

## Kata Kunci `this` di Dalam Constructor

`this` di dalam constructor merujuk ke **objek baru yang sedang dibuat**. Setiap `this.namaProperti = nilai` akan menjadi properti dari objek tersebut.

```js
class Mobil {
  constructor(merek, warna) {
    this.merek = merek;
    this.warna = warna;
    this.kecepatan = 0; // properti dengan nilai default, tidak perlu dari parameter
  }
}

const mobil1 = new Mobil("Honda", "Putih");
console.log(mobil1); // Mobil { merek: 'Honda', warna: 'Putih', kecepatan: 0 }
```

## Parameter Default pada Constructor

Sama seperti fungsi biasa, parameter constructor bisa punya **nilai default** jika tidak diisi saat objek dibuat:

```js
class Akun {
  constructor(username, saldo = 0) {
    this.username = username;
    this.saldo = saldo; // default 0 jika tidak diisi
  }
}

const akun1 = new Akun("budi123", 100000);
const akun2 = new Akun("sari456"); // saldo tidak diisi, pakai default

console.log(akun1.saldo); // 100000
console.log(akun2.saldo); // 0
```

## Validasi Data di Dalam Constructor

Constructor adalah tempat yang tepat untuk melakukan **validasi** sebelum objek benar-benar dibuat:

```js
class Produk {
  constructor(nama, harga) {
    if (harga < 0) {
      throw new Error("Harga tidak boleh negatif");
    }
    this.nama = nama;
    this.harga = harga;
  }
}

const produkValid = new Produk("Buku", 25000);
console.log(produkValid.harga); // 25000

try {
  const produkInvalid = new Produk("Buku Rusak", -5000);
} catch (error) {
  console.log("Error:", error.message); // Error: Harga tidak boleh negatif
}
```

## Property yang Dihitung dari Parameter Lain

```js
class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
    this.luas = sisi * sisi; // dihitung otomatis saat objek dibuat
    this.keliling = sisi * 4;
  }
}

const persegi1 = new Persegi(5);
console.log(persegi1.luas);     // 25
console.log(persegi1.keliling); // 20
```

## Ringkasan

| Konsep | Penjelasan |
|--------|------------|
| `constructor()` | Method khusus untuk inisialisasi objek, dipanggil otomatis saat `new` |
| `this` | Merujuk ke objek yang sedang dibuat |
| Parameter default | Nilai fallback jika parameter tidak diisi |
| Validasi | Constructor bisa mengecek data valid sebelum objek dibuat |

➡️ Lanjut ke materi berikutnya: **06 Method dalam Class**
