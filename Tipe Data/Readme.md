## Tipe Data

Nilai yang dihasilkan dari sebuah expression dapat disebut juga sebagai data. Dalam pemrograman, data adalah elemen dasar yang sering kita simpan dan olah untuk membuat instruksi atau statement. Agar kita dapat menggunakan dan mengelola data dengan baik, penting untuk memahami berbagai tipe data yang ada, terutama pada JavaScript.

Pada materi ini, kita akan membahas tipe data dasar atau yang lebih dikenal sebagai tipe data primitif. Dalam JavaScript, ada tipe data primitif yang penting untuk diketahui, yaitu string, number, boolean dan nilai kosong (null dan undefined).

Mari kita bahas satu per satu tipe data tersebut.

## String

String adalah tipe data yang merepresentasikan teks. Data seperti nama, alamat, atau email adalah contoh data yang dikelola dalam bentuk string. Dalam JavaScript, nilai string diapit oleh tanda kutip. Ada tiga jenis tanda kutip yang dapat digunakan untuk membuat nilai string, yaitu petik tunggal (single quote), petik ganda (double quote), dan backticks (tanda backtick).

_________________________________________________

"Ini merupakan contoh string di JavaScript"
'Ini merupakan contoh string di JavaScript'
`Ini merupakan contoh string di JavaScript`

_________________________________________________

Anda bisa menggunakan salah satu dari ketiga tanda kutip tersebut untuk membuat nilai string, asalkan tanda kutip pembuka dan penutupnya sama.

Hampir semua karakter dapat ditulis langsung di antara tanda kutip. Namun, ada beberapa karakter yang memerlukan penanganan khusus, seperti baris baru (karakter yang terbentuk ketika Anda menekan tombol Enter). Baris baru hanya bisa dituliskan secara langsung ketika Anda menggunakan backticks. Untuk tanda kutip tunggal atau ganda, kita harus menggunakan notasi \n.

_________________________________________________

"Baris pertama.\nBaris kedua."
'Baris pertama.\nBaris kedua.'
`Baris pertama.
Baris kedua.`

_________________________________________________

Backticks sering disebut juga sebagai template literals karena memungkinkan kita menyisipkan JavaScript expressions untuk membentuk nilai string menggunakan notasi ${}.

_________________________________________________

main.js

const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;

console.log(text);

_________________________________________________

Dengan memahami penggunaan string serta template literals, Anda dapat mengelola teks dalam JavaScript lebih efektif dan fleksibel.

## Number

Semua data berupa angka direpresentasikan dalam tipe data number, baik itu bilangan bulat maupun pecahan. Untuk membuat nilai number, kita cukup menuliskan angkanya secara langsung tanpa menggunakan tanda khusus. Berikut adalah contoh nilai number dalam JavaScript.

_________________________________________________

40
3.14
5
3.333

_________________________________________________

Selain angka normal, tipe data number juga memiliki nilai spesial, yaitu Infinity dan NaN. Nilai Infinity dihasilkan ketika kita melakukan operasi aritmetika yang tidak terdefinisi, seperti membagi sebuah nilai dengan nol. Contohnya kode di bawah ini.

_________________________________________________

main.js

const result = 50 / 0;
console.log(result); // output: Infinity

_________________________________________________

Adapun nilai NaN (Not-a-Number) dihasilkan ketika nilai non-numerik diubah ke tipe data number. Contohnya ketika kita mencoba mengonversi string yang bukan angka menjadi number.

_________________________________________________

main.js 

const result = Number('Dicoding');
console.log(result); // output: NaN

_________________________________________________

Kita akan membahas lebih detail tentang konversi antar tipe data setelah mengenal seluruh tipe data yang ada.

## Boolean 

Boolean adalah tipe data yang hanya memiliki dua nilai: true dan false. Boolean umumnya digunakan untuk merepresentasikan “ya” atau “tidak”, “ya” adalah true dan “tidak” adalah false.

Untuk membuat nilai boolean, kita bisa menuliskan true atau false secara langsung. Contohnya seperti kode di bawah ini.

_________________________________________________

main.js

const completed = true;
const passed = false;

console.log(completed, passed); // output: true false

_________________________________________________

Nilai boolean juga biasa diperoleh dari hasil penggunaan operator perbandingan.

_________________________________________________

main.js

const isGreater = 5 > 2;

console.log(isGreater); // output: true (5 lebih besar dari 2)

_________________________________________________

Dengan memahami cara kerja boolean, kita dapat menggunakan tipe data ini untuk membuat logika pemrograman yang lebih efektif dan efisien.