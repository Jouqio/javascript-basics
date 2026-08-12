# 08. Promise Chaining

> Merangkai beberapa operasi asynchronous berurutan tanpa jatuh kembali ke callback hell.

## Tujuan Pembelajaran

- Merangkai beberapa .then() secara berurutan
- Memahami bagaimana nilai diteruskan antar .then()
- Menangani error di satu tempat dengan .catch()

## Setiap .then() Mengembalikan Promise Baru

Kunci dari *chaining*: setiap pemanggilan `.then()` mengembalikan Promise baru, sehingga bisa disambung dengan `.then()` berikutnya.

Bandingkan dengan versi callback hell di materi 03 — struktur ini **datar (flat)**, bukan bersarang ke kanan, dan hanya butuh **satu** `.catch()` untuk menangkap error dari langkah mana pun di atasnya.

```js
ambilUser(1)
  .then((user) => ambilProfil(user.id))
  .then((profil) => ambilPesanan(profil.id))
  .then((pesanan) => {
    console.log("Pesanan:", pesanan);
  })
  .catch((error) => {
    console.log("Terjadi kesalahan:", error);
  });
```

## Contoh Lengkap dengan Fungsi Pembantu

```js
function ambilUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: id, nama: "Syauqi" }), 500);
  });
}

function ambilProfil(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ userId: userId, bio: "Mahasiswa TI" }), 500);
  });
}

ambilUser(1)
  .then((user) => {
    console.log("User:", user.nama);
    return ambilProfil(user.id);
  })
  .then((profil) => {
    console.log("Bio:", profil.bio);
  })
  .catch((error) => {
    console.error("Gagal:", error);
  });
```

## Kesalahan Umum: Lupa return

```js
// SALAH - lupa return
ambilUser(1).then((user) => {
  ambilProfil(user.id); // tidak di-return!
}).then((profil) => {
  console.log(profil); // undefined, tidak menunggu ambilProfil selesai
});
```

> **Perhatian:** Jika fungsi di dalam `.then()` tidak me-`return` Promise berikutnya, chaining akan berjalan **tidak berurutan** — `.then()` selanjutnya langsung jalan tanpa menunggu.

## Latihan

Perbaiki potongan kode 'Kesalahan Umum' di atas supaya `profil` benar-benar berisi hasil dari `ambilProfil()`.

<details>
<summary>Lihat Jawaban</summary>

```js
ambilUser(1).then((user) => {
  return ambilProfil(user.id); // ditambahkan return
}).then((profil) => {
  console.log(profil); // sekarang berisi hasil yang benar
});
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Pengenalan Promise](../07 Pengenalan Promise/Readme.md) | [Promise.all() dan Promise.allSettled() →](../09 Promise.all dan Promise.allSettled/Readme.md)
