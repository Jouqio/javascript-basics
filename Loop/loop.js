// for loop
// for loop digunakan untuk melakukan perulangan dengan jumlah yang sudah ditentukan, for loop terdiri dari 3 bagian yaitu inisialisasi, kondisi, dan increment/decrement
// inisialisasi digunakan untuk memberikan nilai awal pada variabel yang akan digunakan dalam perulangan, inisialisasi hanya akan dijalankan sekali pada awal perulangan
// kondisi digunakan untuk memberikan kondisi pada perulangan, perulangan akan terus berjalan selama kondisi bernilai true, jika kondisi bernilai false maka perulangan akan berhenti
// increment/decrement digunakan untuk memberikan nilai tambah atau kurang pada variabel yang digunakan dalam perulangan, increment/decrement akan dijalankan setiap kali perulangan selesai

//contoh for loop
for (let i = 0; i < 5; i++) {
  //inisialisasi i dengan nilai 0, kondisi i kurang dari 5, increment i dengan nilai 1
  console.log(i); //menampilkan nilai i pada console, nilai i akan berubah setiap kali perulangan selesai
}

//3 statement

const namaGuru = ["Pak Budi", "Bu Siti", "Pak Andi", "Bu Dina"]; //array nama guru, menggunakan array karena kita memiliki banyak nama guru
//length digunakan untuk mengetahui jumlah data dalam array, length akan mengembalikan nilai berupa jumlah data dalam array
console.log(namaGuru.length); //menampilkan jumlah nama guru pada console, menggunakan console.log untuk menampilkan data pada console

for (let i = 0; i < namaGuru.length; i++) {
  //i++ digunakan untuk memberikan nilai tambah pada variabel i, i++ akan menambahkan nilai i dengan 1 setiap kali perulangan selesai, i++ sama dengan i = i + 1
  //inisialisasi i dengan nilai 0, kondisi i kurang dari panjang array namaGuru, increment i dengan nilai 1
  console.log(namaGuru[i]); //menampilkan nilai i pada console, nilai i akan berubah setiap kali perulangan selesai
}

//contoh for loop dengan array
const namaSiswa = ["Adi", "Budi", "Cici", "Dedi"]; //array nama siswa, menggunakan array karena kita memiliki banyak nama siswa
for (let i = 0; i < namaSiswa.length; i++) {
  //i++ digunakan untuk memberikan nilai tambah pada variabel i, i++ akan menambahkan nilai i dengan 1 setiap kali perulangan selesai, i++ sama dengan i = i + 1
  //inisialisasi i dengan nilai 0, kondisi i kurang dari panjang array namaSiswa, increment i dengan nilai 1
  console.log(namaSiswa[i]); //menampilkan nilai i pada console, nilai i akan berubah setiap kali perulangan selesai
}

//w