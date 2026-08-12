# 11. Best Practices DOM Manipulation

Kumpulan tips agar kode DOM manipulation yang kamu tulis lebih **rapi, efisien, dan aman**.

## 1. Cache Elemen yang Sering Dipakai ke Variabel

```js
// KURANG EFISIEN: query DOM berulang kali untuk elemen yang sama
document.querySelector("#kotak").style.color = "red";
document.querySelector("#kotak").style.background = "black";
document.querySelector("#kotak").textContent = "Halo";

// LEBIH BAIK: simpan hasil query ke variabel, query cukup sekali
const kotak = document.querySelector("#kotak");
kotak.style.color = "red";
kotak.style.background = "black";
kotak.textContent = "Halo";
```

Query DOM (`querySelector`, dll) relatif "mahal" secara performa dibanding mengakses variabel biasa, apalagi jika dilakukan berulang di dalam loop.

## 2. Gunakan `classList`, Bukan Manipulasi `style` Berlebihan

```js
// Kurang disarankan
elemen.style.color = "red";
elemen.style.fontWeight = "bold";
elemen.style.textDecoration = "underline";

// Lebih disarankan: siapkan class di CSS, lalu tambahkan lewat JS
elemen.classList.add("teks-peringatan");
```

## 3. Selalu Gunakan `defer` atau Letakkan Script Sebelum `</body>`

```html
<head>
  <script src="script.js" defer></script>
</head>
```

Ini memastikan HTML sudah selesai dimuat sebelum JavaScript mencoba mengakses elemen — mencegah error `null` karena elemen belum ada.

## 4. Gunakan Event Delegation untuk Elemen yang Berulang/Dinamis

```js
// Kurang efisien untuk daftar yang panjang atau berubah-ubah
document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", handler);
});

// Lebih efisien: satu listener di parent
document.querySelector("#daftar").addEventListener("click", function (event) {
  if (event.target.classList.contains("item")) {
    handler(event);
  }
});
```

## 5. Hindari Query DOM Berulang di Dalam Loop

```js
// KURANG EFISIEN: query DOM di setiap iterasi
for (let i = 0; i < 100; i++) {
  document.querySelector("#hasil").innerHTML += "<p>Baris " + i + "</p>";
}

// LEBIH BAIK: kumpulkan dulu, baru render sekali di akhir
const hasil = document.querySelector("#hasil");
let html = "";
for (let i = 0; i < 100; i++) {
  html += "<p>Baris " + i + "</p>";
}
hasil.innerHTML = html;
```

## 6. Selalu Cek Elemen Sebelum Digunakan

```js
const elemen = document.querySelector("#mungkin-tidak-ada");

if (elemen) {
  elemen.textContent = "Ditemukan!";
}
```

Ini mencegah error `Cannot read properties of null` jika elemen ternyata tidak ada di halaman.

## 7. Gunakan `textContent` untuk Data dari User (Keamanan)

```js
// BERISIKO jika inputUser berasal dari user tanpa validasi (rawan XSS)
elemen.innerHTML = inputUser;

// LEBIH AMAN
elemen.textContent = inputUser;
```

## 8. Pisahkan Struktur (HTML), Tampilan (CSS), dan Logika (JS)

Hindari menulis HTML dalam bentuk string panjang berisi inline style di dalam JavaScript. Sebisa mungkin:
- Struktur ada di `.html`
- Tampilan ada di `.css` (via class)
- Logika interaksi ada di `.js`

## 9. Beri Nama Variabel yang Jelas

```js
// Kurang jelas
const a = document.querySelector(".btn");
const b = document.querySelector("#x");

// Lebih jelas
const tombolSubmit = document.querySelector(".btn-submit");
const inputEmail = document.querySelector("#email");
```

## Ringkasan Checklist

- [ ] Cache elemen ke variabel, jangan query DOM berulang untuk elemen sama
- [ ] Gunakan `classList` daripada `style` manual untuk styling tetap
- [ ] Pastikan script dijalankan setelah HTML siap (`defer`)
- [ ] Gunakan event delegation untuk elemen dinamis/berulang
- [ ] Hindari query DOM di dalam loop
- [ ] Selalu cek elemen tidak `null` sebelum digunakan
- [ ] Gunakan `textContent` untuk data dari user
- [ ] Pisahkan HTML, CSS, dan JS sesuai perannya
- [ ] Beri nama variabel yang deskriptif

➡️ Lanjut ke materi berikutnya: **12 Studi Kasus Project Sederhana**
