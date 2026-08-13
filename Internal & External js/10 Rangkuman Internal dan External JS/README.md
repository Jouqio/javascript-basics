# 10. Rangkuman Internal dan External JS

## Tiga Cara Menulis JavaScript

1. **Inline** — di dalam atribut HTML (`onclick`, dst). Paling gak
   direkomendasikan, sulit dibaca & di-maintain.
2. **Internal** — di dalam tag `<script>` pada file HTML yang sama.
   Lumayan rapi, tapi gak reusable.
3. **External** — di file `.js` terpisah, dihubungkan lewat
   `<script src="...">`. Paling direkomendasikan: rapi, reusable,
   bisa di-*cache*, gampang dikerjakan bareng tim.

## Posisi Script Itu Penting

Browser membaca HTML dari atas ke bawah. Script yang mengakses
elemen HTML harus dijalankan **setelah** elemen itu ada — caranya:
taruh script di akhir `<body>`, atau pakai atribut `defer`.

## `async` vs `defer`

Keduanya cuma berlaku untuk external script:
- **`async`** — dijalankan begitu selesai didownload (urutan gak
  terjamin)
- **`defer`** — dijalankan setelah HTML selesai dibaca (urutan
  terjamin sesuai urutan tag)

## Banyak File? Perhatikan Urutan

File yang berisi fungsi/variabel yang DIPAKAI file lain harus dimuat
lebih dulu.

## Checklist Sebelum Nulis Script Tag

- [ ] Kodenya bakal dipakai di lebih dari satu halaman? → pakai
      **external**
- [ ] Script butuh akses elemen HTML? → taruh di akhir `body`, atau
      pakai `defer`
- [ ] Ada lebih dari satu file `.js`? → cek urutannya sudah benar
- [ ] Path `src` sudah benar? → cek di tab Network kalau ragu

## Tabel Perbandingan Akhir

| | Inline | Internal | External |
|---|---|---|---|
| Ditulis di | Atribut HTML | Tag `<script>` | File `.js` terpisah |
| Reusable | ❌ | ❌ | ✅ |
| Direkomendasikan? | ❌ | ⚠️ Kadang | ✅ |

Lanjut ke folder `11` buat uji pemahaman lewat kuis. 🚀
