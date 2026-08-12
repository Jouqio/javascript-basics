# 02. Cara Menambahkan Event Listener

Di JavaScript ada **3 cara** untuk menghubungkan sebuah event ke elemen HTML. Yuk kita bahas satu per satu.

## 1. Inline HTML Attribute (Tidak Disarankan)

Menulis langsung kode JavaScript di dalam atribut HTML.

```html
<button onclick="alert('Halo!')">Klik</button>
```

❌ **Kekurangan:**
- Mencampur HTML dan JavaScript (kode jadi berantakan)
- Hanya bisa punya **satu** handler per event
- Sulit dirawat (maintain) untuk project besar

## 2. DOM Property (Kurang Direkomendasikan)

Mengakses elemen lewat JavaScript, lalu memberi fungsi ke propertinya.

```javascript
const tombol = document.querySelector("button");
tombol.onclick = function () {
  alert("Halo!");
};
```

⚠️ **Kekurangan:** Jika kita menulis `tombol.onclick` lagi, handler yang lama akan **tertimpa** (hanya bisa 1 fungsi per event).

## 3. addEventListener() — Cara yang Benar & Direkomendasikan ✅

```javascript
const tombol = document.querySelector("button");

tombol.addEventListener("click", function () {
  alert("Halo!");
});
```

✅ **Kelebihan:**
- Bisa menambahkan **banyak handler** untuk event yang sama
- Bisa **dihapus** kapan saja dengan `removeEventListener()`
- Memisahkan HTML dan JavaScript (kode lebih rapi)
- Mendukung opsi tambahan seperti `capture`, `once`, `passive`

### Sintaks Lengkap

```javascript
elemen.addEventListener(jenisEvent, fungsiHandler, opsi);
```

- `jenisEvent` → nama event, contoh: `"click"`, `"mouseover"`, `"keydown"`
- `fungsiHandler` → fungsi yang dijalankan saat event terjadi
- `opsi` (opsional) → object seperti `{ once: true }` agar handler hanya jalan sekali

## Perbandingan Ringkas

| Cara | Bisa Banyak Handler? | Direkomendasikan? |
|---|---|---|
| Inline HTML (`onclick=""`) | ❌ Tidak | ❌ Tidak |
| DOM Property (`el.onclick = fn`) | ❌ Tidak | ⚠️ Kurang |
| `addEventListener()` | ✅ Ya | ✅ Ya |

Coba dan bandingkan ketiganya langsung di file `contoh.html`.

➡️ Lanjut ke materi berikutnya: **03. Event Object**
