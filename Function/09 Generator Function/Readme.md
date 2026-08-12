# 09. Generator Function

## Apa itu Generator Function?

**Generator Function** adalah jenis function **spesial** yang bisa **dijeda (pause)** di tengah eksekusinya, lalu **dilanjutkan lagi** nanti — berbeda dengan function biasa yang selalu berjalan dari awal sampai akhir tanpa jeda.

Generator function ditandai dengan **tanda bintang (`*`)** setelah kata kunci `function`, dan menggunakan kata kunci `yield` untuk "menghasilkan" nilai satu per satu.

```javascript
function* namaGenerator() {
  yield nilai1;
  yield nilai2;
  yield nilai3;
}
```

## Cara Kerja Generator Function

Memanggil generator function **tidak langsung menjalankan isinya**, melainkan mengembalikan sebuah **objek Generator/Iterator**. Kita perlu memanggil method `.next()` untuk menjalankan kode **sampai `yield` berikutnya**.

```javascript
function* hitungAngka() {
  console.log("Mulai...");
  yield 1;
  console.log("Lanjut setelah yield pertama...");
  yield 2;
  console.log("Lanjut setelah yield kedua...");
  yield 3;
  console.log("Selesai!");
}

const gen = hitungAngka(); // belum menjalankan apapun di dalamnya

console.log(gen.next()); // "Mulai..." lalu -> { value: 1, done: false }
console.log(gen.next()); // "Lanjut setelah yield pertama..." -> { value: 2, done: false }
console.log(gen.next()); // "Lanjut setelah yield kedua..." -> { value: 3, done: false }
console.log(gen.next()); // "Selesai!" -> { value: undefined, done: true }
```

Setiap `.next()` mengembalikan sebuah object dengan dua properti:
- `value` → nilai yang di-*yield*
- `done` → `true` jika generator sudah selesai, `false` jika masih ada `yield` berikutnya

## Generator Bisa Digunakan dengan `for...of`

Karena generator adalah **iterable**, kita bisa langsung memakainya dalam loop `for...of` tanpa perlu memanggil `.next()` manual:

```javascript
function* warnaPelangi() {
  yield "Merah";
  yield "Jingga";
  yield "Kuning";
  yield "Hijau";
}

for (const warna of warnaPelangi()) {
  console.log(warna); // Merah, Jingga, Kuning, Hijau (satu per satu)
}
```

## Generator untuk Nilai "Tak Terbatas" (Infinite Sequence)

Salah satu kegunaan unik generator adalah membuat deret nilai yang **secara teori tak terbatas**, karena nilai baru hanya dihasilkan **saat dibutuhkan** (lazy evaluation) — ini tidak mungkin dilakukan dengan array biasa yang harus dibuat sekaligus.

```javascript
function* generatorAngka() {
  let i = 1;
  while (true) {       // loop tanpa henti, TAPI aman karena "dijeda" oleh yield
    yield i;
    i++;
  }
}

const gen = generatorAngka();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// bisa terus dipanggil tanpa batas, generator akan "mengingat" posisinya
```

## Mengirim Nilai ke Dalam Generator

Method `.next(nilai)` juga bisa mengirim nilai **ke dalam** generator, yang akan diterima sebagai hasil dari ekspresi `yield` sebelumnya:

```javascript
function* tanyaJawab() {
  const nama = yield "Siapa namamu?";
  const umur = yield "Halo " + nama + ", berapa umurmu?";
  return "Nama: " + nama + ", Umur: " + umur;
}

const gen = tanyaJawab();
console.log(gen.next().value);        // "Siapa namamu?"
console.log(gen.next("Budi").value);  // "Halo Budi, berapa umurmu?"
console.log(gen.next(20).value);      // "Nama: Budi, Umur: 20"
```

## Kapan Menggunakan Generator Function?

- Membuat **custom iterator** untuk struktur data sendiri
- Menghasilkan **deret nilai tak terbatas** (angka, ID unik, dll) secara efisien
- Mengelola alur kode **asynchronous** yang kompleks (sebelum `async`/`await` populer, generator sering dipakai untuk ini)
- Membuat **state machine** sederhana (misalnya alur tanya-jawab bertahap)

⚠️ **Catatan untuk pemula:** Generator function termasuk materi yang **cukup advance**. Tidak masalah jika butuh waktu lebih lama untuk memahaminya — fokus dulu pada konsep dasarnya (`function*`, `yield`, `.next()`), lalu eksplorasi lebih lanjut seiring pengalaman.

Buka `contoh.html` untuk mencoba generator sederhana dan generator angka tak terbatas.

➡️ Lanjut ke materi berikutnya: **10. Rangkuman dan Best Practice Function**
