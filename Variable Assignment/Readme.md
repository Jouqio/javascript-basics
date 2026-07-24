## Variable Assignment

Variabel adalah wadah untuk menampung sebuah nilai. Nilai yang ditampung dapat berupa angka, teks, atau apa pun yang menghasilkan nilai (expression). Pada JavaScript, kita bisa membuat variabel melalui dua cara, yakni dengan sintaksis const dan let.

Berikut adalah contoh cara membuat variabel dengan menggunakan const dan let.

## Aturan Penamaan Variabel

Dalam membuat variabel, kita tidak bisa memberikan nama secara sembarang. Ada aturan yang perlu kita taati. Berikut adalah beberapa aturan dalam penamaan variabel pada JavaScript.

*Tidak Boleh memberikan Nama yang Sama dalam cakupan yang sama*

Nama variabel haruslah unik dalam cakupannya. Anda tidak bisa menggunakan nama yang sama dengan variabel yang sudah terdefinisi sebelumnya.

Berikut adalah contoh kode yang akan menghasilkan error karena memberikan nama variabel yang sudah terdefinisi sebelumnya.

// Company data
const name = 'Dicoding';
const legal = 'LLC';
 
// Employee data
const name = 'John'; // SyntaxError: Identifier 'name' has already been declared
const division = 'IT';

Anda boleh menggunakan nama variabel yang sama selama cakupannya berbeda, contohnya variabel yang berada dalam sebuah fungsi berbeda.

function printCompanyInfo() {
  const name = 'Dicoding'; // <- nama variabel sama
  const legal = 'LLC';
  
  console.log('Company name:', name);
  console.log('Legal type:', legal);
}
 
function printEmployeeInfo() {
  const name = 'John'; // <- nama variabel sama
  const division = 'IT';
  
  console.log('Employee name:', name);
  console.log('Division:', division);
}
 
printCompanyInfo();
printEmployeeInfo();

*Catatan :*
Kita akan membahas tentang cakupan dan fungsi pada modul terpisah.

*Nama Variabel Hanya terdiri dari Karakter Tertentu*

Nama variabel tidak boleh mengandung karakter selain huruf, angka, garis bawah (underscore), dan tanda dolar. Berikut adalah contoh penamaan variabel yang benar dan salah.

// nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;
 
// nama variabel yang salah
const first-name = 'Fulan'; // tidak boleh mengandung karakter -
const last name = 'Lestari'; // tidak boleh mengandung spasi
const @message = 'Hello, World!'; // tidak boleh mengandung karakter @
 
// ..dan lain-lain

*Nama Variabel Tidak Boleh Diawali dengan Angka*

Walau angka boleh digunakan dalam penamaan variabel, tetapi jika nama variabel diawali dengan angka, nama tersebut dianggap salah. Berikut contohnya.

// nama variabel yang benar
const firstName = 'Fulan';
const _secondName = 'Fulana';
 
// nama variabel yang salah karena diawali dengan angka
const 1stName = 'Fulan';
const 2ndName = 'Fulana';