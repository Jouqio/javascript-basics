#  Cheat Sheet: Alert, Prompt, dan Console.log

Tiga fungsi bawaan JavaScript buat komunikasi — bedanya ada di **siapa yang
denger** dan **seberapa berisik** caranya.

---

## console.log() — diam-diam

Menampilkan nilai ke **Console** browser. Cuma programmer yang lihat.

```js
console.log("Halo!");
console.log("Nilai a:", a, "Nilai b:", b); // bisa banyak argumen
```

**Buka Console:** klik kanan → Inspect / Periksa Elemen → tab Console (atau `F12`)

Variasi lain:
- `console.error("pesan")` → teks merah, buat nandain error
- `console.warn("pesan")` → teks kuning, buat peringatan
- `console.table(array)` → nampilin data dalam bentuk tabel

---

## alert() — paling berisik

Popup pesan ke user. Program **berhenti total** sampai user klik OK.

```js
alert("Pesan buat user");
```

⚠️ **Blocking** — seluruh halaman freeze sampai di-OK.
🚫 Jarang dipakai di aplikasi production sungguhan (tampilannya kaku, gak bisa dikustomisasi).

---

## prompt() — nanya balik

Popup input — nanya sesuatu ke user, nunggu jawaban.

```js
let jawaban = prompt("Pertanyaan?", "nilai default (opsional)");
```

**Return value:**
- Klik OK → hasil ketikan (**selalu string**, walau kosong `""`)
- Klik Cancel → `null`

⚠️ **Gotcha paling umum:** hasilnya SELALU string, walau user ngetik angka.
```js
let umur = Number(prompt("Umur kamu?")); // wajib convert kalau mau dihitung
```

---

## Perbandingan Cepat

| | console.log() | alert() | prompt() |
|---|---|---|---|
| Untuk siapa | Developer | User | User |
| Level "berisik" | 🔈 Diam-diam | 🔊🔊🔊 Paling berisik | 🔊🔊 Berisik + nunggu jawaban |
| Blocking? | ❌ | ✅ | ✅ |
| Return value | `undefined` | `undefined` | `string` / `null` |

**Kapan pakai yang mana:**
- Cek nilai variabel pas develop → `console.log()`
- Kasih tau user sesuatu penting → `alert()` (atau modal custom di app production)
- Butuh user masukin data sederhana → `prompt()` (atau form HTML di app production)
