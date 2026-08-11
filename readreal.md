Rangkuman Gerbang Dunia JavaScript
Kita telah belajar banyak hal dalam materi JavaScript sebagai bahasa pemrograman. Kami siapkan rangkuman materi terhadap hal yang telah Anda pelajari selama ini. Harapannya, Anda dapat mengingat kembali setiap materi yang disampaikan.

Apa Itu Pemrograman
Pemrograman adalah proses atau kegiatan membuat instruksi yang sistematis untuk berinteraksi dengan komputer dalam memecahkan permasalahan. Manusia membuat beberapa instruksi yang harus dieksekusi oleh komputer dalam bahasa yang dimengertinya, yakni bahasa pemrograman.

Masih ada banyak hal lainnya yang bisa dilakukan oleh komputer melalui programming. Tingkat kompleksitas program berbanding lurus dengan jumlah instruksi. Artinya, makin besar tugas komputer maka makin banyak instruksi yang akan disusun. Bahkan tidak hanya ratusan, ribuan atau jutaan instruksi terstruktur dapat dibangun dalam sebuah program.

Scripting dan Compiled Language
Komputer memerlukan bahasa khusus sehingga perintah-perintah tersebut dapat terlaksana dengan baik. Serangkaian perintah komputer ditulis oleh developer dalam bentuk kode. Kode-kode ini hanya dipahami oleh manusia atau disebut dengan bahasa tingkat tinggi. Ada sangat beragam bahasa pemrograman di luar sana dan memiliki penulisan kode atau sintaksis yang bermacam-macam. Beberapa contohnya adalah JavaScript, Java, C, C++, Python, Matlab, dsb.

Hasil kegiatan menulis kode ini disebut sebagai source code. Berikutnya, source code tersebut akan diubah ke bahasa yang dapat dipahami oleh komputer sehingga bisa dianalisis dan dieksekusi perintah-perintahnya. Ini adalah bahasa tingkat rendah yang disebut dengan bahasa mesin. Bahasa ini sangat sulit dipahami oleh manusia dan komputer hanya memahami bahasa ini.

Dalam tahapan perubahan dari bahasa tingkat tinggi ke bahasa tingkat rendah, ada dua mekanisme yang dapat dilakukan serta setiap bahasa dapat menggunakan cara berbeda, yaitu compiler dan interpreter.

Compiled Language
Ada beberapa bahasa pemrograman akan membutuhkan satu tahapan sebelum instruksinya dapat dijalankan oleh mesin, yaitu proses kompilasi atau compile. Sebelum diserahkan ke mesin, susunan instruksi perlu dikonversi ke bahasa mesin dahulu.
Scripting Language
Tidak seperti compiled language, sebuah program atau source code yang ditulis dengan scripting language tidak memerlukan compiler. Source code dapat langsung diberikan, diterjemahkan, dan dijalankan oleh mesin. Mesin ini menggunakan interpreter dalam melakukannya. Contoh yang sangat dekat dengan kita adalah browser.

Pengenalan JavaScript
JavaScript termasuk dalam salah satu bahasa pemrograman yang menggunakan interpreter (scripting language). Artinya, kita dapat menulis kode dengan bahasa ini dan langsung diserahkan ke mesin. Baris per baris kode akan diterjemahkan dan dieksekusi oleh mesin. Jika ada kode yang salah, error akan langsung ditampilkan pada saat runtime (program berjalan).

Pesatnya perkembangan teknologi menuntun JavaScript berkembang. Saat ini, JavaScript sudah merambah ke berbagai platform. Selain aplikasi browser, banyak juga aplikasi server, desktop, dan lainnya yang dapat dibangun dengan JavaScript. Ini tercapai berkat runtime JavaScript, seperti Node.js dan Bun. Bahkan, beberapa database management system (DBMS), seperti MongoDB, juga menggunakan JavaScript sebagai bahasa scripting dan kuerinya.

Sejarah JavaScript
Berdasarkan survei dari Statista pada tahun 2023, JavaScript menjadi bahasa pemrograman dalam posisi peringkat teratas yang paling banyak digunakan oleh para developer. Pada mulanya, JavaScript atau sering disingkat dengan JS dikembangkan hanya untuk membuat website lebih “hidup”. Ia dilahirkan sekitar tahun 1995 oleh programmer dari perusahaan Netscape, yaitu Brendan Eich.

Sebelum bernama JavaScript, ia sempat dinamai LiveScript. Namun, karena berharap untuk lebih populer, LiveScript terinspirasi dari bahasa pemrograman bernama Java sehingga mengubah namanya menjadi JavaScript.

Beberapa waktu kemudian, JavaScript distandardisasi oleh organisasi bernama ECMA. Mereka menyusun standar agar setiap platform yang mendukung bahasa ini memiliki kesamaan standar, cara kerja, serta spesifikasi-spesifikasinya. Hal ini dinamai standar ECMAScript. Mulai sejak itu, ECMAScript melakukan peningkatan dari tahun ke tahun.

Tahun Keterangan
2000–2010

ECMAScript 3 adalah versi yang banyak digunakan ketika JavaScript sedang mendominasi. Selama waktu tersebut, sebuah pengerjaan yang ambisius terjadi untuk membentuk ECMAScript 4. Namun, pengerjaan ini akhirnya dihentikan pada tahun 2008.

2009

Peningkatan masih berlanjut dengan melakukan beberapa perbaikan yang sifatnya tidak kontroversial. Akhirnya, lahir ECMAScript versi 5.

2015

ECMAScript kembali melakukan peningkatan pada versi keenam. Versi ini membawa peningkatan sangat pesat, termasuk beberapa inovasi yang sempat diurungkan ketika menggarap versi keempat.

2015–seterusnya

ECMAScript terus melakukan peningkatan-peningkatan yang kecil setiap tahunnya.

JavaScript Runtime Environment
Runtime environment adalah tempat sebuah program akan dieksekusi. Ia akan menentukan global object yang dapat diakses oleh program JavaScript. Lalu, apa yang dimaksud dengan global object? Nah, kita akan memahaminya ketika mempelajari masing-masing runtime environment.

Ada tiga macam yang akan kita bahas dalam materi ini, yaitu Browser, Node.js, dan Bun.

Browser
Kebanyakan program JavaScript dijalankan melalui lingkungan browser. Contohnya, kita memiliki satu buah proyek aplikasi web yang berisi berkas index.html dan index.js dengan isi berikut.

index.html

<!DOCTYPE html>
<html>
  <body>
    <h1>My Website</h1>
 
    <script>
      window.alert('Hello, world!');
    </script>
  </body>
</html>
Berkas di atas adalah index.html yang dibutuhkan untuk menampilkan konten dan struktur halaman web. Jika dilihat, ada program JavaScript di dalamnya yang dibungkus oleh elemen <script>. Jika dijalankan, hasilnya akan seperti berikut.

dos-190eab40abff4946a2cbda9d35ad652c20240730152127.jpeg

Cara di atas adalah embedded JavaScript. Ada cara lain untuk menjalankan kode dalam browser, yaitu berkas eksternal JavaScript dan Read-Eval-Print-Loop (REPL) versi browser.

External JavaScript

Kode program dalam cara ini ditulis secara terpisah dari berkas HTML. Berkas JavaScript ditulis dengan berkas berekstensi “js”. Kita pindah contoh kode di atas dalam berkas index.js berikut.

index.html
index.js

<!DOCTYPE html>
<html>
  <body>
    <h1>My Website</h1>
 
    <script src="index.js"></script>
  </body>
</html>
Pemisahan ini membuat program JavaScript tidak lagi terhubung dengan HTML. Oleh karena itu, kita gunakan <script> untuk mengimpornya.

REPL versi Browser

Cara ketiga adalah menjalankannya secara langsung melalui browser atau REPL. Read-Eval-Print-Loop atau disingkat REPL dimiliki juga oleh browser. Caranya sangatlah mudah.

Buka browser kesukaan Anda dan Developer Tools di dalamnya. Developer Tools adalah fitur browser untuk mendukung proses pengembangan aplikasi web. Salah satu fitur yang dimiliki adalah REPL. Ini dapat kita akses dengan membuka tab Console dan mulai menuliskan kode JavaScript.

Node.js
Node.js adalah runtime environment untuk JavaScript yang berbeda dari Browser. Meskipun berbeda, seluruh fitur JavaScript, yakni membuat variabel, melakukan operasi aritmetika, dsb., dapat dilakukan juga di sana. Hanya saja kita tidak memiliki akses lagi terhadap global object milik browser, seperti alert. Sebagai gantinya, Node.js memberikan akses kepada developer untuk mengakses file system, mengatur database, dan lainnya.

Misalnya, kita dapat mengetahui sistem operasi yang digunakan oleh komputer dengan kode berikut.

console.log(process.platform);
Contoh kode di atas mengakses global object bernama process. Objek ini berisi data-data yang berelasi dengan berkas JavaScript yang sedang dieksekusi. Lalu, properti platform dipanggil untuk mengembalikan jenis sistem operasi yang dipakai untuk menjalankan program ini. Ini sama halnya dengan window dalam runtime browser.

