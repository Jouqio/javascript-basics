//Object
//digunakan untuk menyimpan data yang memiliki banyak nilai dengan key dan value, object ditulis dengan menggunakan tanda kurung kurawal ({}) dan setiap key dan value dipisahkan dengan koma (,)

//contoh object
let alamat = {
  //object, menggunakan tanda kurung kurawal ({}) karena kita memiliki banyak data alamat, setiap data alamat dipisahkan dengan koma (,)
  jalan: "Jl. Kapten Piere Tendean, Blok F No 6", //key jalan dengan value "Jl. Kapten Piere Tendean, Blok F No 6"
  kota: "Jakarta", //key kota dengan value "Jakarta"
  negara: "Indonesia", //key negara dengan value "Indonesia"
};

//mengakses data dari dalam object
//key digunakan untuk mengakses data dari dalam object, key ditulis tanpa menggunakan tanda kutip
alert(`Alamat: ${alamat.jalan}, ${alamat.kota}, ${alamat.negara}`); //menampilkan alamat lengkap dengan template literal, menggunakan key untuk mengakses data dari dalam object

//mengubah data dari dalam object
//key digunakan untuk mengubah data dari dalam object, key ditulis tanpa menggunakan tanda kutip
alamat.jalan = "Jl. Sudirman, Blok A No 10"; //mengubah jalan dari dalam object alamat menjadi "Jl. Sudirman, Blok A No 10", menggunakan key untuk mengubah data dari dalam object
alamat.kota = "Bandung"; //mengubah kota dari dalam object alamat menjadi "Bandung", menggunakan key untuk mengubah data dari dalam object
alamat.negara = "Indonesia"; //mengubah negara dari dalam object alamat menjadi "Indonesia", menggunakan key untuk mengubah data dari dalam object

alert(`Alamat: ${alamat.jalan}, ${alamat.kota}, ${alamat.negara}`); //menampilkan alamat lengkap dengan template literal, menggunakan key untuk mengakses data dari dalam object

//menambahkan data baru ke dalam object
//key digunakan untuk menambahkan data baru ke dalam object, key ditulis tanpa menggunakan tanda kutip
alamat.kodePos = "12345"; //menambahkan key kodePos dengan value "12345" ke dalam object alamat, menggunakan key untuk menambahkan data baru ke dalam object
alert(
  `Alamat: ${alamat.jalan}, ${alamat.kota}, ${alamat.negara}, Kode Pos: ${alamat.kodePos}`,
); //menampilkan alamat lengkap dengan template literal, menggunakan key untuk mengakses data dari dalam object

//menghapus data dari dalam object
//delete digunakan untuk menghapus data dari dalam object, delete akan menghapus data dari dalam object berdasarkan key yang kita tentukan
delete alamat.kodePos; //menghapus key kodePos dari dalam object alamat, menggunakan delete untuk menghapus data dari dalam object
alert(
  `Alamat: ${alamat.jalan}, ${alamat.kota}, ${alamat.negara}, Kode Pos: ${
    alamat.kodePos
  }`,
); //menampilkan alamat lengkap dengan template literal, menggunakan key untuk mengakses data dari dalam object, karena key kodePos sudah dihapus maka akan menampilkan undefined
