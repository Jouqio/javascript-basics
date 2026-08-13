# 08. Circular Dependency (Ketergantungan Melingkar)

> Masalah yang muncul saat dua module saling mengimpor satu sama lain, dan cara menghindarinya.

## Tujuan Pembelajaran

- Memahami apa itu circular dependency
- Mengenali gejala yang muncul akibat circular dependency
- Mengetahui beberapa cara menghindari atau memperbaikinya

## Apa itu Circular Dependency?

**Circular dependency** (ketergantungan melingkar) terjadi ketika **module A meng-import module B, dan module B juga meng-import module A** — baik secara langsung maupun lewat rantai module lain yang akhirnya kembali lagi ke awal.

## Contoh Kasus: Dua Module Saling Bergantung

Bayangkan `user.mjs` butuh sesuatu dari `pesanan.mjs` untuk menghitung total belanja user, tapi `pesanan.mjs` juga butuh sesuatu dari `user.mjs` untuk validasi. File-file ini bisa dicoba langsung — lihat `user.mjs` dan `pesanan.mjs` di folder ini.

```js
// --- user.mjs ---
import { hitungTotalPesanan } from "./pesanan.mjs";

export function tampilkanRingkasan(namaUser) {
  const total = hitungTotalPesanan(namaUser);
  return `${namaUser} - Total belanja: Rp${total}`;
}

// --- pesanan.mjs ---
import { tampilkanRingkasan } from "./user.mjs"; // <- circular! kembali ke user.mjs

export function hitungTotalPesanan(namaUser) {
  return 150000; // simulasi
}

export function cetakStruk(namaUser) {
  // fungsi ini butuh tampilkanRingkasan dari user.mjs
  return tampilkanRingkasan(namaUser);
}
```

> **Perhatian:** Gejala umum akibat circular dependency: salah satu fungsi/nilai yang di-import ternyata bernilai `undefined` saat dipakai, meski file yang mengekspornya terlihat benar. Ini terjadi karena **urutan pemuatan module** membuat salah satu file belum selesai dieksekusi penuh saat file lainnya mencoba memakai hasilnya.

## Cara Menghindari Circular Dependency

1. **Pisahkan logika bersama ke module ketiga** — kalau A dan B sama-sama butuh satu fungsi tertentu, pindahkan fungsi itu ke module C yang independen, lalu A dan B sama-sama meng-import dari C.
2. **Gabungkan jika memang selalu dipakai bersamaan** — kadang dua file yang saling bergantung erat sebenarnya lebih masuk akal digabung jadi satu module saja.
3. **Restrukturisasi arah ketergantungan** — desain ulang supaya ketergantungan hanya mengalir **satu arah** (A butuh B, tapi B tidak pernah butuh A).

```js
// --- SOLUSI: pisahkan logika bersama ke module ketiga ---

// --- format.mjs (module ketiga, tidak bergantung ke siapa pun) ---
export function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

// --- pesanan.mjs (hanya bergantung ke format.mjs) ---
import { formatRupiah } from "./format.mjs";
export function hitungTotalPesanan(namaUser) {
  return formatRupiah(150000);
}

// --- user.mjs (hanya bergantung ke pesanan.mjs, TIDAK ada arah balik) ---
import { hitungTotalPesanan } from "./pesanan.mjs";
export function tampilkanRingkasan(namaUser) {
  return `${namaUser} - Total belanja: ${hitungTotalPesanan(namaUser)}`;
}
```

> **Tips:** Kalau kamu menemukan dua file saling meng-import, itu **sinyal kuat** untuk berhenti sejenak dan memikirkan ulang struktur module-nya — bukan sesuatu yang harus buru-buru "disiasati" dengan trik teknis.

## Latihan

Jelaskan dengan kata-kata sendiri: kenapa circular dependency dianggap sebagai tanda desain module yang kurang baik, bukan sekadar bug teknis biasa?

<details>
<summary>Lihat Jawaban</summary>

Karena circular dependency biasanya menandakan **batas tanggung jawab antar module tidak jelas** — dua module yang saling membutuhkan satu sama lain berarti keduanya sebenarnya punya keterkaitan yang sangat erat, sehingga lebih tepat kalau logika bersamanya dipisah ke module ketiga, atau bahkan digabung jadi satu module saja. Menyelesaikannya dengan trik teknis (tanpa mendesain ulang) hanya menutupi gejalanya, bukan akar masalahnya.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.mjs`) ada di file [user.mjs](./user.mjs), [pesanan.mjs](./pesanan.mjs), [format.mjs](./format.mjs), [pesanan-benar.mjs](./pesanan-benar.mjs), [user-benar.mjs](./user-benar.mjs), [contoh.mjs](./contoh.mjs) pada folder ini.

[← Import Dinamis (Dynamic Import)](../07 Import Dinamis (Dynamic Import)/Readme.md) | [CommonJS vs ES Modules →](../09 CommonJS vs ES Modules/Readme.md)
