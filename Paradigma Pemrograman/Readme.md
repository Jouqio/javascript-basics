# Paradigma Pemrograman

## Daftar Isi

- [Apa itu Paradigma Pemrograman?](#apa-itu-paradigma-pemrograman)
- [Paradigma Berbasis Objek (OOP)](#paradigma-berbasis-objek-oop)
- [Empat Pilar OOP](#empat-pilar-oop)
  - [1. Inheritance](#1-inheritance)
  - [2. Encapsulation](#2-encapsulation)
  - [3. Polymorphism](#3-polymorphism)
  - [4. Abstraction](#4-abstraction)

---

## Apa itu Paradigma Pemrograman?

Paradigma pemrograman adalah **gaya atau pendekatan** yang digunakan programmer dalam menulis program. Paradigma berfungsi sebagai:

- Pedoman dalam menulis kode
- Pandangan unik dalam menyelesaikan masalah

Contoh: paradigma **Object-Oriented Programming (OOP)** memandang penyelesaian masalah melalui pendekatan berbasis objek.

### Kenapa Penting?

Memahami paradigma pemrograman penting karena:

| Manfaat           | Penjelasan                                                                   |
| ----------------- | ---------------------------------------------------------------------------- |
| Kode lebih bersih | Mengikuti pola/struktur yang konsisten                                       |
| Reusable          | Kode dapat digunakan kembali                                                 |
| Kolaborasi mudah  | Tim memiliki pemahaman & pedoman yang sama, sehingga miskomunikasi berkurang |

> **Catatan:** Paradigma bukan aturan wajib (rule), melainkan pedoman yang memudahkan penulisan program.

---

## Paradigma Berbasis Objek (OOP)

OOP adalah paradigma yang berpusat pada **objek**, di mana objek-objek saling berinteraksi untuk menyelesaikan tugas dan membentuk keseluruhan program.

### Konsep Dasar

- **Object** → representasi nyata dari suatu entitas
- **Property** → atribut/informasi tentang objek (contoh: nama, warna, jenis)
- **Method** → aksi/perilaku yang dapat dilakukan objek (contoh: berjalan, berlari, terbang)
- **Class** → cetak biru (blueprint) untuk membuat object secara berulang

### Kenapa OOP Cocok untuk Program Kompleks?

OOP mengelompokkan kode menjadi object dan class, sehingga:

- Kode lebih ringkas & bersih
- Kode dapat digunakan kembali melalui **inheritance**

---

## Empat Pilar OOP

OOP dibangun di atas empat pilar utama:

1. **Encapsulation**
2. **Inheritance**
3. **Polymorphism**
4. **Abstraction**

> ⚠️ Tidak semua bahasa pemrograman mendukung keempat pilar secara maksimal. Contohnya **JavaScript** belum memiliki cara standar untuk membuat _abstract class_, sehingga penerapan **abstraction** menjadi terbatas — berbeda dengan bahasa seperti **Java** yang mendukung penuh keempat konsep ini.

---

### 1. Inheritance

**Inheritance (pewarisan)** memungkinkan sebuah class mewariskan property dan method-nya ke class lain.

- **SuperClass** (Induk/Base/Parent Class) → class yang mewariskan
- **SubClass** (Anak/Children Class) → class yang mewarisi

**Manfaat:** mengurangi penulisan kode berulang (redundancy).

```javascript
class SuperClass {}

class SubClass extends SuperClass {}
```

---

### 2. Encapsulation

**Encapsulation** adalah proses membungkus data di dalam sebuah wadah (class), dengan tujuan **menyembunyikan data** dari akses luar.

- Object hanya menampilkan data yang dibutuhkan oleh object lain
- Data lainnya bersifat **private** dan tidak dapat diakses langsung

**Analogi dunia nyata:** Mesin kopi memiliki data & method private (pengatur suhu, pemanas, method memanaskan air) yang tidak bisa diakses langsung oleh pengguna.

---

### 3. Polymorphism

**Polymorphism** berasal dari bahasa Yunani yang berarti **"memiliki banyak bentuk"**.

Konsep ini memungkinkan SubClass **mengubah implementasi** method yang diwariskan dari SuperClass — mirip seperti seorang anak yang mengubah suatu sifat/perilaku yang diwarisi dari orang tuanya.

**Fungsi utama:** memberi fleksibilitas pada SubClass untuk memiliki implementasi method sendiri, meski method tersebut awalnya berasal dari SuperClass yang sama.

---

### 4. Abstraction

_(Materi lanjutan belum tercakup penuh dalam dokumen sumber, namun disebutkan sebagai salah satu dari empat pilar OOP.)_

Abstraction pada dasarnya bertujuan untuk **menyembunyikan detail implementasi yang kompleks** dan hanya menampilkan fungsionalitas penting kepada pengguna.

> Catatan: Di JavaScript, penerapan abstraction terbatas karena belum ada fitur standar untuk _abstract class_.

---

## Ringkasan

| Pilar         | Inti Konsep                                             |
| ------------- | ------------------------------------------------------- |
| Inheritance   | Pewarisan property & method dari SuperClass ke SubClass |
| Encapsulation | Menyembunyikan data (private) dalam class               |
| Polymorphism  | Satu method, banyak bentuk implementasi                 |
| Abstraction   | Menyembunyikan detail implementasi yang kompleks        |

---

_README ini dirangkum dari materi pembelajaran "Paradigma Pemrograman" untuk keperluan belajar/referensi pribadi._
