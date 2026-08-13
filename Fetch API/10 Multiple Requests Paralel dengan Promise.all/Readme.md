# 10. Multiple Requests Paralel dengan Promise.all

> Menjalankan beberapa fetch bersamaan supaya lebih cepat, alih-alih menunggu satu per satu secara berurutan.

## Tujuan Pembelajaran

- Memahami kapan fetch sebaiknya paralel, kapan sebaiknya berurutan
- Menjalankan beberapa fetch bersamaan dengan Promise.all
- Menangani sebagian fetch yang gagal dengan Promise.allSettled

## Masalah Fetch Berurutan yang Tidak Perlu

Kalau beberapa data yang dibutuhkan **tidak saling bergantung**, mengambilnya satu-satu dengan `await` berurutan membuang waktu — total waktu tunggu jadi dijumlahkan semuanya.

```js
// Kurang efisien - total waktu = waktu1 + waktu2 + waktu3
async function ambilTigaUserBerurutan() {
  const user1 = await fetch("https://api.github.com/users/octocat").then((r) => r.json());
  const user2 = await fetch("https://api.github.com/users/torvalds").then((r) => r.json());
  const user3 = await fetch("https://api.github.com/users/gaearon").then((r) => r.json());

  return [user1.login, user2.login, user3.login];
}
```

## Promise.all: Jalankan Bersamaan

Kalau data-data itu independen, jalankan semua fetch **sekaligus** lalu tunggu semuanya selesai bersamaan dengan `Promise.all()` — total waktu tunggu jadi setara waktu fetch **paling lambat**, bukan jumlah semuanya.

```js
async function ambilTigaUserParalel() {
  const [user1, user2, user3] = await Promise.all([
    fetch("https://api.github.com/users/octocat").then((r) => r.json()),
    fetch("https://api.github.com/users/torvalds").then((r) => r.json()),
    fetch("https://api.github.com/users/gaearon").then((r) => r.json()),
  ]);

  return [user1.login, user2.login, user3.login];
}

ambilTigaUserParalel().then((hasil) => console.log(hasil));
```

> **Tips:** Materi ini adalah penerapan langsung dari `Promise.all()` yang mungkin sudah dipelajari di materi Async/Await — di sinilah kegunaannya terasa sangat nyata: mempercepat aplikasi yang butuh banyak data dari API.

## Bagaimana Jika Salah Satu Gagal?

`Promise.all()` bersifat **fail-fast**: begitu satu fetch gagal, semuanya langsung dianggap gagal — meski fetch lainnya sebenarnya berhasil. Jika tetap ingin melihat hasil yang berhasil walau ada yang gagal, gunakan `Promise.allSettled()`.

```js
async function ambilBeberapaUserAman(usernames) {
  const hasil = await Promise.allSettled(
    usernames.map((username) =>
      fetch(`https://api.github.com/users/${username}`).then((r) => {
        if (!r.ok) throw new Error(`${username} tidak ditemukan`);
        return r.json();
      })
    )
  );

  return hasil.map((item, index) => {
    if (item.status === "fulfilled") {
      return { username: usernames[index], berhasil: true, data: item.value.login };
    } else {
      return { username: usernames[index], berhasil: false, error: item.reason.message };
    }
  });
}

ambilBeberapaUserAman(["octocat", "user-tidak-ada-123", "torvalds"]).then((hasil) =>
  console.log(hasil)
);
```

## Latihan

Buat fungsi async `ambilBeberapaRepo(daftarRepo)` yang menerima array berisi objek `{ owner, repo }`, mengambil semuanya **secara paralel** dengan `Promise.all`, lalu mengembalikan array `stargazers_count` masing-masing.

<details>
<summary>Lihat Jawaban</summary>

```js
async function ambilBeberapaRepo(daftarRepo) {
  const hasil = await Promise.all(
    daftarRepo.map(({ owner, repo }) =>
      fetch(`https://api.github.com/repos/${owner}/${repo}`).then((r) => r.json())
    )
  );

  return hasil.map((data) => data.stargazers_count);
}

ambilBeberapaRepo([
  { owner: "facebook", repo: "react" },
  { owner: "vuejs", repo: "vue" },
]).then((hasil) => console.log(hasil));
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Query Parameters dan URLSearchParams](../09 Query Parameters dan URLSearchParams/Readme.md) | [Membatalkan Request dengan AbortController →](../11 Membatalkan Request dengan AbortController/Readme.md)
