# 12. Studi Kasus: Project Sederhana (To-Do List)

## Tujuan

Di materi ini, kita akan menggabungkan **semua konsep** yang sudah dipelajari (selection, traversal, mengubah konten/style, membuat & menghapus elemen, event handling, form handling) untuk membangun sebuah **project nyata**: aplikasi **To-Do List** sederhana.

## Fitur yang Akan Dibangun

1. ✅ Menambah tugas baru lewat input + tombol/Enter
2. ✅ Menandai tugas selesai (klik untuk toggle, dengan efek coret)
3. ✅ Menghapus tugas
4. ✅ Menampilkan jumlah tugas yang masih tersisa
5. ✅ Validasi input tidak boleh kosong
6. ✅ Filter: Semua / Belum Selesai / Selesai

## Struktur HTML

```html
<div class="todo-app">
  <h1>To-Do List</h1>

  <form id="form-todo">
    <input type="text" id="input-todo" placeholder="Tambah tugas baru...">
    <button type="submit">Tambah</button>
  </form>

  <div class="filter">
    <button class="filter-btn aktif" data-filter="semua">Semua</button>
    <button class="filter-btn" data-filter="belum">Belum Selesai</button>
    <button class="filter-btn" data-filter="selesai">Selesai</button>
  </div>

  <ul id="daftar-todo"></ul>

  <p id="info-sisa">0 tugas tersisa</p>
</div>
```

## Konsep yang Dipakai & Di Mana

| Konsep | Digunakan untuk |
|--------|------------------|
| **Form Handling** | Menangkap input tugas baru + `preventDefault()` |
| **createElement / appendChild** | Membuat elemen `<li>` baru untuk setiap tugas |
| **classList** | Menandai status selesai (coret teks) & filter aktif |
| **Event Delegation** | Menangani klik centang/hapus pada tugas (termasuk yang baru ditambahkan) |
| **Traversal** (`closest`, `parentElement`) | Mencari elemen `<li>` terkait dari tombol yang diklik |
| **dataset** | Menyimpan status filter aktif |
| **Truthy/Falsy & Validasi** | Mencegah tugas kosong ditambahkan |

## Method Baru: `closest()`

Untuk mencari elemen **parent terdekat** yang cocok dengan selector tertentu (berguna dalam event delegation):

```js
daftar.addEventListener("click", function (event) {
  const li = event.target.closest("li"); // cari <li> terdekat dari elemen yang diklik
  if (!li) return; // klik di luar <li>, abaikan

  console.log("Tugas yang berkaitan:", li.textContent);
});
```

`closest()` sangat berguna ketika elemen yang diklik (misalnya ikon di dalam tombol) **bukan** elemen `<li>` itu sendiri, tapi kita tetap ingin menemukan `<li>` pembungkusnya.

## Cara Menjalankan

1. Buka `index.html` di folder ini menggunakan browser
2. Coba tambahkan beberapa tugas
3. Klik tugas untuk menandainya selesai
4. Klik tombol filter untuk melihat tugas Belum Selesai / Selesai saja
5. Klik tombol hapus (❌) pada tugas untuk menghapusnya

## Tantangan untuk Kamu

Setelah memahami kode di `script.js`, coba tambahkan fitur berikut sendiri sebagai latihan:
1. Simpan data to-do ke `localStorage` agar tidak hilang saat halaman di-refresh
2. Tambahkan tombol "Hapus Semua yang Selesai"
3. Tambahkan animasi saat tugas dihapus

➡️ Lanjut ke materi terakhir: **13 Latihan dan Quiz**
