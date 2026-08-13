# 09. Konstanta dan Immutability

## Mengingat Kembali: `const`

Seperti dibahas di materi **02**, `const` digunakan untuk mendeklarasikan variabel yang **tidak boleh di-assign ulang** setelah dideklarasikan.

```js
const nama = "Budi";
nama = "Andi"; // ERROR! Assignment to constant variable.
```

## ⚠️ Miskonsepsi Umum: `const` BUKAN Berarti "Immutable" (Tidak Bisa Diubah Sama Sekali)

Ini adalah **kesalahpahaman paling umum** tentang `const`. `const` hanya mencegah **assignment ulang** ke variabelnya — tapi jika nilainya berupa **object** atau **array**, **isi di dalamnya tetap bisa diubah**!

```js
const angka = 10;
angka = 20; // ERROR! tidak bisa mengganti nilai primitif

const buah = ["Apel", "Jeruk"];
buah.push("Mangga"); // TIDAK ERROR! isi array masih bisa diubah
console.log(buah); // ["Apel", "Jeruk", "Mangga"]

buah = ["Baru"]; // ERROR! ini baru dilarang (mengganti SELURUH array dengan yang baru)
```

```js
const user = { nama: "Budi", umur: 25 };
user.umur = 26; // TIDAK ERROR! isi object masih bisa diubah
console.log(user); // { nama: "Budi", umur: 26 }

user = { nama: "Lain" }; // ERROR! ini yang dilarang (mengganti SELURUH object)
```

## Kenapa Bisa Begitu?

`const` mencegah **variabel** menunjuk ke **referensi memori yang berbeda**, tapi **tidak** mengunci konten di **dalam** referensi tersebut. Ingat kembali materi **04 Tipe Data Primitif** tentang perbedaan primitif (disalin sebagai nilai) vs object (disalin sebagai referensi):

- Untuk **primitif** (string, number, boolean): `const` = nilai benar-benar tidak bisa diubah
- Untuk **object/array**: `const` = variabel tidak bisa menunjuk ke object/array LAIN, tapi ISI di dalamnya tetap bisa diubah

## Bagaimana Jika Ingin Object/Array Benar-benar Tidak Bisa Diubah?

Gunakan `Object.freeze()` untuk membuat object menjadi benar-benar **immutable** (tidak bisa diubah sama sekali):

```js
const config = Object.freeze({ apiUrl: "https://api.example.com" });

config.apiUrl = "https://lain.com"; // TIDAK ERROR secara diam-diam (silent fail) di mode normal,
                                      // tapi nilai TIDAK BENAR-BENAR berubah
console.log(config.apiUrl); // tetap "https://api.example.com"
```

**Catatan:** `Object.freeze()` hanya bekerja **satu tingkat (shallow)** — jika ada object di dalam object, object bagian dalam **tetap bisa diubah** kecuali di-freeze juga secara terpisah.

## Kapan Menggunakan `const`?

### 💡 Rekomendasi: Gunakan `const` sebagai default untuk SEMUA variabel

Alasannya:
1. Mencegah bug akibat variabel yang **tidak sengaja** di-assign ulang
2. Membuat maksud kode lebih jelas — "variabel ini **tidak** akan diganti referensinya"
3. Kamu tetap bisa mengubah isi array/object jika memang dibutuhkan

Baru gunakan `let` **jika** kamu memang tahu variabel tersebut **akan** diganti nilainya secara keseluruhan.

```js
const daftarTugas = []; // referensi array tidak akan berubah, tapi isinya boleh
daftarTugas.push("Belajar JavaScript"); // OK
daftarTugas.push("Selesaikan project"); // OK

let jumlahPercobaan = 0; // nilai akan berubah berkali-kali -> let
jumlahPercobaan = jumlahPercobaan + 1;
```

## Ringkasan

| Aksi | `const primitif` | `const object/array` |
|------|--------------------|-------------------------|
| Assignment ulang ke variabel | ❌ Dilarang | ❌ Dilarang |
| Mengubah isi/properti | - | ✅ Diperbolehkan |
| Immutable total | ✅ Otomatis | ❌ Butuh `Object.freeze()` |

➡️ Lanjut ke materi berikutnya: **10 Destructuring Assignment**
