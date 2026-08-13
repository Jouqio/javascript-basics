# 09. Operator Modern (Nullish Coalescing dan Optional Chaining)

JavaScript modern (ES2020 ke atas) menambahkan beberapa operator baru yang membuat kode lebih **aman** dan **ringkas** saat bekerja dengan nilai yang **mungkin kosong** (`null`/`undefined`).

## 1. Nullish Coalescing (`??`)

### Masalah dengan `||` untuk Nilai Default

Sebelumnya kita belajar bahwa `||` sering dipakai untuk memberi **nilai default**:

```javascript
const jumlahStok = 0;
const stokDitampilkan = jumlahStok || 10; // ❌ hasilnya 10, padahal stok SEBENARNYA 0!
```

⚠️ **Masalahnya:** `0` adalah **falsy**, jadi `||` menganggapnya "kosong" dan menggantinya dengan default — padahal `0` adalah **nilai yang valid dan disengaja**! Ini adalah bug yang sering terjadi.

### Solusi: Operator `??` (Nullish Coalescing)

Operator `??` **hanya** menganggap `null` dan `undefined` sebagai "kosong" — nilai falsy lainnya (`0`, `""`, `false`) **tetap dipakai apa adanya**.

```javascript
const jumlahStok = 0;
const stokDitampilkan = jumlahStok ?? 10; // ✅ hasilnya 0 (benar! 0 tetap dihargai sebagai nilai valid)

console.log(0 ?? "default");         // 0 (karena 0 bukan null/undefined)
console.log("" ?? "default");        // "" (string kosong bukan null/undefined)
console.log(false ?? "default");     // false (boolean false bukan null/undefined)
console.log(null ?? "default");      // "default" (null dianggap kosong)
console.log(undefined ?? "default"); // "default" (undefined dianggap kosong)
```

### Perbandingan `||` vs `??`

| Ekspresi | `\|\|` | `??` |
|---|---|---|
| `0 \|\| "default"` / `0 ?? "default"` | `"default"` (❌ tidak diinginkan) | `0` (✅ benar) |
| `"" \|\| "default"` / `"" ?? "default"` | `"default"` | `""` |
| `null \|\| "default"` / `null ?? "default"` | `"default"` | `"default"` |
| `undefined \|\| "default"` / `undefined ?? "default"` | `"default"` | `"default"` |

👉 **Rekomendasi:** Gunakan `??` ketika kamu ingin memberi nilai default **hanya** untuk `null`/`undefined`, dan **tetap menghargai** nilai falsy lain seperti `0`, `""`, atau `false` sebagai nilai yang sah.

## 2. Optional Chaining (`?.`)

### Masalah: Error saat Mengakses Property dari `null`/`undefined`

```javascript
const user = {
  nama: "Budi",
  alamat: null // user ini belum mengisi alamat
};

console.log(user.alamat.kota); // ❌ TypeError: Cannot read properties of null
```

Ini adalah error yang **sangat umum** terjadi, terutama saat mengambil data dari API yang strukturnya tidak selalu lengkap.

### Solusi: Operator `?.` (Optional Chaining)

Operator `?.` akan **otomatis berhenti** dan mengembalikan `undefined` (bukan error) jika bagian sebelumnya bernilai `null`/`undefined`.

```javascript
console.log(user.alamat?.kota); // undefined (TIDAK error, aman!)
```

### Optional Chaining pada Function/Method

```javascript
const obj = {
  sapa: function () { return "Halo!"; }
};

console.log(obj.sapa?.());   // "Halo!" (function ada, dipanggil normal)
console.log(obj.tidakAda?.()); // undefined (function tidak ada, TIDAK error)
```

### Optional Chaining pada Array/Index

```javascript
const data = { daftar: [1, 2, 3] };

console.log(data.daftar?.[0]);        // 1
console.log(data.tidakAda?.[0]);      // undefined (aman, tidak error)
```

## Menggabungkan `?.` dan `??` — Kombinasi yang Sangat Berguna!

Kombinasi kedua operator ini sangat umum dipakai bersamaan: **akses aman** dengan `?.`, lalu **beri nilai default** dengan `??` jika hasilnya `undefined`.

```javascript
const user = { nama: "Budi", alamat: null };

const kota = user.alamat?.kota ?? "Kota tidak diketahui";
console.log(kota); // "Kota tidak diketahui"

const user2 = { nama: "Ani", alamat: { kota: "Jakarta" } };
const kota2 = user2.alamat?.kota ?? "Kota tidak diketahui";
console.log(kota2); // "Jakarta"
```

## Kapan Menggunakan Operator Modern Ini?

- **`??`** → memberi nilai default, terutama saat `0`, `""`, atau `false` adalah nilai yang **valid dan berbeda maknanya** dari "kosong"
- **`?.`** → mengakses property/method/index dari data yang **strukturnya tidak pasti** (misalnya respons API, data opsional dari form)

## Perbandingan Sebelum dan Sesudah Operator Modern

```javascript
// ❌ Cara lama (panjang dan rawan error)
let kota;
if (user && user.alamat && user.alamat.kota) {
  kota = user.alamat.kota;
} else {
  kota = "Tidak diketahui";
}

// ✅ Cara modern (ringkas dan aman)
const kotaModern = user?.alamat?.kota ?? "Tidak diketahui";
```

Buka `contoh.html` untuk mencoba `??` dan `?.` secara langsung, termasuk perbandingannya dengan `||` dan cara lama.

➡️ Lanjut ke materi berikutnya: **10. Operator Precedence (Urutan Operasi)**
