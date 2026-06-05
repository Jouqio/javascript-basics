//Alert, Prompt, Log

//Alert
//digunakan untuk menampilkan pesan kepada pengguna dalam bentuk kotak dialog yang muncul di layar. Pesan ini biasanya digunakan untuk memberikan informasi, peringatan, atau instruksi kepada pengguna. Fungsi alert() menerima satu argumen berupa string yang akan ditampilkan dalam kotak dialog.
//contoh penggunaan alert
alert("Selamat datang di belajar JavaScript!"); //menampilkan pesan "Selamat datang di belajar JavaScript!" dalam kotak dialog

//Prompt
//digunakan untuk meminta input dari pengguna dalam bentuk kotak dialog yang muncul di layar. Fungsi prompt() menerima dua argumen, yaitu pesan yang akan ditampilkan dalam kotak dialog dan nilai default yang akan ditampilkan di dalam kotak input. Fungsi prompt() akan mengembalikan nilai yang dimasukkan oleh pengguna sebagai string.
//contoh penggunaan prompt
let nama = prompt("Masukkan nama Anda:", ""); //menampilkan pesan "Masukkan nama Anda:" dalam kotak dialog dan menyimpan nilai yang dimasukkan oleh pengguna ke dalam variabel nama
alert("Halo, " + nama + "!"); //menampilkan pesan "Halo, [nama]!" dalam kotak dialog, dimana [nama] adalah nilai yang dimasukkan oleh pengguna

//Log
//digunakan untuk menampilkan pesan atau informasi di konsol browser. Fungsi console.log() menerima satu atau lebih argumen yang akan ditampilkan di konsol. Fungsi ini sangat berguna untuk debugging dan memeriksa nilai variabel atau hasil dari suatu operasi.
//contoh penggunaan console.log
let usia = 25; //mendefinisikan variabel usia dengan nilai 25
console.log("Usia saya adalah " + usia + " tahun."); //menampilkan pesan "Usia saya adalah 25 tahun." di konsol, dimana 25 adalah nilai dari variabel usia
alert("Usia saya adalah " + usia + " tahun."); //menampilkan pesan "Usia saya adalah 25 tahun." dalam kotak dialog, dimana 25 adalah nilai dari variabel usia]

