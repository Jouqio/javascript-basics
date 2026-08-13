// ============================================
// 05. CONSTRUCTOR METHOD DAN PROPERTY
// ============================================

// --- 1. Constructor dasar ---
class Produk {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }
}

const produk1 = new Produk("Kaos", 50000);
console.log(produk1.nama, produk1.harga);


// --- 2. Class tanpa constructor eksplisit (tetap valid) ---
class Sederhana {
  sapa() {
    console.log("Halo!");
  }
}

const s = new Sederhana();
s.sapa();


// --- 3. this merujuk ke objek yang sedang dibuat ---
class Mobil {
  constructor(merek, warna) {
    this.merek = merek;
    this.warna = warna;
    this.kecepatan = 0; // properti dengan default value, tidak dari parameter
  }
}

const mobil1 = new Mobil("Honda", "Putih");
console.log(mobil1);


// --- 4. Parameter default pada constructor ---
class Akun {
  constructor(username, saldo = 0) {
    this.username = username;
    this.saldo = saldo;
  }
}

const akun1 = new Akun("budi123", 100000);
const akun2 = new Akun("sari456"); // saldo tidak diisi

console.log("Saldo akun1:", akun1.saldo); // 100000
console.log("Saldo akun2 (default):", akun2.saldo); // 0


// --- 5. Validasi data di dalam constructor ---
class ProdukValid {
  constructor(nama, harga) {
    if (harga < 0) {
      throw new Error("Harga tidak boleh negatif");
    }
    this.nama = nama;
    this.harga = harga;
  }
}

const produkValid = new ProdukValid("Buku", 25000);
console.log(produkValid);

try {
  const produkInvalid = new ProdukValid("Buku Rusak", -5000);
} catch (error) {
  console.log("Error saat membuat produk:", error.message);
}


// --- 6. Properti yang dihitung dari parameter lain ---
class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
    this.luas = sisi * sisi;
    this.keliling = sisi * 4;
  }
}

const persegi1 = new Persegi(5);
console.log("Luas:", persegi1.luas);         // 25
console.log("Keliling:", persegi1.keliling); // 20


// --- 7. Contoh lengkap: class Karyawan dengan validasi dan property dihitung ---
class Karyawan {
  constructor(nama, gajiPokok, jumlahLembur = 0) {
    if (gajiPokok < 0) {
      throw new Error("Gaji pokok tidak boleh negatif");
    }
    this.nama = nama;
    this.gajiPokok = gajiPokok;
    this.jumlahLembur = jumlahLembur;
    this.totalGaji = gajiPokok + (jumlahLembur * 50000); // dihitung otomatis
  }
}

const karyawan1 = new Karyawan("Andi", 5000000, 3);
console.log(karyawan1);
console.log("Total gaji:", karyawan1.totalGaji); // 5150000


// Coba sendiri:
// Buat class "Lingkaran" dengan constructor(jariJari) yang otomatis
// menghitung "luas" (π × r²) dan "keliling" (2 × π × r) sebagai properti.