Katakanlah kode tersebut kita simpan dalam berkas app.js. Untuk menjalankannya, kita dapat menggunakan perintah berikut.

node app.js
Node.js memiliki alternatif lain untuk menjalankan program tanpa mengeksekusi berkas JavaScript, yaitu memanfaatkan Read-Eval-Print-Loop (REPL). Caranya sangat mudah:

buka terminal;
jalankan perintah node;
tulis kode programnya; dan
tekan tombol Enter.

Bun
Ada alternatif yang dapat digunakan untuk menjalankan program dalam sistem komputer selain Node.js, yaitu Bun. Ia adalah JavaScript runtime baru yang menyajikan ekosistem JavaScript terkini dan berbagai fitur yang mengedepankan kecepatan. Jika mengacu ke halaman resminya, ia dibangun agar tetap kompatibel dengan berbagai fitur dari Node.js.

Ada dua cara untuk menjalankan programnya, yaitu mengeksekusi berkas dan REPL. Kita akan gunakan kembali contoh kode sebelumnya sebagai contoh, yaitu app.js.

Untuk menjalankan berkas JavaScript, kita dapat gunakan perintah berikut.

bun run app.js
Ternyata butuh tambahan perintah lagi, yaitu run, tetapi kita juga dapat menghilangkan perintah itu alias hanya mengetikkan bun app.js. Dua cara ini sebetulnya masih identik (tidak ada perbedaan).

Untuk REPL, cukup jalankan perintah berikut.

bun repl
Rangkuman Mengarungi Lautan Sintaksis

Expression dan Statement
Pemrograman pada dasarnya adalah cara kita berkomunikasi dengan komputer. Komunikasi ini melibatkan pemberian instruksi kepada komputer agar menjalankan tugas-tugas tertentu dengan benar. Tentu saja, kita perlu mengikuti aturan tertentu untuk memberikan instruksi kepada komputer.

Pada pemrograman, satu instruksi umumnya ditulis dalam satu baris kode. Jadi, tiga instruksi umumnya ditulis dalam tiga baris kode. Istilah yang digunakan untuk "instruksi" dalam bahasa pemrograman adalah "statement".

Bisa disimpulkan bahwa statement adalah instruksi yang akan dieksekusi oleh komputer.

Selain statement, ada istilah lain yang penting untuk diketahui, yaitu expression. Ini merupakan bagian dari sebuah statement yang menghasilkan nilai. Setiap statement biasanya mengandung setidaknya satu expression. Contoh, expression dalam kode di atas adalah nilai 10, teks “Dicoding”, dan teks “Aku Dicoding, umurku 10 tahun.”.

Berikut adalah ilustrasi yang bisa Anda lihat untuk memudahkan pemahaman mengenai bagian expression pada statement.

dos-60c549460c4dea059a6f7513bab4057420240731124451.jpeg

Comment
Komentar adalah teks bersifat penjelasan yang dapat dibaca oleh programmer dan ditulis dalam berkas kode. Pada JavaScript, untuk menuliskan teks komentar, ada dua cara, yaitu menggunakan tanda // dan /\* \*/. Teks yang ditulis dengan tanda tersebut dianggap bukan instruksi dan tidak akan dijalankan oleh interpreter.

Berikut adalah contoh komentar yang ditulis dengan tanda //.

// Teks ini akan diabaikan oleh interpreter
console.log('Hai, Readers!');
console.log('Hai, JavaScript!');
// console.log('Hai, Dicoding!');
Berikut adalah contoh dari komentar yang ditulis dengan tanda /\* \*/.

/\*
TODO

1. Buatlah variabel bernama PI dan isikan dengan nilai 3.14
2. Cetak nilai variabel PI di terminal menggunakan console.log
   /

const PI = '3.14';
console.log(PI);

Variabel
Variabel adalah wadah untuk menampung sebuah nilai. Nilai yang ditampung dapat berupa angka, teks, atau apa pun yang menghasilkan nilai (expression). Pada JavaScript, kita bisa membuat variabel melalui dua cara, yakni dengan sintaksis const dan let.

Perbedaan dari variabel yang dibuat dengan const dan let adalah variabel yang dibuat dengan const tidak dapat diinisialisasi ulang (sederhananya, diubah) nilainya, sedangkan jika variabel dibuat dengan let, kita bisa menginisialisasi ulang nilainya.

Variabel yang dibuat dengan const juga umum disebut sebagai constant (konstan) karena dalam matematika istilah tersebut memiliki arti tetap atau tidak berubah-ubah.

Dalam membuat variabel, kita tidak bisa memberikan nama secara sembarang. Ada aturan yang perlu kita taati. Berikut adalah beberapa aturan dalam penamaan variabel pada JavaScript.

Tidak Boleh Memberikan Nama yang Sama dalam Cakupan yang Sama.
Nama Variabel Hanya Terdiri dari Karakter Tertentu.
Nama Variabel Tidak Boleh Diawali dengan Angka.

Mengubah Nilai Antar Tipe Data
JavaScript adalah bahasa pemrograman yang dinamis dan fleksibel, ia menyediakan berbagai cara untuk mengonversi tipe data. Konversi tipe data dapat dilakukan secara eksplisit oleh developer atau secara implisit oleh interpreter.

Konversi Eksplisit
Konversi eksplisit adalah cara yang paling dapat diandalkan untuk mengubah tipe data karena dilakukan dengan instruksi yang jelas, alias eksplisit dari programmer. Berikut adalah beberapa metode umum yang digunakan untuk konversi tipe data secara eksplisit.

const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"

const strNumber = '123';
const strFloat = '3.14';
const boolean = true;

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1

const cm = '20cm';
const px = '64px';

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

const fCm = '20.55cm';
const fPx = '64.23px';

const floatFromCM = parseFloat(fCm);
const floatFromPX = parseFloat(fPx);

console.log(floatFromCM); // output: 20.55
console.log(floatFromPX); // output: 64.23

const number = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(123);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false
Seluruh nilai yang dikonversi dalam boolean menghasilkan true disebut nilai truthy, sedangkan sebaliknya disebut dengan falsy. Hampir seluruh nilai yang ada sifatnya truthy, hanya segelintir nilai yang sifatnya falsy. Berikut adalah daftar nilai falsy dalam JavaScript.

false
0
-0
0n
''
null
undefined
NaN

Konversi Implisit
Konversi implisit terjadi ketika JavaScript secara otomatis mengubah tipe data tanpa instruksi eksplisit dari programmer. Ini biasanya terjadi dalam konteks tertentu, seperti operasi aritmetika, perbandingan, dan konteks logika.

const age = 20;
const message = 'Umurku: ' + age;

console.log(message); // output: Umurku: 20

const strNumber = '123';
const result = strNumber \* 2;

console.log(result); // output: 246

const bool = true;
const result = 1 + bool;

console.log(result); // output: 2

Operator
Dua istilah penting dalam melakukan sebuah operasi, yakni operator dan operand (operan).

Operator merupakan sebuah simbol atau teks yang digunakan untuk melakukan sebuah operasi, misalnya aritmetika, penugasan, logika, tipe data, atau operasi lain yang berhubungan dengan pemrograman.
Operan adalah nilai yang menjadi target dari sebuah operasi.
Simak ilustrasi di bawah ini agar dapat membedakannya.

dos-be3ab42492e1ef1d74d2e3ebc221427a20240731124451.jpeg

Secara umum, operator dalam JavaScript terbagi menjadi tiga kelompok: unary, binary, dan ternary. Pengelompokan ini berdasarkan jumlah operan yang diperlukan untuk menggunakan suatu operator.

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

Berbagai macam operator yang tersedia di JavaScript:

Assignment: operator yang digunakan untuk memberikan nilai kepada sebuah variabel, baik inisiasi nilai baru maupun mengubah nilai yang sudah ada.
Arithmetic: operator standar yang digunakan untuk proses aritmetika, seperti penambahan (+), pengurangan (-), pengalian (\*), ataupun pembagian (/).
Comparison: operator yang digunakan untuk membandingkan dua nilai dan mengembalikan nilai boolean (true atau false) sebagai hasil perbandingan.
Logical: menetapkan logika dari dua nilai operan boolean.
String operator: operator yang digunakan untuk menggabungkan dua nilai string.
Rangkuman Bermain dengan Function
Kita telah belajar banyak hal dalam materi Function dalam JavaScript. Kami siapkan rangkuman materi terhadap hal yang telah Anda pelajari selama ini. Harapannya, Anda dapat mengingat kembali setiap materi yang disampaikan.

Pengertian Function
Function adalah program kecil berisi sekumpulan perintah sehingga bisa dijalankan saat dibutuhkan. Hal tersebut sangat kita perlukan untuk mencegah aktivitas redundan dalam mencapai penyelesaian masalah.

