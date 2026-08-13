# 02. Inline JavaScript

## Apa itu Inline JavaScript?

Inline JavaScript adalah kode JS yang ditulis **langsung di dalam
atribut HTML**, biasanya atribut event seperti `onclick`, `onchange`,
`onmouseover`, dan sejenisnya.

```html
<button onclick="alert('Kamu klik tombolnya!')">Klik Saya</button>
```

Di atas, `alert('Kamu klik tombolnya!')` adalah kode JavaScript yang
nempel LANGSUNG di dalam tag `<button>` — gak ada tag `<script>`
sama sekali.

## Kenapa Disebut "Inline"?

Karena kodenya berada **satu baris/satu tempat** dengan elemen
HTML-nya — gak dipisah ke tempat lain. Ini cara PALING TUA buat nulis
JavaScript, peninggalan dari awal-awal JavaScript diciptakan (tahun
1990-an).

## Kelebihan

- Cepat buat contoh singkat / testing kecil-kecilan
- Gak butuh file tambahan

## Kekurangan (Kenapa Sebaiknya Dihindari)

1. **Susah dibaca** kalau kodenya panjang — atribut HTML jadi penuh JS
2. **Gak bisa dipakai ulang** — kalau ada 10 tombol yang butuh logic
   sama, harus nulis ulang 10 kali
3. **Campur aduk** struktur (HTML) dengan perilaku (JS) — melanggar
   prinsip *separation of concerns* (pemisahan tanggung jawab kode)
4. **Susah di-debug** — error di atribut HTML gak sejelas error di
   file JS biasa
5. Beberapa fitur keamanan modern (seperti *Content Security Policy*)
   secara default **memblokir** inline script demi keamanan

## Kapan Masih Ditemui?

- Kode HTML lama/legacy
- Contoh super cepat di tutorial (buat ngejelasin konsep doang)
- Hampir gak pernah dipakai di proyek production modern

📄 Lihat: [`contoh.html`](./contoh.html) dan [`contoh.js`](./contoh.js)
