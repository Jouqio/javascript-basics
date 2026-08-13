# 09 - Destructuring Object

## Apa itu Destructuring?

**Destructuring** adalah sintaks modern (ES6+) untuk **mengambil beberapa properti object sekaligus** dan menyimpannya ke variabel-variabel terpisah, dengan penulisan yang lebih ringkas.

```js
let user = { nama: "Andi", umur: 20, kota: "Bontang" };

// Cara lama
let nama = user.nama;
let umur = user.umur;

// Cara modern (destructuring) - lebih ringkas
let { nama, umur } = user;

console.log(nama); // "Andi"
console.log(umur); // 20
```

**Penting**: nama variabel hasil destructuring **harus sama persis** dengan nama key di object.

## Mengganti Nama Variabel (Aliasing)

Kalau ingin nama variabel berbeda dari nama key aslinya, gunakan tanda titik dua (`:`):

```js
let user = { nama: "Andi", umur: 20 };
let { nama: namaUser, umur: umurUser } = user;

console.log(namaUser); // "Andi"
console.log(umurUser); // 20
```

## Nilai Default

Kalau properti yang diambil **tidak ada** di object, kita bisa memberikan nilai default supaya tidak menghasilkan `undefined`:

```js
let user = { nama: "Andi" };
let { nama, kota = "Tidak diketahui" } = user;

console.log(nama); // "Andi"
console.log(kota); // "Tidak diketahui" (karena user.kota tidak ada)
```

## Destructuring pada Object Bersarang

```js
let siswa = {
  nama: "Rina",
  alamat: { kota: "Bontang", provinsi: "Kalimantan Timur" },
};

let { nama, alamat: { kota } } = siswa;
console.log(nama); // "Rina"
console.log(kota); // "Bontang"
```

## Destructuring pada Parameter Fungsi

Salah satu kegunaan paling populer — mengambil beberapa properti langsung dari parameter fungsi, tanpa perlu menulis `obj.properti` berulang-ulang:

```js
// Cara lama
function tampilkanProfil(user) {
  console.log(`${user.nama} berumur ${user.umur} tahun`);
}

// Cara modern (destructuring langsung di parameter)
function tampilkanProfilBaru({ nama, umur }) {
  console.log(`${nama} berumur ${umur} tahun`);
}

tampilkanProfilBaru({ nama: "Budi", umur: 21 });
```

## Rest Pattern (`...sisanya`)

Untuk mengambil beberapa properti tertentu, dan **sisanya** dikumpulkan ke object baru:

```js
let produk = { nama: "Laptop", harga: 8000000, stok: 5, kategori: "elektronik" };

let { nama, ...sisanya } = produk;
console.log(nama);     // "Laptop"
console.log(sisanya);  // { harga: 8000000, stok: 5, kategori: "elektronik" }
```

## Poin Penting

- Destructuring = cara ringkas mengambil beberapa properti object sekaligus ke variabel
- Nama variabel harus sama dengan key, kecuali diberi alias dengan `:`
- Bisa diberi nilai default dengan `=` untuk properti yang mungkin tidak ada
- Sangat berguna dipakai langsung di parameter fungsi
- Rest pattern (`...sisanya`) mengumpulkan properti yang belum diambil ke object baru

Lanjut ke → [10 Object Shorthand dan Computed Property](../10%20Object%20Shorthand%20dan%20Computed%20Property/Readme.md)
