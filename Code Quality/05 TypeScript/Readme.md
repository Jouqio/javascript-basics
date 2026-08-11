# 5. TypeScript, Superset dari JavaScript

## Apa itu TypeScript?

**TypeScript (TS)** adalah bahasa pemrograman yang dikembangkan Microsoft, merupakan **superset dari JavaScript** — artinya semua kode JavaScript valid juga merupakan kode TypeScript valid, ditambah fitur **static typing** (tipe statis) dan fitur modern lainnya.

```
JavaScript ⊂ TypeScript
```

TypeScript akan **dikompilasi (transpile)** menjadi JavaScript biasa sebelum dijalankan di browser atau Node.js.

## Kenapa TypeScript Populer?

1. **Mendeteksi bug lebih awal** — kesalahan tipe ketahuan saat menulis kode, bukan saat runtime.
2. **Autocomplete lebih baik** — editor bisa memberi saran kode lebih akurat.
3. **Refactoring lebih aman** — mengubah struktur kode besar jadi lebih percaya diri.
4. **Didukung ekosistem besar** — banyak framework (Angular, Next.js, NestJS) menggunakan TypeScript sebagai default.

## Instalasi TypeScript

```bash
npm install --save-dev typescript
npx tsc --init
```

Perintah `tsc --init` membuat file konfigurasi `tsconfig.json`.

## Contoh Dasar

**File `app.ts`:**

```typescript
function add(a: number, b: number): number {
  return a + b;
}

add(1, 2);      // ✅ OK
add(1, "dua");  // ❌ Error saat kompilasi
```

Kompilasi ke JavaScript:

```bash
npx tsc app.ts
```

Hasilnya adalah file `app.js` yang sudah bersih dari anotasi tipe dan bisa dijalankan langsung dengan Node.js.

## Tipe Data di TypeScript

```typescript
let age: number = 25;
let name: string = "Budi";
let isActive: boolean = true;
let scores: number[] = [80, 90, 100];
let tuple: [string, number] = ["Budi", 25];
```

## Interface & Type

TypeScript menyediakan `interface` dan `type` untuk mendefinisikan struktur objek.

```typescript
interface User {
  name: string;
  age: number;
  isActive?: boolean; // properti opsional
}

function printUser(user: User): void {
  console.log(`${user.name} - ${user.age}`);
}

printUser({ name: "Budi", age: 25 });
```

```typescript
type ID = number | string; // union type

function findUser(id: ID): User | null {
  return null;
}
```

## Generic (Tipe Fleksibel)

Generic memungkinkan fungsi/struktur data bekerja dengan berbagai tipe tanpa kehilangan keamanan tipe.

```typescript
function getFirstItem<T>(items: T[]): T {
  return items[0];
}

getFirstItem<number>([1, 2, 3]);        // number
getFirstItem<string>(["a", "b", "c"]);  // string
```

## Enum

```typescript
enum Status {
  Active,
  Inactive,
  Banned,
}

let userStatus: Status = Status.Active;
```

## TypeScript vs JavaScript vs Flow vs JSDoc

| Fitur | JavaScript | JSDoc | Flow | TypeScript |
|-------|-----------|-------|------|------------|
| Static typing | ❌ | Ringan (via komentar) | ✅ | ✅ (paling lengkap) |
| Perlu compiler | ❌ | ❌ | ✅ (Babel) | ✅ (`tsc`) |
| Ekosistem & popularitas | - | Umum untuk proyek kecil | Menurun | Sangat populer |
| Belajar kurva | - | Mudah | Sedang | Sedang–tinggi |

## Latihan Kecil

Ubah kode JavaScript berikut menjadi TypeScript dengan menambahkan tipe yang sesuai:

```javascript
function calculateDiscount(price, percentage) {
  return price - (price * percentage / 100);
}
```

## Poin Penting

- TypeScript adalah superset JavaScript dengan static typing penuh.
- Kode `.ts` dikompilasi menjadi `.js` sebelum dijalankan.
- TypeScript saat ini menjadi standar industri untuk proyek skala menengah–besar.
- Setelah memahami tipe data, langkah berikutnya adalah menjaga **konsistensi gaya penulisan kode** lewat **Style Guide**.

---
⬅️ [04. Flow, Type Check Library](04-flow-type-check-library.md) | ➡️ [06. Style Guide](06-style-guide.md)