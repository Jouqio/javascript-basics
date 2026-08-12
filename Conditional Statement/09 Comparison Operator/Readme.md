# 09. Comparison Operator

## Apa itu Comparison Operator?

**Comparison Operator** (Operator Perbandingan) digunakan untuk **membandingkan dua nilai**, dan hasilnya selalu berupa **boolean** (`true` atau `false`). Operator inilah yang paling sering dipakai sebagai **kondisi** di dalam `if`.

## Daftar Comparison Operator

| Operator | Arti | Contoh | Hasil |
|----------|------|--------|-------|
| `==` | Sama dengan (nilai saja, tipe data diabaikan) | `5 == "5"` | `true` |
| `===` | Sama dengan (nilai **dan** tipe data harus sama) | `5 === "5"` | `false` |
| `!=` | Tidak sama dengan (nilai saja) | `5 != "5"` | `false` |
| `!==` | Tidak sama dengan (nilai **dan** tipe) | `5 !== "5"` | `true` |
| `>` | Lebih besar dari | `10 > 5` | `true` |
| `<` | Lebih kecil dari | `10 < 5` | `false` |
| `>=` | Lebih besar sama dengan | `5 >= 5` | `true` |
| `<=` | Lebih kecil sama dengan | `4 <= 5` | `true` |

## ⚠️ Penting: `==` vs `===`

Ini adalah salah satu konsep yang **paling sering membingungkan pemula**.

- `==` (**loose equality**) hanya membandingkan **nilai**, dan akan otomatis **mengonversi tipe data** jika berbeda sebelum membandingkan.
- `===` (**strict equality**) membandingkan **nilai DAN tipe data** — tidak ada konversi otomatis.

```js
console.log(5 == "5");   // true  -> "5" (string) dikonversi jadi 5 (number) dulu
console.log(5 === "5");  // false -> tipe data beda (number vs string), jadi tidak sama

console.log(0 == false); // true  -> false dikonversi jadi 0
console.log(0 === false); // false -> tipe data beda (number vs boolean)

console.log(null == undefined);  // true
console.log(null === undefined); // false
```

### 💡 Rekomendasi: Selalu gunakan `===` dan `!==`

Karena `==` bisa menghasilkan hasil yang **tidak terduga** akibat konversi tipe otomatis, **sebagian besar developer JavaScript menyarankan untuk selalu memakai `===` dan `!==`**, kecuali kamu punya alasan khusus untuk memakai `==`.

```js
// Kurang disarankan
if (nilai == "80") { ... }

// Disarankan
if (nilai === 80) { ... }
```

## Contoh Penggunaan dalam Conditional Statement

```js
let umur = 20;

if (umur === 20) {
  console.log("Umur kamu tepat 20 tahun");
}

if (umur !== 18) {
  console.log("Umur kamu bukan 18 tahun");
}

if (umur >= 17) {
  console.log("Sudah cukup umur");
}
```

## Membandingkan String

Operator perbandingan juga bisa dipakai untuk string, dibandingkan berdasarkan urutan alfabet (kode karakter):

```js
console.log("apel" === "apel"); // true
console.log("apel" === "Apel"); // false (huruf besar/kecil berbeda!)
console.log("a" < "b");         // true (a lebih dulu dari b secara alfabet)
```

➡️ Lanjut ke materi berikutnya: **10 Truthy dan Falsy**
