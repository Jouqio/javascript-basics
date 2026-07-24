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