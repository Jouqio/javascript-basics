## Array Reduce

Array.reduce digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja. Berikut adalah struktur dari penggunaan fungsi Array.reduce.

array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
 
// [...] adalah opsional parameter
Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.