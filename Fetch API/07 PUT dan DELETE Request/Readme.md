# 07. PUT dan DELETE Request

> Melengkapi operasi CRUD dengan method PUT (memperbarui data) dan DELETE (menghapus data).

## Tujuan Pembelajaran

- Memahami perbedaan PUT dan POST
- Melakukan update data dengan PUT
- Melakukan penghapusan data dengan DELETE

## Mengenal CRUD

Empat operasi dasar dalam berinteraksi dengan data disingkat **CRUD**: **C**reate (POST, materi 05), **R**ead (GET, materi 02), **U**pdate (PUT), **D**elete (DELETE). Materi ini melengkapi dua operasi terakhir.

## PUT: Memperbarui Data

`PUT` dipakai untuk **mengganti seluruh data** yang sudah ada di server, ditandai dengan ID resource pada URL-nya. Strukturnya mirip POST — sama-sama butuh `body` dan `headers`.

```js
async function perbaruiPost(id, dataBaru) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataBaru),
  });

  const data = await response.json();
  return data;
}

perbaruiPost(1, {
  id: 1,
  title: "Judul yang Sudah Diperbarui",
  body: "Isi konten yang baru",
  userId: 1,
}).then((hasil) => console.log(hasil));
```

## DELETE: Menghapus Data

`DELETE` dipakai untuk **menghapus** data di server berdasarkan ID-nya. Biasanya tidak butuh `body`, cukup `method: "DELETE"` dan URL yang menunjuk ke resource spesifik.

```js
async function hapusPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    console.log(`Post dengan id ${id} berhasil dihapus`);
  } else {
    console.log("Gagal menghapus, status:", response.status);
  }
}

hapusPost(1);
```

> **Tips:** Untuk DELETE, sering kali yang paling penting dicek adalah `response.ok` atau `response.status`, bukan isi body-nya — karena banyak API mengembalikan body kosong setelah berhasil menghapus.

## Ringkasan Method HTTP

| Method | Kegunaan | Butuh body? |
|--------|----------|-------------|
| GET | Mengambil data | Tidak |
| POST | Membuat data baru | Ya |
| PUT | Memperbarui seluruh data | Ya |
| DELETE | Menghapus data | Biasanya tidak |

## Latihan

Buat fungsi async `perbaruiJudulPost(id, judulBaru)` yang melakukan PUT ke `https://jsonplaceholder.typicode.com/posts/{id}` hanya untuk mengubah `title`, dengan body `{ id, title: judulBaru }`, lalu mencetak hasilnya.

<details>
<summary>Lihat Jawaban</summary>

```js
async function perbaruiJudulPost(id, judulBaru) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, title: judulBaru }),
  });

  const data = await response.json();
  console.log(data);
}

perbaruiJudulPost(1, "Judul Baru dari Latihan");
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Request Headers dan Content-Type](../06 Request Headers dan Content-Type/Readme.md) | [Async/Await dengan Fetch →](../08 Async Await dengan Fetch/Readme.md)
