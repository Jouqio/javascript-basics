Kenapa masing-masing menggunakan metode itu ("immutable" = tidak mengubah array asli):

filter() — mengembalikan array baru berisi elemen yang lolos kondisi, tanpa memodifikasi products asli. Cocok untuk getProductsByCategory.
find() — mengembalikan elemen pertama yang cocok (bukan array), tepat untuk mencari satu produk lewat id.
reduce() — mengakumulasi nilai dari seluruh array jadi satu hasil (total harga), tanpa mengubah array sumber.
map() — mengembalikan array baru dengan bentuk tiap elemen diubah. Di sini dipakai bersama spread operator (...product) supaya object produk juga baru (bukan mutasi object lama), lalu properti price di-override dengan harga setelah diskon.

Catatan: applyDiscount menghitung diskon sebagai persentase (discount / 100) sesuai komentar "reduced by 10%" — jadi harga Laptop 1000 → 900, bukan 1000 - 10. Kalau ternyata maksudnya potongan nominal langsung (bukan persen), tinggal beri tahu saya, gampang disesuaikan.
