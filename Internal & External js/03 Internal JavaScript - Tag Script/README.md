# 03. Internal JavaScript (Tag Script)

## Apa itu Internal JavaScript?

Internal JavaScript adalah kode JS yang ditulis di dalam tag
`<script>...</script>`, tapi masih di **file HTML yang sama** —
bukan file terpisah.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Contoh</title>
</head>
<body>
  <h1>Halo!</h1>

  <script>
    console.log("Ini JavaScript internal");
    alert("Halo dari script internal!");
  </script>
</body>
</html>
```

## Bedanya dengan Inline

| | Inline | Internal |
|---|---|---|
| Ditulis di | Atribut HTML (`onclick`, dst) | Tag `<script>` |
| Bisa banyak baris? | Ribet kalau panjang | Bisa berbaris-baris dengan rapi |
| Terpisah dari elemen HTML? | Tidak | Ya (tapi masih 1 file) |

Internal JavaScript sudah lebih rapi dibanding inline karena kodenya
terkumpul di satu tempat (tag `<script>`), bukan tersebar di banyak
atribut.

## Kelebihan

- Kode JS terkumpul rapi di satu blok
- Gak butuh file tambahan — cocok buat halaman kecil/single-page
  sederhana
- Cocok buat belajar & eksperimen cepat

## Kekurangan

- Masih nyampur dengan HTML dalam 1 file — file jadi panjang kalau
  kodenya banyak
- **Gak bisa dipakai ulang** di halaman HTML lain — kalau ada 5
  halaman yang butuh fungsi sama, harus copy-paste script-nya 5 kali
- Browser gak bisa nge-*cache* kode ini secara terpisah (beda dengan
  external, yang dibahas di folder berikutnya)

## Bisa Ada Berapa Tag `<script>`?

Boleh lebih dari satu dalam satu halaman HTML — nanti dijalankan
berurutan dari atas ke bawah.

📄 Lihat: [`contoh.html`](./contoh.html) dan [`contoh.js`](./contoh.js)
