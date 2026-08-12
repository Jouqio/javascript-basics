# Alert, Prompt, dan console.log() — Dasar JavaScript

Materi dasar pemrograman JavaScript: tiga fungsi bawaan yang paling sering
dipakai buat komunikasi antara program dan penggunanya. Bedanya ada di
**siapa yang bisa lihat**, dan **seberapa "berisik" caranya**.

## Daftar Isi
1. [console.log()](#1-consolelog)
2. [alert()](#2-alert)
3. [prompt()](#3-prompt)
4. [Perbandingan](#4-perbandingan)
5. [Cara menjalankan contoh](#5-cara-menjalankan-contoh)

---

## 1. console.log()

Fungsi buat mencetak nilai ke **Console** browser (atau ke terminal, kalau
pakai Node.js). Sifatnya paling "pendiam" dari ketiganya — cuma programmer
yang bisa lihat, user biasa yang lagi browsing gak bakal pernah notice.

**Analogi:** console.log() itu kayak buku diary digital. Isinya cuma bisa
dibaca sama orang yang tau caranya buka (tekan `F12`). User yang lagi asik
scroll web-mu sama sekali gak sadar diary itu ada.

**Cara buka Console di browser:**
1. Klik kanan di halaman manapun
2. Pilih "Inspect" atau "Periksa Elemen"
3. Klik tab "Console"

**Syntax:**
```js
console.log("Halo, dunia!");
console.log("Umur:", 20, "Aktif:", true); // bisa banyak argumen sekaligus
```

Variasi lain:
- `console.error("pesan")` → teks merah, buat nandain error
- `console.warn("pesan")` → teks kuning, buat peringatan
- `console.table(array)` → nampilin data dalam bentuk tabel

 Contoh lengkap: [`contoh-console-log.js`](./contoh-console-log.js)

---

## 2. alert()

Menampilkan kotak dialog popup ke user, dengan satu tombol OK. Kalau
`console.log()` itu bisikan, `alert()` ini teriakan yang gak bisa
diabaikan siapapun yang lagi buka halamannya.

**Analogi:** alert() itu kayak ngetuk pintu keras-keras sambil bilang
"HEI, DENGERIN INI!" — program bakal **berhenti total** sampai user
klik OK.

**Syntax:**
```js
alert("Selamat datang di JavaScript!");
```

**Penting — sifat blocking:** kode setelah `alert()` gak akan jalan
sampai popup-nya ditutup. Ini juga alasan kenapa `alert()` jarang dipakai
di aplikasi production sungguhan (Instagram, Tokopedia, dll) — nge-freeze
seluruh halaman, dan tampilannya gak bisa dikustomisasi. Biasanya diganti
dengan notifikasi/modal custom.

`alert()` gak punya return value yang berguna — selalu `undefined`.

 Contoh lengkap: [`contoh-alert.js`](./contoh-alert.js)

---

## 3. prompt()

Sama kayak `alert()`, tapi ada kolom input. `prompt()` gak cuma ngomong —
dia nanya, terus nunggu jawabanmu sebelum lanjut.

**Analogi:** kalau alert() cuma satu arah, prompt() itu dua arah — nanya,
nunggu, baru lanjut. Ada tombol OK (kirim jawaban) dan Cancel (batal).

**Syntax:**
```js
let jawaban = prompt("Siapa nama kamu?");
console.log(jawaban);
```

**Return value:**
- Klik OK → hasil ketikan (**selalu string**, walau kosong `""`)
- Klik Cancel → `null`

** Gotcha paling umum:** hasil `prompt()` SELALU string, walau user
mengetik angka. Kalau langsung dijumlah, hasilnya malah nyambung
(concatenation), bukan dijumlah:

```js
let umur = prompt("Umur kamu?"); // misal user ketik: 20
console.log(umur + 1);           // hasilnya "201" — nyambung, bukan nambah!
console.log(Number(umur) + 1);   // hasilnya 21 — baru bener
```

 Contoh lengkap: [`contoh-prompt.js`](./contoh-prompt.js)

---

## 4. Perbandingan

| | console.log() | alert() | prompt() |
|---|---|---|---|
| Untuk siapa | Developer | User | User |
| Level "berisik" | 🔈 Diam-diam | 🔊🔊🔊 Paling berisik | 🔊🔊 Berisik + nunggu jawaban |
| Blocking? | Tidak | Ya | Ya |
| Return value | `undefined` | `undefined` | `string` atau `null` |

**Kapan pakai yang mana:**
- Mau cek nilai variabel pas develop → `console.log()`
- Mau kasih tau user sesuatu penting → `alert()` (atau modal custom di app production)
- Butuh user masukin data sederhana → `prompt()` (atau form HTML di app production)

---

## 5. Cara menjalankan contoh

- **`contoh-console-log.js`** — bisa langsung dijalankan lewat terminal:
  ```
  node contoh-console-log.js
  ```
- **`contoh-alert.js`** dan **`contoh-prompt.js`** — keduanya fungsi
  bawaan **browser**, jadi gak bisa dijalankan lewat `node`. Caranya:
  1. Buka browser apa aja, tekan `F12` buat buka Console
  2. Buka file-nya di text editor, copy semua isinya
  3. Paste ke Console, tekan Enter

Selamat belajar! 
