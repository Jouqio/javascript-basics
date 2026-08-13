// ============================================
// 12. BEST PRACTICES OOP
// ============================================

// --- 1. Single Responsibility Principle ---
// Kurang baik: satu class terlalu banyak tanggung jawab (hanya ilustrasi struktur)
class UserBanyakTanggungJawab {
  constructor(nama, email) {
    this.nama = nama;
    this.email = email;
  }
  simpanKeDatabase() { console.log("Menyimpan ke database..."); }
  kirimEmail() { console.log("Mengirim email..."); }
}

// Lebih baik: tanggung jawab dipisah
class User {
  constructor(nama, email) {
    this.nama = nama;
    this.email = email;
  }
}

class UserRepository {
  simpan(user) {
    console.log("Menyimpan user " + user.nama + " ke database");
  }
}

class EmailService {
  kirim(user, pesan) {
    console.log("Mengirim email ke " + user.email + ": " + pesan);
  }
}

const user1 = new User("Budi", "budi@email.com");
const repo = new UserRepository();
const emailService = new EmailService();

repo.simpan(user1);
emailService.kirim(user1, "Selamat datang!");


// --- 2. Encapsulation untuk melindungi data ---
class Akun {
  #saldo;

  constructor(saldo) {
    this.#saldo = saldo;
  }

  setor(jumlah) {
    if (jumlah > 0) this.#saldo += jumlah;
  }

  cekSaldo() {
    return this.#saldo;
  }
}

const akun = new Akun(100000);
akun.setor(50000);
console.log("Saldo:", akun.cekSaldo());


// --- 3. Composition over Inheritance ---
const mesinListrik = {
  jalan() { console.log("Berjalan dengan mesin listrik (senyap)"); }
};

const mesinBensin = {
  jalan() { console.log("Berjalan dengan mesin bensin (berisik)"); }
};

class Mobil {
  constructor(mesin) {
    this.mesin = mesin; // "has-a" mesin, bukan "is-a"
  }
  jalan() {
    this.mesin.jalan();
  }
}

const mobilListrik = new Mobil(mesinListrik);
const mobilBensin = new Mobil(mesinBensin);

mobilListrik.jalan();
mobilBensin.jalan();


// --- 4. Penamaan class (kata benda, PascalCase) dan method (kata kerja) ---
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  tambahItem(item) {
    this.items.push(item);
  }

  hapusItem(item) {
    this.items = this.items.filter(i => i !== item);
  }

  hitungTotal(daftarHarga) {
    return this.items.reduce((total, item) => total + (daftarHarga[item] || 0), 0);
  }
}

const cart = new ShoppingCart();
cart.tambahItem("Buku");
cart.tambahItem("Pulpen");
console.log("Items:", cart.items);


// --- 5. Validasi terpusat di constructor ---
class Produk {
  constructor(nama, harga) {
    if (harga < 0) {
      throw new Error("Harga tidak boleh negatif");
    }
    this.nama = nama;
    this.harga = harga;
  }
}

try {
  const produkInvalid = new Produk("Baju", -5000);
} catch (error) {
  console.log("Validasi terpusat berhasil mencegah:", error.message);
}

const produkValid = new Produk("Baju", 50000);
console.log("Produk valid:", produkValid);


// --- 6. Getter/setter hanya jika perlu validasi/komputasi ---
// Tidak perlu getter/setter jika tidak ada logika tambahan
class ProdukSederhana {
  constructor(nama) {
    this.nama = nama; // properti publik biasa, cukup
  }
}

// Getter/setter dipakai HANYA karena ada validasi
class ProdukDenganValidasi {
  #harga;
  constructor(harga) {
    this.harga = harga;
  }
  get harga() {
    return this.#harga;
  }
  set harga(nilai) {
    if (nilai < 0) {
      console.log("Harga tidak valid, diabaikan");
      return;
    }
    this.#harga = nilai;
  }
}

const produkDenganValidasi = new ProdukDenganValidasi(10000);
produkDenganValidasi.harga = -500; // ditolak oleh setter
console.log("Harga akhir:", produkDenganValidasi.harga); // 10000


// --- 7. Class modern, bukan constructor function ---
class ProdukModern {
  constructor(nama) {
    this.nama = nama;
  }
}

console.log(new ProdukModern("Sepatu"));


// Coba sendiri:
// Refactor sebuah class yang pernah kamu buat sebelumnya (di materi lain)
// menggunakan best practices di atas: pisahkan tanggung jawab,
// tambahkan encapsulation, dan validasi terpusat di constructor.
