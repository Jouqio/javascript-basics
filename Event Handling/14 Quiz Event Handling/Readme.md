# 14. Quiz Event Handling

Uji pemahamanmu tentang materi Event Handling dengan quiz berikut. Coba jawab dulu sebelum melihat kunci jawaban di bagian bawah!

---

## Bagian A — Pilihan Ganda

**1. Cara mana yang paling direkomendasikan untuk menambahkan event ke elemen?**
a. `<button onclick="fungsi()">`
b. `elemen.onclick = fungsi`
c. `elemen.addEventListener("click", fungsi)`
d. Semua sama saja

**2. Apa perbedaan utama `e.target` dan `e.currentTarget`?**
a. Tidak ada bedanya
b. `target` = elemen tempat listener dipasang, `currentTarget` = elemen yang diklik
c. `target` = elemen yang benar-benar diklik, `currentTarget` = elemen tempat listener dipasang
d. Keduanya hanya berlaku untuk mouse event

**3. Fase mana yang menjadi PERILAKU DEFAULT dari `addEventListener`?**
a. Capturing
b. Bubbling
c. Target saja
d. Tidak ada default

**4. Teknik memasang satu listener di parent untuk menangani banyak elemen anak disebut?**
a. Event Bubbling
b. Event Capturing
c. Event Delegation
d. Event Propagation

**5. Method apa yang digunakan untuk mencegah form melakukan submit default (reload halaman)?**
a. `e.stopPropagation()`
b. `e.preventDefault()`
c. `e.stopDefault()`
d. `e.cancel()`

**6. Event apa yang terpicu SETIAP KALI user mengetik di input (real-time)?**
a. `change`
b. `submit`
c. `input`
d. `blur`

**7. Properti Event Object mana yang menunjukkan tombol keyboard fisik yang ditekan (tidak terpengaruh Shift/Caps Lock)?**
a. `e.key`
b. `e.code`
c. `e.type`
d. `e.char`

**8. Agar sebuah event listener bisa dihapus dengan `removeEventListener()`, syaratnya adalah?**
a. Event listener harus dipasang di `document`
b. Fungsi handler harus fungsi bernama (bukan anonim), dengan referensi yang sama
c. Harus menggunakan `once: true`
d. Tidak ada syarat khusus

**9. Bagaimana cara membuat event buatan sendiri (custom event)?**
a. `new Event("nama")`
b. `document.createEvent()`
c. `new CustomEvent("nama", { detail: {...} })`
d. `elemen.trigger("nama")`

**10. Kenapa event `scroll` dan `resize` sebaiknya menggunakan debounce/throttle?**
a. Supaya tampil lebih cepat
b. Karena event tersebut bisa terpicu sangat sering sehingga bisa memengaruhi performa
c. Supaya bisa dihapus otomatis
d. Tidak ada alasan khusus, hanya opsional

---

## Bagian B — Essay Singkat

**11.** Jelaskan dengan kata-katamu sendiri, apa perbedaan antara `mouseover`/`mouseout` dengan `mouseenter`/`mouseleave`?

**12.** Buatlah contoh kode sederhana yang menggunakan **event delegation** untuk menangani klik pada daftar `<li>` di dalam `<ul>`.

**13.** Kapan sebaiknya kita menggunakan `DOMContentLoaded` dibanding `load`? Berikan alasan singkat.

---

## Kunci Jawaban

<details>
<summary>Klik untuk melihat jawaban (Bagian A)</summary>

1. c — `addEventListener()` paling fleksibel dan direkomendasikan
2. c — `target` = elemen yang diklik langsung, `currentTarget` = tempat listener dipasang
3. b — Bubbling adalah default `addEventListener`
4. c — Event Delegation
5. b — `e.preventDefault()`
6. c — `input` terpicu real-time setiap ketikan
7. b — `e.code` adalah posisi fisik tombol
8. b — Harus fungsi bernama dengan referensi yang sama
9. c — `new CustomEvent("nama", { detail: {...} })`
10. b — Karena bisa terpicu sangat sering dan memengaruhi performa

</details>

<details>
<summary>Klik untuk melihat panduan jawaban (Bagian B)</summary>

**11.** `mouseover`/`mouseout` ikut terpicu saat kursor masuk/keluar dari elemen **anak** (karena bubbling), sedangkan `mouseenter`/`mouseleave` **tidak bubbling** sehingga hanya terpicu untuk elemen itu sendiri — lebih "bersih" untuk kasus hover sederhana.

**12.**
```javascript
const ul = document.querySelector("ul");
ul.addEventListener("click", function (e) {
  const li = e.target.closest("li");
  if (li) {
    console.log("Item diklik:", li.textContent);
  }
});
```

**13.** Gunakan `DOMContentLoaded` jika kita hanya butuh **struktur HTML/DOM siap** untuk dimanipulasi (misalnya memasang event listener) — ini lebih cepat karena tidak perlu menunggu gambar/CSS selesai dimuat. Gunakan `load` hanya jika kita benar-benar butuh **semua resource** (misalnya ukuran gambar) sudah selesai dimuat.

</details>

---

**Skor kamu:** Hitung berapa jawaban benar dari 10 soal pilihan ganda.
- 9-10 benar → 🌟 Sangat menguasai materi!
- 6-8 benar → 👍 Cukup baik, coba ulas lagi materi yang masih ragu
- < 6 benar → 📖 Sebaiknya baca ulang materi 01-13 sebelum lanjut

Selamat, kamu telah menyelesaikan seluruh materi **Event Handling** dalam JavaScript! 🎉
