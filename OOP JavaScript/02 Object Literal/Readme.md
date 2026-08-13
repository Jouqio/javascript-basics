# 02. Object Literal

## Apa itu Object Literal?

**Object Literal** adalah cara **paling sederhana dan paling umum** untuk membuat objek di JavaScript, dengan menuliskan properti dan nilainya langsung di dalam kurung kurawal `{ }`.

## Syntax Dasar

```js
const namaObjek = {
  properti1: nilai1,
  properti2: nilai2,
  method1() {
    // kode method
  }
};
```

## Contoh Membuat Object Literal

```js
const buku = {
  judul: "Laskar Pelangi",
  penulis: "Andrea Hirata",
  tahunTerbit: 2005,
  halaman: 529
};

console.log(buku.judul);   // Laskar Pelangi
console.log(buku.penulis); // Andrea Hirata
```

## Mengakses Properti Objek

Ada 2 cara mengakses properti: **dot notation** dan **bracket notation**.

```js
// Dot notation (paling umum)
console.log(buku.judul); // Laskar Pelangi

// Bracket notation (berguna jika nama properti dinamis/mengandung spasi)
console.log(buku["judul"]); // Laskar Pelangi

let namaProperti = "penulis";
console.log(buku[namaProperti]); // Andrea Hirata (bracket notation bisa pakai variabel!)
```

**Kapan pakai bracket notation?** Ketika nama properti disimpan dalam variabel, atau nama properti mengandung karakter yang tidak valid untuk dot notation (misal spasi atau diawali angka).

## Mengubah dan Menambah Properti

```js
buku.tahunTerbit = 2010; // mengubah nilai yang sudah ada
buku.penerbit = "Bentang Pustaka"; // menambah properti baru

console.log(buku);
```

## Menghapus Properti

```js
delete buku.halaman;
console.log(buku); // properti "halaman" sudah tidak ada lagi
```

## Method di Dalam Object Literal

Method adalah **fungsi** yang menjadi properti dari sebuah objek.

```js
const kalkulator = {
  hasil: 0,
  tambah(angka) {
    this.hasil += angka;
    return this.hasil;
  },
  reset() {
    this.hasil = 0;
  }
};

console.log(kalkulator.tambah(5));  // 5
console.log(kalkulator.tambah(10)); // 15
kalkulator.reset();
console.log(kalkulator.hasil); // 0
```

## Kata Kunci `this` di Dalam Method

`this` merujuk ke **objek yang memanggil method tersebut**. Ini memungkinkan method mengakses properti lain di objek yang sama.

```js
const orang = {
  nama: "Budi",
  sapa() {
    console.log("Halo, nama saya " + this.nama); // this = orang
  }
};

orang.sapa(); // Halo, nama saya Budi
```

⚠️ **Perhatian:** jika method ditulis sebagai **arrow function**, `this` **tidak** merujuk ke objek pemilik method, melainkan mengikuti scope di luarnya. Karena itu, **gunakan function biasa (`method() {}`)**, bukan arrow function, untuk method di dalam objek.

```js
const orangSalah = {
  nama: "Budi",
  sapa: () => {
    console.log("Halo, nama saya " + this.nama); // this TIDAK merujuk ke orangSalah!
  }
};

orangSalah.sapa(); // Halo, nama saya undefined (atau error, tergantung environment)
```

## Shorthand Property (Penulisan Ringkas)

Jika nama variabel sama dengan nama properti yang diinginkan, kamu bisa menulisnya lebih ringkas:

```js
let nama = "Sari";
let umur = 28;

// Cara lama
const user1 = { nama: nama, umur: umur };

// Shorthand (lebih ringkas, hasil sama)
const user2 = { nama, umur };

console.log(user2); // { nama: "Sari", umur: 28 }
```

## Nested Object (Objek Bersarang)

Objek bisa berisi objek lain di dalamnya:

```js
const mahasiswa = {
  nama: "Rina",
  alamat: {
    kota: "Bandung",
    kodePos: "40123"
  }
};

console.log(mahasiswa.alamat.kota); // Bandung
```

➡️ Lanjut ke materi berikutnya: **03 Constructor Function**
