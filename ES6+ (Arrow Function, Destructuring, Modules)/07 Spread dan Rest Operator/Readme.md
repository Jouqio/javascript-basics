# 07. Spread dan Rest Operator

> Satu simbol titik tiga (...) dengan dua kegunaan berlawanan: 'membentangkan' dan 'mengumpulkan' nilai.

## Tujuan Pembelajaran

- Menggunakan spread operator untuk menyalin dan menggabungkan array/objek
- Menggunakan rest operator untuk mengumpulkan sisa argumen fungsi
- Memahami perbedaan spread dan rest meski simbolnya sama

## Spread Operator pada Array

Spread operator (`...`) "membentangkan" isi array menjadi elemen-elemen terpisah. Berguna untuk menyalin atau menggabungkan array tanpa mengubah array aslinya.

```js
const buah = ["apel", "jeruk"];

// Menyalin array (bukan sekadar copy referensi)
const salinanBuah = [...buah];
salinanBuah.push("mangga");
console.log(buah);         // ["apel", "jeruk"] - tidak berubah
console.log(salinanBuah);  // ["apel", "jeruk", "mangga"]

// Menggabungkan dua array
const sayur = ["bayam", "kangkung"];
const belanjaan = [...buah, ...sayur];
console.log(belanjaan); // ["apel", "jeruk", "bayam", "kangkung"]
```

## Spread Operator pada Objek

Cara kerja yang sama juga berlaku untuk objek — sangat berguna untuk menyalin objek atau membuat versi baru dengan sebagian properti diubah, tanpa mengubah objek aslinya (pola *immutability*).

```js
const user = { nama: "Syauqi", umur: 20 };

// Menyalin objek dengan menambah properti baru
const userLengkap = { ...user, kota: "Bontang" };
console.log(userLengkap); // { nama: "Syauqi", umur: 20, kota: "Bontang" }

// Membuat versi baru dengan properti diubah
const userUlangTahun = { ...user, umur: 21 };
console.log(user);           // { nama: "Syauqi", umur: 20 } - asli tidak berubah
console.log(userUlangTahun); // { nama: "Syauqi", umur: 21 }
```

> **Tips:** Pola `{ ...objekLama, properti: nilaiBaru }` sangat umum dipakai di React/Redux untuk mengubah state tanpa memutasi (mengubah langsung) objek aslinya.

## Spread Operator pada Pemanggilan Fungsi

```js
function jumlahkanTiga(a, b, c) {
  return a + b + c;
}

const angka = [10, 20, 30];
console.log(jumlahkanTiga(...angka)); // 60, setara jumlahkanTiga(10, 20, 30)

console.log(Math.max(...[5, 12, 3, 9])); // 12
```

## Rest Operator: Kebalikan dari Spread

Meski simbolnya sama (`...`), **rest operator** dipakai untuk **mengumpulkan** beberapa nilai menjadi satu array, biasanya di parameter fungsi atau saat destructuring.

```js
// Rest pada parameter fungsi - menerima argumen sejumlah berapa pun
function jumlahkanSemua(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}
console.log(jumlahkanSemua(1, 2, 3));       // 6
console.log(jumlahkanSemua(1, 2, 3, 4, 5)); // 15

// Rest pada destructuring array
const [pertama, ...sisanya] = [1, 2, 3, 4, 5];
console.log(pertama, sisanya); // 1 [2, 3, 4, 5]

// Rest pada destructuring object
const { nama, ...detailLain } = { nama: "Syauqi", umur: 20, kota: "Bontang" };
console.log(nama, detailLain); // Syauqi { umur: 20, kota: "Bontang" }
```

> **Tips:** Cara membedakan: kalau `...` muncul di **sisi kanan** (dalam literal array/objek atau saat memanggil fungsi), itu **spread**. Kalau di **sisi kiri** (parameter fungsi atau destructuring), itu **rest**.

## Latihan

Buat fungsi `gabungkanNama(pemisah, ...nama)` yang menerima satu `pemisah` (string) dan sejumlah nama (rest), lalu mengembalikan semua nama digabung dengan pemisah tersebut. Contoh: `gabungkanNama(", ", "Ani", "Budi", "Citra")` menghasilkan `"Ani, Budi, Citra"`.

<details>
<summary>Lihat Jawaban</summary>

```js
function gabungkanNama(pemisah, ...nama) {
  return nama.join(pemisah);
}

console.log(gabungkanNama(", ", "Ani", "Budi", "Citra"));
// "Ani, Budi, Citra"
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Destructuring Array dan Object](../06 Destructuring Array dan Object/Readme.md) | [Enhanced Object Literals →](../08 Enhanced Object Literals/Readme.md)