Misalnya, daripada menuliskan formula konversi suhu sebanyak lima kali, kita dapat membungkus formula tersebut dalam function dan menjalankannya sebanyak lima kali. Ini lebih mudah ditulis dan dibaca oleh manusia.

console.log(9 / 5 _ 50 + 32);
console.log(9 / 5 _ 70 + 32);
console.log(9 / 5 \* 100 + 32);

convertCelsiusToFahrenheit(50); // 122
convertCelsiusToFahrenheit(90); // 158
convertCelsiusToFahrenheit(100); // 212

Deklarasi Function
Ada tiga istilah yang perlu dipahami dalam mendefinisikan function, yakni function keyword, identified, dan function body.

Function keyword: syarat paling utama saat membuat function.
Identifier: identitas function.
Function body: block of code yang membungkus banyak perintah.
Berikut adalah contoh dari pembuatan function.

function convertCelsiusToFahrenheit(temperature) {
const temperatureInFahrenheit = 9 / 5 \* temperature + 32;

console.log('Hasil konversi:', temperatureInFahrenheit);
}

Pemanggilan Function
Sebagaimana sebuah variabel dipanggil setelah dibuat, dalam menjalankan function, kita cukup panggil identifier-nya. Namun, tambahkan sintaks “()” setelahnya tanpa diikuti dengan white-space (spasi).

function convertCelsiusToFahrenheit(temperature) {
const temperatureInFahrenheit = (9 / 5) \* temperature + 32;

console.log('Hasil konversi:', temperatureInFahrenheit);
}

const temperatureInCelsius = 90;
convertCelsiusToFahrenheit(temperatureInCelsius);

Parameter dan Argument
Walaupun dapat mengeksekusi sekumpulan kode, sebuah subprogram bisa saja membutuhkan data agar tugasnya terpenuhi. Tentu ini akan meningkatkan reusability darinya. Oleh karena itu, kita membutuhkan parameter dan argumen function.

Apa perbedaan antara parameter dan argumen? Parameter function berperan sebagai input data atau variabel yang mengantarkan nilai, sedangkan argumen adalah nilai yang diberi saat function dipanggil.

dos-52bb9e91d6b0c18cb411fe65a9caa1a420240801110310.jpeg

Parameter function dalam JavaScript juga bisa ditetapkan nilai default jika tidak ada nilai yang diberi saat dijalankan. Cukup ikuti karakter sama dengan “=” dan nilainya setelah nama parameter.

function convertCelsiusToFahrenheit(temperature = 50) {
const temperatureInFahrenheit = 9 / 5 \* temperature + 32;

console.log('Hasil konversi:', temperatureInFahrenheit);
}

Return Value
Pada dasarnya, function akan mengembalikan undefined ketika dipanggil. Ini berlaku jika function tidak mengembalikan nilai apa pun setelah dieksekusi. Ada kalanya, kita akan membutuhkan agar function bisa mengembalikan suatu nilai. Ini dicapai dengan return keyword dan diikuti nilai kembaliannya.

function convertCelsiusToFahrenheit(temperature) {
return (9 / 5) \* temperature + 32;
}

Function Expression
Anda masih ingat perbedaan antara statement dan expression, bukan? Cara deklarasi function yang kita pelajari sebelumnya adalah cara statement. Namun, ada juga versi expression-nya, lo. Ini dinamakan dengan function expression.

Perbedaannya hanya pada penentuan identifier. Tidak ada penentuan setelah function keyword. Sebagai gantinya, nilai function bisa disimpan dalam variabel dan nama variabel menjadi identifier-nya.

const convertCelsiusToFahrenheit = function (temperature) {
return (9 / 5) \* temperature + 32;
};
Salah satu keuntungan dari function expression adalah dapat disebut sebagai first-class citizen. Tidak hanya disimpan dalam variabel, function dapat dijadikan sebagai argumen dan bahkan dijadikan sebagai return value dari suatu function.

// Dijadikan sebagai argumen dari parameter 'operation'
function calculate(operation, numA, numB) {
return operation(numA, numB);
}

// Dijadikan sebagai return value
function multiplier(x) {
return function (num) {
return x \* num;
};
}

Arrow Function
Ada gaya lain dalam membuat function dalam JavaScript, yaitu arrow function. Arrow function hanya tersedia dengan cara expression. Perbedaannya ada pada function keyword yang hilang dan penambahan notasi fat arrow sebelum body function.

dos-5951639b0eb833b27bb2dcd85be072c420240801110311.jpeg

Sintaks di atas mungkin sudah cukup singkat bagi kita, tetapi belum singkat lagi menurut JavaScript. Ternyata arrow function dapat dicapai tanpa kurung kurawal alias seakan-akan tidak memiliki body function.

// Arrow function
const convertCelsiusToFahrenheit = (temperature) => {
return (9 / 5) \* temperature + 32;
};

// Arrow function versi ringkas
const convertCelsiusToFahrenheitInConciseSyntax =
(temperature) => (9 / 5) \* temperature + 32;
Rangkuman Bukan Sembarang Data
Selamat! Anda sudah berada di penghujung modul Bukan Sembarang Data. Mari kita uraikan materi yang sudah Anda pelajari untuk menyegarkan ingatan Anda tentang materi tersebut.

Menstrukturkan Data dengan Object
Struktur data pertama yang kita bahas adalah Object. Object adalah kumpulan pasangan key-value dan merupakan tipe data yang bukan primitif.

Membuat Object
Membuat object dengan object literals sangat mudah yaitu cukup dengan menulis kurung kurawal {}.

const user = {};
const products = { name: 'Sepatu', price: 230000 };
Di dalam kurung kurawal tersebut dapat ditulis properti dari object.

Mengakses Properti di Object
Object yang sudah dibuat dapat diakses dengan 3 teknik.

Mengakses menggunakan dot
Cara pertama untuk mengakses nilai properti yang ada di object adalah menggunakan dot notation (.).

const user = {
name: 'Dicoding',
'last name': 'Indonesia',
age: 9,
};

console.log(user.name); // Output: Dicoding
Kita dapat memanggil nama object, kemudian menuliskan tanda titik yang diikuti dengan nama propertinya.

Mengakses menggunakan square bracket
Untuk menutupi kekurangan menggunakan dot notation, ada cara lain yaitu menggunakan square bracket.

const user = {
name: 'Dicoding',
'last name': 'Indonesia',
age: 9,
};

console.log(user['last name']); // Output: Indonesia
Tulislah nama object terlebih dahulu dan di dalam kurung siku kita menuliskan nama properti yang ingin diakses.

Mengakses menggunakan object destructuring
Selain itu nilai properti dari object dapat diakses juga dengan cara lainnya yaitu menggunakan object destructuring.

const user = {
'name': 'Dicoding',
'lastName': 'Indonesia',
age: 9
};

const { name, lastName } = user;
console.log(name, lastName); // Output: Dicoding Indonesia

Mengubah nilai di properti Object
Memodifikasi object dapat dilakukan dengan assignment operator (=).

const account = {
balance: 1000,
debt: 10,
};

account.balance = 2000;
console.log(account.balance); // Output: 2000

Menghapus properti di Object
Untuk menghapus properti pada object dapat menggunakan operator delete dengan menuliskan nama object lalu tanda titik dan diikuti nama propertinya.

const user = {
'name': 'Dicoding',
'last name': 'Indonesia',
age: 9,
};

delete user.age;
console.log(user); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }

Menstrukturkan Data dengan Array
Array adalah struktur data spesial yang dapat menyimpan kumpulan data yang terurut. Membuat Array dapat dilakukan dengan tiga cara di bawah ini.

Menggunakan object constructor
Array dapat dibuat dengan constructor new Array() seperti berikut.

const users = new Array();
const numbers = new Array(5);
Menggunakan sintaks Array.from
Cara lainnya untuk membuat array adalah menggunakan Array.from. Contohnya seperti di bawah ini.

const foo = Array.from('foo');
console.log(foo); // Output: ['f', 'o', 'o']
Menggunakan array literal
Terakhir, cara yang paling mudah, singkat, dan disarankan untuk membuat array adalah menggunakan object literals.

const array = [];
const fruits = ['apple', 'banana', 'cherry'];

Mengakses Element Array
Data di dalam array terurut sehingga untuk mengaksesnya dapat dengan mudah dengan menggunakan nilai indeks-nya. Indeks merupakan angka yang digunakan untuk merujuk ke nilai di dalam array, sehingga kita bisa menambahkan, mengubah, atau menghapus nilainya.

const myArray = [42, 55, 30];
console.log(myArray[1]); // Output: 55

Manipulasi Nilai Array
Manipulasi nilai pada array dapat dilakukan dengan menggunakan indexing dan method push.

Menggunakan indexing
Misalnya, kita memiliki sebuah array seperti berikut.

const myArray = [1, 2, 3, 4, 5];
Lalu, bagaimana caranya untuk mengubah nilai element ke-2? Perhatikan langkahnya seperti berikut ini.

