# Export dalam Modularisasi JavaScript

Ringkasan materi tentang cara meng-export function/method/variable agar bisa diakses dari modul lain di JavaScript.

## Daftar Isi

- [Pengantar](#pengantar)
- [Named Export](#named-export)
- [Default Export](#default-export)
- [Kombinasi Default Export dan Named Export](#kombinasi-default-export-dan-named-export)
- [Kapan Menggunakan Named vs Default Export](#kapan-menggunakan-named-vs-default-export)
- [Ringkasan Perbandingan](#ringkasan-perbandingan)

## Pengantar

`export` adalah keyword yang digunakan untuk melabeli suatu function/method/variable agar dapat diakses dari luar modul (file) saat ini. Export terdiri dari dua jenis:

- **Named export**
- **Default export**

## Named Export

Named export dapat dilakukan dengan dua cara.

**1. Export saat deklarasi:**

```js
export const name = 'John';
export const email = 'john@gmail.com';
export const age = 25;
```

**2. Export setelah deklarasi:**

```js
const name = 'John';
const email = 'john@gmail.com';
const age = 25;

export { name, email, age };
```

Kedua cara di atas menghasilkan hasil yang sama — variable `name`, `email`, dan `age` dapat digunakan di modul lain.

**Cara mengimpor named export** — nilainya dituliskan di dalam kurung kurawal `{}` (named import):

```js
import { name, email, age } from './user.mjs';

console.log(name, email, age);
```

## Default Export

Default export adalah cara mengekspor **minimal satu** function/method/variable dari sebuah modul, di mana modul lain yang mengimpornya **tidak perlu tahu nama spesifiknya**.

```js
// main.mjs
import goodMorning from './anotherfile.mjs';
import anotherName from './anotherfile.mjs';

goodMorning();
anotherName();
```

Kedua baris di atas akan mencetak hasil yang sama (misalnya `"Good morning!"`), karena keduanya sama-sama mengimpor nilai default export dari `anotherfile.mjs` — meski nama yang digunakan berbeda (`goodMorning` vs `anotherName`).

Perbedaan penting dengan named export: **tidak perlu kurung kurawal** saat mengimpor default export.

### Aturan Penting Default Export

- Secara teknis bisa mengekspor lebih dari satu nilai, tapi **tidak disarankan**.
- **Satu modul hanya boleh memiliki satu default export.**
- Prinsipnya: **satu modul, satu nilai** — agar struktur kode lebih jelas dan mudah dinavigasi.

## Kombinasi Default Export dan Named Export

Default export dan named export **bisa dikombinasikan** dalam satu modul, meskipun ini **bukan best practice** karena kurang konsisten.

```js
// main.mjs
import sayHi, { sayGoodBye } from './anotherfile.mjs';

sayHi();       // Hai, ini default export dari anotherfile.mjs
sayGoodBye();  // Bye, ini named export dari anotherfile.mjs
```

Output:

```
Hai, ini default export dari anotherfile.mjs
Bye, ini named export dari anotherfile.mjs
```

Pola importnya: default export ditulis tanpa kurung kurawal di posisi pertama, diikuti named export di dalam `{}`.

## Kapan Menggunakan Named vs Default Export

- **Named export** — cocok ketika ingin mengekspor **banyak nilai** dari satu modul. Mengharuskan penulisan nama secara spesifik saat import, sehingga codebase lebih **konsisten**.
- **Default export** — cocok untuk **menghindari konflik** saat import, karena nama saat mengimpor bebas (tidak harus sesuai nama asli). Juga membuat struktur modul lebih jelas karena hanya ada **satu nilai** yang diekspor per modul.

## Ringkasan Perbandingan

| Aspek | Named Export | Default Export |
|---|---|---|
| Jumlah per modul | Bisa banyak | Maksimal satu (disarankan) |
| Sintaks export | `export const x = ...` atau `export { x }` | `export default x` |
| Sintaks import | `import { x } from '...'` (kurung kurawal) | `import namaBebas from '...'` (tanpa kurung kurawal) |
| Nama saat import | Harus sesuai nama asli | Bebas, tidak harus sama |
| Cocok untuk | Mengekspor banyak nilai sekaligus | Satu nilai utama per modul |
| Konsistensi kode | Lebih konsisten & eksplisit | Lebih fleksibel, rawan penamaan tidak konsisten |