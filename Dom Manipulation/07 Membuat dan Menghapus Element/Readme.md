# 07. Membuat dan Menghapus Element

## Kenapa Perlu Membuat Element Secara Dinamis?

Sejauh ini kita mengubah elemen yang **sudah ada** di HTML. Tapi banyak aplikasi web butuh **menambah elemen baru** secara dinamis, contohnya:
- Menambah item baru ke to-do list
- Menampilkan hasil pencarian yang jumlahnya tidak pasti
- Menambah baris baru di tabel

## 1. Membuat Element Baru: `createElement()`

```js
const elemenBaru = document.createElement("li"); // membuat tag <li> baru (belum tampil di halaman)
console.log(elemenBaru); // <li></li> (masih kosong dan belum ada di DOM)
```

Elemen yang baru dibuat **belum tampil** di halaman sampai kita "menempelkannya" ke DOM.

## 2. Mengisi Konten Elemen Baru

```js
elemenBaru.textContent = "Item baru";
elemenBaru.classList.add("item"); // bisa juga tambah class
```

## 3. Menempelkan Element ke DOM

```js
const daftar = document.querySelector("#daftar");

daftar.appendChild(elemenBaru); // menambahkan di akhir daftar
```

### Method-method untuk Menempatkan Elemen

| Method | Fungsi |
|--------|--------|
| `parent.appendChild(elemen)` | Menambahkan di **akhir** daftar anak |
| `parent.prepend(elemen)` | Menambahkan di **awal** daftar anak |
| `parent.insertBefore(baru, referensi)` | Menyisipkan sebelum elemen tertentu |
| `elemen.append(...)` | Mirip appendChild, bisa menerima teks & banyak elemen sekaligus |

```js
// Contoh insertBefore
const itemKedua = daftar.children[1];
daftar.insertBefore(elemenBaru, itemKedua); // sisipkan sebelum item kedua
```

## 4. Cara Ringkas: `insertAdjacentHTML()`

Alternatif yang lebih ringkas jika ingin langsung menambah HTML dalam bentuk string:

```js
daftar.insertAdjacentHTML("beforeend", "<li>Item baru dari HTML string</li>");
```

Posisi yang bisa dipakai:
- `"beforebegin"` — sebelum elemen
- `"afterbegin"` — di awal, dalam elemen
- `"beforeend"` — di akhir, dalam elemen
- `"afterend"` — setelah elemen

## 5. Menghapus Element: `remove()`

Cara paling mudah dan modern untuk menghapus elemen:

```js
const item = document.querySelector(".item");
item.remove();
```

### Cara Lama (masih sering ditemui): `removeChild()`

```js
const daftar = document.querySelector("#daftar");
const item = document.querySelector(".item");

daftar.removeChild(item); // harus lewat parent-nya
```

`element.remove()` lebih sederhana karena tidak perlu mengakses parent-nya secara manual.

## Contoh Lengkap: Menambah Item ke Daftar

```js
const daftar = document.querySelector("#daftar");
const input = document.querySelector("#input-item");
const tombolTambah = document.querySelector("#btn-tambah");

tombolTambah.addEventListener("click", function () {
  if (input.value.trim() === "") return; // jangan tambah jika kosong

  const liBaru = document.createElement("li");
  liBaru.textContent = input.value;
  daftar.appendChild(liBaru);

  input.value = ""; // kosongkan input setelah ditambahkan
});
```

## ⚠️ Praktik yang Kurang Efisien: Membangun Banyak Elemen dengan `innerHTML +=`

```js
// KURANG EFISIEN: setiap += membangun ulang SELURUH innerHTML dari nol
let html = "";
daftarBuah.forEach(function (buah) {
  html += "<li>" + buah + "</li>";
});
daftar.innerHTML = html; // sebenarnya ini OK karena hanya 1x assignment di akhir

// TAPI YANG PERLU DIHINDARI adalah pola ini di dalam loop:
daftarBuah.forEach(function (buah) {
  daftar.innerHTML += "<li>" + buah + "</li>"; // setiap iterasi, SELURUH innerHTML di-parse ulang!
});
```

**Solusi lebih baik:** gunakan `createElement` + `appendChild` di dalam loop, atau kumpulkan string HTML dulu baru assign sekali di akhir seperti contoh pertama.

➡️ Lanjut ke materi berikutnya: **08 Event Handling Dasar**
