#  Belajar DOM Manipulation di JavaScript

Repository ini berisi materi belajar **DOM (Document Object Model) Manipulation** dalam JavaScript, disusun khusus untuk **pemula** yang sudah memahami dasar JavaScript (variabel, fungsi, conditional statement, dsb) dan ingin belajar bagaimana JavaScript **berinteraksi dengan HTML**.

##  Apa itu DOM?

**DOM (Document Object Model)** adalah representasi struktur halaman HTML dalam bentuk **objek** yang bisa diakses dan diubah oleh JavaScript. Berkat DOM, JavaScript bisa:

- Membaca dan mengubah isi teks di halaman
- Mengubah tampilan (style, class) sebuah elemen
- Menambah atau menghapus elemen HTML secara dinamis
- Merespons interaksi pengguna (klik, ketik, submit form, dll)

Singkatnya, **DOM adalah jembatan antara HTML dan JavaScript**.

##  Tujuan Belajar

Setelah menyelesaikan materi ini, kamu diharapkan mampu:
- Memahami apa itu DOM dan DOM Tree
- Memilih (select) elemen HTML dengan berbagai cara
- Menjelajahi (traverse) hubungan antar elemen di DOM
- Mengubah konten, atribut, style, dan class sebuah elemen
- Membuat dan menghapus elemen HTML secara dinamis
- Menangani event (klik, submit, input, dll)
- Membangun project sederhana menggunakan DOM Manipulation

##  Daftar Materi

| No | Folder | Materi |
|----|--------|--------|
| 01 | [Pengantar DOM](./01%20Pengantar%20DOM) | Apa itu DOM, DOM Tree, dan objek `document` |
| 02 | [DOM Selection](./02%20DOM%20Selection) | Cara memilih elemen HTML dari JavaScript |
| 03 | [DOM Traversal](./03%20DOM%20Traversal) | Menjelajahi hubungan antar elemen (parent, child, sibling) |
| 04 | [Mengubah Konten Element](./04%20Mengubah%20Konten%20Element) | `innerHTML`, `textContent`, `innerText` |
| 05 | [Mengubah Atribut Element](./05%20Mengubah%20Atribut%20Element) | `getAttribute`, `setAttribute`, `dataset` |
| 06 | [Mengubah Style dan Class](./06%20Mengubah%20Style%20dan%20Class) | Mengatur tampilan elemen lewat `style` dan `classList` |
| 07 | [Membuat dan Menghapus Element](./07%20Membuat%20dan%20Menghapus%20Element) | `createElement`, `appendChild`, `remove` |
| 08 | [Event Handling Dasar](./08%20Event%20Handling%20Dasar) | `addEventListener` dan event object |
| 09 | [Event Handling Lanjutan](./09%20Event%20Handling%20Lanjutan) | Event bubbling, delegation, `preventDefault` |
| 10 | [Form Handling](./10%20Form%20Handling) | Menangani input, submit, dan validasi form |
| 11 | [Best Practices DOM](./11%20Best%20Practices%20DOM) | Tips menulis kode DOM yang efisien dan rapi |
| 12 | [Studi Kasus Project Sederhana](./12%20Studi%20Kasus%20Project%20Sederhana) | Project To-Do List menggunakan DOM Manipulation |
| 13 | [Latihan dan Quiz](./13%20Latihan%20dan%20Quiz) | Soal latihan untuk menguji pemahaman |

##  Cara Belajar

1. Pelajari folder secara **berurutan dari 01 sampai 13**.
2. Baca `Readme.md` di setiap folder untuk memahami teori dan konsepnya.
3. Setiap folder berisi 3 file demo yang saling terhubung:
   - `index.html` — struktur halaman
   - `style.css` — tampilan halaman
   - `script.js` — logika DOM manipulation
4. **Buka file `index.html` di browser** (klik dua kali, atau gunakan ekstensi "Live Server" di VS Code) untuk melihat & mencoba demonya secara langsung.
5. Buka juga DevTools browser (klik kanan → Inspect → tab Console) untuk melihat output `console.log` dan bereksperimen langsung.
6. Kerjakan soal latihan di folder `13 Latihan dan Quiz` untuk menguji pemahamanmu.

##  Tips Belajar

- Jangan hanya membaca kode — **buka langsung `index.html` di browser** dan coba klik-klik tombolnya.
- Ubah-ubah kode di `script.js`, simpan, lalu refresh browser untuk melihat perubahan.
- Gunakan DevTools (`F12`) untuk melihat langsung struktur DOM di tab **Elements/Inspector**.

Selamat belajar! 
