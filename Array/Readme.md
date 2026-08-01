#  Array di JavaScript

Ringkasan materi tentang **Array** di JavaScript — mulai dari cara membuatnya, mengakses elemennya, memanipulasi nilai, menghapus elemen, hingga array destructuring.

---

##  Daftar Isi

- [Apa Itu Array](#-apa-itu-array)
- [Membuat Array](#-membuat-array)
  - [1. Menggunakan Object Constructor](#1-menggunakan-object-constructor)
  - [2. Menggunakan Array.from](#2-menggunakan-arrayfrom)
  - [3. Menggunakan Array Literal](#3-menggunakan-array-literal)
- [Mengakses Element Array](#-mengakses-element-array)
- [Manipulasi Nilai Array](#-manipulasi-nilai-array)
  - [Menggunakan Indexing](#menggunakan-indexing)
  - [Menggunakan Push](#menggunakan-push)
- [Menghapus Element dan Data Array](#-menghapus-element-dan-data-array)
  - [Menggunakan Delete](#menggunakan-delete)
  - [Menggunakan Splice](#menggunakan-splice)
  - [Menggunakan Shift dan Pop](#menggunakan-shift-dan-pop)
- [Array Destructuring](#-array-destructuring)
- [Kesimpulan](#-kesimpulan)

---

##  Apa Itu Array

**Array** adalah struktur data spesial yang dapat menyimpan kumpulan data secara **terurut**. Berbeda dengan object yang menyimpan data tidak terurut, elemen-elemen dalam array memiliki posisi (indeks) yang jelas dan berurutan.

---

##  Membuat Array

Ada tiga cara untuk membuat array di JavaScript.

### 1. Menggunakan Object Constructor

Array dapat dibuat dengan constructor `new Array()`.

```js
const users = new Array();
const numbers = new Array(5);
```

### 2. Menggunakan Array.from

Cara lainnya adalah menggunakan `Array.from`, yang bisa mengubah data lain (seperti string) menjadi array.

```js
const foo = Array.from('foo');
console.log(foo); // Output: ['f', 'o', 'o']
```

### 3. Menggunakan Array Literal

Cara yang paling mudah, singkat, dan **disarankan** untuk membuat array adalah menggunakan **array literal**.

```js
const array = [];
const fruits = ['apple', 'banana', 'cherry'];
```

---

##  Mengakses Element Array

Karena data di dalam array tersimpan secara terurut, kita dapat mengaksesnya dengan mudah menggunakan nilai **indeks**. Indeks adalah angka yang digunakan untuk merujuk ke nilai di dalam array, sehingga kita bisa menambahkan, mengubah, atau menghapus nilainya.

```js
const myArray = [42, 55, 30];
console.log(myArray[1]); // Output: 55
```

> 📝 **Catatan:** Indeks array dimulai dari `0`, sehingga `myArray[1]` merujuk pada elemen kedua.

---

##  Manipulasi Nilai Array

Manipulasi nilai pada array dapat dilakukan dengan menggunakan **indexing** dan method **push**.

### Menggunakan Indexing

Untuk mengubah nilai suatu elemen, kita bisa langsung merujuk indeksnya lalu memberi nilai baru.

```js
const myArray = [1, 2, 3, 4, 5];
myArray[1] = 10;
console.log(myArray); // Output: [1, 10, 3, 4, 5]
```

### Menggunakan Push

**Push** adalah cara yang digunakan untuk menambahkan nilai baru ke dalam array pada elemen paling akhir. Caranya, tuliskan nama array, diikuti tanda titik, method `push`, dan nilai yang ingin ditambahkan.

```js
const myArray = [1, 2, 3, 4, 5];
myArray.push(6);
```

---

##  Menghapus Element dan Data Array

### Menggunakan Delete

Data pada array dapat dihapus menggunakan keyword `delete`. Namun, perlu dicatat bahwa cara ini hanya menghapus **nilai**-nya, sementara posisi elemen tetap ada (kosong).

```js
const myArray = ['Android', 'Data Science', 'Web'];
delete myArray[1];

console.log(myArray); // Output: ['Android', <1 empty item>, 'Web']
```

### Menggunakan Splice

Untuk menghapus elemen **beserta datanya sepenuhnya** (sehingga panjang array ikut berkurang), gunakan method `splice()`.

```js
const myArray = ['Android', 'Data Science', 'Web'];
myArray.splice(1, 1);
console.log(myArray); // Output: ['Android', 'Web']
```

### Menggunakan Shift dan Pop

Ada juga cara lain, yaitu menggunakan method `shift` (menghapus elemen pertama) dan `pop` (menghapus elemen terakhir).

```js
const myArray = ['Android', 'Data Science', 'Web'];
myArray.shift();
console.log(myArray); // Output: ['Data Science', 'Web']

const myArray2 = ['Android', 'Data Science', 'Web'];
myArray2.pop();
console.log(myArray2); // Output: ['Android', 'Data Science']
```

---

##  Array Destructuring

**Destructuring** cukup mudah dilakukan, yaitu dengan menggunakan kurung siku yang di dalamnya berisi nama-nama variabel yang ingin kita assign, diikuti dengan assignment operator (`=`) dan array yang ingin diambil nilainya.

```js
const introduction = ['Hello', 'Arsy'];
const [greeting, name] = introduction;
console.log(greeting); // Output: Hello
```

---

##  Kesimpulan

- **Array** menyimpan kumpulan data secara **terurut**, berbeda dengan object yang tidak terurut.
- Array bisa dibuat dengan tiga cara, tetapi **array literal** (`[]`) adalah cara yang paling disarankan.
- Elemen array diakses menggunakan **indeks** (dimulai dari `0`).
- Nilai array bisa dimanipulasi dengan **indexing langsung** atau method **`push`**.
- Menghapus elemen bisa dengan `delete` (menyisakan slot kosong), `splice()` (menghapus total), atau `shift`/`pop` (menghapus elemen pertama/terakhir).
- **Array destructuring** memudahkan pengambilan beberapa nilai array sekaligus ke dalam variabel.