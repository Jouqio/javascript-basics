## Mutator Function

Secara umum, perubahan data secara tidak sadar terjadi karena penggunaan beberapa fungsi bawaan JavaScript yang bersifat mengubah atau biasa disebut mutator function. Berikut adalah beberapa fungsi yang sering kita gunakan dan harus diperhatikan kembali ketika menerapkan prinsip immutability.

1. Array.push: menambahkan elemen di akhir dari sebuah array.
2. Array.pop: menghapus elemen terakhir dari sebuah array.
3. Array.shift: menghapus elemen pertama dari sebuah array.
4. Array.unshift: menambahkan elemen di awal dari sebuah array.
5. Array.splice: menambahkan atau menghapus elemen di posisi tertentu dari sebuah array.
6. Array.reverse: membalikkan urutan elemen dari sebuah array.
7. Array.sort: mengurutkan elemen dari sebuah array.
8. Object.assign: memodifikasi properti dari object.

Daftar fungsi di atas bersifat mutate, alias mengubah langsung data array asli. Tentu penggunaan method tersebut di dalam fungsi akan membuat fungsi menghasilkan efek samping.

Fungsi max adalah fungsi yang mengembalikan elemen bernilai terbesar dari array yang dikirimkan melalui argumen. Sepintas, fungsi max terlihat pure karena tidak mengakses nilai selain dalam argumennya. Namun, karena dalam implementasinya kita menggunakan fungsi sort dan pop, fungsi max jadi memiliki efek samping, yaitu mengubah nilai array numbers yang diberikan melalui argumen. Efek samping ini mungkin saja tidak terduga karena tujuan fungsi tersebut hanya mengembalikan elemen yang paling besar.