const myArray = [1, 2, 3, 4, 5];
myArray[1] = 10;
console.log(myArray); // Output: [1, 10, 3, 4, 5]
Menggunakan push
Push adalah cara yang kita gunakan untuk menambahkan nilai ke dalam array pada element terakhir. Misalnya kita memiliki array seperti berikut.

const myArray = [1, 2, 3, 4, 5];
Untuk menambahkan nilai ke dalam array menggunakan method push, dapat dilakukan dengan cara menuliskan nama array-nya diikuti tanda titik dan method push beserta nilai yang ingin ditambahkan yaitu 6 seperti berikut.

myArray.push(6);

Menghapus Element dan Data Array
Data pada array dapat dihapus menggunakan keyword delete.

const myArray = ['Android', 'Data Science', 'Web'];
delete myArray[1];

console.log(myArray); // Output: ['Android', <1 empty item>, 'Web']
Lalu, bagaimana cara untuk menghapus element dan datanya? Untuk melakukan hal itu dapat dilakukan dengan menggunakan method splice() seperti berikut ini.

const myArray = ['Android', 'Data Science', 'Web'];
myArray.splice(1, 1);
console.log(myArray); // Output: ['Android', 'Web']
Terakhir, ada cara lainnya yaitu menggunakan method shift dan pop.

const myArray = ['Android', 'Data Science', 'Web'];
myArray.shift();
console.log(myArray); // Output: ['Data Science', 'Web']

const myArray = ['Android', 'Data Science', 'Web'];
myArray.pop();
console.log(myArray); // Output: ["Android", "Data Science"]

Array Destructuring
Destructuring cukup mudah dilakukan yaitu dengan menggunakan kurung siku yang di dalamnya adalah nama variabel yang kita assign. Kemudian diikuti dengan assignment operator sama dengan (=) dan array yang ingin diambil nilainya.

const introduction = ['Hello', 'Arsy'];
const [greeting, name] = introduction;
console.log(greeting); // Output: Hello

Menstrukturkan Data dengan Map
Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value. Map dapat dibuat dengan mudah yaitu menggunakan object map constructor seperti berikut ini.

const map = new Map();
Menyimpan Nilai di Map
Untuk menyimpan nilai ke dalam map, gunakanlah method set.

const map = new Map();
map.set('name', 'aras');
console.log(map); // Map(1) { 'name' => 'aras' }
Mengakses Nilai di Map
Setelah berhasil menyimpan nilai ke dalam map, kita dapat mengakses nilainya berdasarkan key tertentu dengan method get.

const map = new Map();
map.set('name', 'aras');
console.log(map.get('name')); // Output: aras
Menghapus Nilai di Map
Menghapus nilai di map dapat menggunakan method delete. Method ini akan menghapus nilai spesifik berdasarkan key yang kita tentukan.

const map = new Map();
map.set('name', 'aras');
map.set('last name', 'opraza');
map.delete('last name');
console.log(map); // Map(1) { 'name' => 'aras' }

Menstrukturkan Data dengan Set
Set adalah struktur data yang spesial dibandingkan dengan map, array, dan object. Set dapat dibuat dengan cara menuliskan object constructor set seperti contoh berikut ini.

const set = new Set();
Set juga dapat dibuat beserta dengan nilainya seperti berikut ini.

const mySet = new Set([1, 2, 3]);

Menyimpan Nilai di Set
Untuk menambahkan nilai set setelah diinisialisasi dapat menggunakan method add.

const set = new Set();
set.add(1);
set.add(2);
Mengakses Nilai di Set
Cara pertama adalah menggunakan keyword for seperti berikut ini.

const set = new Set();
set.add(1);
set.add(2);

for (const number of set) {
console.log(number); // Output: 1, 2
}
Cara lainnya adalah menggunakan keyword foreach seperti berikut ini.

const set = new Set();
set.add(1);
set.add(2);

set.forEach((value) => console.log(value)); // Output: 1, 2
Menghapus Nilai di Set
Terakhir, untuk menghapus nilai di set, gunakanlah method delete.

const set = new Set();
set.add(1);
set.add(2);
set.delete(1);

console.log(set); // Set(1) { 2 }

Spread Operator
Spread operator yang ditandai dengan sintaks tiga titik (...) adalah fitur yang menarik dan membantu dalam pengelolaan object dan array.

Object
Spread operator di object dapat dilakukan seperti berikut ini.

const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };
console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }
Array
Selain di object, spread operator juga dapat digunakan di array seperti berikut ini.

const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1, ...array2];

console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']

Rest Operator
Rest operator memungkinkan function untuk menerima argument dalam bentuk array. Rest operator yang digunakan pada parameter fungsi sering disebut sebagai Rest Parameter. Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...) sebelum parameter terakhir.

function myFunc(...manyMoreArgs) {
console.log('manyMoreArgs', manyMoreArgs);
}

myFunc('one', 'two', 'three');

Rangkuman Sang Pengatur Program
Selamat! Anda sudah berada di penghujung modul Sang Pengatur Program. Mari kita uraikan materi yang sudah Anda pelajari untuk menyegarkan ingatan Anda tentang materi tersebut.

Flow Controls
Sebuah program JavaScript akan memiliki lebih dari satu expression dan statement. Apa yang terjadi jika program memiliki lebih dari satu expression dan statement? Jawabannya adalah program akan menjalankan statement berurutan dari atas ke bawah (secara sekuensial).

const number = 100;
console.log(number);
Komputer akan menjalankan baris pertama yaitu menginisiasi variabel number. Kemudian, komputer akan menjalankan baris selanjutnya untuk mencetak nilai variabel number di console atau terminal. Jika kita gambarkan alurnya, akan menjadi seperti berikut ini.

dos-4d5df93212d52b95d48458ebb6471e8620240802151931.jpeg

Jadi, flow control adalah urutan bagaimana expression dan statement dijalankan oleh komputer berdasarkan kondisi dan logika tertentu (yang akan kita bahas di modul ini). Flow control memungkinkan programmer untuk membuat program yang dinamis, mengeksekusi perintah yang berulang dan menangani berbagai macam kondisi berdasarkan input dari pengguna. Tak peduli Anda membangun aplikasi web sederhana, aplikasi mobile atau aplikasi kompleks, flow control penting untuk dipelajari karena ia merupakan fundamental dari bahasa pemrograman.

Conditional
Sepintas mungkin akan terpikir oleh Anda, apakah komputer selalu mengeksekusi kode dari atas ke bawah? Jawabannya adalah tidak. Tidak semua program berjalan lurus seperti jalan tol. Seperti contoh di kasus sebelumnya (memesan makanan secara daring), kode program tidak akan dieksekusi semuanya ketika dijalankan. Kode program akan menjadi dua alur atau lebih. Kode akan dieksekusi tergantung dari kondisi yang ditetapkan dan ini disebut dengan conditional flow.

dos-c57b01b923a7bb8dba2a8244f58691dd20240802151929.jpeg

Conditional flow adalah cara untuk menentukan apakah kode dieksekusi atau dilewatkan. Jika suatu kondisi terpenuhi, kode akan dieksekusi dan kode yang lainnya akan diabaikan. Kondisi ini ditentukan dari inputan yang diberikan oleh pengguna.

Looping
Ketika Anda memprogram, ada banyak sekali instruksi yang Anda tulis untuk dieksekusi oleh komputer. Misalnya, Anda ingin mencetak semua nama makanan yang ada di list pada terminal/console seperti berikut.

const foods = ['Nasi Goreng', 'Pasta', 'Sate'];
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
Hal tersebut memang memungkinkan, tetapi tidak praktis karena melakukan hal yang sama berulang. Lebih tidak praktis lagi ketika list makanan tersebut berisi data 10 makanan atau bahkan 100 makanan. Sudah terbayang, kan? Repot dan tidak praktisnya menulis kode secara berulang.

Untuk menghindari hal itu, perkenalkan inilah looping. Looping (perulangan) adalah statements yang memungkinkan kita untuk mengeksekusi kode yang sama secara berulang. Di JavaScript terdapat banyak jenis perulangan, seperti for loop, for in, for of, while, dan do-while.

Error Handling
Sepandai-pandainya tupai melompat, akan jatuh juga. Sebaik apa pun kita menulis program, suatu saat akan terjadi error. Error yang terjadi bisa berasal dari expected error (error yang terduga) dan unexpected error (error yang tidak terduga).

Error yang dibiarkan dan tidak ditangani akan menyebabkan crash pada program yang dibangun. JavaScript memiliki cara untuk menangani error tersebut yang disebut dengan error handling. Error handling dapat mencegah crash pada program ketika terjadi error yang disebabkan oleh kesalahan syntax atau error lainnya.

Throwing Error
Saat terjadi error, sinyal yang disebut dengan exception akan bangkit. Cara lain untuk membuat exception adalah menggunakan keyword throw untuk generate sebuah error. Sintaks dasarnya adalah seperti berikut.

throw <objek error>
JavaScript memiliki built-in constructor untuk standar error meliputi Error, SyntaxError, dan sebagainya. Perhatikan contoh berikut ini.

