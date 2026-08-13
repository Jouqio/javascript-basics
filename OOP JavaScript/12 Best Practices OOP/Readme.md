# 12. Best Practices OOP

Kumpulan tips agar kode OOP yang kamu tulis lebih **rapi, aman, dan mudah dipelihara**.

## 1. Satu Class, Satu Tanggung Jawab (Single Responsibility)

Sebuah class sebaiknya hanya bertanggung jawab atas **satu hal** yang jelas. Jika sebuah class melakukan terlalu banyak hal berbeda, ia menjadi sulit dipahami dan dipelihara.

```js
// Kurang baik: satu class melakukan terlalu banyak hal
class User {
  constructor(nama, email) {
    this.nama = nama;
    this.email = email;
  }
  simpanKeDatabase() { /* ... */ }
  kirimEmail() { /* ... */ }
  validasiEmail() { /* ... */ }
  generateLaporanPDF() { /* ... */ }
}

// Lebih baik: pisahkan tanggung jawab ke class/fungsi berbeda
class User {
  constructor(nama, email) {
    this.nama = nama;
    this.email = email;
  }
}

class UserRepository {
  simpan(user) { /* ... */ }
}

class EmailService {
  kirim(user, pesan) { /* ... */ }
}
```

## 2. Gunakan Encapsulation untuk Melindungi Data Penting

```js
// Kurang aman
class Akun {
  constructor(saldo) {
    this.saldo = saldo; // bisa diubah sembarangan dari luar
  }
}

// Lebih aman
class Akun {
  #saldo;
  constructor(saldo) {
    this.#saldo = saldo;
  }
  setor(jumlah) {
    if (jumlah > 0) this.#saldo += jumlah;
  }
  cekSaldo() {
    return this.#saldo;
  }
}
```

## 3. Prefer Composition over Inheritance (Utamakan Komposisi daripada Pewarisan)

Inheritance sangat berguna, tapi **terlalu banyak level pewarisan** (deep inheritance chain) bisa membuat kode sulit dilacak. Untuk kasus tertentu, **composition** (menggabungkan objek-objek kecil) lebih fleksibel.

```js
// Inheritance berlebihan (kurang fleksibel)
class Kendaraan { }
class KendaraanBermotor extends Kendaraan { }
class KendaraanRoda4 extends KendaraanBermotor { }
class Mobil extends KendaraanRoda4 { } // terlalu dalam, sulit dilacak

// Composition (lebih fleksibel): gabungkan "kemampuan" sebagai objek terpisah
const mesinListrik = {
  jalan() { console.log("Berjalan dengan mesin listrik"); }
};

class MobilListrik {
  constructor() {
    this.mesin = mesinListrik; // "memiliki" mesin, bukan "mewarisi" mesin
  }
  jalan() {
    this.mesin.jalan();
  }
}
```

**Aturan praktis:** gunakan inheritance untuk hubungan **"is-a"** yang jelas (Kucing **adalah** Hewan), dan composition untuk hubungan **"has-a"** (Mobil **punya** Mesin).

## 4. Beri Nama Class dengan Kata Benda (Noun), PascalCase

```js
// Disarankan
class UserAccount { }
class ShoppingCart { }
class ProductRepository { }

// Kurang disarankan
class doSomething { }  // bukan kata benda
class userAccount { }  // harusnya PascalCase, bukan camelCase
```

## 5. Beri Nama Method dengan Kata Kerja (Verb)

```js
class ShoppingCart {
  tambahItem(item) { }   // kata kerja: jelas ini melakukan aksi
  hapusItem(item) { }
  hitungTotal() { }       // return sesuatu, tapi tetap kata kerja
}
```

## 6. Jangan Membuat Setter untuk Setiap Properti Tanpa Alasan

Getter/setter berguna, tapi jangan membuatnya untuk **semua** properti tanpa pertimbangan — jika tidak ada logika validasi/komputasi khusus, properti publik biasa sudah cukup.

```js
// Berlebihan tanpa alasan jelas
class Produk {
  #nama;
  get nama() { return this.#nama; }
  set nama(v) { this.#nama = v; } // tidak ada validasi apapun, tidak perlu getter/setter
}

// Cukup sederhana jika tidak butuh validasi
class Produk {
  constructor(nama) {
    this.nama = nama; // properti publik biasa sudah cukup
  }
}
```

## 7. Validasi Data di Constructor atau Setter, Bukan Tersebar di Banyak Tempat

```js
// Kurang baik: validasi tersebar di banyak tempat yang memakai class ini
const p = new Produk("Baju", -5000);
if (p.harga < 0) { console.log("Error!"); } // validasi di luar class

// Lebih baik: validasi terpusat di dalam class
class Produk {
  constructor(nama, harga) {
    if (harga < 0) throw new Error("Harga tidak boleh negatif");
    this.nama = nama;
    this.harga = harga;
  }
}
```

## 8. Hindari Deep Nested Inheritance (Pewarisan Terlalu Dalam)

Semakin dalam rantai `extends`, semakin sulit melacak dari mana sebuah method/properti berasal. Usahakan maksimal **2-3 level** inheritance.

## 9. Gunakan `class` Modern, Bukan Constructor Function untuk Kode Baru

```js
// Hindari untuk kode baru
function Produk(nama) {
  this.nama = nama;
}

// Disarankan
class Produk {
  constructor(nama) {
    this.nama = nama;
  }
}
```

## Ringkasan Checklist

- [ ] Satu class, satu tanggung jawab yang jelas
- [ ] Lindungi data penting dengan private field (`#`)
- [ ] Pertimbangkan composition untuk hubungan "has-a"
- [ ] Nama class = kata benda, PascalCase
- [ ] Nama method = kata kerja, camelCase
- [ ] Getter/setter hanya jika memang butuh validasi/komputasi
- [ ] Validasi data terpusat di constructor/setter
- [ ] Hindari inheritance yang terlalu dalam
- [ ] Gunakan `class`, bukan constructor function, untuk kode baru

➡️ Lanjut ke materi terakhir: **13 Latihan dan Quiz**
