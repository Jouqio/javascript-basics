# 08. Recursive Function

## Apa itu Recursive Function?

**Recursive Function (fungsi rekursif)** adalah function yang **memanggil dirinya sendiri** di dalam tubuhnya, untuk memecah sebuah masalah besar menjadi masalah-masalah kecil yang lebih sederhana (dan serupa).

Analogi sederhana: bayangkan **boneka Matryoshka** (boneka Rusia yang saling bersarang). Untuk sampai ke boneka terkecil, kamu membuka boneka satu per satu — setiap boneka punya "cara membuka" yang sama, sampai akhirnya mencapai boneka terkecil yang tidak bisa dibuka lagi.

## Dua Komponen Wajib dalam Recursive Function

Setiap function rekursif **harus** memiliki dua bagian ini, atau function akan berjalan **tanpa henti** (infinite loop) dan menyebabkan error `"Maximum call stack size exceeded"`:

1. **Base Case (Kasus Dasar)** → kondisi untuk **menghentikan** rekursi
2. **Recursive Case (Kasus Rekursif)** → bagian di mana function **memanggil dirinya sendiri**, biasanya dengan input yang lebih kecil/sederhana

```javascript
function faktorial(n) {
  // 1. BASE CASE - kondisi berhenti
  if (n <= 1) {
    return 1;
  }

  // 2. RECURSIVE CASE - memanggil dirinya sendiri dengan input lebih kecil
  return n * faktorial(n - 1);
}

console.log(faktorial(5)); // 120
```

### Cara Kerja `faktorial(5)` Langkah demi Langkah

```
faktorial(5)
= 5 * faktorial(4)
= 5 * (4 * faktorial(3))
= 5 * (4 * (3 * faktorial(2)))
= 5 * (4 * (3 * (2 * faktorial(1))))
= 5 * (4 * (3 * (2 * 1)))          <- base case tercapai (faktorial(1) = 1)
= 5 * 4 * 3 * 2 * 1
= 120
```

## Contoh Lain: Menjumlahkan Angka 1 sampai N

```javascript
function jumlahkanSampai(n) {
  if (n <= 0) return 0; // base case

  return n + jumlahkanSampai(n - 1); // recursive case
}

console.log(jumlahkanSampai(5)); // 5+4+3+2+1 = 15
```

## Contoh Lain: Deret Fibonacci

```javascript
function fibonacci(n) {
  if (n <= 1) return n; // base case

  return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}

console.log(fibonacci(6)); // 8 (deret: 0,1,1,2,3,5,8)
```

## Bahaya: Lupa Base Case (Infinite Recursion)

```javascript
function bahaya(n) {
  return n * bahaya(n - 1); // ❌ TIDAK ADA base case, akan berjalan terus!
}

bahaya(5); // Error: Maximum call stack size exceeded
```

⚠️ **Selalu pastikan base case ada dan PASTI tercapai**, atau program akan crash karena kehabisan memori (call stack).

## Rekursi vs Perulangan (Loop) — Kapan Pakai yang Mana?

| Aspek | Rekursi | Loop (`for`/`while`) |
|---|---|---|
| Keterbacaan | Lebih elegan untuk masalah "berulang secara alami" (pohon, struktur bersarang) | Lebih umum & mudah dipahami pemula |
| Performa | Bisa lebih lambat & boros memori (setiap panggilan menambah call stack) | Umumnya lebih cepat & hemat memori |
| Cocok untuk | Struktur data pohon (tree), pencarian folder bersarang, algoritma divide & conquer | Perulangan sederhana, iterasi linear |

👉 **Tips:** Gunakan rekursi ketika masalahnya **secara alami** bersifat rekursif (misalnya struktur folder, pohon data), bukan sekadar untuk perulangan biasa yang lebih mudah ditulis dengan `for`/`while`.

## Kapan Menggunakan Recursive Function?

- Menjelajahi struktur data bersarang: folder & subfolder, komentar & balasan komentar
- Algoritma matematika: faktorial, fibonacci, pangkat
- Algoritma **divide and conquer**: quicksort, mergesort, binary search
- Traversal struktur pohon (tree) di DOM atau JSON bersarang

Buka `contoh.html` untuk mencoba faktorial, fibonacci, dan penjumlahan rekursif secara langsung.

➡️ Lanjut ke materi berikutnya: **09. Generator Function**
