# 01. Pengantar OOP

## Apa itu OOP?

**OOP (Object-Oriented Programming / Pemrograman Berorientasi Objek)** adalah cara mengorganisir kode dengan mengelompokkan **data** dan **fungsi yang berkaitan** ke dalam satu kesatuan yang disebut **objek**.

Sebelum memahami OOP, penting untuk tahu bahwa ini **bukan satu-satunya** cara menulis kode. Ada juga gaya **procedural** (kode berurutan dari atas ke bawah) dan **functional** (kode berbasis fungsi murni). OOP adalah salah satu pendekatan yang **sangat populer**, terutama untuk aplikasi yang kompleks.

## Analogi Sederhana

Bayangkan kamu ingin merepresentasikan seekor **Kucing** dalam kode:

- **Data (Properti)**: nama, warna, umur
- **Perilaku (Method)**: mengeong, makan, tidur

```js
const kucing = {
  nama: "Milo",
  warna: "Oren",
  umur: 2,
  mengeong() {
    console.log(this.nama + " berkata: Meong!");
  }
};

kucing.mengeong(); // Milo berkata: Meong!
```

Objek `kucing` di atas menggabungkan **data** (nama, warna, umur) dan **perilaku** (mengeong) dalam satu kesatuan.

## Kenapa OOP Penting?

Tanpa OOP, kode untuk aplikasi yang kompleks (misalnya sistem e-commerce dengan banyak produk, user, pesanan) akan sulit diatur karena data dan fungsi tersebar di mana-mana. OOP membantu:

1. **Mengorganisir kode** agar lebih rapi dan mudah dipahami
2. **Menggunakan kembali kode** (reusability) lewat konsep pewarisan (inheritance)
3. **Menyembunyikan detail rumit** dari bagian lain program (encapsulation)
4. **Memodelkan dunia nyata** dengan lebih natural (User, Product, Order, dll)

## 4 Pilar Utama OOP

OOP dibangun di atas 4 konsep utama, yang semuanya akan dibahas lebih detail di materi selanjutnya:

| Pilar | Penjelasan Singkat |
|-------|----------------------|
| **Encapsulation** | Menyembunyikan detail internal objek, hanya mengekspos apa yang perlu diakses dari luar |
| **Inheritance** | Sebuah class bisa "mewarisi" properti & method dari class lain |
| **Polymorphism** | Method yang sama bisa berperilaku berbeda tergantung objeknya |
| **Abstraction** | Menyembunyikan kompleksitas, hanya menampilkan hal-hal penting yang dibutuhkan |

## OOP di JavaScript: Sedikit Berbeda dari Bahasa Lain

JavaScript pada dasarnya adalah bahasa **prototype-based**, bukan class-based murni seperti Java atau C++. Namun sejak **ES6 (2015)**, JavaScript menyediakan sintaks `class` yang membuat OOP terasa lebih familiar dan mudah ditulis — meskipun di balik layar, tetap menggunakan sistem **prototype**.

```js
// Sintaks class modern (ES6+) - akan dibahas detail di materi 04
class Kucing {
  constructor(nama) {
    this.nama = nama;
  }

  mengeong() {
    console.log(this.nama + " berkata: Meong!");
  }
}

const milo = new Kucing("Milo");
milo.mengeong(); // Milo berkata: Meong!
```

## Istilah Penting yang Akan Sering Muncul

| Istilah | Arti |
|---------|------|
| **Object (Objek)** | Kesatuan data + perilaku |
| **Class** | "Cetakan/blueprint" untuk membuat banyak objek dengan struktur sama |
| **Instance** | Objek yang dibuat dari sebuah class |
| **Property** | Data yang dimiliki objek |
| **Method** | Fungsi yang dimiliki objek (perilaku) |
| **`this`** | Merujuk ke objek/instance yang sedang aktif |

➡️ Lanjut ke materi berikutnya: **02 Object Literal**
