## Tipe Data

Nilai yang dihasilkan dari sebuah expression dapat disebut juga sebagai data. Dalam pemrograman, data adalah elemen dasar yang sering kita simpan dan olah untuk membuat instruksi atau statement. Agar kita dapat menggunakan dan mengelola data dengan baik, penting untuk memahami berbagai tipe data yang ada, terutama pada JavaScript.

Pada materi ini, kita akan membahas tipe data dasar atau yang lebih dikenal sebagai tipe data primitif. Dalam JavaScript, ada tipe data primitif yang penting untuk diketahui, yaitu string, number, boolean dan nilai kosong (null dan undefined).

Mari kita bahas satu per satu tipe data tersebut.

## String

String adalah tipe data yang merepresentasikan teks. Data seperti nama, alamat, atau email adalah contoh data yang dikelola dalam bentuk string. Dalam JavaScript, nilai string diapit oleh tanda kutip. Ada tiga jenis tanda kutip yang dapat digunakan untuk membuat nilai string, yaitu petik tunggal (single quote), petik ganda (double quote), dan backticks (tanda backtick).

"Ini merupakan contoh string di JavaScript"
'Ini merupakan contoh string di JavaScript'
`Ini merupakan contoh string di JavaScript`

Anda bisa menggunakan salah satu dari ketiga tanda kutip tersebut untuk membuat nilai string, asalkan tanda kutip pembuka dan penutupnya sama.

Hampir semua karakter dapat ditulis langsung di antara tanda kutip. Namun, ada beberapa karakter yang memerlukan penanganan khusus, seperti baris baru (karakter yang terbentuk ketika Anda menekan tombol Enter). Baris baru hanya bisa dituliskan secara langsung ketika Anda menggunakan backticks. Untuk tanda kutip tunggal atau ganda, kita harus menggunakan notasi \n.

"Baris pertama.\nBaris kedua."
'Baris pertama.\nBaris kedua.'
`Baris pertama.
Baris kedua.`

Backticks sering disebut juga sebagai template literals karena memungkinkan kita menyisipkan JavaScript expressions untuk membentuk nilai string menggunakan notasi ${}.

main.js

const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;

console.log(text);

Dengan memahami penggunaan string serta template literals, Anda dapat mengelola teks dalam JavaScript lebih efektif dan fleksibel.

## Number

Semua data berupa angka direpresentasikan dalam tipe data number, baik itu bilangan bulat maupun pecahan. Untuk membuat nilai number, kita cukup menuliskan angkanya secara langsung tanpa menggunakan tanda khusus. Berikut adalah contoh nilai number dalam JavaScript.

40
3.14
5
3.333

Selain angka normal, tipe data number juga memiliki nilai spesial, yaitu Infinity dan NaN. Nilai Infinity dihasilkan ketika kita melakukan operasi aritmetika yang tidak terdefinisi, seperti membagi sebuah nilai dengan nol. Contohnya kode di bawah ini.

main.js

const result = 50 / 0;
console.log(result); // output: Infinity

Adapun nilai NaN (Not-a-Number) dihasilkan ketika nilai non-numerik diubah ke tipe data number. Contohnya ketika kita mencoba mengonversi string yang bukan angka menjadi number.

main.js 

const result = Number('Dicoding');
console.log(result); // output: NaN

Kita akan membahas lebih detail tentang konversi antar tipe data setelah mengenal seluruh tipe data yang ada.