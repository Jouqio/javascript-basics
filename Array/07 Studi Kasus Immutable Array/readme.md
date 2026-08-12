# 07. Studi Kasus: Todo List dengan Pola Immutable Array

## Konteks

Kita akan membangun logika sederhana untuk aplikasi **Todo List**, di mana
setiap operasi (tambah, hapus, ubah status, edit teks) **tidak boleh
memutasi array asli** — mirip seperti cara kerja *state* di React.

```js
const todosAwal = [
  { id: 1, teks: "Belajar Array", selesai: false },
  { id: 2, teks: "Olahraga", selesai: false },
  { id: 3, teks: "Baca Buku", selesai: true },
];
```

## 1. Menambah Todo Baru (Immutable)

```js
function tambahTodo(todos, teksBaru) {
  const todoBaru = {
    id: Date.now(),
    teks: teksBaru,
    selesai: false,
  };
  return [...todos, todoBaru]; // array baru, todos asli tidak berubah
}

const todosSetelahTambah = tambahTodo(todosAwal, "Menulis Kode");
```

## 2. Menghapus Todo (dengan `filter()`)

```js
function hapusTodo(todos, id) {
  return todos.filter((t) => t.id !== id);
}

const todosSetelahHapus = hapusTodo(todosAwal, 2);
```

## 3. Mengubah Status Selesai (dengan `map()`)

```js
function toggleSelesai(todos, id) {
  return todos.map((t) =>
    t.id === id ? { ...t, selesai: !t.selesai } : t
  );
}

const todosSetelahToggle = toggleSelesai(todosAwal, 1);
```

## 4. Mengedit Teks Todo (dengan `map()`)

```js
function editTodo(todos, id, teksBaru) {
  return todos.map((t) => (t.id === id ? { ...t, teks: teksBaru } : t));
}

const todosSetelahEdit = editTodo(todosAwal, 3, "Baca Buku Fiksi");
```

## 5. Menghitung Statistik (dengan `filter()` + `reduce()`)

```js
function hitungStatistik(todos) {
  const totalSelesai = todos.filter((t) => t.selesai).length;
  const totalBelum = todos.length - totalSelesai;

  return { total: todos.length, selesai: totalSelesai, belum: totalBelum };
}

console.log(hitungStatistik(todosAwal));
// { total: 3, selesai: 1, belum: 2 }
```

## Menggabungkan Semua dalam Satu Alur

```js
let todos = todosAwal;

todos = tambahTodo(todos, "Belajar Reduce");
todos = toggleSelesai(todos, 1);
todos = hapusTodo(todos, 2);

console.log(todos);
console.log(hitungStatistik(todos));

// todosAwal (variabel paling pertama) TETAP tidak berubah
console.log(todosAwal);
```

## Mengapa Pendekatan Ini Bagus?

- Setiap fungsi **murni (pure function)** — output hanya bergantung pada input, tidak ada efek samping tersembunyi.
- Mudah di-*trace* / debug karena setiap perubahan menghasilkan array baru.
- Cocok langsung diterapkan pada `useState` di React:

```js
// Contoh penerapan di React (ilustrasi konsep, bukan dijalankan di sini)
const [todos, setTodos] = useState(todosAwal);

const handleHapus = (id) => {
  setTodos((prev) => hapusTodo(prev, id));
};
```

## 📝 Latihan

1. Tambahkan fungsi `filterByStatus(todos, selesai)` untuk menampilkan todo berdasarkan status selesai/belum.
2. Buat fungsi `urutkanTodo(todos)` yang mengembalikan array todo terurut berdasarkan `teks` (A-Z) **tanpa memutasi array asli**.
3. Gabungkan `tambahTodo`, `hapusTodo`, dan `toggleSelesai` dalam satu skenario penggunaan sederhana (seperti simulasi command line).

---
⬅️ [Kombinasi Filter Map Reduce](../06%20Kombinasi%20Filter%20Map%20Reduce/readme.md) | 🏠 [Daftar Isi](../Readme.md) | ➡️ [Lanjut: Rangkuman Array](../08%20Rangkuman%20Array/readme.md)