const error = new Error('Terjadi error');
console.error(error);

Try-Catch
Try-catch merupakan cara yang dimiliki JavaScript untuk menangani error. Try-catch memiliki dua blok utama yaitu try dan catch. Try merupakan blok kode yang akan menangani error, sedangkan catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try.

Finally
Finally adalah blok kode yang berada di akhir try-catch. Bilamana catch dieksekusi hanya ketika ada error di dalam blok try, blok yang ada di finally akan selalu dieksekusi. Simak contoh di bawah ini.

try {
console.log('Ini try block');
} catch (err) {
console.log('Ini catch block');
} finally {
console.log('Ini finally block');
}

Implementasi Flow Control
Rasanya ada yang kurang ketika sudah mengetahui teori flow control “sang pengendali program” tanpa mengimplementasikan flow control. Di materi kali ini, kita akan lihat seperti apa penerapan flow control di sebuah program JavaScript sederhana.

Misalnya, Anda ingin membuat program untuk mengetahui predikat berdasarkan nilai yang dimasukkan. Perhatikan kode program berikut ini.

function checkGrades(grades) {
for (let i = 0; i < grades.length; i++) {
if (typeof grades[i] !== 'number') {
throw new Error('Invalid input. Please provide an array of numbers.');
}

    const grade = grades[i];
    let predicate;

    if (grade >= 90) {
      predicate = 'A';
    } else if (grade >= 80) {
      predicate = 'B';
    } else if (grade >= 70) {
      predicate = 'C';
    } else if (grade >= 60) {
      predicate = 'D';
    } else {
      predicate = 'E';
    }

    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);

}
}

try {
const studentGrades = [95, 85, 65, 80, 70];
checkGrades(studentGrades);
} catch (e) {
console.error(e);
}
Rangkuman Modularisasi Harmonis
Selamat! Anda sudah berada di penghujung modul Modularisasi Harmonis. Mari kita uraikan materi yang sudah Anda pelajari untuk menyegarkan ingatan Anda tentang materi tersebut.

Mengenal Modularisasi
Modularisasi adalah cara kita untuk memecahkan kode program yang kompleks dan besar menjadi bentuk yang lebih sederhana dan ringkas. Implementasi dari modularisasi di JavaScript adalah dengan membuat berkas-berkas terpisah per bagian function/method yang disebut dengan modul. Kode yang ada di dalam Modul dapat digunakan oleh modul lainnya dengan cara export dan import.

dos-d000dfb5d9a07f55eca75afa1383b0b920240801153620.jpeg

Manfaat dari modularisasi adalah dapat menyelesaikan masalah terkait struktur dan kode program. Modularisasi dapat mempermudah kita untuk memahami keseluruhan struktur program sehingga gampang untuk berkolaborasi. Modularisasi membuat struktur kode menjadi rapi, memahami struktur dan membaca kode program yang sudah kompleks pun menjadi lebih mudah. Selain itu, function/method yang ditulis dapat digunakan kembali di tempat lainnya (reusable). Misalnya, satu function dapat digunakan di dua fitur yang berbeda.

JavaScript awalnya tidak memiliki konsep modularisasi. JavaScript hanya mengenal scope yang sama dari function/method/variable. Namun, semenjak adanya ECMAScript 2015, JavaScript bisa menggunakan konsep modularisasi dan dapat menggunakan keyword import dan export.

Import
JavaScript memungkinkan kita untuk menggunakan function/method dari modul lainnya dengan dua syarat:

Harus meng-import function/method tersebut.
Function/method tersebut sudah di-export (export akan dibahas di materi selanjutnya).
Import dapat dilakukan dengan menulis kata kunci import kemudian diikuti oleh nama function/method/variable. Perhatikan contoh berikut ini.

main.mjs
anotherfile.mjs

1
import myFunction from './anotherfile.mjs';
2
​
3
myFunction();

Input
Reset

Jalankan

Export
Export adalah keyword yang kita gunakan untuk melabeli suatu function/method/variable agar dapat diakses dari luar modul saat ini. Export terdiri dari dua jenis, yaitu default export dan named export. Perhatikan contoh named export berikut ini.

export const name = 'John';
export const email = 'john@gmail.com';
export const age = 25;
Cara tersebut merupakan cara export sebelum deklarasi dilakukan. Cara lainnya adalah export setelah deklarasi dilakukan seperti berikut ini.

const name = 'John';
const email = 'john@gmail.com';
const age = 25;

export { name, email, age };

Mengekspor Variable
Misalnya, ada suatu module yang ditulis di berkas module.js. Di dalam berkas tersebut, kita akan menulis satu variabel yang akan kita ekspor. Untuk mengekspornya dapat dilakukan seperti berikut.

export const name = 'Dicoding';

Mengekspor Function
Cara untuk mengekspor function tak berbeda jauh dengan cara mengekspor variable.

export const name = 'John';
export const favoriteFood = ['pizza', 'pasta', 'sushi'];

export function sayHi(name) {
console.log(`Hi, ${name}!`);
}

Mengimpor Variable
Tadi kita sudah mengekspor beberapa nilai dan function di berkas module.js. Sekarang, tambahkan berkas baru bernama index.js yang akan kita gunakan untuk mengimpor dan menggunakan variable dan function yang telah diekspor sebelumnya.

import { name, favoriteFood } from './module.js';

Mengimpor Function
Untuk mengimpor function dapat dilakukan dengan cara berikut ini.

import { name, favoriteFood as food, sayHi } from './module.js';

console.log(name);
console.log(food);
sayHi(name);

Menggunakan Modularisasi ESM di Node.js
Karena ESModule adalah barang baru di dunia persilatan Node.js, kita perlu menambahkan konfigurasi dalam project Node.js. Kalau Anda mengikuti latihan di modul ini pada lokal komputer, Anda akan mengalami error ketika menggunakan import dan export. Mungkin beberapa dari Anda sudah menyadari akan hal ini dan telah mencari solusi error dengan berselancar di internet.

Sebenarnya, kita hanya membutuhkan konfigurasi sederhana. Berikut cara yang dapat kita terapkan jika ingin menggunakan ES Modul di Node.js.

Mengubah ekstensi berkas
Cara pertama yaitu mengubah ekstensi berkas dari .js menjadi mjs. Dengan mengubah format ini, kita memberitahu ke Node.js bahwa kita ingin menggunakan ESModule. Cara ini terbilang sangat sederhana. Namun, bagaimana jika berkas project Anda sangat banyak? Tidak mungkin Anda mengubahnya satu per satu karena pasti memakan waktu cukup lama dan tidak efisien.

Menambahkan konfigurasi di package.json
Cara berikut ini akan menyelesaikan masalah yang ada pada cara sebelumnya yaitu dengan menambahkan konfigurasi pada level package. Dengan menambahkan konfigurasi pada level package, kita tidak perlu lagi untuk mengganti ekstensi berkas menjadi .mjs dan cara inilah yang kami lakukan sepanjang modul ini.

Menggunakan Modularisasi ESM di Browser
ESModule tak hanya dapat digunakan pada Node.js, tetapi juga di browser. Hal ini merupakan kabar gembira bagi Web Developer, khususnya Front-End Developer yang banyak berkecimpung di browser. Penasaran bagaimana caranya?

Caranya adalah dengan menambahkan type pada saat memanggil tag script seperti contoh berikut ini.

<script src="./esmodule.js" type="module">
Dengan begitu, Anda dapat memuat berkas JavaScript sebagai ESModule pada berkas HTML dan dijalankan di browser. Perlu diingat bahwa tidak semua browser mendukung ESModule sehingga untuk menangani hal itu, tambahkan kode berikut ini.

<script nomodule src="fallback.js"></script>

Atribut nomodule akan memberitahu browser untuk memuat berkas fallback.js jika tidak mendukung ESModule.

Rangkuman Materi

Paradigma Pemrograman
Paradigma pemrograman adalah gaya atau pendekatan yang dilakukan oleh programmer dalam menulis program. Paradigma dapat menjadi pedoman dalam menulis program. Selain itu, paradigma juga memberikan pandangan yang unik dalam menyelesaikan masalah. Misalkan, paradigma object-oriented programming (OOP) memberikan pandangan bahwa menyelesaikan masalah dapat dilakukan dengan pendekatan berbasis objek.

Untuk menyelesaikan masalah dengan solusi yang optimal, kita harus memiliki berbagai macam pendekatan atau pandangan. Oleh karena itu, memahami paradigma pemrograman sangat penting karena setiap paradigma menawarkan pendekatan unik yang dapat menghasilkan solusi yang optimal. Dengan menulis kode sesuai paradigma yang ada, kode akan lebih bersih, dapat digunakan kembali (reuse), dan memudahkan berkolaborasi dengan orang lain.

