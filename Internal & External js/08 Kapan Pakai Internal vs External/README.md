# 08. Kapan Pakai Internal vs External

## Aturan Praktis (Rule of Thumb)

| Situasi | Rekomendasi |
|---|---|
| Kode cuma 1-2 baris, dipakai sekali doang | Internal boleh |
| Kode dipakai di lebih dari 1 halaman | External (wajib) |
| Proyek nyata / production | External (hampir selalu) |
| Belajar/eksperimen cepat | Internal oke-oke aja |
| Kerja bareng tim | External (biar gak bentrok) |
| Butuh caching biar loading cepat | External |

## Kenapa Industri Hampir Selalu Pakai External?

1. **Reusable** — satu file dipakai di banyak halaman
2. **Terorganisir** — mudah dicari, mudah di-maintain, HTML gak
   "kotor" sama kode JS yang panjang
3. **Bisa di-*cache*** browser — mempercepat loading di kunjungan
   berikutnya
4. **Kolaborasi tim lebih mudah** — developer bisa kerja di file
   `.js` tanpa harus buka-tutup file HTML
5. Bisa memakai `async`/`defer` untuk optimasi loading (folder `06`)

## Ringkasan Ketiga Metode

| | Inline | Internal | External |
|---|---|---|---|
| Ditulis di | Atribut HTML | Tag `<script>` | File `.js` terpisah |
| Reusable? | ❌ Tidak | ❌ Tidak | ✅ Ya |
| Rapi & terorganisir? | ❌ Paling berantakan | ⚠️ Lumayan | ✅ Paling rapi |
| Bisa di-*cache*? | ❌ Tidak | ❌ Tidak | ✅ Ya |
| Dipakai di proyek modern? | ❌ Hampir gak pernah | ⚠️ Kadang (kode kecil) | ✅ Standar industri |

## Kesimpulan Singkat

**Kalau ragu, pilih External.** Itu prinsip paling aman buat hampir
semua kasus, apalagi untuk proyek yang bakal berkembang atau
dikerjakan bareng orang lain. Internal masih wajar dipakai untuk
belajar, eksperimen cepat, atau halaman kecil yang benar-benar
berdiri sendiri.
