# 11. Quiz Internal dan External JS

Jawab dulu semua soal sebelum buka jawabannya ya. Klik "Lihat
Jawaban" di tiap soal buat cek + pembahasannya.

---

**1.** Cara mana yang paling DIREKOMENDASIKAN untuk menulis
JavaScript di proyek production?

A. Inline &nbsp;&nbsp; B. Internal &nbsp;&nbsp; C. External &nbsp;&nbsp; D. Ketiganya sama saja

<details>
<summary>Lihat Jawaban</summary>

**C. External** — karena reusable, rapi, bisa di-*cache* browser,
dan memudahkan kerja tim.
</details>

---

**2.** Kode `<button onclick="alert('Hi')">Klik</button>` termasuk
contoh JavaScript jenis apa?

A. Internal &nbsp;&nbsp; B. External &nbsp;&nbsp; C. Inline &nbsp;&nbsp; D. Bukan JavaScript

<details>
<summary>Lihat Jawaban</summary>

**C. Inline** — kode JS ditulis langsung di dalam atribut HTML
(`onclick`).
</details>

---

**3.** Apa yang terjadi kalau tag `<script>` yang mengakses elemen
HTML diletakkan di `<head>` TANPA atribut `defer`/`async`?

A. Berjalan normal &nbsp;&nbsp; B. Muncul error karena elemen belum ada &nbsp;&nbsp; C. HTML gak akan tampil &nbsp;&nbsp; D. Browser crash

<details>
<summary>Lihat Jawaban</summary>

**B. Muncul error karena elemen belum ada** — browser membaca HTML
dari atas ke bawah, jadi elemen di `<body>` belum terbaca saat
script di `<head>` dijalankan.
</details>

---

**4.** Atribut apa yang membuat script external dijalankan SETELAH
seluruh HTML selesai dibaca, dengan urutan yang terjamin?

A. `async` &nbsp;&nbsp; B. `defer` &nbsp;&nbsp; C. `src` &nbsp;&nbsp; D. `load`

<details>
<summary>Lihat Jawaban</summary>

**B. `defer`** — `async` juga tidak blocking, tapi urutan
eksekusinya TIDAK terjamin; `defer` menjamin urutan sesuai
penulisan tag.
</details>

---

**5.** Benar atau salah: atribut `async` dan `defer` bisa dipasang
di script internal (yang isinya langsung ditulis di antara
`<script>...</script>`, bukan lewat `src`).

A. Benar &nbsp;&nbsp; B. Salah

<details>
<summary>Lihat Jawaban</summary>

**B. Salah** — `async` dan `defer` HANYA berlaku untuk script yang
punya atribut `src` (external).
</details>

---

**6.** Ada dua file: `utils.js` (berisi fungsi bantuan) dan
`main.js` (memakai fungsi dari `utils.js`). Urutan tag `<script>`
yang benar adalah?

A. `main.js` dulu, baru `utils.js` &nbsp;&nbsp; B. `utils.js` dulu, baru `main.js` &nbsp;&nbsp; C. Urutannya gak penting &nbsp;&nbsp; D. Harus digabung jadi satu file

<details>
<summary>Lihat Jawaban</summary>

**B. `utils.js` dulu, baru `main.js`** — file yang berisi fungsi
yang DIPAKAI harus dimuat lebih dulu, kalau tidak akan muncul error
"is not defined".
</details>

---

**7.** Kalau tab Network di DevTools menunjukkan status **404**
untuk file `.js` yang seharusnya dimuat, apa penyebab paling
mungkin?

A. Internet lambat &nbsp;&nbsp; B. Path di atribut `src` salah/typo &nbsp;&nbsp; C. Browser rusak &nbsp;&nbsp; D. File-nya terlalu besar

<details>
<summary>Lihat Jawaban</summary>

**B. Path di atribut `src` salah/typo** — status 404 artinya
browser gak nemu file di alamat yang diminta.
</details>

---

**8.** Kenapa external JavaScript dianggap lebih baik untuk kerja
tim dibanding internal/inline?

A. Karena lebih pendek &nbsp;&nbsp; B. Karena developer bisa kerja di file terpisah tanpa bentrok dengan HTML &nbsp;&nbsp; C. Karena lebih cepat ditulis &nbsp;&nbsp; D. Karena gak perlu tag `<script>`

<details>
<summary>Lihat Jawaban</summary>

**B. Karena developer bisa kerja di file terpisah tanpa bentrok
dengan HTML** — pemisahan file memudahkan kolaborasi tanpa konflik
antara yang mengurus struktur (HTML) dan logic (JS).
</details>

---

**9.** Tag `<script src="app.js" />` (self-closing) itu...

A. Valid dan bekerja normal &nbsp;&nbsp; B. Tidak valid, harus pakai `<script src="app.js"></script>` &nbsp;&nbsp; C. Hanya valid di HTML5 &nbsp;&nbsp; D. Sama seperti atribut `defer`

<details>
<summary>Lihat Jawaban</summary>

**B. Tidak valid** — tag `<script>` wajib punya penutup
`</script>` terpisah, tidak boleh self-closing seperti `<img />`.
</details>

---

**10.** Manakah keuntungan UTAMA external JavaScript dibanding
internal, terkait performa?

A. Kodenya lebih pendek &nbsp;&nbsp; B. Bisa di-*cache* browser, jadi lebih cepat di kunjungan berikutnya &nbsp;&nbsp; C. Tidak butuh internet &nbsp;&nbsp; D. Tidak bisa error

<details>
<summary>Lihat Jawaban</summary>

**B. Bisa di-*cache* browser** — file external yang sudah pernah
didownload bisa dipakai lagi dari cache tanpa download ulang.
</details>

---

## Skor

- 9-10 benar → Mantap! Materinya udah nempel banget 🏆
- 6-8 benar → Bagus, tinggal baca ulang bagian yang masih ragu 👍
- Di bawah 6 → Yuk baca ulang folder `01` sampai `09` pelan-pelan 💪
