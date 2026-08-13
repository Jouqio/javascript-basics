# 11. Membatalkan Request dengan AbortController

> Menghentikan fetch yang sedang berjalan sebelum selesai, misalnya saat pengguna berpindah halaman atau membatalkan pencarian.

## Tujuan Pembelajaran

- Memahami kapan sebuah fetch perlu dibatalkan
- Menggunakan AbortController untuk membatalkan fetch
- Menangani AbortError secara khusus di try/catch

## Kenapa Perlu Membatalkan Fetch?

Bayangkan kolom pencarian yang memanggil fetch setiap kali pengguna mengetik. Kalau pengguna mengetik cepat, banyak fetch lama yang hasilnya sudah tidak relevan lagi tetap berjalan di background, membuang bandwidth dan berpotensi menampilkan hasil yang salah (respons lama datang belakangan, menimpa hasil yang lebih baru).

## AbortController: Tombol Pembatal

`AbortController` adalah fitur bawaan JavaScript untuk membatalkan operasi asynchronous, termasuk fetch. Sinyalnya (`signal`) diselipkan ke opsi fetch, lalu `controller.abort()` dipanggil kapan pun pembatalan dibutuhkan.

```js
const controller = new AbortController();

fetch("https://api.github.com/users/octocat", {
  signal: controller.signal,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Request dibatalkan!");
    } else {
      console.log("Error lain:", error.message);
    }
  });

// Batalkan segera setelah request dikirim
controller.abort();
```

> **Perhatian:** Saat fetch dibatalkan, Promise-nya **reject** dengan error bernama `AbortError` — bukan resolve dengan data kosong. Selalu cek `error.name === "AbortError"` untuk membedakannya dari error lain seperti masalah jaringan.

## Contoh Nyata: Membatalkan Pencarian Lama

Pola umum di kolom pencarian: setiap kali fungsi pencarian dipanggil lagi, batalkan dulu request sebelumnya yang mungkin masih berjalan.

```js
let controllerSaatIni = null;

async function cariUser(kataKunci) {
  // Batalkan pencarian sebelumnya jika masih berjalan
  if (controllerSaatIni) {
    controllerSaatIni.abort();
  }

  controllerSaatIni = new AbortController();

  try {
    const params = new URLSearchParams({ q: kataKunci });
    const response = await fetch(`https://api.github.com/search/users?${params}`, {
      signal: controllerSaatIni.signal,
    });
    const data = await response.json();
    console.log("Hasil pencarian:", data.items.length, "user ditemukan");
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Pencarian sebelumnya dibatalkan (digantikan pencarian baru)");
    } else {
      console.log("Error:", error.message);
    }
  }
}

// Simulasi pengguna mengetik cepat: pencarian pertama akan dibatalkan
cariUser("syauqi");
cariUser("octocat");
```

> **Tips:** Pola "batalkan yang lama, mulai yang baru" ini sangat umum dipakai pada fitur pencarian *live* (autocomplete) di aplikasi web modern.

## Latihan

Jelaskan dengan kata-kata sendiri: kenapa pada contoh 'Contoh Nyata' di atas, hasil dari `cariUser("syauqi")` kemungkinan besar tidak akan pernah tercetak?

<details>
<summary>Lihat Jawaban</summary>

Karena segera setelah `cariUser("syauqi")` dipanggil, baris berikutnya `cariUser("octocat")` langsung dipanggil juga. Di dalam `cariUser("octocat")`, kode mengecek `controllerSaatIni` dan membatalkan controller milik pencarian `"syauqi"` yang masih berjalan sebelum sempat menerima hasilnya — sehingga request `"syauqi"` berakhir dengan `AbortError`, bukan hasil pencarian.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Multiple Requests Paralel dengan Promise.all](../10 Multiple Requests Paralel dengan Promise.all/Readme.md) | [Menangani Timeout pada Fetch →](../12 Menangani Timeout pada Fetch/Readme.md)
