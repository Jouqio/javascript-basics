# 06. setInterval() dan clearInterval()

> Menjalankan sebuah fungsi berulang kali secara berkala, dan cara menghentikannya.

## Tujuan Pembelajaran

- Memahami perbedaan setInterval() dengan setTimeout()
- Menghentikan interval dengan clearInterval()
- Menghindari kebocoran interval yang tidak pernah dihentikan

## setInterval(): Berulang, Bukan Sekali

Jika `setTimeout()` berjalan **satu kali**, `setInterval()` menjalankan callback-nya **berulang-ulang** setiap sekian milidetik, sampai dihentikan secara eksplisit.

```js
const id = setInterval(() => {
  console.log("Tick");
}, 1000);

// "Tick" akan tercetak setiap 1 detik, terus-menerus
```

## Menghentikan dengan clearInterval()

```js
let detik = 0;
const idHitung = setInterval(() => {
  detik++;
  console.log(detik + " detik");

  if (detik === 5) {
    clearInterval(idHitung); // hentikan setelah 5 kali
    console.log("Hitung mundur selesai");
  }
}, 1000);
```

> **Perhatian:** Interval yang lupa dihentikan akan terus berjalan di background selamanya — ini penyebab umum *memory leak* dan pemborosan performa, terutama pada Single Page Application yang berpindah halaman tanpa membersihkan interval lama.

## setInterval vs Rekursi setTimeout

Alternatif yang lebih aman dari penumpukan callback adalah memanggil `setTimeout` secara rekursif — jeda baru dijadwalkan **setelah** callback sebelumnya selesai, bukan berdasarkan jadwal tetap.

```js
function tickBerulang() {
  console.log("Tick (rekursif)");
  setTimeout(tickBerulang, 1000);
}
setTimeout(tickBerulang, 1000);
```

> **Tips:** Gunakan `setInterval` untuk kasus sederhana seperti jam digital. Gunakan rekursi `setTimeout` saat durasi tiap eksekusi callback bisa bervariasi, misalnya memanggil API secara berkala.

## Latihan

Tulis kode timer mundur dari 3 ke 0 menggunakan `setInterval`, lalu berhenti otomatis di angka 0.

<details>
<summary>Lihat Jawaban</summary>

```js
let sisa = 3;
const id = setInterval(() => {
  console.log(sisa);
  sisa--;

  if (sisa < 0) {
    clearInterval(id);
    console.log("Waktu habis!");
  }
}, 1000);
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← JavaScript clearTimeout()](../05 JavaScript clearTimeout()/Readme.md) | [Pengenalan Promise →](../07 Pengenalan Promise/Readme.md)
