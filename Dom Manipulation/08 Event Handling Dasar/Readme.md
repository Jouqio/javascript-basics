# 08. Event Handling Dasar

## Apa itu Event?

**Event** adalah "kejadian" yang terjadi di halaman web, seperti: tombol diklik, teks diketik, form disubmit, halaman selesai dimuat, mouse digerakkan, dll. **Event Handling** adalah cara JavaScript "mendengarkan" dan **merespons** kejadian-kejadian tersebut.

## `addEventListener()` — Cara Standar Menangani Event

```js
elemen.addEventListener("nama-event", function (event) {
  // kode yang dijalankan saat event terjadi
});
```

### Contoh: Event Klik

```js
const tombol = document.querySelector("#btn-klik");

tombol.addEventListener("click", function () {
  console.log("Tombol diklik!");
});
```

## Event yang Umum Digunakan

| Event | Terjadi Ketika... |
|-------|---------------------|
| `click` | Elemen diklik |
| `dblclick` | Elemen diklik dua kali |
| `mouseover` / `mouseout` | Mouse masuk/keluar dari elemen |
| `keydown` / `keyup` | Tombol keyboard ditekan/dilepas |
| `input` | Nilai input berubah (setiap ketikan) |
| `change` | Nilai input berubah dan kehilangan fokus (blur) |
| `submit` | Form disubmit |
| `load` | Halaman/gambar selesai dimuat |
| `focus` / `blur` | Elemen mendapat/kehilangan fokus |

## Objek `event`

Setiap kali event terjadi, JavaScript otomatis mengirimkan sebuah **objek `event`** yang berisi informasi detail tentang kejadian tersebut ke dalam fungsi callback:

```js
tombol.addEventListener("click", function (event) {
  console.log(event);        // seluruh detail event
  console.log(event.type);   // "click"
  console.log(event.target); // elemen yang memicu event (elemen yang diklik)
});
```

## Contoh: Event Keyboard

```js
const input = document.querySelector("#input-nama");

input.addEventListener("keydown", function (event) {
  console.log("Tombol yang ditekan:", event.key);

  if (event.key === "Enter") {
    console.log("Enter ditekan!");
  }
});
```

## Contoh: Event Input (Real-time)

```js
const input = document.querySelector("#input-nama");
const hasil = document.querySelector("#hasil");

input.addEventListener("input", function (event) {
  hasil.textContent = "Halo, " + event.target.value;
});
```

Setiap kali user mengetik satu huruf, event `input` akan terpicu dan `hasil` langsung diperbarui — inilah dasar dari fitur **live preview** yang sering kamu lihat di form.

## `this` di Dalam Event Listener

Jika kamu menggunakan **function biasa** (bukan arrow function), `this` di dalam event listener merujuk ke **elemen yang memicu event**:

```js
tombol.addEventListener("click", function () {
  console.log(this); // sama dengan elemen tombol itu sendiri
  this.style.backgroundColor = "green";
});
```

⚠️ **Perhatian:** jika kamu menggunakan **arrow function**, `this` **tidak** merujuk ke elemen, melainkan mengikuti konteks di luar fungsi (biasanya `window` atau `undefined`). Jadi gunakan `event.target` sebagai alternatif yang lebih konsisten:

```js
tombol.addEventListener("click", (event) => {
  console.log(event.target); // gunakan ini, bukan "this", di dalam arrow function
});
```

## Menghapus Event Listener

```js
function handleClick() {
  console.log("Diklik!");
}

tombol.addEventListener("click", handleClick);

// Nanti, jika ingin berhenti mendengarkan event:
tombol.removeEventListener("click", handleClick);
```

**Catatan:** `removeEventListener` hanya bekerja jika fungsi yang didaftarkan **memiliki nama/referensi** (bukan anonymous function langsung).

➡️ Lanjut ke materi berikutnya: **09 Event Handling Lanjutan**
