# Beberapa method DOM Selection utama:

## 1. document.getElementById()
Fungsi: Memilih satu elemen spesifik berdasarkan atribut id yang unik.

Hasil (Return Value): Mengembalikan satu elemen (element).

Contoh Penggunaan: ```javascript
const judul = document.getElementById('judul');

## 2. document.getElementsByTagName()
Fungsi: Memilih semua elemen HTML yang memiliki nama tag tertentu (misalnya p, h1, li).

Hasil (Return Value): Mengembalikan HTMLCollection (kumpulan elemen yang mirip seperti array, meskipun bukan array murni). Karena berupa kumpulan, kita harus menggunakan indeks (seperti [0]) untuk memanipulasi elemen tertentu di dalamnya.

Contoh Penggunaan: ```javascript
const paragraf = document.getElementsByTagName('p');
// Untuk mengubah paragraf pertama: paragraf[0].style.backgroundColor = 'lightblue';

## 3. document.getElementsByClassName()
Fungsi: Memilih elemen-elemen HTML berdasarkan nama kelas (class) yang diterapkan.

Hasil (Return Value): Mengembalikan HTMLCollection. Sama seperti tag name, jika ingin memanipulasi satu elemen tertentu, Anda wajib menyertakan nomor indeksnya.

Contoh Penggunaan: ```javascript
const p1 = document.getElementsByClassName('p1');

## HTMLCollection 
adalah sebuah objek yang mirip dengan array, tetapi tidak memiliki semua metode yang dimiliki oleh array. HTMLCollection memiliki properti length dan dapat diakses menggunakan indeks, tetapi tidak memiliki metode seperti forEach, map, atau filter yang dimiliki oleh array. HTMLCollection biasanya digunakan untuk mengakses elemen-elemen dalam dokumen HTML berdasarkan tag name, class name, atau name attribute.