Kolaborasi akan lebih mudah dan minim masalah karena kita memiliki pemahaman dan pedoman yang sama. Misalnya, ketika menggunakan paradigma OOP, setiap orang yang terlibat di projek tersebut akan menggunakan pendekatan OOP dalam menyelesaikan masalah sehingga miskomunikasi dapat dihindari. Perlu diingat bahwa paradigma bukanlah rule yang wajib diikuti tetapi pedoman yang dapat memudahkan kita dalam menulis program.

Paradigma Berbasis Objek
Sesuai dengan namanya, di paradigma ini kita akan banyak berhubungan dengan objek. Object-oriented programming (OOP) adalah paradigma pemrograman yang memiliki pendekatan berbasis object. Object akan berinteraksi satu sama lain untuk menyelesaikan tugas sehingga membentuk keseluruhan program. Selain itu, object merupakan representasi dari entitas.

Object terdiri dari atribut informasi (property) dan perilaku (method). Property adalah informasi tentang objek tersebut seperti nama, warna, dan jenis, sedangkan method adalah aksi atau perilaku yang dapat dilakukan oleh objek seperti berjalan, berlari, dan terbang.

Object adalah bentuk nyata dari suatu entitas, sedangkan class adalah cetak biru (blueprint), cetakan atau template yang dapat kita gunakan berulang kali untuk membuat object. Object dan class mempermudah ketika ingin membuat entitas yang kompleks dengan cepat dan efektif. Anda perlu untuk mencermati kedua hal ini agar bisa menguasai paradigma OOP.

dos-a1c8f7282ec319aa60040b76e053eb9420240801154454.jpeg

Tonggak Utama dari OOP
OOP sangat cocok digunakan pada program yang kompleks karena dapat mengelompokkan kode menjadi object dan class. Selain itu, kode yang kompleks akan menjadi lebih bersih dan ringkas karena bisa digunakan kembali melalui konsep inheritance (class dan inheritance akan dibahas lebih detail di materi berikutnya). OOP memiliki empat pilar yang membentuknya yaitu encapsulation, inheritance, polymorphism, dan abstraction.

dos-34f5f762445b523bf6f42099fecbdc4220240801154517.jpeg

Empat prinsip ini menjadi panduan dalam menulis program untuk memastikan bahwa kompleksitas selama pengembangan perangkat lunak berkurang. Di bahasa pemrograman yang kental dengan praktik OOP seperti Java, keempat konsep didukung dan dapat diterapkan dengan baik. Namun, beberapa praktik yang ada di JavaScript, seperti abstraction, tidak dapat diterapkan secara maksimal karena keterbatasan fitur yang tersedia. JavaScript sendiri sampai saat ini belum memiliki cara untuk membuat abstract class secara standar yang dibutuhkan dalam menerapkan konsep abstraction.

Inheritance
Pilar yang akan kita bahas pertama adalah inheritance. Inheritance jika diterjemahkan ke dalam bahasa Indonesia artinya adalah pewarisan. Sesuai dengan namanya, kita bisa mewariskan harta property dan method dari sebuah class ke class lain. Umumnya, properti dan method yang diwariskan berasal dari class (induk) dan digunakan oleh class baru (anak). Sama halnya di kehidupan sehari-hari, sedikit banyaknya sebagai anak, kita memperoleh sifat dan perilaku dari orang tua.

Di OOP, inheritance memungkinkan class untuk mewarisi property dan method yang dimilikinya sehingga membantu mengurangi penulisan kode secara berulang (mengurangi redundancy kode). Misalnya, ketika kita membuat sebuah class dengan property dan method, keduanya dapat digunakan kembali oleh class lainnya melalui inheritance. Berikut adalah contohnya.

class SuperClass { }

class SubClass extends SuperClass { }
Istilah SuperClass dan SubClass akan sering kita dengar ketika bahas inheritance di OOP. Class yang mewariskan property dan method-nya disebut dengan SuperClass, Induk, Base, atau Parent Class. Class yang mewarisi property dan method dari class lain disebut dengan SubClass dan Children Class (Anak).

Encapsulation
Encapsulation adalah proses untuk membungkus data di suatu wadah yang disebut dengan class. Menyembunyikan data adalah bagian kunci dari encapsulation.

Desain OOP yang baik adalah object hanya akan menampilkan data yang dibutuhkan oleh object lain. Data akan diisolasi dan tidak dapat diakses langsung dari luar. Secara sederhana, encapsulation adalah membuat data yang ada di class sebagai private.

Di dunia nyata, kita bisa lihat contohnya pada mesin kopi. Mesin kopi memiliki data dan method yang bersifat private seperti pengatur suhu, pemanas, dan method memanaskan air. Data dan method tersebut tidak bisa diakses oleh pihak luar (kita sebagai pengguna).

Polymorphism
Seperti yang Anda ketahui sebelumnya bahwa kita dapat mewariskan property dan method ke class lainnya. Namun, apa yang terjadi jika SubClass ingin mengubah implementasi dari method yang diwariskan dari SuperClass? Layaknya kita sebagai anak, ingin mengubah suatu sifat atau perilaku dari orang tua yang kita mungkin tidak setuju atau butuhkan. Jangan khawatir, di OOP kita dapat mengubah implementasi method yang diturunkan dari SuperClass.

Bagaimana cara untuk mengubah implementasi yang diturunkan dari SuperClass? Caranya adalah menggunakan pilar utama lainnya dari OOP yaitu Polymorphism. Polymorphism berasal dari bahasa Yunani yang memiliki arti secara harfiah yaitu memiliki banyak bentuk. Polymorphism merupakan konsep di mana suatu entitas menjadi SuperClass untuk mewariskan property atau method ke SubClass.

Rangkuman Functional Programming

Berkenalan dengan Functional Programming
Functional programming (selanjutnya disingkat menjadi FP) adalah paradigma pemrograman yang didasarkan pada fungsi matematika murni, yakni fungsi harus menghindari perubahan data sehingga selalu menghasilkan nilai sama ketika diberikan argumen sama. Dalam FP, fungsi adalah elemen utama yang digunakan untuk memecah kode dan membangun keseluruhan program. Dengan menerapkan konsep-konsep dalam FP, kita dapat membangun aplikasi menggunakan kode yang deklaratif (lebih simpel, tegas, dan terprediksi).

Konsep utama dalam FP meliputi pure function, high-order function, recursion, dan immutability.

Fungsi Sejati (Pure Function)
FP menawarkan banyak manfaat, selain membuat kode jadi lebih ringkas, kode yang Anda tulis akan lebih mudah untuk diuji. Sebab, dengan menerapkan FP, fungsi yang kita buat hasilnya selalu terprediksi. Untuk mencapai manfaat tersebut, hal dasar yang perlu kita terapkan adalah konsep pure function.

Pure function merupakan istilah bagi sebuah fungsi yang memiliki dua sifat berikut.

Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
Contoh, ketika fungsi diberikan argumen X, ia harus selalu mengembalikan nilai Y meski dipanggil dalam kondisi dan waktu yang beda. Jadi, nilai yang dihasilkan oleh fungsi selalu terprediksi. Untuk mencapai ini, fungsi tidak boleh mengakses nilai di luar argumen dan variabel cakupan global.
Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
Dalam konteks ini, efek samping merujuk pada segala perubahan yang dilakukan oleh fungsi pada variabel atau keadaan di luar cakupannya, seperti mengubah variabel global, berinteraksi dengan input dan output.

Potensi Tersembunyi Sebuah Fungsi (High-Order Function)
Fungsi dalam JavaScript bersifat first-class citizen. Fungsi dapat diperlakukan sebagai expression yang dapat disimpan dalam sebuah variabel atau dikirim sebagai argumen fungsi lain. Hal ini membuka banyak potensi menarik karena kita bisa menggunakan fungsi secara leluasa.

Ada konsep dalam FP yang sangat mengandalkan kemampuan function expression. Konsep tersebut adalah high-order function (selanjutnya akan disingkat menjadi HOF). HOF adalah fungsi yang menerima fungsi lainnya sebagai argumen dan/atau mengembalikan sebuah fungsi lain. Umumnya, teknik HOF digunakan untuk berbagai hal berikut.

Mengabstraksi fungsi aksi dari sebuah proses asynchronous (kita akan belajar asynchronous dalam modul selanjutnya) dalam bentuk callback.
Membuat utility function, yaitu fungsi Array.map, Array.filter, Array.reduce, dan sebagainya.
Menerapkan teknik matematika, seperti currying dan function composition.

Aku Memanggil Diriku (Recursive)
Rekursi (recursive) banyak digunakan dalam pemrograman fungsional karena merupakan cara yang alami dan satu-satunya untuk melakukan perulangan atau mengiterasi data. Rekursi adalah teknik sebuah fungsi memanggil dirinya sendiri sehingga operasi dalam fungsi tersebut terus berulang sampai mencapai kondisi tertentu untuk ia keluar dari perulangannya.

Yang Sudah Tercipta, Tak Bisa Diubah Lagi (Immutability)
Menghasilkan efek samping, seperti mengubah sebuah data yang bersumber dari luar bisa menyebabkan fungsi menjadi impure. Untuk selalu menjaga bahwa fungsi selalu pure, dalam FP juga terdapat sebuah konsep bahwa segala yang sudah dibuat, tidak bisa diubah nilainya. Konsep ini disebut sebagai immutability.

