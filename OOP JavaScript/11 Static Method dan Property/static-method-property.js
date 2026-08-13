// ============================================
// 11. STATIC METHOD DAN PROPERTY
// ============================================

// --- 1. Instance member vs static member ---
class Mahasiswa {
  constructor(nama) {
    this.nama = nama;
  }

  sapa() {
    console.log("Halo, saya " + this.nama);
  }
}

const budi = new Mahasiswa("Budi");
budi.sapa(); // instance method, diakses lewat objek


class MathHelper {
  static PI = 3.14159;

  static kuadrat(angka) {
    return angka * angka;
  }
}

console.log("PI:", MathHelper.PI);          // diakses lewat CLASS
console.log("Kuadrat 5:", MathHelper.kuadrat(5)); // 25


// --- 2. Static member TIDAK bisa diakses lewat instance ---
const helper = new MathHelper();
console.log("Akses static lewat instance:", helper.PI); // undefined


// --- 3. Static method sebagai fungsi utilitas ---
class Kalkulator {
  static tambah(a, b) {
    return a + b;
  }

  static kurang(a, b) {
    return a - b;
  }
}

console.log(Kalkulator.tambah(5, 3)); // 8, tidak perlu "new Kalkulator()"
console.log(Kalkulator.kurang(5, 3)); // 2


// --- 4. Static method sebagai factory method ---
class Tanggal {
  constructor(tahun, bulan, hari) {
    this.tahun = tahun;
    this.bulan = bulan;
    this.hari = hari;
  }

  static dariString(tanggalString) {
    const [tahun, bulan, hari] = tanggalString.split("-").map(Number);
    return new Tanggal(tahun, bulan, hari);
  }

  info() {
    console.log(`${this.hari}/${this.bulan}/${this.tahun}`);
  }
}

const tanggal1 = new Tanggal(2024, 1, 15);
const tanggal2 = Tanggal.dariString("2024-06-20");

tanggal1.info(); // 15/1/2024
tanggal2.info(); // 20/6/2024


// --- 5. Static property untuk menghitung jumlah instance ---
class User {
  static jumlahUser = 0;

  constructor(nama) {
    this.nama = nama;
    User.jumlahUser++;
  }
}

const user1 = new User("Budi");
const user2 = new User("Sari");
const user3 = new User("Andi");

console.log("Total user dibuat:", User.jumlahUser); // 3


// --- 6. Static method memanggil static method lain ---
class Validasi {
  static isEmailValid(email) {
    return email.includes("@");
  }

  static isPasswordValid(password) {
    return password.length >= 8;
  }

  static isFormValid(email, password) {
    return Validasi.isEmailValid(email) && Validasi.isPasswordValid(password);
  }
}

console.log(Validasi.isFormValid("budi@email.com", "12345678")); // true
console.log(Validasi.isFormValid("email-salah", "123"));         // false


// --- 7. Contoh lengkap: class IdGenerator dengan static counter ---
class Produk {
  static counter = 0;

  constructor(nama) {
    Produk.counter++;
    this.id = "PRD-" + Produk.counter; // ID otomatis, unik untuk tiap produk
    this.nama = nama;
  }

  static resetCounter() {
    Produk.counter = 0;
  }
}

const produk1 = new Produk("Kaos");
const produk2 = new Produk("Celana");
const produk3 = new Produk("Topi");

console.log(produk1.id, produk1.nama); // PRD-1 Kaos
console.log(produk2.id, produk2.nama); // PRD-2 Celana
console.log(produk3.id, produk3.nama); // PRD-3 Topi


// Coba sendiri:
// Buat class "Kupon" dengan static method "generateKode()" yang
// mengembalikan kode kupon acak (misal gabungan huruf & angka).
