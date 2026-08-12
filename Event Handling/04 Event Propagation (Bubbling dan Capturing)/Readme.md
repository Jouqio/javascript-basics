# 04. Event Propagation (Bubbling dan Capturing)

## Apa itu Event Propagation?

Ketika sebuah event terjadi pada elemen yang **bersarang** (nested, ada elemen di dalam elemen lain), event tersebut tidak hanya terjadi pada satu elemen saja, tapi **menyebar (propagate)** melalui elemen-elemen di sekitarnya. Proses penyebaran ini disebut **Event Propagation**, dan terjadi dalam **3 fase**:

```
1. Capturing Phase   (dari luar ke dalam)  ⬇️
2. Target Phase      (elemen yang diklik)  🎯
3. Bubbling Phase     (dari dalam ke luar)  ⬆️
```

### Ilustrasi

Bayangkan struktur HTML berikut:

```html
<div id="luar">
  <div id="tengah">
    <button id="dalam">Klik</button>
  </div>
</div>
```

Jika kita klik tombol `#dalam`, urutan event-nya:

- **Capturing:** `luar` → `tengah` → `dalam`
- **Target:** `dalam` (elemen yang diklik)
- **Bubbling:** `dalam` → `tengah` → `luar`

## Bubbling (Perilaku Default)

Secara **default**, `addEventListener` menggunakan fase **bubbling**. Artinya, event akan "menggelembung" dari elemen paling dalam ke elemen paling luar.

```javascript
luar.addEventListener("click", () => console.log("luar diklik"));
tengah.addEventListener("click", () => console.log("tengah diklik"));
dalam.addEventListener("click", () => console.log("dalam diklik"));
```

Jika tombol `dalam` diklik, urutan yang muncul di console:
```
dalam diklik
tengah diklik
luar diklik
```

## Capturing (Opsional)

Untuk menangkap event di fase **capturing** (kebalikan dari bubbling), tambahkan parameter ketiga `true`:

```javascript
luar.addEventListener("click", () => console.log("luar (capture)"), true);
```

## Menghentikan Propagasi: `stopPropagation()`

Jika kita **tidak ingin** event menyebar ke elemen induk (parent), gunakan `e.stopPropagation()`:

```javascript
dalam.addEventListener("click", function (e) {
  e.stopPropagation(); // event berhenti di sini, tidak menyebar ke "tengah" & "luar"
  console.log("dalam diklik (event dihentikan)");
});
```

## Kapan Ini Berguna?

- Mencegah klik pada elemen anak **tidak sengaja** memicu event di elemen induk (misal: klik tombol "Hapus" di dalam card yang juga punya event "buka detail")
- Dasar penting untuk memahami **Event Delegation** (materi berikutnya)

Coba buka `contoh.html`, lalu klik area dalam, tengah, dan luar secara bergantian sambil membuka console browser (klik kanan → Inspect → Console).

➡️ Lanjut ke materi berikutnya: **05. Event Delegation**
