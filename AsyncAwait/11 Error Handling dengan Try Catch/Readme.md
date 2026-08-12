# 11. Error Handling dengan Try/Catch

> Menangani kegagalan pada kode async/await dengan aman, rapi, dan mudah dilacak.

## Tujuan Pembelajaran

- Membungkus await dengan try/catch
- Menangani beberapa await sekaligus dalam satu blok try
- Menggunakan finally untuk kode yang selalu dijalankan

## try/catch pada Fungsi Async

Karena `await` tidak punya `.catch()` sendiri seperti Promise, error ditangani dengan `try/catch` standar JavaScript. Jika Promise di dalam `await` reject, eksekusi langsung melompat ke blok `catch` — persis seperti `throw` pada kode synchronous.

```js
async function ambilDataAman() {
  try {
    const data = await ambilDariServer();
    console.log(data);
  } catch (error) {
    console.error("Gagal mengambil data:", error.message);
  }
}
```

## Satu try, Banyak await

```js
async function checkout() {
  try {
    const keranjang = await ambilKeranjang();
    const pembayaran = await prosesPembayaran(keranjang);
    const resi = await buatResiPengiriman(pembayaran);
    console.log("Checkout berhasil:", resi);
  } catch (error) {
    // Menangkap error dari LANGKAH MANA PUN di atas
    console.error("Checkout gagal:", error.message);
  }
}
```

> **Tips:** Satu blok `catch` cukup untuk menangani error dari semua `await` di dalamnya — jauh lebih ringkas dibanding menaruh `.catch()` di setiap langkah Promise chain.

## finally: Selalu Dijalankan

Blok `finally` dijalankan baik operasi berhasil maupun gagal — cocok untuk membersihkan resource, seperti mematikan status loading.

```js
async function muatHalaman() {
  tampilkanLoading(true);
  try {
    const data = await ambilData();
    tampilkanData(data);
  } catch (error) {
    tampilkanPesanError(error.message);
  } finally {
    tampilkanLoading(false); // selalu dijalankan
  }
}
```

> **Perhatian:** Lupa membungkus `await` dalam `try/catch` menyebabkan *unhandled promise rejection* yang bisa menghentikan proses (di Node.js) atau memunculkan error tak tertangani di console browser.

## Latihan

Tulis fungsi async `login(username, password)` yang memanggil `await apiLogin(username, password)`, menangkap error dengan pesan kustom `"Login gagal"`, dan selalu mematikan status loading di akhir.

<details>
<summary>Lihat Jawaban</summary>

```js
async function login(username, password) {
  tampilkanLoading(true);
  try {
    const user = await apiLogin(username, password);
    return user;
  } catch (error) {
    console.error("Login gagal:", error.message);
    throw error;
  } finally {
    tampilkanLoading(false);
  }
}
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Async/Await Dasar](../10 Async Await Dasar/Readme.md) | [Studi Kasus: Async/Await →](../12 Studi Kasus Async Await/Readme.md)
