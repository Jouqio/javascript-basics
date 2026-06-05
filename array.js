let namaGuru = ["Pak Budi", "Bu Siti", "Pak Andi"]; //array nama guru, menggunakan array karena kita memiliki banyak nama guru
let namaSiswa = ["Adi", "Budi", "Cici"]; //array nama siswa, menggunakan array karena kita memiliki banyak nama siswa
let namaKelas = ["X IPA 1", "X IPA 2", "X IPS 1"]; //array nama kelas, menggunakan array karena kita memiliki banyak nama kelas

alert(
  `Nama Guru: ${namaGuru[0]}, Nama Siswa: ${namaSiswa[0]}, Nama Kelas: ${namaKelas[0]}`,
); //menampilkan nama guru, siswa, dan kelas pertama dengan template literal

//menambahkan data ke dalam array
//push digunakan untuk menambahkan data baru ke dalam array, push akan menambahkan data baru ke akhir array
namaGuru.push("Bu Ani"); //menambahkan nama guru baru ke dalam array namaGuru, menggunakan push karena kita ingin menambahkan data baru ke dalam array
namaSiswa.push("Dedi"); //menambahkan nama siswa baru ke dalam array namaSiswa, menggunakan push karena kita ingin menambahkan data baru ke dalam array
namaKelas.push("X IPS 2"); //menambahkan nama kelas baru ke dalam array namaKelas, menggunakan push karena kita ingin menambahkan data baru ke dalam array

alert(
  `Nama Guru: ${namaGuru.join(", ")}, Nama Siswa: ${namaSiswa.join(", ")}, Nama Kelas: ${namaKelas.join(", ")}`,
); //menampilkan semua nama guru, siswa, dan kelas dengan template literal, menggunakan join untuk menggabungkan semua data dalam array menjadi satu string dengan pemisah koma (,)

//menghapus data dari dalam array
//pop digunakan untuk menghapus data terakhir dari dalam array, pop akan menghapus data terakhir dari dalam array
namaGuru.pop(); //menghapus nama guru terakhir dari dalam array namaGuru, menggunakan pop karena kita ingin menghapus data terakhir dari dalam array
namaSiswa.pop(); //menghapus nama siswa terakhir dari dalam array namaSiswa, menggunakan pop karena kita ingin menghapus data terakhir dari dalam array
namaKelas.pop(); //menghapus nama kelas terakhir dari dalam array namaKelas, menggunakan pop karena kita ingin menghapus data terakhir dari dalam array

alert(
  `Nama Guru: ${namaGuru.join(", ")}, Nama Siswa: ${namaSiswa.join(", ")}, Nama Kelas: ${namaKelas.join(", ")}`,
); //menampilkan semua nama guru, siswa, dan kelas dengan template literal, menggunakan join untuk menggabungkan semua data dalam array menjadi satu string dengan pemisah koma (,)

//mengakses data dari dalam array
//index digunakan untuk mengakses data dari dalam array, index dimulai dari 0, jadi untuk mengakses data pertama kita menggunakan index 0, untuk mengakses data kedua kita menggunakan index 1, dan seterusnya
alert(
  `Nama Guru: ${namaGuru[1]}, Nama Siswa: ${namaSiswa[1]}, Nama Kelas: ${namaKelas[1]}`,
); //menampilkan nama guru, siswa, dan kelas kedua dengan template literal, menggunakan index untuk mengakses data dari dalam array

//mengubah data dari dalam array
//index digunakan untuk mengubah data dari dalam array, index dimulai dari 0, jadi untuk mengubah data pertama kita menggunakan index 0, untuk mengubah data kedua kita menggunakan index 1, dan seterusnya
namaGuru[0] = "Pak Joko"; //mengubah nama guru pertama dari dalam array namaGuru menjadi "Pak Joko", menggunakan index untuk mengubah data dari dalam array
namaSiswa[0] = "Edi"; //mengubah nama siswa pertama dari dalam array namaSiswa menjadi "Edi", menggunakan index untuk mengubah data dari dalam array
namaKelas[0] = "X IPA 3"; //mengubah nama kelas pertama dari dalam array namaKelas menjadi "X IPA 3", menggunakan index untuk mengubah data dari dalam array

alert(
  `Nama Guru: ${namaGuru.join(", ")}, Nama Siswa: ${namaSiswa.join(", ")}, Nama Kelas: ${namaKelas.join(", ")}`,
); //menampilkan semua nama guru, siswa, dan kelas dengan template literal, menggunakan join untuk menggabungkan semua data dalam array menjadi satu string dengan pemisah koma (,)