Walau terdengar sedikit menyeramkan bagi kita yang sudah terbiasa mengubah data sesuka hati, sebenarnya konsep ini memiliki tujuan yang baik. Tujuannya adalah memastikan sebuah nilai tidak dapat diubah dengan mudah (atau bahkan tidak bisa). Tujuannya tentu untuk menghindari segala perubahan yang tidak terduga dan biasanya menjadi akar permasalahan, seperti bug.

Rangkuman Asynchronous Process
Kita telah belajar banyak hal dalam materi Asynchronous Process. Kami siapkan rangkuman materi terhadap hal yang telah Anda pelajari selama ini. Harapannya, Anda dapat mengingat kembali setiap materi yang disampaikan.

Apa Itu Asynchronous Process
Asynchronous atau asinkron adalah sebuah operasi yang memungkinkan dijalankan oleh mesin dan kemudian dapat beralih fokus untuk menjalankan tugas-tugas (operasi) berikutnya sembari menunggu operasi sebelumnya selesai. Keuntungannya, proses ini tidak akan menimbulkan blocking terhadap proses-proses berikutnya yang sedang mengantre.

Jika digambarkan, berikut adalah kejadian sebuah program yang menunjukkan perbedaan antara synchronous dan asynchronous.

dos-8f1aad38deec23372b74f8f10abd91d320240731142933.jpeg

Simulasi Asynchronous Proses
Salah satu global function JavaScript yang dapat berjalan secara asynchronous adalah setTimeout. Function ini akan menjalankan sebuah callback function setelah timeout berakhir. Meskipun timeout ditetapkan menjadi 0, setTimeout akan tetap berjalan secara asinkron. Ini sangat cocok untuk didemonstrasikan dalam pembelajaran awal agar kita memiliki gambaran lebih cepat atas efek dari proses asynchronous.

dos-f205e245c802d6a596e1c14d11e5864720240731142935.jpeg

Penanganan dengan Callback
Proses asinkron memang akan mengubah cara kita berpikir dalam menyelesaikan masalah karena gaya penulisan akan berbeda. Nah, perbedaan ini menyebabkan penanganan hasil dari proses asinkron berbeda juga. Ada banyak cara dalam hal ini. Salah satu yang dipelajari adalah menggunakan teknik callback function.

Berikut adalah contoh penanganan asynchronous process dengan callback.

main.mjs
coffee.mjs

1
import { makeCoffee } from './coffee.mjs';
2
​
3
console.log('Saya memesan kopi di kafe.');
4
​
5
makeCoffee(() => {
6
console.log('Kopi berhasil dibuat.');
7
});

Input
Reset

Jalankan

Penanganan Error dengan Callback
Proses asynchronous memiliki posibilitas hasil antara keberhasilan atau kegagalan. Kegagalan terjadi tergantung terhadap faktor apa yang menjadi penyebab. Begitu pun untuk faktor keberhasilan. Jadi, developer aplikasi JavaScript harus dapat memperhatikan dan mengantisipasi kemungkinan kegagalan atau keberhasilan pada proses asinkron.

Berikut adalah contoh penanganan error pada asynchronous process dengan callback.

main.mjs
coffee.mjs

1
import { makeCoffee } from './coffee.mjs';
2
​
3
const order = 'Kopi Espresso';
4
​
5
console.log(`Saya memesan ${order} di kafe.`);
6
​
7
makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
8
if (makeCoffeeError) {
9
// Do something with error
10
console.error(makeCoffeeError);
11
​
12
return;
13
}
14
​
15
console.log(`Kopi ${makeCoffeeData} berhasil dibuat.`);
16
});

Input
Reset

Jalankan

Apa Itu Promise
Callback menjadi cara yang sangat baik dalam menangani proses asinkron. Namun, ada peristiwa callback hell yang akan dialami sebagai risikonya. Makin panjang proses asinkron yang bergantung terhadap proses asinkron lain maka makin dalam dan sulit penulisan kodenya. Contohnya seperti kode berikut.

dos-0f5768c3fde34f23144a9ffd0f2a9eb620240731145531.jpeg

Promise adalah sebuah objek khusus yang akan menentukan keberhasilan atau kegagalan dari proses asynchronous. Ia akan menjadi alternatif dari callback dalam menangani proses tersebut.

Promise bekerja dengan tiga buah state atau kondisi, yaitu pending (kondisi awal), fulfilled (kondisi berhasil), dan rejected (kondisi gagal).

Penanganan dengan Promise
Penanganan proses asinkron dengan Promise sangat mudah, kok. Kita bisa memanfaatkan method dari objek Promise yang bernama then.

main.mjs
utils.mjs

1
import { doSomething } from './utils.mjs';
2
​
3
function onFulfilled(doSomethingData) {
4
console.log(doSomethingData);
5
}
6
​
7
function onRejected(doSomethingError) {
8
console.log(doSomethingError);
9
}
10
​
11
doSomething().then(onFulfilled, onRejected);

Input
Reset

Jalankan

Esensi terhindar dari risiko callback hell jatuh kepada teknik yang bernama chaining method. Teknik ini memungkinkan untuk melanjutkan proses asinkron ke proses asinkron berikutnya dengan mudah. Sebabnya, method then juga mengembalikan nilai Promise yang membawa data sukses. Untuk data gagal, hasil akan masuk ke method catch.

main.mjs
coffee.mjs

1
import { makeCoffee, sendCoffee } from './coffee.mjs';
2
​
3
const order = 'Kopi Espresso';
4
​
5
console.log(`Saya memesan ${order} di kafe.`);
6
​
7
makeCoffee(order)
8
.then((value) => {
9
return sendCoffee(value);
10
})
11
.then((value) => {
12
console.log(`Pramusaji memberikan ${value} pesanan.`);
13
console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
14
})
15
.catch((error) => {
16
console.log(error.message);
17
});

Input
Reset

Jalankan

Penanganan Bergaya Synchronous dengan Async-Await
Hal yang menakjubkan dari penanganan proses asinkron dengan Promise adalah bisa ditulis dalam gaya synchronous. Kuncinya bisa menggunakan fitur async/await. Istilah ini terdiri dari dua keyword JavaScript, yaitu async dan await. Kita perlu menggunakan mereka berdua secara bersamaan dan tidak bisa mencederai salah satunya. Hal yang perlu dicatat adalah fitur ini hanya bisa dipakai jika menggunakan function.

import { doSomething } from './utils.mjs';

function promiseExecutor(resolve, reject) {
setTimeout(() => {
resolve('You did it!');
}, 2000);
}

function doSomething() {
return new Promise(promiseExecutor);
}

async function promiseWithAsyncAwait() {
console.log('Start.');

const result = await doSomething();
console.log(result);

console.log('End.');
}

promiseWithAsyncAwait();

/_ Output:
Start.
You did it.
End.
_/

Concurrency dengan Promise
Kita berhasil menangani banyak tugas asinkron. Karena satu proses bergantung dengan proses lainnya, mereka harus berjalan secara sekuensial, bukan? Oleh karena itu, kita memerlukan chaining method then. Jika ingin menjalankan proses asinkron secara paralel (sekaligus), kita bisa memanfaatkan static method dari Promise.

Ada dua static method yang cocok, yaitu Promise.all dan Promise.allSettled. Keduanya memiliki kemiripan. Hal yang membedakan adalah Promise.all akan memasuki kondisi rejected jika salah satu Promise saja terjadi kegagalan. Namun, ini tidak berlaku dengan Promise.allSettled.

Rangkuman Code Quality
Sudah saatnya kita membaca rangkuman terhadap materi-materi yang telah dipelajari. Gunakanlah rangkuman ini sebaik-baiknya untuk menghadapi kuis nanti.

Type System dalam JavaScript
Sistem pengecekan tipe dalam JavaScript dikategorikan dalam dynamic type. Artinya, waktu pemeriksaan tipe terjadi pada saat program berjalan (runtime) dan memungkinkan untuk berubah dari satu tipe data ke lainnya. Ini mirip dengan interpreter, tetapi berbeda secara konsep.

Bahasa-bahasa pemrograman yang bertipe static akan memiliki proses pemeriksaan pada tahap compile. Ini memberikan keamanan yang lebih dalam konteks bug. Contohnya seperti Java, C++, Golang, Rust, dsb.

Tidak hanya dynamic, JavaScript juga tergolong weakly-typed language. Ini disebabkan karena fitur type coercion yang memungkinkan konversi otomatis pada suatu pemrosesan dua buah nilai. Contohnya, harapan keluarnya nilai number dari hasil penjumlahan aritmetika yang ternyata berujung pada hasil string karena dilakukan penggabungan.

function add(numA, numB) {
return numA + numB;
}

console.log(add(1, 1)); // 2
console.log(add(3, 2)); // 5
console.log(add('5', 4)); // "54"

