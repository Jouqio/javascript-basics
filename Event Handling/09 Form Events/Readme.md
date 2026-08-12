# 09. Form Events

## Daftar Event Form yang Umum

| Event | Elemen | Terjadi Saat |
|---|---|---|
| `submit` | `<form>` | Form dikirim (klik tombol submit atau tekan Enter) |
| `change` | `<input>`, `<select>`, `<textarea>` | Nilai berubah **dan** elemen kehilangan fokus (selesai diubah) |
| `input` | `<input>`, `<textarea>` | Nilai berubah **secara langsung**, setiap ketikan (real-time) |
| `focus` | Elemen form | Elemen **mendapat** fokus (mulai diklik/diketik) |
| `blur` | Elemen form | Elemen **kehilangan** fokus (pindah ke elemen lain) |

## `input` vs `change` — Perbedaan Penting

Ini sering membingungkan pemula:

- **`input`** → terpicu **setiap kali** nilai berubah, langsung saat mengetik (real-time). Cocok untuk **live search** atau **live validation**.
- **`change`** → terpicu **setelah** elemen kehilangan fokus (misalnya user pindah ke input lain atau klik di luar). Cocok untuk validasi setelah user **selesai** mengisi.

```javascript
input.addEventListener("input", function (e) {
  console.log("Real-time:", e.target.value); // update setiap ketikan
});

input.addEventListener("change", function (e) {
  console.log("Setelah selesai:", e.target.value); // update setelah blur
});
```

## Event `submit` untuk Validasi Form

```javascript
form.addEventListener("submit", function (e) {
  e.preventDefault(); // cegah reload halaman

  const email = form.querySelector("#email").value;
  if (!email.includes("@")) {
    alert("Email tidak valid!");
    return;
  }

  alert("Form berhasil divalidasi!");
});
```

## Event `focus` dan `blur`

Berguna untuk memberi highlight visual atau menampilkan hint/tooltip:

```javascript
input.addEventListener("focus", function () {
  input.style.borderColor = "blue"; // highlight saat sedang diisi
});

input.addEventListener("blur", function () {
  input.style.borderColor = "gray"; // kembali normal saat selesai
});
```

## Contoh Penggunaan Nyata

- `input` → live character counter, live search, live validation (misal cek kekuatan password)
- `change` → validasi setelah user selesai mengisi kolom
- `submit` → validasi keseluruhan form sebelum data dikirim
- `focus`/`blur` → efek visual, menampilkan hint

Buka `contoh.html` untuk mencoba form dengan validasi live (karakter counter) dan validasi submit.

➡️ Lanjut ke materi berikutnya: **10. Window dan Document Events**
