// ============================================
// CONTOH: Preview 3 Cara Menulis JavaScript
// (Materi lengkap ada di folder 02, 03, dan 04)
// File ini pakai alert() -> jalankan di Console browser (F12),
// bukan lewat node, karena alert() cuma ada di browser.
// ============================================

// 1. INLINE -- ditulis LANGSUNG di atribut HTML, contohnya:
//
//    <button onclick="alert('Halo!')">Klik saya</button>
//
//    Perhatikan: kode JS "alert('Halo!')" nempel di dalam HTML-nya.

// 2. INTERNAL -- ditulis di dalam tag <script> pada file HTML yang sama:
//
//    <script>
//      alert('Halo!');
//    </script>
//
//    Kodenya masih di file HTML, tapi udah terpisah dari atribut tag.

// 3. EXTERNAL -- ditulis di file .js SENDIRI, lalu dihubungkan:
//
//    File HTML:  <script src="app.js"></script>
//    File app.js (baris di bawah ini yang "tinggal" di sana):

alert("Halo! Ini contoh JavaScript external.");

// Coba jalankan file ini di Console browser (F12) buat lihat alert-nya.
// Yang penting dipahami: ketiga cara di atas menghasilkan EFEK YANG
// SAMA PERSIS -- bedanya cuma di tempat nulis & nyimpen kodenya.
