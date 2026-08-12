# 02. Function Declaration

## Apa itu Function Declaration?

**Function Declaration** (deklarasi function) adalah cara **paling umum & klasik** untuk membuat function di JavaScript, menggunakan kata kunci `function` diikuti **nama function** secara langsung.

```javascript
function namaFunction(parameter) {
  // isi function
  return hasil;
}
```

### Contoh

```javascript
function hitungLuasLingkaran(jariJari) {
  return Math.PI * jariJari * jariJari;
}

console.log(hitungLuasLingkaran(7)); // 153.93804002589985
```

## Ciri Khas Function Declaration

1. Diawali kata kunci `function`
2. **Punya nama** (wajib, tidak boleh anonim)
3. **Berdiri sendiri** sebagai sebuah statement (bukan disimpan ke variabel)

## Keistimewaan: Hoisting

Ciri paling khas dari Function Declaration adalah mengalami **hoisting** — artinya function ini bisa **dipanggil SEBELUM** dideklarasikan di dalam kode!

```javascript
// Dipanggil duluan, padahal function-nya didefinisikan di bawah
console.log(sapa("Budi")); // ✅ Tetap berjalan: "Halo, Budi!"

function sapa(nama) {
  return "Halo, " + nama + "!";
}
```

**Kenapa ini bisa terjadi?** Karena JavaScript "mengangkat" (hoisting) seluruh **deklarasi function** ke bagian paling atas kode saat program dijalankan, sebelum baris kode lain dieksekusi.

⚠️ **Catatan:** Meskipun bisa, ini **bukan best practice**. Sebaiknya tetap definisikan function sebelum dipanggil agar kode lebih mudah dibaca dan dipahami alurnya.

## Kapan Menggunakan Function Declaration?

- Untuk function **utama** yang sering dipakai di banyak tempat dalam file
- Ketika kita ingin memanfaatkan hoisting (function dipanggil sebelum posisi deklarasinya, misalnya untuk kerapian struktur kode)
- Function-function **umum** dalam program (bukan function sekali pakai)

## Perbandingan Singkat dengan Materi Berikutnya

| Ciri | Function Declaration |
|---|---|
| Sintaks | `function nama() {}` |
| Wajib punya nama? | ✅ Ya |
| Mengalami hoisting? | ✅ Ya |
| Disimpan ke variabel? | ❌ Tidak (berdiri sendiri) |

Materi selanjutnya (**Function Expression**) akan menunjukkan cara lain membuat function yang **tidak** mengalami hoisting seperti ini.

Buka `contoh.html` untuk melihat bukti hoisting bekerja secara langsung.

➡️ Lanjut ke materi berikutnya: **03. Function Expression**
