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
