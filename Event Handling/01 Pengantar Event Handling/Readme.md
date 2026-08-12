# 01. Pengantar Event Handling

## Apa itu Event?

**Event** adalah "kejadian" atau "peristiwa" yang terjadi pada halaman web. Contoh event yang sering kita temui:

- Pengguna **mengklik** tombol
- Pengguna **mengetik** di kolom input
- Halaman **selesai dimuat** (loaded)
- Pengguna **menggerakkan mouse**
- Pengguna **menekan tombol keyboard**

Setiap kali kejadian ini terjadi, browser akan "memberi tahu" JavaScript bahwa event tersebut terjadi.

## Apa itu Event Handling?

**Event Handling** adalah cara kita menangkap (listen) event tersebut lalu menjalankan sebuah fungsi (disebut **event handler** atau **event listener**) untuk merespons event itu.

Analogi sederhana: bayangkan kamu memasang **bel pintu**. Ketika ada orang menekan bel (event), bel akan berbunyi (handler/respons). Kamu tidak perlu terus-menerus mengecek pintu, cukup tunggu sampai bel berbunyi.

## Kenapa Event Handling Penting?

Tanpa event handling, halaman web hanya akan menjadi tampilan statis (tidak bisa berinteraksi). Dengan event handling, kita bisa membuat web menjadi **interaktif**, contohnya:

- Tombol "Like" yang berubah warna saat diklik
- Form yang menampilkan pesan error saat data salah
- Menu dropdown yang muncul saat di-hover
- Validasi input secara langsung (real-time)

## Alur Dasar Event Handling

1. **Pilih elemen** HTML yang ingin diberi event (misalnya tombol)
2. **Tentukan jenis event** yang ingin ditangkap (misalnya `click`)
3. **Buat fungsi handler** yang akan dijalankan saat event terjadi
4. **Daftarkan (attach)** handler tersebut ke elemen

Contoh sederhana ada di file `contoh.html`. Buka file tersebut di browser, lalu klik tombolnya untuk melihat hasilnya.

## Rangkuman

| Istilah | Penjelasan |
|---|---|
| Event | Kejadian yang terjadi di halaman (klik, ketik, scroll, dll) |
| Event Handler / Listener | Fungsi yang dijalankan saat event terjadi |
| Event Handling | Proses menangkap event dan menjalankan handler |

➡️ Lanjut ke materi berikutnya: **02. Cara Menambahkan Event Listener**
