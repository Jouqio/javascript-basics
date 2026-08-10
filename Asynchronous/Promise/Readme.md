## Promise bekerja dengan tiga buah state atau kondisi.

1. Pending: kondisi awal sebuah proses berjalan. Belum ada hasil yang diharapkan.
2. Fulfilled: kondisi keberhasilan proses dan akan mengembalikan nilai positif. 
   Misalnya mengembalikan isi berkas jika pembacaannya sukses.
3. Rejected: operasi terjadi kegagalan dan membawa alasan atau data mengenai masalah ini. 
   Biasanya, data kegagalan berupa instance dari class Error.

   Dari ketiga kondisi Promise, ini mirip dengan kehidupan nyata. Pending menandakan sebuah janji sedang berproses untuk menuju state diselesaikan, baik itu fulfilled maupun rejected. Masuk ke kategori fulfilled untuk menandakan sebuah janji ditepati dan memberikan hasil kesuksesannya serta rejected untuk menandakan sebuah janji teringkari dan memberikan alasannya.

   Mari kita ambil contoh tugas mencuci pakaian pada mesin cuci. Bayangkan saja mesin cuci punya tiga buah state.

1. Pending: mesin cuci sedang berjalan dan belum bisa memberikan hasil apa pun.
2. Fulfilled: mesin cuci menyelesaikan tugasnya dengan baik dan pakaian sudah dibersihkan.
3. Rejected: mesin cuci mengalami kegagalan ketika berproses dan mengembalikan baju kotor beserta alasannya. 
   Misalnya belum diberi sabun, air tiba-tiba tidak mengalir, dan berbagai faktor lainnya.
   
Promise pada akhirnya akan diselesaikan. Tugas kita sebagai developer adalah memberikan kode logika untuk menangani jika proses masuk ke fulfilled atau terjadi kesalahan (rejected).