//Conditional Statement
//digunakan untuk mengambil keputusan dalam program berdasarkan kondisi tertentu. Dalam JavaScript, terdapat beberapa jenis conditional statement, yaitu if, if-else, if-else if-else, dan switch.

//contoh penggunaan if statement
let nilai = 80;
if (nilai >= 75) {
  //if digunakan untuk memberikan kondisi, jika nilai lebih besar atau sama dengan 75 maka akan menjalankan kode dibawahnya
  console.log("Selamat, Anda lulus!"); //menampilkan pesan "Selamat, Anda lulus!" di console, menggunakan console.log untuk menampilkan data pada console
}

//contoh penggunaan if-else statement
let nilai2 = 60;
if (nilai2 >= 75) {
  //if digunakan untuk memberikan kondisi, jika nilai2 lebih besar atau sama dengan 75 maka akan menjalankan kode dibawahnya
  console.log("Selamat, Anda lulus!"); //menampilkan pesan "Selamat, Anda lulus!" di console, menggunakan console.log untuk menampilkan data pada console
} else {
  //else digunakan untuk memberikan kondisi lain jika kondisi pertama tidak terpenuhi, jika nilai2 kurang dari 75 maka akan menjalankan kode dibawahnya
  console.log("Maaf, Anda tidak lulus!"); //menampilkan pesan "Maaf, Anda tidak lulus!" di console, menggunakan console.log untuk menampilkan data pada console
}

//contoh penggunaan if-else if-else statement
let nilai3 = 85;
if (nilai3 >= 90) {
  //if digunakan untuk memberikan kondisi, jika nilai3 lebih besar atau sama dengan 90 maka akan menjalankan kode dibawahnya
  console.log("Selamat, Anda mendapatkan nilai A!"); //menampilkan pesan "Selamat, Anda mendapatkan nilai A!" di console, menggunakan
  //console.log untuk menampilkan data pada console
} else if (nilai3 >= 80) {
  //else if digunakan untuk memberikan kondisi lain jika kondisi pertama tidak terpenuhi, jika nilai3 lebih besar atau sama dengan 80 maka akan menjalankan kode dibawahnya
  console.log("Selamat, Anda mendapatkan nilai B!"); //menampilkan pesan "Selamat, Anda mendapatkan nilai B!" di console, menggunakan
  //console.log untuk menampilkan data pada console
} else {
  //else digunakan untuk memberikan kondisi lain jika kondisi pertama dan kedua tidak terpenuhi, jika nilai3 kurang dari 80 maka akan menjalankan kode dibawahnya
  console.log("Maaf, Anda mendapatkan nilai C!"); //menampilkan pesan "Maaf, Anda mendapatkan nilai C!" di console, menggunakan console.log untuk menampilkan data pada console
}

//contoh penggunaan switch case statement
let hari = "Senin";
switch (hari) {
  //switch digunakan untuk memberikan kondisi yang lebih banyak, jika hari adalah "Senin" maka akan menjalankan kode dibawahnya
  case "Senin":
    console.log("Hari ini adalah hari Senin"); //menampilkan pesan "Hari ini adalah hari Senin" di console, menggunakan console.log untuk menampilkan data pada console
    break; //break digunakan untuk menghentikan eksekusi switch case setelah menjalankan kode pada case yang sesuai, jika tidak menggunakan break maka akan menjalankan kode pada case selanjutnya
  case "Selasa":
    console.log("Hari ini adalah hari Selasa"); //menampilkan pesan "Hari ini adalah hari Selasa" di console, menggunakan console.log untuk menampilkan data pada console
    break; //break digunakan untuk menghentikan eksekusi switch case setelah menjalankan kode pada case yang sesuai, jika tidak menggunakan break maka akan menjalankan kode pada case selanjutnya
  case "Rabu":
    console.log("Hari ini adalah hari Rabu");
    break; //break digunakan untuk menghentikan eksekusi switch case setelah menjalankan kode pada case yang sesuai, jika tidak menggunakan break maka akan menjalankan kode pada case selanjutnya
  case "Kamis":
    console.log("Hari ini adalah hari Kamis");
    break; //break digunakan untuk menghentikan eksekusi switch case setelah menjalankan kode pada case yang sesuai, jika tidak menggunakan break maka akan menjalankan kode pada case selanjutnya
  case "Jumat":
    console.log("Hari ini adalah hari Jumat");
    break; //break digunakan untuk menghentikan eksekusi switch case setelah menjalankan kode pada case yang sesuai, jika tidak menggunakan break maka akan menjalankan kode pada case selanjutnya
  case "Sabtu":
    console.log("Hari ini adalah hari Sabtu");
    break; //break digunakan untuk menghentikan eksekusi switch case setelah menjalankan kode pada case yang sesuai, jika tidak menggunakan break maka akan menjalankan kode pada case selanjutnya
  case "Minggu":
    console.log("Hari ini adalah hari Minggu");
    break; //break digunakan untuk menghentikan eksekusi switch case setelah menjalankan kode pada case yang sesuai, jika tidak menggunakan break maka akan menjalankan kode pada case selanjutnya
  default:
    console.log("Hari yang Anda masukkan tidak valid"); //menampilkan pesan "Hari yang Anda masukkan tidak valid" di console, menggunakan
  //console.log untuk menampilkan data pada console, default digunakan untuk memberikan kondisi lain jika semua case tidak terpenuhi, jika hari tidak sesuai dengan case yang ada maka akan menjalankan kode dibawahnya
}
