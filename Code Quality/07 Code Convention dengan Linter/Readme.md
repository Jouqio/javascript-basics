# 7. Code Convention dengan Linter Library

## Apa itu Linter?

**Linter** adalah alat yang secara otomatis **menganalisis kode** untuk menemukan:

- Kesalahan sintaks/potensi bug (contoh: variabel tidak digunakan, perbandingan `==` yang salah)
- Pelanggaran terhadap style guide (indentasi salah, penamaan tidak konsisten, dll.)

Linter membantu menegakkan **code convention** (konvensi kode) secara otomatis, tanpa harus dicek manual satu per satu.

## ESLint: Linter Paling Populer di JavaScript

**ESLint** adalah linter paling banyak digunakan di ekosistem JavaScript/Node.js.

### Instalasi ESLint

```bash
npm init @eslint/config
```

Perintah ini akan menanyakan beberapa pertanyaan (jenis modul, framework yang dipakai, style guide favorit) lalu membuat file konfigurasi `eslint.config.js` (atau `.eslintrc` pada versi lama).

### Contoh Konfigurasi Sederhana

```javascript
// eslint.config.js
export default [
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "eqeqeq": "error",       // wajib pakai === bukan ==
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "indent": ["error", 2],
    },
  },
];
```

### Menjalankan ESLint

```bash
npx eslint src/
```

Contoh output ESLint saat menemukan masalah:

```
src/app.js
  3:10  warning  'total' is assigned a value but never used  no-unused-vars
  5:8   error    Expected '===' and instead saw '=='          eqeqeq

✖ 2 problems (1 error, 1 warning)
```

### Auto-fix dengan ESLint

Banyak masalah bisa diperbaiki otomatis:

```bash
npx eslint src/ --fix
```

## Prettier: Alat Pemformat Kode

Selain ESLint (fokus pada kualitas & potensi bug), ada **Prettier** yang fokus murni pada **format kode** (spasi, indentasi, tanda kutip, dsb.) secara otomatis dan konsisten.

### Instalasi Prettier

```bash
npm install --save-dev prettier
```

### Contoh Penggunaan

```bash
npx prettier --write src/
```

**Sebelum:**

```javascript
function add(a,b){
return a+b}
```

**Setelah `prettier --write`:**

```javascript
function add(a, b) {
  return a + b;
}
```

## ESLint + Prettier: Kombinasi Umum

Banyak proyek menggabungkan keduanya:

- **ESLint** → mendeteksi bug potensial & pelanggaran aturan kode.
- **Prettier** → merapikan format secara otomatis.

```bash
npm install --save-dev eslint-config-prettier
```

Konfigurasi ini mencegah konflik aturan antara ESLint dan Prettier (misalnya keduanya punya aturan indentasi yang berbeda).

## Menjalankan Linter Otomatis Sebelum Commit (Husky + lint-staged)

Agar kode yang buruk tidak sampai masuk ke repository, banyak tim menggunakan **Husky** (Git hooks) + **lint-staged**:

```bash
npm install --save-dev husky lint-staged
npx husky init
```

```json
// package.json
"lint-staged": {
  "*.js": ["eslint --fix", "prettier --write"]
}
```

Dengan konfigurasi ini, setiap kali developer melakukan `git commit`, kode akan otomatis dicek dan diformat lebih dulu.

## Latihan Kecil

Sebutkan minimal 3 aturan ESLint yang menurutmu penting untuk proyek tim, dan jelaskan alasannya (misalnya: `no-unused-vars`, `eqeqeq`, `no-var`).

## Poin Penting

- **Linter** (contoh: ESLint) menegakkan aturan kode & mendeteksi potensi bug secara otomatis.
- **Prettier** fokus merapikan format kode secara konsisten.
- Kombinasi keduanya + Git hook (Husky) memastikan kode yang masuk ke repository selalu berkualitas.
- Setelah kode rapi dan bebas dari kesalahan gaya, langkah berikutnya adalah memastikan kode **benar secara fungsi** lewat **Pengujian Program (Testing)**.

---
⬅️ [06. Style Guide](06-style-guide.md) | ➡️ [08. Pengujian Program](08-pengujian-program.md)