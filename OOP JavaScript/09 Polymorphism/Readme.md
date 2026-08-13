# 09. Polymorphism

## Apa itu Polymorphism?

**Polymorphism** (dari bahasa Yunani: "poly" = banyak, "morph" = bentuk) berarti **satu method dengan nama yang sama** bisa memiliki **perilaku berbeda** tergantung pada objek yang memanggilnya.

## Analogi Sederhana

Bayangkan method `bersuara()`. Untuk **Kucing**, `bersuara()` berarti "Meong". Untuk **Anjing**, `bersuara()` berarti "Guk guk". Untuk **Sapi**, `bersuara()` berarti "Moo". **Nama method sama**, tapi **hasilnya berbeda-beda** tergantung objeknya.

## Polymorphism Lewat Method Overriding

Ini adalah bentuk polymorphism yang paling umum di JavaScript — memanfaatkan **inheritance** dan **overriding** yang sudah dipelajari di materi sebelumnya.

```js
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  bersuara() {
    console.log(this.nama + " mengeluarkan suara");
  }
}

class Kucing extends Hewan {
  bersuara() { // override
    console.log(this.nama + ": Meong!");
  }
}

class Anjing extends Hewan {
  bersuara() { // override
    console.log(this.nama + ": Guk guk!");
  }
}

class Sapi extends Hewan {
  bersuara() { // override
    console.log(this.nama + ": Moo!");
  }
}

const daftarHewan = [
  new Kucing("Milo"),
  new Anjing("Rex"),
  new Sapi("Betty")
];

daftarHewan.forEach(function (hewan) {
  hewan.bersuara(); // method yang SAMA dipanggil, tapi hasilnya BERBEDA untuk tiap objek!
});

// Output:
// Milo: Meong!
// Rex: Guk guk!
// Betty: Moo!
```

## Kenapa Ini Sangat Berguna?

Perhatikan kode `daftarHewan.forEach(hewan => hewan.bersuara())` di atas — kode ini **tidak perlu tahu** jenis hewan spesifiknya (kucing/anjing/sapi). Ia cukup memanggil `bersuara()`, dan JavaScript **otomatis** menjalankan versi method yang **sesuai dengan objeknya masing-masing**.

Ini membuat kode jauh lebih **fleksibel** — kamu bisa menambahkan jenis hewan baru (misal `Bebek`) tanpa perlu mengubah kode `forEach` sama sekali.

```js
class Bebek extends Hewan {
  bersuara() {
    console.log(this.nama + ": Kwek kwek!");
  }
}

daftarHewan.push(new Bebek("Donald"));

daftarHewan.forEach(hewan => hewan.bersuara());
// Kode forEach TIDAK berubah, tapi otomatis mendukung jenis hewan baru!
```

## Contoh Praktis: Sistem Bentuk Geometri

```js
class BentukGeometri {
  hitungLuas() {
    return 0; // default, akan di-override oleh child class
  }
}

class Persegi extends BentukGeometri {
  constructor(sisi) {
    super();
    this.sisi = sisi;
  }

  hitungLuas() {
    return this.sisi * this.sisi;
  }
}

class Lingkaran extends BentukGeometri {
  constructor(jariJari) {
    super();
    this.jariJari = jariJari;
  }

  hitungLuas() {
    return Math.PI * this.jariJari * this.jariJari;
  }
}

const daftarBentuk = [
  new Persegi(4),
  new Lingkaran(3)
];

daftarBentuk.forEach(function (bentuk) {
  console.log("Luas: " + bentuk.hitungLuas().toFixed(2));
});
// Luas: 16.00
// Luas: 28.27
```

## Polymorphism Lewat "Duck Typing" (Tanpa Inheritance)

JavaScript juga mendukung polymorphism **tanpa** harus ada hubungan inheritance — cukup pastikan objek punya method dengan **nama yang sama**. Ini sering disebut **"duck typing"** — *"jika terlihat seperti bebek, dan bersuara seperti bebek, maka anggap saja itu bebek"*.

```js
const kucingObjek = {
  bersuara() { console.log("Meong!"); }
};

const robotObjek = {
  bersuara() { console.log("Beep boop!"); }
};

const daftarObjek = [kucingObjek, robotObjek];

daftarObjek.forEach(obj => obj.bersuara());
// Meong!
// Beep boop!
// Meski TIDAK ADA hubungan inheritance sama sekali antara kucingObjek dan robotObjek!
```

## Ringkasan

| Konsep | Penjelasan |
|--------|------------|
| Polymorphism | Method dengan nama sama, perilaku berbeda tergantung objek |
| Method Overriding | Cara paling umum menerapkan polymorphism (lewat inheritance) |
| Duck Typing | Polymorphism tanpa inheritance, cukup method dengan nama sama |
| Manfaat utama | Kode lebih fleksibel, mudah ditambah jenis objek baru tanpa ubah kode lama |

➡️ Lanjut ke materi berikutnya: **10 Getter dan Setter**
