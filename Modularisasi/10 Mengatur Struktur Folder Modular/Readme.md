# 10. Mengatur Struktur Folder Modular

> Pola umum menyusun folder dan file dalam proyek JavaScript supaya tetap rapi seiring bertambah besar.

## Tujuan Pembelajaran

- Mengenal beberapa pola struktur folder yang umum dipakai
- Memahami prinsip 'group by feature' vs 'group by type'
- Menerapkan pola penamaan file dan folder yang konsisten

## Kenapa Struktur Folder Penting?

Modularisasi bukan cuma soal `export`/`import` — **cara file-file itu disusun di dalam folder** sama pentingnya. Struktur yang baik membuat developer baru bisa cepat menemukan kode yang relevan, sementara struktur yang buruk membuat proyek terasa membingungkan meski setiap file sudah dimodularisasi dengan benar.

## Pola 1: Group by Type (Kelompokkan per Jenis)

File dikelompokkan berdasarkan **jenisnya** — semua model di satu folder, semua service di folder lain, dan seterusnya.

```js
src/
├── models/
│   ├── User.mjs
│   └── Produk.mjs
├── services/
│   ├── userService.mjs
│   └── produkService.mjs
├── utils/
│   ├── format.mjs
│   └── validasi.mjs
└── index.mjs
```

> **Tips:** Pola ini cocok untuk proyek **kecil hingga menengah** karena mudah dipahami sejak awal. Kelemahannya, saat proyek membesar, developer harus **berpindah-pindah banyak folder** hanya untuk mengerjakan satu fitur (misalnya fitur "produk" tersebar di `models/`, `services/`, dan `utils/` sekaligus).

## Pola 2: Group by Feature (Kelompokkan per Fitur)

File dikelompokkan berdasarkan **fitur/domain bisnisnya** — semua yang berkaitan dengan "user" ada dalam satu folder, semua yang berkaitan dengan "produk" di folder lain.

```js
src/
├── user/
│   ├── User.mjs
│   ├── userService.mjs
│   └── userValidasi.mjs
├── produk/
│   ├── Produk.mjs
│   ├── produkService.mjs
│   └── produkValidasi.mjs
├── shared/           <- utilitas yang dipakai lintas fitur
│   └── format.mjs
└── index.mjs
```

> **Tips:** Pola ini biasanya lebih tahan lama untuk **proyek besar**, karena mengerjakan satu fitur hanya perlu membuka satu folder saja. Kelemahannya, di awal proyek yang masih kecil, terkadang terasa berlebihan (over-engineering).

## Prinsip Penamaan yang Konsisten

Terlepas dari pola mana yang dipilih, konsistensi penamaan sama pentingnya:

- **Satu gaya penamaan file** — pilih salah satu: `kebab-case` (`user-service.mjs`), `camelCase` (`userService.mjs`), atau `PascalCase` khusus untuk class/component (`User.mjs`). Jangan campur-campur dalam satu proyek.
- **Barrel file di titik strategis** — pakai `index.mjs` (materi 06) di folder-folder yang sering diimpor gabungan, bukan di semua folder tanpa terkecuali.
- **Nama file mencerminkan isinya** — hindari nama generik seperti `helper.mjs` atau `utils2.mjs` yang tidak menjelaskan apa isinya.

## Latihan

Sebuah proyek kecil (aplikasi to-do list sederhana) baru mulai dikembangkan sendirian oleh satu orang. Menurutmu, pola "group by type" atau "group by feature" yang lebih masuk akal dipakai di tahap ini? Jelaskan alasannya secara singkat.

<details>
<summary>Lihat Jawaban</summary>

Untuk proyek kecil yang baru dimulai, **"group by type"** biasanya lebih masuk akal — strukturnya sederhana, mudah dipahami sejak awal, dan tidak menambah kompleksitas folder yang belum diperlukan. "Group by feature" lebih bermanfaat ketika proyek sudah membesar dan punya banyak fitur berbeda yang masing-masing punya banyak file terkait — menerapkannya terlalu dini pada proyek kecil bisa terasa berlebihan (over-engineering).
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file [contoh.js](./contoh.js) pada folder ini.

[← CommonJS vs ES Modules](../09 CommonJS vs ES Modules/Readme.md) | [Module Scope dan Enkapsulasi →](../11 Module Scope dan Enkapsulasi/Readme.md)
