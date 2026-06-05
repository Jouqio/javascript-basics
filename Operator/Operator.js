//Operator
//Operator adalah simbol atau karakter khusus yang digunakan untuk melakukan operasi pada nilai atau variabel dalam JavaScript. Operator dapat digunakan untuk melakukan berbagai jenis operasi, seperti perhitungan matematika, perbandingan, logika, dan lainnya.
//digunakan untuk melakukan operasi pada nilai atau variabel, operator dapat digunakan untuk melakukan berbagai jenis operasi, seperti perhitungan matematika, perbandingan, logika, dan lainnya. Operator dapat digunakan untuk mengubah nilai variabel, membandingkan nilai, atau menggabungkan nilai. Operator juga dapat digunakan untuk membuat ekspresi yang lebih kompleks dalam kode JavaScript.

//contoh penggunaan operator
let a = 10; //mendefinisikan variabel a dengan nilai 10
let b = 5; //mendefinisikan variabel b dengan nilai 5

//operator aritmatika
console.log(a + b); //menampilkan hasil penjumlahan a dan b, menggunakan operator + untuk melakukan penjumlahan
console.log(a - b); //menampilkan hasil pengurangan a dan b, menggunakan operator - untuk melakukan pengurangan
console.log(a * b); //menampilkan hasil perkalian a dan b, menggunakan operator * untuk melakukan perkalian
console.log(a / b); //menampilkan hasil pembagian a dan b, menggunakan operator / untuk melakukan pembagian
console.log(a % b); //menampilkan hasil sisa bagi a dan b, menggunakan operator % untuk melakukan operasi modulus 
console.log(a ** b); //menampilkan hasil perpangkatan a dan b, menggunakan operator ** untuk melakukan operasi perpangkatan 

//operator perbandingan
console.log(a > b); //menampilkan hasil perbandingan a dan b, menggunakan operator > untuk membandingkan apakah a lebih besar dari b
console.log(a < b); //menampilkan hasil perbandingan a dan b, menggunakan operator < untuk membandingkan apakah a lebih kecil dari b
console.log(a >= b); //menampilkan hasil perbandingan a dan b, menggunakan operator >= untuk membandingkan apakah a lebih besar atau sama dengan b
console.log(a <= b); //menampilkan hasil perbandingan a dan b, menggunakan operator <= untuk membandingkan apakah a lebih kecil atau sama dengan b
console.log(a == b); //menampilkan hasil perbandingan a dan b, menggunakan operator == untuk membandingkan apakah a sama dengan b
console.log(a != b); //menampilkan hasil perbandingan a dan b, menggunakan operator != untuk membandingkan apakah a tidak sama dengan b 
console.log(a === b); //menampilkan hasil perbandingan a dan b, menggunakan operator === untuk membandingkan apakah a sama dengan b dan memiliki tipe data yang sama
console.log(a !== b); //menampilkan hasil perbandingan a dan b, menggunakan operator !== untuk membandingkan apakah a tidak sama dengan b atau memiliki tipe data yang berbeda

//operator logika
console.log(a > 5 && b < 10); //menampilkan hasil operasi logika AND, menggunakan operator && untuk melakukan operasi logika AND, hasilnya akan true jika kedua kondisi bernilai true
console.log(a > 5 || b < 10); //menampilkan hasil operasi logika OR, menggunakan operator || untuk melakukan operasi logika OR, hasilnya akan true jika salah satu kondisi bernilai true
console.log(!(a > 5)); //menampilkan hasil operasi logika NOT, menggunakan operator ! untuk melakukan operasi logika NOT, hasilnya akan true jika kondisi bernilai false

//operator penugasan
a += 5; //menambahkan nilai 5 ke variabel a, menggunakan operator += untuk melakukan penugasan dengan penjumlahan, sama dengan a = a + 5
console.log(a); //menampilkan nilai a setelah penugasan, menggunakan console.log untuk menampilkan data pada console
b *= 2; //mengalikan nilai b dengan 2, menggunakan operator *= untuk melakukan penugasan dengan perkalian, sama dengan b = b * 2
console.log(b); //menampilkan nilai b setelah penugasan, menggunakan console.log untuk menampilkan data pada console

//Contoh penggunaan operator dengan tipe data string
let namaDepan = "Syauqi"; //mendefinisikan variabel namaDepan dengan nilai "Syauqi"
let namaBelakang = "Abdi"; //mendefinisikan variabel namaBelakang dengan nilai "Abdi"
let namaLengkap = namaDepan + " " + namaBelakang; //menggabungkan namaDepan dan namaBelakang dengan spasi di antara keduanya, menggunakan operator + untuk melakukan penggabungan string
console.log(namaLengkap); //menampilkan nilai namaLengkap, menggunakan console.log untuk menampilkan data pada console

//Contoh penggunaan operator dengan tipe data boolean
let isStudent = true;
let isGraduated = false;
console.log(isStudent && isGraduated);
console.log(isStudent || isGraduated);
console.log(!isStudent);

//Contoh penggunaan operator dengan tipe data array
let angka = [1, 2, 3, 4, 5];
console.log(angka.length);
console.log(angka[0] + angka[1]); //menampilkan hasil penjumlahan elemen pertama dan kedua dalam array angka, menggunakan operator + untuk melakukan penjumlahan
console.log(angka[2] * angka[3]); //menampilkan hasil perkalian elemen ketiga dan keempat dalam array angka, menggunakan operator * untuk melakukan perkalian

//Contoh penggunaan operator dengan tipe data object
let mahasiswa = {
  nama: "Syauqi Nuzul Abdi",
  usia: 20,
  jurusan: "Teknik Informatika",
};
console.log(mahasiswa.nama);
console.log(mahasiswa.usia + 5); //menampilkan hasil penjumlahan usia mahasiswa dengan 5, menggunakan operator + untuk melakukan penjumlahan
console.log(mahasiswa.jurusan.length); //menampilkan panjang string jurusan mahasiswa, menggunakan operator . untuk mengakses properti length dari string jurusan

