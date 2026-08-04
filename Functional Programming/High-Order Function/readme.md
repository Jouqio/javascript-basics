## High-Order Function

Ada konsep dalam FP yang sangat mengandalkan kemampuan function expression. Konsep tersebut adalah high-order function (selanjutnya akan disingkat menjadi HOF). HOF adalah fungsi yang menerima fungsi lainnya sebagai argumen dan/atau mengembalikan sebuah fungsi lain. Umumnya, teknik HOF digunakan untuk berbagai hal berikut.

- Mengabstraksi fungsi aksi dari sebuah proses asynchronous (kita akan belajar asynchronous dalam modul selanjutnya) dalam bentuk callback.
- Membuat utility function, yaitu fungsi Array.map, Array.filter, Array.reduce, dan sebagainya.
- Menerapkan teknik matematika, seperti currying dan function composition.