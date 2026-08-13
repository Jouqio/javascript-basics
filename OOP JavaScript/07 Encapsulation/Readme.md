# 07. Encapsulation

## Apa itu Encapsulation?

**Encapsulation (Enkapsulasi)** adalah salah satu pilar utama OOP yang berarti **menyembunyikan detail internal** sebuah objek, dan hanya **mengekspos** apa yang benar-benar perlu diakses dari luar.

## Analogi Sederhana

Bayangkan sebuah **mesin ATM**. Sebagai pengguna, kamu hanya berinteraksi dengan tombol-tombol di layar (tarik tunai, cek saldo) — kamu **tidak perlu tahu** (dan tidak diizinkan mengakses) bagaimana mesin ATM menghitung saldo di dalam sistemnya secara detail. Detail internal itu **disembunyikan**, hanya "antarmuka" (interface) yang diekspos ke luar.

## Masalah Tanpa Encapsulation

```js
class BankAccount {
  constructor(pemilik, saldo) {
    this.pemilik = pemilik;
    this.saldo = saldo;
  }
}

const rekening = new BankAccount("Budi", 100000);

rekening.saldo = -999999999; // BAHAYA! Saldo bisa diubah sembarangan dari luar!
console.log(rekening.saldo); // -999999999, data jadi tidak valid
```

Karena `saldo` bisa diakses dan diubah **langsung** dari luar, tidak ada yang mencegah data menjadi tidak valid atau tidak masuk akal.

## Solusi: Private Field (Field Privat)

JavaScript modern (ES2022+) mendukung **private field**, ditandai dengan awalan **`#`** (pagar) di depan nama properti. Private field **hanya bisa diakses dari dalam class itu sendiri**, tidak bisa diakses langsung dari luar.

```js
class BankAccount {
  #saldo; // private field, dideklarasikan dengan #

  constructor(pemilik, saldoAwal) {
    this.pemilik = pemilik; // properti publik, boleh diakses bebas
    this.#saldo = saldoAwal; // properti privat, hanya bisa diakses di dalam class
  }

  setor(jumlah) {
    if (jumlah <= 0) {
      console.log("Jumlah setor harus lebih dari 0");
      return;
    }
    this.#saldo += jumlah;
  }

  cekSaldo() {
    return this.#saldo;
  }
}

const rekening = new BankAccount("Budi", 100000);
rekening.setor(50000);
console.log(rekening.cekSaldo()); // 150000

console.log(rekening.#saldo); // SyntaxError! tidak bisa diakses langsung dari luar
```

## Private Method

Selain properti, **method** juga bisa dibuat privat dengan awalan `#`, biasanya untuk logika internal yang tidak perlu diketahui dari luar.

```js
class BankAccount {
  #saldo;

  constructor(saldoAwal) {
    this.#saldo = saldoAwal;
  }

  // Private method: hanya bisa dipanggil dari dalam class ini
  #validasiJumlah(jumlah) {
    return jumlah > 0;
  }

  setor(jumlah) {
    if (!this.#validasiJumlah(jumlah)) {
      console.log("Jumlah tidak valid");
      return;
    }
    this.#saldo += jumlah;
  }
}
```

## Kenapa Encapsulation Penting?

1. **Melindungi data** dari perubahan yang tidak valid/sembarangan
2. **Menyembunyikan kompleksitas** — pengguna class tidak perlu tahu detail implementasi internal
3. **Memudahkan maintenance** — kamu bisa mengubah logika internal tanpa mempengaruhi kode lain yang memakai class ini, selama "antarmuka publik"-nya tetap sama
4. **Mencegah bug** akibat data yang diubah secara tidak terduga dari luar

## Properti Publik vs Private: Kapan Pakai yang Mana?

| Gunakan **publik** (tanpa `#`) jika... | Gunakan **privat** (dengan `#`) jika... |
|------------------------------------------|---------------------------------------------|
| Data memang perlu diakses bebas dari luar | Data adalah detail internal yang harus dilindungi |
| Tidak ada risiko jika diubah sembarangan | Perubahan sembarangan bisa merusak konsistensi data |
| Contoh: `nama`, `warna` | Contoh: `saldo`, `password`, `id internal` |

## Cara Lama (Sebelum Private Field Didukung): Konvensi Underscore

Sebelum private field (`#`) tersedia secara luas, banyak developer memakai **konvensi penamaan** dengan awalan underscore (`_`) untuk menandai "properti ini seharusnya privat" — meskipun sebenarnya **tetap bisa diakses** dari luar (hanya konvensi, bukan aturan bahasa):

```js
class BankAccountLama {
  constructor(saldoAwal) {
    this._saldo = saldoAwal; // HANYA konvensi, bukan benar-benar privat
  }
}

const rek = new BankAccountLama(100000);
console.log(rek._saldo); // TETAP BISA diakses, meski "seharusnya" tidak
```

**Rekomendasi:** gunakan private field asli (`#`) di kode modern, karena benar-benar **menegakkan** privasi data, bukan sekadar konvensi.

➡️ Lanjut ke materi berikutnya: **08 Inheritance**
