# 03. Menangani Response

> Memahami objek Response yang dikembalikan fetch() secara mendalam: status, ok, headers, dan berbagai cara membaca isinya.

## Tujuan Pembelajaran

- Memahami properti status, ok, dan statusText pada Response
- Memilih method pembaca body yang tepat: json(), text(), atau lainnya
- Membaca response headers

## Objek Response Bukan Cuma Data

Saat `fetch()` berhasil terhubung ke server (apa pun hasilnya — sukses maupun gagal secara HTTP), Promise-nya resolve dengan sebuah objek **`Response`**. Objek ini berisi banyak informasi berguna, bukan cuma data mentah.

```js
async function cekResponse() {
  const response = await fetch("https://api.github.com/users/octocat");

  console.log("status:", response.status);         // contoh: 200
  console.log("statusText:", response.statusText);  // contoh: "OK"
  console.log("ok:", response.ok);                  // true jika status 200-299
  console.log("url:", response.url);                // URL final yang diminta
}
cekResponse();
```

## response.ok: Cek Cepat Berhasil atau Tidak

`response.ok` bernilai `true` jika status HTTP ada di rentang **200–299** (sukses), dan `false` untuk status lain seperti `404` (tidak ditemukan) atau `500` (error server). Ini cara paling praktis mengecek keberhasilan sebelum lanjut memproses data.

```js
async function cekUserAda(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (response.ok) {
    console.log(username, "ditemukan!");
  } else {
    console.log(username, "tidak ditemukan. Status:", response.status);
  }
}

cekUserAda("octocat");           // ditemukan
cekUserAda("user-tidak-ada-123"); // tidak ditemukan, status 404
```

> **Tips:** Ini poin krusial yang sering salah dipahami pemula: **`fetch()` tidak reject (gagal) hanya karena status 404 atau 500**. `fetch()` hanya reject jika ada masalah jaringan (misalnya tidak ada koneksi internet). Karena itu, mengecek `response.ok` secara manual itu wajib — dibahas lebih lanjut di materi 04.

## Berbagai Cara Membaca Body Response

`response.json()` bukan satu-satunya cara membaca isi response. Method yang dipilih tergantung **format data** yang dikirim server.

- **`.json()`** — untuk data berformat JSON (paling umum di REST API).
- **`.text()`** — untuk data berupa teks biasa atau HTML.
- **`.blob()`** — untuk data biner seperti gambar atau file.

```js
// .json() - format paling umum
async function bacaJSON() {
  const response = await fetch("https://api.github.com/users/octocat");
  const data = await response.json();
  console.log(data.login);
}
bacaJSON();

// .text() - untuk halaman HTML atau teks biasa
async function bacaTeks() {
  const response = await fetch("https://raw.githubusercontent.com/octocat/Hello-World/master/README");
  const teks = await response.text();
  console.log(teks);
}
bacaTeks();
```

> **Tips:** Body response **hanya bisa dibaca satu kali**. Jika sudah memanggil `.json()`, memanggil `.text()` pada `response` yang sama lagi akan error. Kalau butuh membaca dengan dua cara berbeda, gunakan `response.clone()` sebelum membacanya.

## Latihan

Buat fungsi async `cekStatusRepo(owner, repo)` yang melakukan GET ke `https://api.github.com/repos/{owner}/{repo}` dan mencetak salah satu dari dua pesan: `"Repo ditemukan"` (jika `response.ok`) atau `"Repo tidak ditemukan, status: X"` (jika tidak).

<details>
<summary>Lihat Jawaban</summary>

```js
async function cekStatusRepo(owner, repo) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

  if (response.ok) {
    console.log("Repo ditemukan");
  } else {
    console.log(`Repo tidak ditemukan, status: ${response.status}`);
  }
}

cekStatusRepo("facebook", "react");        // Repo ditemukan
cekStatusRepo("facebook", "repo-ngasal");  // Repo tidak ditemukan, status: 404
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← GET Request Dasar](../02 GET Request Dasar/Readme.md) | [Error Handling pada Fetch →](../04 Error Handling pada Fetch/Readme.md)
