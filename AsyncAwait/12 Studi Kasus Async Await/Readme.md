# 12. Studi Kasus: Async/Await

> Menggabungkan semua konsep — Promise, async/await, try/catch, dan Promise.all — dalam satu kasus nyata.

## Tujuan Pembelajaran

- Menggabungkan async/await pada kasus nyata
- Menjalankan pemanggilan berurutan dan paralel dalam satu alur
- Menyusun kode async yang rapi dan mudah di-maintain

## Studi Kasus: Dashboard Profil Pengguna

Skenario: sebuah halaman dashboard perlu (1) memastikan pengguna sudah login, lalu setelah itu (2) mengambil **data profil dan statistik secara paralel** karena keduanya tidak saling bergantung.

```js
async function muatDashboard(userId) {
  tampilkanLoading(true);

  try {
    // Langkah 1: berurutan, karena statistik butuh sesi login valid
    const sesi = await verifikasiSesi(userId);

    // Langkah 2: paralel, karena profil & statistik independen
    const [profil, statistik] = await Promise.all([
      ambilProfil(sesi.userId),
      ambilStatistik(sesi.userId),
    ]);

    renderDashboard(profil, statistik);
  } catch (error) {
    tampilkanPesanError("Gagal memuat dashboard: " + error.message);
  } finally {
    tampilkanLoading(false);
  }
}
```

## Menambahkan Retry Sederhana

Pola umum di dunia nyata: mengulang permintaan yang gagal karena masalah jaringan sementara, sebelum benar-benar menyerah.

```js
async function ambilDenganRetry(mintaData, maksimalPercobaan = 3) {
  for (let percobaan = 1; percobaan <= maksimalPercobaan; percobaan++) {
    try {
      return await mintaData();
    } catch (error) {
      console.warn("Percobaan " + percobaan + " gagal:", error.message);
      if (percobaan === maksimalPercobaan) throw error;
      await tunggu(1); // jeda sebelum mencoba lagi
    }
  }
}

function tunggu(detik) {
  return new Promise((resolve) => setTimeout(resolve, detik * 1000));
}
```

> **Tips:** Fungsi `tunggu()` di atas adalah pola yang sama sejak materi 10 — membungkus `setTimeout` menjadi Promise agar bisa di-`await`.

## Checklist Kode Async yang Bersih

- Setiap `await` berada di dalam `try/catch`, atau errornya sengaja diteruskan ke pemanggil.
- Operasi independen dijalankan paralel dengan `Promise.all()`, bukan berurutan tanpa alasan.
- Status loading/error selalu diatur di blok `finally`.
- Nama fungsi async menjelaskan *apa* yang ditunggu, bukan *bagaimana* caranya.

## Latihan

Pada `muatDashboard`, kenapa `ambilProfil` dan `ambilStatistik` digabung dengan `Promise.all()`, bukan ditulis dua `await` terpisah?

<details>
<summary>Lihat Jawaban</summary>

Karena keduanya tidak saling bergantung satu sama lain — hanya bergantung pada `sesi`. Jika ditulis dua `await` terpisah, permintaan kedua baru dimulai setelah permintaan pertama selesai, membuang waktu tanpa alasan. `Promise.all()` menjalankan keduanya bersamaan.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Error Handling dengan Try/Catch](../11 Error Handling dengan Try Catch/Readme.md) | [Kuis: Async/Await →](../13 Kuis Async Await/Readme.md)