JSDoc, Alat Dokumentasi Kode
Konsekuensi dari bahasa yang bertipe dynamic dan weakly-typed adalah menghasilkan bug. Salah satu cara untuk mengatasi masalah ini dapat dengan memanfaatkan JSDoc sebagai alat dokumentasi kode. Kita dapat mendeskripsikan kode dengan memanfaatkan fitur komentar pada JavaScript. Ini disebut dengan JSDoc comment.

Setiap JSDoc comment harus dimulai dengan /**. Komentar yang menggunakan /_, /_**, atau lebih dari tiga bintang (\*) tidak akan diproses oleh JSDoc.

Contoh Sederhana
Contoh Lebih Kompleks
/\*_ Say hello to world _/
function greet() {
console.log('Hello, world!');
}
Dokumentasi di atas dapat kita tulis langsung dalam source code. Kerennya, JSDoc dapat menghasilkan dokumentasi dalam bentuk halaman web.

dos-ceda866bb9e9cd3356429a5a9deb439720240731165130.jpeg

Flow, Type Check Library
Selain menggunakan fitur komentar, ada tools lain yang relatif lebih baik untuk diterapkan. Tools ini adalah Flow. Flow memungkinkan developer dapat mendefinisikan tipe data langsung dalam kode programnya. Misalnya, saat kita mendeklarasikan variabel, parameter function, return value function, dsb.

const myName: string = 'Flow';

function greet(name: string) {
console.log(`Hello, ${name}. My name is ${myName}`);
}

greet('JavaScript');
Cukup tambahkan titik dua (:) dan diikuti dengan tipe nilainya (type) untuk mendefinisikan tipe data. Dalam Flow, ini dinamakan static type annotations. Flow seakan-akan dapat menambahkan type check layer pada JavaScript sebelum akhirnya kode dieksekusi oleh mesin. Namun, sebelum mulai dieksekusi, kita perlu menghilangkan static type annotations milik Flow karena ini bukan standar dari JavaScript tentunya.

TypeScript, Superset dari JavaScript
Jika Flow adalah sebuah library yang dapat menambahkan type check layer, ada tools lain berbentuk bahasa pemrograman yang memiliki type check layer secara bawaan, yaitu TypeScript.

TypeScript dikembangkan oleh Microsoft dengan memadukan seluruh fitur JavaScript dengan bahasa yang lebih ketat. Saat ini, ia menjadi bahasa yang paling digemari di dunia berdasarkan survei dari Stackoverflow. Secara penulisan, ia sangat mirip dengan Flow sehingga kita tidak perlu mempelajari cara baru.

greet.ts
const myName: string = 'TypeScript';

function greet(name: string) {
console.log(`Hello, ${name}. My name is ${myName}`);
}

greet('JavaScript');
Penulisan kode TypeScript membutuhkan .ts sebagai ekstensi berkasnya. Selain itu, kode di atas juga perlu diproses agar menjadi kode JavaScript yang valid. Compiler yang digunakan untuk TypeScript adalah tsc. Ia akan memeriksa sekaligus menghasilkan berkas .js yang siap eksekusi.

Style Guide
Salah satu hal penting dalam sektor kegiatan menulis kode atau coding adalah seni. Dalam konteks ini, seni yang dimaksud adalah tingkat konsistensi kode yang ditulis. Meskipun sebetulnya hal tersebut tidak berpengaruh terhadap validitas sintaks kode JavaScript. Ini kita sebut sebagai style guide.

Beberapa contoh terkait style guide adalah

penggunaan tanda titik-koma (semicolon),
gaya nama variabel,
penempatan komentar dalam kode,
penggunaan block-code (curly-bracket), seperti dalam percabangan,
banyak assignment secara sekaligus, dan masih banyak lainnya lagi.
Beberapa hal di atas adalah contoh-contoh gaya penulisan yang menurut kami banyak terjadi variasi antar developer. Ada beberapa dampak yang sangat mungkin terjadi jika konvensi penulisan kode JavaScript tidak segera ditetapkan.

Kode sulit dibaca dan dipelajari oleh sesama kolega developer sehingga produktivitas menurun.
Kolaborasi menjadi sulit terjalin dengan baik, apalagi saat mengalami penggabungan dua buah perubahan kode dari developer yang berbeda.
Jika ada developer baru, proses onboarding pun akan membutuhkan waktu lebih untuk memahami kode.

Code Convention dengan Linter Library
Penentuan style guide JavaScript sesegera mungkin dapat meningkatkan kualitas penulisan kode. Salah satu cara yang dapat membangun pembentukan style guide dengan baik dan cepat adalah penggunaan library, seperti ESLint. ESLint dapat memberikan feedback atas hasil analisisnya terhadap penulisan kode kita. Feedback ini akan diberi melalui Terminal/CMD.

Contoh feedback yang diberikan ESLint seperti berikut.

dos-b36a6ca84228e99f5333da89c69602ba20240731165320.jpeg

Cara pembuatan aturan penulisan dalam ESLint dilakukan melalui konfigurasi yang bernama rule. Ada tiga kategori yang tersedia pada setiap rule-nya berdasarkan tingkat keparahan.

“off” atau 0: aturan tersebut tidak dipermasalahkan atau dimatikan.
“warn” atau 1: aturan ditetapkan sebagai peringatan saja saat dilanggar.
“error” atau 2: aturan wajib dipatuhi dan program dapat mengalami error.
Contoh bentuk penulisan aturan dalam konfigurasi tampak seperti berikut.

{
rules: {
"no-duplicate-imports": "off",
"no-use-before-define": "error",
"constructor-super": "error",
"no-var": "warn",
"no-unreachable": "warn",
"no-extra-boolean-cast": "warn"
}
}

Pengujian Program
Sebagai pembangun program, kami yakin Anda tidak asing dengan istilah testing atau pengujian. Pengujian adalah proses memastikan keberhasilan suatu sistem untuk mencegah kegagalan saat beroperasi. Ada dua metode yang bisa kita lakukan. Jika tidak secara manual, kita akan lakukan pengujian aplikasi secara otomatis.

Pengujian manual cukup dilakukan dengan menjalankan program dan memperhatikan output yang dikeluarkan. Perbaikan akan dilakukan jika terjadi error. Namun, testing otomatis sangat kami rekomendasikan karena cara manual sangat rentan dilakukan.

Pengujian otomatis akan memberikan dua kemungkinan hasil, yaitu pass dan fail. Jika pengujian dinyatakan lolos, runtime akan menandainya sebagai pass (biasanya diwarnai hijau), sedangkan runtime memberi hasil fail (biasanya diwarnai merah) saat pernyataan gagal muncul.

Kultur yang tidak akan kita dapati dengan pengujian otomatis: jalankan program → saksikan hasil → perbaiki kode jika hasil aneh.

Testing dalam Node.js
Pengujian pada Node.js membutuhkan dua buah module, yaitu node:test dan node:assert. node:test berperan sebagai test runner yang menawarkan API untuk menuliskan skenario pengujian. Adapun node:assert berperan sebagai test assertion yang menyediakan objek untuk memvalidasi nilai antara actual (nilai sesungguhnya) dan expected (nilai yang diharapkan).

Berikut adalah contoh kode testing dengan Node.js.

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

describe('Calculator', () => {
it('should add correctly', () => {
// Arrange
const operandA = 1;
const operandB = 1;

    // Action
    const actualValue = add(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);

});
});
Berikut adalah beberapa penjelasan dari beberapa function di atas.

describe: membungkus banyak kasus pengujian dalam konteks yang sama.
test: mendefinisikan kasus pengujian baru.
assert.equal: memvalidasi nilai antara actual dan expected.

Testing dalam Bun
Function testing milik Bun sebetulnya tidak berbeda dengan Node.js. Namun, lokasi module-nya perlu kita sesuaikan menjadi bun:test. Contoh implementasinya seperti berikut.

import { it, describe, expect } from 'bun:test';

describe('arithmetic', () => {
it('1 + 1', () => {
expect(2 + 2).toBe(4);
});

it('3 _ 2', () => {
expect(3 _ 2).toBe(6);
});
});
bun:test sedikit berbeda dengan node:test. Jika Node.js menggunakan assert untuk menguji nilai, Bun menggunakan expect dan matcher. expect menerima satu parameter yang menjadi actual value dan kita membutuhkan .toBe sebagai matcher untuk mengujinya dengan expected value.

Strategi Terbaik Susun Testing
Berikut adalah tiga best practice dalam menulis kode testing otomatis.

Menentukan konteks, skenario, dan ekspektasi melalui parameter pertama dari describe, it, ataupun test.
Menerapkan strategi arrange, action, dan assert dalam membangun proses validasi nilai. Strategi ini disingkat dengan AAA.
Menguji hasil program berdasarkan daftar edge cases-nya. Caranya bisa dengan mendefinisikan skenario-skenario yang bersifat positif dan negatif dan menuangkannya dalam kode testing.
