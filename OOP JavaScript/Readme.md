# 📘 Belajar OOP (Object-Oriented Programming) di JavaScript

Repository ini berisi materi belajar **OOP (Pemrograman Berorientasi Objek)** dalam JavaScript, disusun khusus untuk **pemula** yang sudah memahami dasar JavaScript (variabel, fungsi, conditional statement) dan siap melangkah ke konsep yang lebih terstruktur.

## 🎯 Apa itu OOP?

**OOP (Object-Oriented Programming)** adalah **paradigma pemrograman** yang mengorganisir kode di sekitar **objek** — yaitu "sesuatu" yang punya **data (properti)** dan **perilaku (method)**, mirip seperti benda-benda di dunia nyata.

Contoh: sebuah **Mobil** punya properti (warna, merek, kecepatan) dan perilaku (jalan, berhenti, klakson). Dalam OOP, kita merepresentasikan hal seperti ini sebagai sebuah **objek** di dalam kode.

```js
const mobil = {
  merek: "Toyota",
  warna: "Merah",
  jalan() {
    console.log(this.merek + " sedang berjalan");
  }
};

mobil.jalan(); // Toyota sedang berjalan
```

## 🎯 Tujuan Belajar

Setelah menyelesaikan materi ini, kamu diharapkan mampu:
- Memahami konsep dasar OOP dan 4 pilar utamanya
- Membuat object literal dan constructor function
- Membuat dan menggunakan `class` di JavaScript modern
- Memahami dan menerapkan **Encapsulation**, **Inheritance**, **Polymorphism**, dan **Abstraction**
- Menggunakan getter, setter, static method/property
- Menulis kode OOP yang rapi dan mudah dipelihara

##  Daftar Materi

| No | Folder | Materi |
|----|--------|--------|
| 01 | [Pengantar OOP](./01%20Pengantar%20OOP) | Apa itu OOP, 4 pilar utama, kenapa penting |
| 02 | [Object Literal](./02%20Object%20Literal) | Membuat objek dengan cara paling sederhana |
| 03 | [Constructor Function](./03%20Constructor%20Function) | Cara lama membuat "blueprint" objek |
| 04 | [Class dalam JavaScript](./04%20Class%20dalam%20JavaScript) | Sintaks `class` modern (ES6) |
| 05 | [Constructor Method dan Property](./05%20Constructor%20Method%20dan%20Property) | `constructor()`, `this`, dan inisialisasi objek |
| 06 | [Method dalam Class](./06%20Method%20dalam%20Class) | Mendefinisikan perilaku/aksi sebuah objek |
| 07 | [Encapsulation](./07%20Encapsulation) | Menyembunyikan detail internal dengan private field |
| 08 | [Inheritance](./08%20Inheritance) | Pewarisan sifat antar class (`extends`, `super`) |
| 09 | [Polymorphism](./09%20Polymorphism) | Satu method, banyak bentuk perilaku |
| 10 | [Getter dan Setter](./10%20Getter%20dan%20Setter) | Mengontrol akses baca/tulis sebuah properti |
| 11 | [Static Method dan Property](./11%20Static%20Method%20dan%20Property) | Method/properti milik class, bukan instance |
| 12 | [Best Practices OOP](./12%20Best%20Practices%20OOP) | Tips menulis kode OOP yang rapi & maintainable |
| 13 | [Latihan dan Quiz](./13%20Latihan%20dan%20Quiz) | Soal latihan untuk menguji pemahaman |

##  Cara Belajar

1. Pelajari folder secara **berurutan dari 01 sampai 13**, karena materi disusun bertahap dari yang paling dasar.
2. Baca `Readme.md` di setiap folder untuk memahami teori dan contohnya.
3. Buka file `.js` di folder yang sama untuk melihat/menjalankan kode contohnya.
4. Coba jalankan sendiri kodenya di:
   - **Browser**: buka DevTools (F12) → tab Console → copy-paste kode
   - **Node.js**: jalankan `node namafile.js` di terminal
5. Kerjakan soal latihan di folder `13 Latihan dan Quiz` untuk menguji pemahamanmu.

##  Tips Belajar

- Jangan hanya membaca, **coba jalankan sendiri** setiap contoh kode.
- Ubah-ubah nilai properti atau tambahkan method baru pada contoh untuk bereksperimen.
- OOP adalah konsep yang butuh **latihan berulang** untuk benar-benar dipahami — jangan terburu-buru, ulangi materi yang belum jelas.

Selamat belajar! 
