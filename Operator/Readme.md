## Operator

Kami yakin Anda tahu simbol seperti + atau - yang sering digunakan untuk melakukan operasi matematika. Ketahuilah bahwa simbol tersebut adalah sebuah operator. Faktanya, operator termasuk hal penting yang perlu diketahui agar Anda dapat melakukan operasi-operasi dalam membuat sebuah program. Dalam materi kali ini, kita akan membahas jenis-jenis operator yang umum digunakan pada JavaScript.

Sebelum mengenal lebih detail jenis-jenis operator yang ada, mari kita ketahui dulu dua istilah penting dalam melakukan sebuah operasi, yakni operator dan operand (operan).

Operator merupakan sebuah simbol atau teks yang digunakan untuk melakukan sebuah operasi, misalnya aritmetika, penugasan, logika, tipe data, atau operasi lain yang berhubungan dengan pemrograman.
Operan adalah nilai yang menjadi target dari sebuah operasi.
Sebagai contoh, ada sebuah operasi aritmetika 5 + 4. Operatornya adalah simbol + serta operannya adalah 5 dan 4. Mudah, kan? Simak ilustrasi di bawah ini agar dapat membedakannya.

Secara umum, operator dalam JavaScript terbagi menjadi tiga kelompok: unary, binary, dan ternary. Pengelompokan ini berdasarkan jumlah operan yang diperlukan untuk menggunakan suatu operator.

Operator aritmetika, seperti + termasuk dalam kelompok operator binary karena membutuhkan dua operan. Sementara itu, operator tipe data, seperti typeof adalah operator unary karena hanya memerlukan satu operan. Adapun operator ternary tentu saja membutuhkan tiga operan.

Berikut adalah contoh kode yang menunjukkan penggunaan unary, binary, dan ternary operator.

let age = 25;

// Unary operator
typeof age;

// Binary operator
5 + 4;
10 / 2;
age = 30;

// Ternary operator (conditional operator)
(age < 18) ? 'You are too young!' : 'Welcome onboard!';

Sudah jelas mengenai istilah operator dan operan beserta pengelompokan operator unary, binary, dan ternary? Jika sudah, mari kita mengenal berbagai operator yang ada dalam JavaScript.

## Assignment Operator

Operator penugasan atau assignment operator adalah operator yang digunakan untuk memberikan nilai kepada sebuah variabel, baik inisiasi nilai baru maupun mengubah nilai yang sudah ada. Operator ini ditulis dengan simbol sama dengan (=). Operator penugasan termasuk dalam kategori binary operator karena membutuhkan dua operan, yaitu variabel di sisi kiri dan nilai yang akan diberikan di sisi kanan. Operator ini ditulis di antara kedua operan.

Inilah contoh penggunaan untuk inisiasi nilai.

_________________________________________________

// Digunakan untuk menginisiasi nilai
const name = 'Jouqio';
let location = 'Bontang';

_________________________________________________

Adapun berikut adalah contoh penggunaan untuk mengubah nilai.

_________________________________________________

// Digunakan untuk mengubah nilai
location = 'Jakarta';

_________________________________________________

## Arithmetic Operator

Operator aritmetika adalah operator standar yang digunakan untuk proses aritmetika, seperti penambahan (+), pengurangan (-), pengalian (*), ataupun pembagian (/). Selain operasi standar yang kami sebutkan, JavaScript juga mendukung beberapa operasi aritmetik yang bisa Anda lihat pada tabel di bawah ini.

Berikut adalah contoh kode yang menunjukkan berbagai penggunaan operator aritmetika dalam JavaScript.

_________________________________________________

6 + 5; // mengembalikan 11
7 - 2; // mengembalikan 5
8 * 5; // mengembalikan 40
10 / 3; // mengembalikan 3.33
10 % 2; // mengembalikan 0
2 *(10 + 2); // mengembalikan 24

_________________________________________________

*Catatan*
Tanda kurung dalam operasi aritmetika menentukan urutan operasi yang dijalankan. Operasi yang diberi tanda kurung akan dikalkulasi terlebih dulu. Hal ini juga merupakan aturan umum dalam bidang matematika.

## Comparison Operator

Operator perbandingan adalah operator yang digunakan untuk membandingkan dua nilai dan mengembalikan nilai boolean (true atau false) sebagai hasil perbandingan. Salah satu penggunaan operator perbandingan adalah ketika kita berhadapan dengan skenario “Apakah x lebih besar dari y?” dan mendapatkan hasil dalam bentuk “Ya” atau “Tidak”.

Berikut adalah contoh kode yang menunjukkan berbagai penggunaan operator perbandingan dalam JavaScript.

_________________________________________________

const a = 10;
const b = 12;
 
console.log(a < b); // output: true
console.log(a > b); // output: false

_________________________________________________

## Logical Operator

Operator logika digunakan untuk menetapkan logika dari dua nilai operan boolean. Dengan operator logika, kita bisa melakukan operasi gerbang logika, seperti AND dan OR. Operator logika dapat digunakan untuk menetapkan logika yang lebih kompleks.

Berikut adalah contoh kode yang menunjukkan berbagai penggunaan operator logika dalam JavaScript.

_________________________________________________

// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true
 
// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true
 
// NOT
console.log(!true); // false
console.log(!false); // true

_________________________________________________

## String Operator

Operator string adalah operator yang digunakan untuk menggabungkan dua nilai string. Operator ini menggunakan simbol + dan termasuk dalam kategori binary operator.

Berikut adalah contoh penggunaan operator string untuk menggabungkan dua nilai string.

_________________________________________________

const first = 'bekerja';
const second = 'sama';
const merged = first + second;
 
console.log(merged); // Output: bekerjasama

_________________________________________________

Perlu diperhatikan bahwa simbol + memiliki fungsi ganda tergantung pada jenis operannya. Jika salah satu operan adalah string, simbol + akan berfungsi sebagai operator string untuk menggabungkan nilai string tersebut. Sebaliknya, jika kedua operand adalah angka, simbol + akan berfungsi sebagai operator aritmetika untuk melakukan penjumlahan.

Meskipun terlihat sederhana, penggunaan simbol + ini bisa sedikit membingungkan. Contohnya, pada operasi "2" + 2, hasilnya bukan 4, melainkan "22". Hal ini terjadi karena salah satu operannya adalah string sehingga simbol + berfungsi sebagai operator string.