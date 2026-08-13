# 08. Async/Await dengan Fetch

> Merangkum dan memantapkan pola async/await pada fetch, termasuk menyusun beberapa request berurutan.

## Tujuan Pembelajaran

- Menulis fungsi fetch yang bersih dengan async/await
- Menyusun beberapa fetch berurutan yang saling bergantung
- Membungkus pola fetch umum menjadi fungsi pembantu yang bisa dipakai ulang

## Kenapa async/await Lebih Disarankan

Dibanding rangkaian `.then()`, `async/await` membuat kode fetch dibaca **dari atas ke bawah**, seolah-olah synchronous — jauh lebih mudah dipahami terutama saat ada beberapa langkah fetch yang saling bergantung.

```js
// Versi .then() - mulai terasa bertumpuk
function ambilUserThen(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name);
    })
    .catch((error) => console.error(error));
}

// Versi async/await - lebih rapi
async function ambilUserAsync(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error(error);
  }
}
```

## Fetch Berurutan yang Saling Bergantung

Kadang, request kedua butuh hasil dari request pertama. Ini kasus di mana `await` berurutan sangat pas dipakai — misalnya mengambil data user, lalu berdasarkan data itu mengambil daftar repository-nya.

```js
async function ambilUserDanRepo(username) {
  // Langkah 1: ambil data user
  const responseUser = await fetch(`https://api.github.com/users/${username}`);
  const user = await responseUser.json();

  // Langkah 2: pakai user.repos_url untuk ambil daftar repo
  const responseRepo = await fetch(user.repos_url);
  const repos = await responseRepo.json();

  return {
    nama: user.name,
    jumlahRepo: repos.length,
  };
}

ambilUserDanRepo("octocat").then((hasil) => console.log(hasil));
```

## Membuat Fungsi Pembantu (Helper) yang Bisa Dipakai Ulang

Pola error handling di materi 04 sering dipakai berulang-ulang. Membungkusnya jadi satu fungsi pembantu membuat kode lebih bersih dan konsisten di seluruh aplikasi.

```js
async function fetchJSON(url, opsi = {}) {
  const response = await fetch(url, opsi);

  if (!response.ok) {
    throw new Error(`Fetch gagal (${response.status}): ${url}`);
  }

  return response.json();
}

// Sekarang pemakaiannya jauh lebih singkat:
async function contohPakaiHelper() {
  try {
    const user = await fetchJSON("https://api.github.com/users/octocat");
    console.log(user.name);
  } catch (error) {
    console.error(error.message);
  }
}
contohPakaiHelper();
```

> **Tips:** Pola `fetchJSON()` di atas adalah pola yang sangat umum dipakai di proyek nyata — daripada mengulang `fetch → cek ok → .json()` di banyak tempat, cukup panggil satu fungsi pembantu.

## Latihan

Pakai fungsi pembantu `fetchJSON` di atas untuk membuat fungsi `ambilBioUser(username)` yang mengembalikan `bio` dari user GitHub tersebut (atau `null` jika gagal).

<details>
<summary>Lihat Jawaban</summary>

```js
async function ambilBioUser(username) {
  try {
    const user = await fetchJSON(`https://api.github.com/users/${username}`);
    return user.bio;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

ambilBioUser("octocat").then((bio) => console.log("Bio:", bio));
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← PUT dan DELETE Request](../07 PUT dan DELETE Request/Readme.md) | [Query Parameters dan URLSearchParams →](../09 Query Parameters dan URLSearchParams/Readme.md)
