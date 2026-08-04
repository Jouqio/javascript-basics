## Pure Function

FP menawarkan banyak manfaat, selain membuat kode jadi lebih ringkas, kode yang Anda tulis akan lebih mudah untuk diuji. Sebab, dengan menerapkan FP, fungsi yang kita buat hasilnya selalu terprediksi. Untuk mencapai manfaat tersebut, hal dasar yang perlu kita terapkan adalah konsep pure function.

Pure function merupakan istilah bagi sebuah fungsi yang memiliki dua sifat berikut.

1. Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
   Contoh, ketika fungsi diberikan argumen X, ia harus selalu mengembalikan nilai Y meski dipanggil dalam kondisi dan waktu yang beda. Jadi, nilai yang dihasilkan oleh fungsi selalu terprediksi. Untuk mencapai ini, fungsi tidak boleh   mengakses nilai di luar argumen dan variabel cakupan global.

2. Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
   Dalam konteks ini, efek samping merujuk pada segala perubahan yang dilakukan oleh fungsi pada variabel atau keadaan di luar cakupannya, seperti mengubah variabel global, berinteraksi dengan input dan output.
   Jika tidak memenuhi sifat tersebut, fungsi akan dikategorikan sebagai impure function.