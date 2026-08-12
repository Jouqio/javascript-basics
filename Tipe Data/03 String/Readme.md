# 03 - String

## Apa itu String?

**String** adalah tipe data untuk **teks** — kumpulan karakter yang diapit oleh tanda kutip.

```js
let nama = "Budi";
let kalimat = 'Belajar JavaScript itu seru';
```

## 3 Cara Menulis String

JavaScript punya 3 cara menulis string:

```js
let a = "Pakai kutip dua";
let b = 'Pakai kutip satu';
let c = `Pakai backtick (template literal)`;
```

Kutip dua dan kutip satu **fungsinya sama persis**, tinggal pilih sesuai selera/konsistensi tim. Yang istimewa adalah **template literal** (backtick), karena punya kemampuan tambahan.

## Template Literal — Cara Modern Menulis String

Template literal (menggunakan backtick `` ` ``) memungkinkan kita **menyisipkan variabel langsung** ke dalam string, disebut **string interpolation**, menggunakan `${...}`.

```js
let nama = "Rina";
let umur = 22;

// Cara lama (concatenation dengan +)
console.log("Nama saya " + nama + ", umur " + umur + " tahun");

// Cara modern (template literal)
console.log(`Nama saya ${nama}, umur ${umur} tahun`);
```

Template literal juga mendukung **teks multi-baris** tanpa perlu karakter khusus:

```js
let pesan = `Baris pertama
Baris kedua
Baris ketiga`;
```

## String Bersifat Immutable

String di JavaScript **tidak bisa diubah isinya secara langsung** setelah dibuat. Setiap "perubahan" pada string sebenarnya **membuat string baru**.

```js
let kata = "Halo";
kata[0] = "J"; // TIDAK berpengaruh, string tidak bisa diubah per-karakter
console.log(kata); // tetap "Halo"
```

## Method String yang Sering Dipakai

| Method | Fungsi | Contoh |
|---|---|---|
| `.length` | Panjang string | `"Halo".length` → `4` |
| `.toUpperCase()` | Ubah jadi huruf besar | `"halo".toUpperCase()` → `"HALO"` |
| `.toLowerCase()` | Ubah jadi huruf kecil | `"HALO".toLowerCase()` → `"halo"` |
| `.trim()` | Hapus spasi di awal/akhir | `"  halo  ".trim()` → `"halo"` |
| `.includes(x)` | Cek apakah mengandung teks x | `"Halo Dunia".includes("Dunia")` → `true` |
| `.slice(awal, akhir)` | Ambil sebagian teks | `"JavaScript".slice(0, 4)` → `"Java"` |
| `.split(pemisah)` | Pecah string jadi array | `"a,b,c".split(",")` → `["a","b","c"]` |
| `.replace(cari, ganti)` | Ganti teks | `"Halo Dunia".replace("Dunia", "Semua")` |

## Poin Penting

- String = tipe data untuk teks, ditulis dengan kutip satu, kutip dua, atau backtick
- Template literal (backtick) mendukung interpolasi `${variabel}` dan multi-baris
- String bersifat immutable — tidak bisa diubah per-karakter, tapi bisa dibuat string baru
- Banyak method siap pakai untuk memanipulasi string (`.toUpperCase()`, `.slice()`, dll)

Lanjut ke → [04 Boolean](../04%20Boolean/Readme.md)
