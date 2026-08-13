# 12. Menangani Timeout pada Fetch

> Fetch tidak punya batas waktu bawaan — pelajari cara membuat timeout sendiri memakai AbortController dan setTimeout.

## Tujuan Pembelajaran

- Memahami bahwa fetch bisa menunggu tanpa batas waktu jika tidak diatur
- Membuat fungsi fetch dengan timeout memakai AbortController + setTimeout
- Membedakan error timeout dari error lainnya

## Masalah: Fetch Tidak Punya Batas Waktu Bawaan

Secara default, `fetch()` akan **menunggu tanpa batas waktu** sampai server merespons atau koneksi benar-benar putus. Kalau server lambat atau macet, aplikasi bisa "menggantung" menunggu respons yang tak kunjung datang — pengalaman yang buruk bagi pengguna.

## Menggabungkan AbortController dan setTimeout

Solusinya: pakai `AbortController` dari materi 11, tapi panggil `.abort()` secara **otomatis** lewat `setTimeout` setelah durasi tertentu, bukan dipicu manual oleh pengguna.

```js
async function fetchDenganTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal });
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error(`Request timeout setelah ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timerId); // penting! hentikan timer jika fetch selesai duluan
  }
}

fetchDenganTimeout("https://api.github.com/users/octocat", 5000)
  .then((data) => console.log("Berhasil:", data.login))
  .catch((error) => console.log("Gagal:", error.message));
```

> **Perhatian:** Jangan lupa `clearTimeout(timerId)` di blok `finally`! Kalau fetch selesai lebih cepat dari timeout, timer yang tidak dibersihkan akan tetap berjalan sia-sia di background — pola yang sama seperti materi `clearTimeout` di seri Async/Await.

## Menentukan Durasi Timeout yang Wajar

Tidak ada angka "benar" universal — tergantung jenis operasi. Aturan praktis umum:

- **3–5 detik** — untuk operasi ringan seperti pencarian atau autocomplete.
- **10–15 detik** — untuk operasi normal seperti mengambil data halaman.
- **30 detik atau lebih** — untuk operasi berat seperti upload file besar.

> **Tips:** Fungsi `fetchDenganTimeout()` di atas adalah pola yang sangat berguna untuk dipakai ulang di seluruh aplikasi — mirip fungsi pembantu `fetchJSON()` di materi 08, hanya ditambah perlindungan waktu tunggu.

## Latihan

Gabungkan pola `fetchDenganTimeout` di atas dengan pola error handling dari materi 04 (cek `response.ok`), sehingga fungsi tersebut juga melempar error yang jelas jika status HTTP-nya gagal (misalnya 404), bukan cuma menangani timeout.

<details>
<summary>Lihat Jawaban</summary>

```js
async function fetchDenganTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal });

    if (!response.ok) {
      throw new Error(`Fetch gagal, status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error(`Request timeout setelah ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timerId);
  }
}
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Membatalkan Request dengan AbortController](../11 Membatalkan Request dengan AbortController/Readme.md) | [Kuis: Fetch API →](../13 Kuis Fetch API/Readme.md)
