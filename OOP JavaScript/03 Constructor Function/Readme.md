# 03. Constructor Function

## Masalah: Membuat Banyak Objek Serupa dengan Object Literal

Object literal bagus untuk membuat **satu** objek. Tapi bagaimana jika kita perlu membuat **banyak objek** dengan struktur yang sama, misalnya 100 data mahasiswa?

```js
// Kurang efisien: menulis ulang struktur yang sama berkali-kali
const mahasiswa1 = { nama: "Budi", umur: 20 };
const mahasiswa2 = { nama: "Sari", umur: 21 };
const mahasiswa3 = { nama: "Andi", umur: 19 };
// ...dan seterusnya, sangat repetitif!
```

## Solusi: Constructor Function

**Constructor Function** adalah fungsi khusus yang berfungsi sebagai **"cetakan/blueprint"** untuk membuat banyak objek dengan struktur yang sama. Ini adalah cara **klasik** (sebelum `class` diperkenalkan di ES6) untuk menerapkan OOP di JavaScript.

## Syntax Dasar

```js
function NamaConstructor(parameter1, parameter2) {
  this.properti1 = parameter1;
  this.properti2 = parameter2;
}
```

**Konvensi penting:** nama constructor function **diawali huruf besar (PascalCase)**, untuk membedakannya dari fungsi biasa.

## Contoh Penggunaan

```js
function Mahasiswa(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}

const mahasiswa1 = new Mahasiswa("Budi", 20);
const mahasiswa2 = new Mahasiswa("Sari", 21);

console.log(mahasiswa1.nama); // Budi
console.log(mahasiswa2.nama); // Sari
```

## Keyword `new`

Keyword `new` **wajib** digunakan saat memanggil constructor function. Tanpa `new`, `this` di dalam fungsi tidak akan merujuk ke objek baru, dan hasilnya bisa error atau perilaku tak terduga.

Saat `new NamaConstructor()` dipanggil, JavaScript melakukan 4 hal secara otomatis:
1. Membuat **objek baru yang kosong**
2. Menghubungkan `this` di dalam fungsi ke objek baru tersebut
3. Menjalankan kode di dalam fungsi (mengisi properti lewat `this.properti = ...`)
4. **Mengembalikan** objek yang baru dibuat itu secara otomatis

```js
function Mahasiswa(nama, umur) {
  console.log(this); // objek kosong {} yang baru dibuat oleh "new"
  this.nama = nama;
  this.umur = umur;
}

const budi = new Mahasiswa("Budi", 20);
console.log(budi); // Mahasiswa { nama: 'Budi', umur: 20 }
```

## Menambahkan Method ke Constructor Function

```js
function Mahasiswa(nama, umur) {
  this.nama = nama;
  this.umur = umur;
  this.sapa = function () {
    console.log("Halo, saya " + this.nama);
  };
}

const budi = new Mahasiswa("Budi", 20);
budi.sapa(); // Halo, saya Budi
```

## ⚠️ Masalah: Method Dibuat Ulang untuk Setiap Objek (Kurang Efisien)

Jika method didefinisikan **di dalam** constructor function seperti contoh di atas, setiap objek baru akan punya **salinan method-nya sendiri** di memori — meskipun isinya sama persis. Ini boros memori jika membuat banyak objek.

## Solusi: Menambahkan Method Lewat `prototype`

```js
function Mahasiswa(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}

// Method ditambahkan ke prototype, DIBAGIKAN oleh semua objek (lebih efisien)
Mahasiswa.prototype.sapa = function () {
  console.log("Halo, saya " + this.nama);
};

const budi = new Mahasiswa("Budi", 20);
const sari = new Mahasiswa("Sari", 21);

budi.sapa(); // Halo, saya Budi
sari.sapa(); // Halo, saya Sari

console.log(budi.sapa === sari.sapa); // true, method yang SAMA dipakai bersama
```

## Kenapa Materi Ini Penting Meski Ada `class`?

Meskipun JavaScript modern lebih sering menggunakan sintaks `class` (dibahas di materi berikutnya), penting untuk tahu bahwa **`class` sebenarnya hanyalah "pemanis sintaks" (syntactic sugar)** di atas constructor function + prototype. Memahami constructor function membantu kamu mengerti **cara kerja OOP di JavaScript yang sesungguhnya**.

➡️ Lanjut ke materi berikutnya: **04 Class dalam JavaScript**
