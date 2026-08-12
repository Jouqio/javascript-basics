# 10. Form Handling

## Kenapa Form Penting?

Form adalah cara utama pengguna **memasukkan data** ke sebuah aplikasi web (login, daftar, pencarian, checkout, dll). Menangani form dengan benar lewat DOM manipulation sangat penting untuk membuat pengalaman pengguna yang baik.

## 1. Mengambil Nilai Input

```html
<input type="text" id="nama">
<input type="email" id="email">
<input type="checkbox" id="setuju">
<select id="kota">
  <option value="jakarta">Jakarta</option>
  <option value="bandung">Bandung</option>
</select>
```

```js
const nama = document.querySelector("#nama");
console.log(nama.value); // teks yang diketik user

const setuju = document.querySelector("#setuju");
console.log(setuju.checked); // true/false untuk checkbox

const kota = document.querySelector("#kota");
console.log(kota.value); // value dari option yang dipilih
```

## 2. Menangani Submit Form

```html
<form id="form-login">
  <input type="text" id="username" required>
  <input type="password" id="password" required>
  <button type="submit">Login</button>
</form>
```

```js
const form = document.querySelector("#form-login");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // WAJIB, agar halaman tidak reload

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  console.log("Login dengan:", username, password);
});
```

## 3. Validasi Form Sederhana

Validasi adalah proses memastikan data yang dimasukkan user **sesuai aturan** sebelum diproses lebih lanjut.

```js
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value;

  if (username === "") {
    alert("Username tidak boleh kosong");
    return;
  }

  if (password.length < 8) {
    alert("Password minimal 8 karakter");
    return;
  }

  console.log("Form valid, siap diproses!");
});
```

## 4. Menampilkan Pesan Error di Halaman (Bukan `alert()`)

`alert()` mengganggu pengalaman pengguna karena memblokir seluruh halaman. Pendekatan yang lebih baik adalah menampilkan pesan error **di dalam halaman**:

```html
<input type="text" id="username">
<span class="error" id="error-username"></span>
```

```js
const errorUsername = document.querySelector("#error-username");

if (username === "") {
  errorUsername.textContent = "Username tidak boleh kosong";
  errorUsername.style.color = "red";
} else {
  errorUsername.textContent = ""; // hapus pesan error jika sudah valid
}
```

## 5. Validasi Real-time (Saat Mengetik)

```js
const inputPassword = document.querySelector("#password");
const errorPassword = document.querySelector("#error-password");

inputPassword.addEventListener("input", function () {
  if (inputPassword.value.length < 8) {
    errorPassword.textContent = "Password minimal 8 karakter";
  } else {
    errorPassword.textContent = "";
  }
});
```

## 6. Reset Form

```js
form.reset(); // mengosongkan semua input di dalam form
```

## Ringkasan Properti Berdasarkan Jenis Input

| Jenis Input | Properti untuk Ambil Nilai |
|-------------|------------------------------|
| `text`, `email`, `password`, `textarea` | `.value` |
| `checkbox`, `radio` | `.checked` (true/false) |
| `select` | `.value` (dari option yang dipilih) |

➡️ Lanjut ke materi berikutnya: **11 Best Practices DOM**
