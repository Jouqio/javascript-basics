# 10. Rangkuman dan Best Practice Function

Selamat! Kamu sudah mempelajari berbagai jenis **Function** dalam JavaScript. Berikut rangkuman lengkapnya.

## Rangkuman Materi

| # | Topik | Poin Penting |
|---|---|---|
| 01 | Pengantar Function | Function = blok kode yang bisa dipanggil ulang; parameter vs argument |
| 02 | Function Declaration | `function nama() {}`, mengalami **hoisting** |
| 03 | Function Expression | `const nama = function() {}`, **tidak** hoisting |
| 04 | Anonymous Function | Function tanpa nama, umum untuk callback |
| 05 | Arrow Function | `() => {}`, lebih ringkas, `this` mengikuti scope luar |
| 06 | Higher Order Function | Menerima/mengembalikan function lain (`.map`, `.filter`, `.reduce`) |
| 07 | IIFE | Function yang langsung dijalankan sekali, untuk scope privat |
| 08 | Recursive Function | Function memanggil dirinya sendiri, wajib ada base case |
| 09 | Generator Function | `function*` + `yield`, bisa dijeda dan dilanjutkan |

## Perbandingan Semua Jenis Function

| Jenis | Sintaks Singkat | Hoisting | Kegunaan Utama |
|---|---|---|---|
| Function Declaration | `function f() {}` | ✅ Ya | Function utama, dipakai di banyak tempat |
| Function Expression | `const f = function() {}` | ❌ Tidak | Disimpan sebagai nilai, callback |
| Anonymous Function | `function() {}` (tanpa nama) | - | Callback sekali pakai |
| Arrow Function | `const f = () => {}` | ❌ Tidak | Callback ringkas, mempertahankan `this` |
| Higher Order Function | Menerima/return function | - | Functional programming, array methods |
| IIFE | `(function(){})()` | - | Kode sekali jalan, scope privat |
| Recursive Function | Function memanggil diri sendiri | - | Struktur bersarang, algoritma matematika |
| Generator Function | `function* f() { yield }` | - | Iterasi bertahap, deret tak terbatas |

## Best Practice Menulis Function

### ✅ 1. Beri Nama yang Deskriptif
Nama function sebaiknya menjelaskan **apa yang dilakukannya**, biasanya diawali kata kerja.

```javascript
// ❌ Kurang jelas
function data(x) { ... }

// ✅ Jelas dan deskriptif
function hitungTotalHarga(daftarBarang) { ... }
```

### ✅ 2. Satu Function, Satu Tanggung Jawab (Single Responsibility)
Setiap function idealnya hanya melakukan **satu tugas spesifik**. Jika function melakukan terlalu banyak hal, pecah menjadi beberapa function kecil.

```javascript
// ❌ Terlalu banyak tanggung jawab dalam satu function
function prosesUser(user) {
  validasiUser(user);
  simpanKeDatabase(user);
  kirimEmailKonfirmasi(user);
  catatLog(user);
}

// ✅ Lebih baik: function utama memanggil function-function kecil yang jelas tugasnya
```

### ✅ 3. Batasi Jumlah Parameter
Jika function butuh **banyak parameter** (lebih dari 3-4), pertimbangkan menggunakan **satu object** sebagai parameter agar lebih mudah dibaca.

```javascript
// ❌ Terlalu banyak parameter, mudah tertukar urutannya
function buatUser(nama, umur, email, alamat, noHp) { ... }

// ✅ Gunakan object parameter
function buatUser({ nama, umur, email, alamat, noHp }) { ... }
buatUser({ nama: "Budi", umur: 20, email: "budi@mail.com", alamat: "Jakarta", noHp: "0812xxxx" });
```

### ✅ 4. Gunakan `return` Awal untuk Menghindari Nested `if`

```javascript
// ❌ Nested if yang dalam, sulit dibaca
function cekUmur(umur) {
  if (umur >= 0) {
    if (umur < 18) {
      return "Anak-anak";
    } else {
      return "Dewasa";
    }
  } else {
    return "Umur tidak valid";
  }
}

// ✅ Early return - lebih mudah dibaca
function cekUmur(umur) {
  if (umur < 0) return "Umur tidak valid";
  if (umur < 18) return "Anak-anak";
  return "Dewasa";
}
```

### ✅ 5. Pilih Jenis Function yang Tepat Sesuai Kebutuhan
- Gunakan **Arrow Function** untuk callback singkat
- Gunakan **Function Declaration** untuk function utama yang sering dipakai
- Hindari **arrow function** sebagai method objek jika butuh `this`
- Selalu pastikan **base case** ada di **Recursive Function**

### ✅ 6. Hindari Function Terlalu Panjang
Jika sebuah function sudah lebih dari 20-30 baris, pertimbangkan untuk memecahnya menjadi function-function kecil yang lebih fokus.

### ✅ 7. Gunakan Default Parameter untuk Nilai Opsional

```javascript
function buatAkun(nama, role = "member") {
  return { nama, role };
}

buatAkun("Budi"); // { nama: "Budi", role: "member" }
```

## Checklist Sebelum "Lulus" Materi Ini

- [ ] Paham perbedaan Function Declaration dan Function Expression (hoisting)
- [ ] Bisa membuat dan menggunakan Arrow Function dengan berbagai bentuk penulisan
- [ ] Paham perbedaan `this` pada function biasa vs arrow function
- [ ] Bisa menjelaskan apa itu Higher Order Function dan memberi contohnya
- [ ] Paham kegunaan IIFE untuk membuat scope privat
- [ ] Bisa membuat Recursive Function dengan base case yang benar
- [ ] Paham konsep dasar Generator Function (`function*`, `yield`, `.next()`)

➡️ Uji pemahamanmu di: **11. Tugas (Latihan Mandiri)** dan **12. Quiz Function**
