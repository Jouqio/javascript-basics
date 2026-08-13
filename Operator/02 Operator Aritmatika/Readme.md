# 02. Operator Aritmatika

## Apa itu Operator Aritmatika?

**Operator Aritmatika** adalah operator yang digunakan untuk melakukan **operasi matematika** dasar, seperti penjumlahan, pengurangan, perkalian, dan pembagian.

## Daftar Operator Aritmatika

| Operator | Nama | Contoh | Hasil |
|---|---|---|---|
| `+` | Penjumlahan | `5 + 3` | `8` |
| `-` | Pengurangan | `5 - 3` | `2` |
| `*` | Perkalian | `5 * 3` | `15` |
| `/` | Pembagian | `10 / 2` | `5` |
| `%` | Modulus (sisa bagi) | `10 % 3` | `1` |
| `**` | Pemangkatan (exponent) | `2 ** 3` | `8` |
| `++` | Increment (tambah 1) | `x++` | `x` bertambah 1 |
| `--` | Decrement (kurang 1) | `x--` | `x` berkurang 1 |

## Modulus (`%`) — Sisa Pembagian

Operator ini sering membingungkan pemula. `%` **bukan** persen, tapi menghasilkan **sisa** dari pembagian.

```javascript
console.log(10 % 3); // 1  (karena 10 dibagi 3 = 3, sisa 1)
console.log(9 % 3);  // 0  (karena 9 dibagi 3 = 3, sisa 0 -> habis dibagi)
console.log(7 % 2);  // 1  (karena 7 dibagi 2 = 3, sisa 1)
```

👉 **Kegunaan paling umum:** mengecek apakah sebuah angka **genap atau ganjil**.

```javascript
function cekGenapGanjil(angka) {
  return angka % 2 === 0 ? "genap" : "ganjil";
}
console.log(cekGenapGanjil(7)); // "ganjil"
console.log(cekGenapGanjil(8)); // "genap"
```

## Pemangkatan (`**`)

```javascript
console.log(2 ** 3);  // 8   (2 pangkat 3 = 2*2*2)
console.log(5 ** 2);  // 25  (5 pangkat 2 = 5*5)
console.log(2 ** 0.5); // 1.414... (akar kuadrat dari 2)
```

Sebelum ES2016, cara menulis pangkat adalah dengan `Math.pow(basis, pangkat)`. Operator `**` adalah cara yang lebih ringkas untuk hal yang sama.

## Increment (`++`) dan Decrement (`--`)

Digunakan untuk menambah atau mengurangi nilai variabel sebanyak **1**. Ada dua bentuk penulisan yang perilakunya **berbeda**:

### Postfix (`x++`) — Nilai lama dipakai dulu, baru bertambah

```javascript
let x = 5;
console.log(x++); // 5 (nilai LAMA dipakai dulu)
console.log(x);   // 6 (setelah itu baru bertambah)
```

### Prefix (`++x`) — Bertambah dulu, baru nilai baru dipakai

```javascript
let y = 5;
console.log(++y); // 6 (bertambah DULU, baru dipakai)
console.log(y);   // 6
```

👉 **Tips:** Perbedaan ini penting saat digunakan **di dalam ekspresi lain**, misalnya `array[i++]`. Jika hanya berdiri sendiri di satu baris (`x++;`), hasilnya sama saja.

## Operasi Pembagian dengan Angka Desimal

```javascript
console.log(10 / 3); // 3.3333333333333335 (JavaScript tidak otomatis membulatkan)
```

Untuk pembulatan, gunakan method bawaan `Math`:

```javascript
console.log(Math.round(10 / 3)); // 3 (dibulatkan ke bilangan bulat terdekat)
console.log(Math.floor(10 / 3)); // 3 (dibulatkan ke bawah)
console.log(Math.ceil(10 / 3));  // 4 (dibulatkan ke atas)
```

## Penjumlahan dengan String — Hasilnya Bisa Mengejutkan!

Ini poin **penting** bagi pemula. Operator `+` juga dipakai untuk **menggabungkan string** (dibahas lebih detail di materi 06). Jika salah satu operand adalah string, JavaScript akan **mengubah** operand lainnya menjadi string juga:

```javascript
console.log(5 + 3);      // 8 (angka + angka = penjumlahan)
console.log("5" + 3);    // "53" (string + angka = digabung jadi string!)
console.log(5 + "3");    // "53" (sama saja, hasilnya string)
console.log("5" - 3);    // 2 (KECUALI operator -, *, /, % akan tetap memaksa jadi angka)
```

👉 **Tips:** Selalu pastikan tipe data numerik sudah benar (gunakan `Number()`) sebelum melakukan operasi aritmatika, terutama jika angkanya berasal dari input form (`<input>` selalu menghasilkan string).

## Urutan Operasi (Preview)

Sama seperti matematika biasa, JavaScript mengikuti urutan operasi standar: **perkalian/pembagian didahulukan dari penjumlahan/pengurangan**, kecuali diatur ulang dengan tanda kurung `()`.

```javascript
console.log(2 + 3 * 4);   // 14 (bukan 20, karena * didahulukan)
console.log((2 + 3) * 4); // 20 (kurung mengubah urutan)
```

Pembahasan lengkap tentang urutan operasi akan dibahas di materi **10. Operator Precedence**.

Buka `contoh.html` untuk mencoba semua operator aritmatika secara langsung.

➡️ Lanjut ke materi berikutnya: **03. Operator Penugasan (Assignment)**
