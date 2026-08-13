# 07. Studi Kasus: To-Do List dengan localStorage

## Tujuan Studi Kasus

Sekarang saatnya menggabungkan **semua yang sudah dipelajari** (setItem, getItem, JSON, event delegation) untuk membangun aplikasi **To-Do List sederhana** yang datanya **tetap tersimpan** meski halaman di-refresh atau browser ditutup.

## Rancangan Data

Kita akan menyimpan daftar tugas sebagai **array of object** di localStorage, dengan struktur:

```javascript
[
  { id: 1691234567890, teks: "Belajar localStorage", selesai: false },
  { id: 1691234571234, teks: "Membuat To-Do List", selesai: true }
]
```

- `id` → menggunakan `Date.now()` agar selalu unik (berdasarkan waktu saat dibuat)
- `teks` → isi tugas
- `selesai` → status (`true`/`false`)

## Langkah 1: Function untuk Load & Save Data

```javascript
const KEY_STORAGE = "daftarTugas";

function muatTugas() {
  const data = localStorage.getItem(KEY_STORAGE);
  return data ? JSON.parse(data) : []; // jika belum ada data, mulai dengan array kosong
}

function simpanTugas(tugas) {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(tugas));
}
```

## Langkah 2: Menambah Tugas Baru

```javascript
function tambahTugas(teks) {
  const daftarTugas = muatTugas();

  daftarTugas.push({
    id: Date.now(),   // ID unik berdasarkan timestamp
    teks: teks,
    selesai: false
  });

  simpanTugas(daftarTugas); // simpan lagi ke localStorage setelah diubah
}
```

## Langkah 3: Menandai Tugas Selesai/Belum

```javascript
function toggleTugas(id) {
  const daftarTugas = muatTugas();

  const tugas = daftarTugas.find((t) => t.id === id);
  if (tugas) {
    tugas.selesai = !tugas.selesai; // balik status: true jadi false, atau sebaliknya
  }

  simpanTugas(daftarTugas);
}
```

## Langkah 4: Menghapus Tugas

```javascript
function hapusTugas(id) {
  let daftarTugas = muatTugas();

  daftarTugas = daftarTugas.filter((t) => t.id !== id); // buang tugas dengan id tersebut

  simpanTugas(daftarTugas);
}
```

## Pola Penting: "Load → Ubah → Save"

Perhatikan pola yang **selalu berulang** di setiap function di atas:

```
1. MUAT data terbaru dari localStorage (muatTugas())
2. UBAH data tersebut di memori (push, find, filter, dll)
3. SIMPAN kembali seluruh data ke localStorage (simpanTugas())
```

👉 **Kenapa harus selalu muat ulang dulu?** Karena localStorage **tidak** bisa diubah sebagian (partial update) — kita harus selalu mengambil **seluruh array**, mengubahnya di JavaScript, lalu menyimpan **seluruh array** itu kembali menggantikan yang lama.

## Menampilkan Data ke HTML (Render)

```javascript
function renderTugas() {
  const daftarTugas = muatTugas();
  const container = document.getElementById("daftarTugasHTML");

  container.innerHTML = ""; // kosongkan dulu tampilan lama

  daftarTugas.forEach((tugas) => {
    const li = document.createElement("li");
    li.textContent = tugas.teks;
    li.style.textDecoration = tugas.selesai ? "line-through" : "none";
    container.appendChild(li);
  });
}
```

Setiap kali data berubah (tambah, toggle, hapus), kita perlu memanggil `renderTugas()` lagi agar tampilan HTML sesuai dengan data terbaru.

## Kode Lengkap

Kode lengkap aplikasi To-Do List ini tersedia di `contoh.html` — mencakup fitur **tambah**, **tandai selesai**, **hapus tugas**, dan **data tetap tersimpan setelah refresh** karena menggunakan localStorage.

Coba buka `contoh.html`, tambahkan beberapa tugas, refresh halaman — datanya akan tetap ada!

➡️ Lanjut ke materi berikutnya: **08. Keamanan dan Keterbatasan localStorage**
