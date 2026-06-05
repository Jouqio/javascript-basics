// While loop
// while loop digunakan untuk melakukan perulangan dengan kondisi yang belum diketahui, while loop akan terus berjalan selama kondisi bernilai true, jika kondisi bernilai false maka perulangan akan berhenti

// contoh while loop

let i = 0; //inisialisasi i dengan nilai 0
while (i < 10) {
  //while digunakan untuk memberikan kondisi pada perulangan, perulangan akan terus berjalan selama kondisi bernilai true, jika kondisi bernilai false maka perulangan akan berhenti
  //kondisi i kurang dari 10, perulangan akan terus berjalan selama i kurang dari 10
  i++; //increment i dengan nilai 1, i++ akan menambahkan nilai i dengan 1 setiap kali perulangan selesai, i++ sama dengan i = i + 1
  console.log(i); //menampilkan nilai i pada console, nilai i akan berubah setiap kali perulangan selesai
}

do {
  //do digunakan untuk menjalankan kode terlebih dahulu sebelum mengecek kondisi, do while loop akan menjalankan kode minimal satu kali, meskipun kondisi bernilai false
  console.log('Syauqi Nuzul Abdi'); //menampilkan nilai i pada console, nilai i akan berubah setiap kali perulangan selesai
  i++; //increment i dengan nilai 1, i++ akan menambahkan nilai i dengan 1 setiap kali perulangan selesai, i++ sama dengan i = i + 1
} while (i < 10); //kondisi i kurang dari 10, perulangan akan terus berjalan selama i kurang dari 10
