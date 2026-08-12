# 03. Callback Hell

> Apa yang terjadi ketika banyak operasi asynchronous saling bergantung — dan mengapa itu jadi masalah nyata.

## Tujuan Pembelajaran

- Mengenali pola callback hell / 'pyramid of doom'
- Memahami mengapa nested callback sulit dibaca dan di-maintain
- Menyadari kebutuhan akan solusi seperti Promise

## Ketika Callback Bersarang Terlalu Dalam

Bayangkan tiga proses asynchronous yang harus dijalankan **berurutan**, karena tiap langkah butuh hasil dari langkah sebelumnya: login pengguna → ambil profil → ambil daftar pesanan.

```js
login("syauqi", "rahasia", (user) => {
  ambilProfil(user.id, (profil) => {
    ambilPesanan(profil.id, (pesanan) => {
      tampilkanUI(pesanan, (hasil) => {
        console.log("Selesai:", hasil);
      });
    });
  });
});
```

> **Perhatian:** Kode di atas disebut *callback hell* atau *pyramid of doom*: indentasi terus bertambah ke kanan, sulit dibaca, dan sulit menambahkan penanganan error di setiap level.

## Kenapa Ini Bermasalah

- **Sulit dibaca** — urutan eksekusi tersembunyi di balik nested indentation.
- **Sulit menangani error** — tiap callback butuh pengecekan error sendiri-sendiri.
- **Sulit digabung ulang** — kalau urutan langkah berubah, seluruh struktur harus dirombak.
- **Duplikasi kode** — penanganan error dan logging cenderung ditulis berulang di setiap level.

## Ke Mana Solusinya?

Masalah ini yang mendorong lahirnya `Promise` (materi 07–09) dan kemudian `async/await` (materi 10) — keduanya membiarkan kode asynchronous dibaca **dari atas ke bawah**, seolah-olah synchronous, tanpa piramida bersarang.

## Latihan

Tanpa mengubah logikanya, sebutkan dua masalah utama jika rekan tim menulis 4 level callback bersarang seperti contoh di atas.

<details>
<summary>Lihat Jawaban</summary>

1) Semakin sulit dibaca karena indentasi terus bertambah ke kanan (readability menurun drastis). 2) Penanganan error jadi berantakan karena harus dicek berulang di setiap level, alih-alih di satu tempat.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Callback Function](../02 Callback Function/Readme.md) | [JavaScript setTimeout() →](../04 JavaScript setTimeout()/Readme.md)
