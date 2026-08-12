# 05. Event Delegation

## Apa itu Event Delegation?

**Event Delegation** adalah teknik memasang **satu event listener** pada elemen **induk (parent)**, alih-alih memasang listener terpisah pada **setiap elemen anak (child)**. Teknik ini memanfaatkan konsep **bubbling** yang sudah kita pelajari di materi sebelumnya.

## Masalah Tanpa Event Delegation

Bayangkan kita punya daftar (list) dengan banyak item, dan setiap item butuh event `click`:

```javascript
const semuaItem = document.querySelectorAll("li");
semuaItem.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("Item diklik:", item.textContent);
  });
});
```

❌ **Masalahnya:**
1. Jika ada **ratusan item**, kita memasang **ratusan listener** → boros memori
2. Jika ada item **baru ditambahkan** secara dinamis (misalnya lewat JavaScript), item baru itu **tidak otomatis** punya event listener

## Solusi: Event Delegation

Alih-alih memasang listener ke setiap `<li>`, kita pasang **satu listener saja** di elemen induknya (`<ul>`), lalu manfaatkan `e.target` untuk mengetahui elemen mana yang sebenarnya diklik.

```javascript
const daftar = document.querySelector("ul");

daftar.addEventListener("click", function (e) {
  // Cek apakah yang diklik adalah <li>
  if (e.target.tagName === "LI") {
    console.log("Item diklik:", e.target.textContent);
  }
});
```

✅ **Keuntungan:**
1. Hanya **satu listener**, lebih hemat memori & performa
2. Otomatis bekerja untuk elemen **baru** yang ditambahkan setelahnya (dynamic content)
3. Kode lebih ringkas

## Kapan Menggunakan Event Delegation?

- Daftar (list) yang panjang atau dinamis (misal: to-do list, komentar, hasil pencarian)
- Tabel dengan banyak baris
- Elemen yang ditambahkan/dihapus secara dinamis lewat JavaScript

## Tips: Gunakan `closest()` untuk Elemen Bersarang

Jika struktur HTML lebih kompleks (misalnya ada `<span>` di dalam `<li>`), gunakan `e.target.closest("li")` agar tetap akurat meskipun yang diklik adalah elemen di dalam `<li>`.

```javascript
daftar.addEventListener("click", function (e) {
  const li = e.target.closest("li");
  if (li) {
    console.log("Item diklik:", li.textContent);
  }
});
```

Coba buka `contoh.html`: tambahkan item baru ke daftar, lalu klik item baru tersebut — event tetap berfungsi walau item itu belum ada saat halaman dimuat!

➡️ Lanjut ke materi berikutnya: **06. Mencegah Default Action (preventDefault)**
