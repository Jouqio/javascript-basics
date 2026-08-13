# 05. Assignment Operator

## Apa itu Assignment Operator?

**Assignment Operator** (Operator Penugasan) digunakan untuk **memberikan nilai** ke sebuah variabel. Operator paling dasar adalah tanda `=`, tapi JavaScript juga punya operator penugasan **gabungan** yang lebih ringkas.

## 1. Operator `=` — Assignment Dasar

```js
let umur = 20; // memberikan nilai 20 ke variabel umur
```

**Penting:** tanda `=` di pemrograman **berbeda** dengan tanda `=` di matematika. Di JavaScript, `=` berarti "**berikan nilai di sebelah kanan ke variabel di sebelah kiri**", bukan "kedua sisi ini sama".

## 2. Compound Assignment Operator (Operator Penugasan Gabungan)

Operator ini menggabungkan operasi matematika dengan assignment dalam satu langkah, membuat kode lebih ringkas.

| Operator | Setara Dengan | Contoh |
|----------|----------------|--------|
| `+=` | `x = x + y` | `skor += 10;` |
| `-=` | `x = x - y` | `nyawa -= 1;` |
| `*=` | `x = x * y` | `harga *= 1.1;` |
| `/=` | `x = x / y` | `total /= 2;` |
| `%=` | `x = x % y` | `angka %= 3;` |
| `**=` | `x = x ** y` | `basis **= 2;` |

## Contoh Penggunaan

```js
let skor = 0;

skor += 10; // sama dengan: skor = skor + 10
console.log(skor); // 10

skor -= 3;  // sama dengan: skor = skor - 3
console.log(skor); // 7

skor *= 2;  // sama dengan: skor = skor * 2
console.log(skor); // 14

skor /= 7;  // sama dengan: skor = skor / 7
console.log(skor); // 2
```

## Increment (`++`) dan Decrement (`--`)

Untuk kasus khusus **menambah/mengurangi 1**, JavaScript menyediakan operator pintas:

```js
let hitung = 5;

hitung++; // sama dengan: hitung = hitung + 1
console.log(hitung); // 6

hitung--; // sama dengan: hitung = hitung - 1
console.log(hitung); // 5
```

### Perbedaan Prefix (`++x`) vs Postfix (`x++`)

```js
let a = 5;
console.log(a++); // 5 (nilai LAMA ditampilkan dulu, BARU a bertambah jadi 6)
console.log(a);   // 6

let b = 5;
console.log(++b); // 6 (b bertambah dulu jadi 6, BARU nilai ditampilkan)
console.log(b);   // 6
```

**Aturan mudah:** jika tanda `++`/`--` ada **di depan** variabel, nilai berubah **dulu** baru dipakai. Jika ada **di belakang**, nilai dipakai **dulu** dengan nilai lama, baru berubah.

## Contoh Praktis: Counter

```js
let jumlahKlik = 0;

// Simulasi klik tombol sebanyak 3 kali
jumlahKlik++;
jumlahKlik++;
jumlahKlik++;

console.log("Tombol sudah diklik", jumlahKlik, "kali"); // 3
```

## Contoh Praktis: Menghitung Diskon

```js
let harga = 100000;
const DISKON = 0.1; // 10%

harga -= harga * DISKON; // mengurangi harga sebesar 10%
console.log("Harga setelah diskon:", harga); // 90000
```

➡️ Lanjut ke materi berikutnya: **06 Dynamic Typing**
