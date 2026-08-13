// ============================================
// 07. ENCAPSULATION
// ============================================

// --- 1. Masalah tanpa encapsulation ---
class BankAccountTanpaEnkapsulasi {
  constructor(pemilik, saldo) {
    this.pemilik = pemilik;
    this.saldo = saldo;
  }
}

const rekeningLama = new BankAccountTanpaEnkapsulasi("Budi", 100000);
rekeningLama.saldo = -999999999; // BAHAYA! bisa diubah sembarangan
console.log("Saldo jadi tidak valid:", rekeningLama.saldo);


// --- 2. Solusi: private field dengan # ---
class BankAccount {
  #saldo; // private field

  constructor(pemilik, saldoAwal) {
    this.pemilik = pemilik; // publik
    this.#saldo = saldoAwal; // privat
  }

  setor(jumlah) {
    if (jumlah <= 0) {
      console.log("Jumlah setor harus lebih dari 0");
      return;
    }
    this.#saldo += jumlah;
  }

  tarik(jumlah) {
    if (jumlah > this.#saldo) {
      console.log("Saldo tidak mencukupi");
      return;
    }
    this.#saldo -= jumlah;
  }

  cekSaldo() {
    return this.#saldo;
  }
}

const rekening = new BankAccount("Budi", 100000);
rekening.setor(50000);
console.log("Saldo setelah setor:", rekening.cekSaldo()); // 150000

// Mencoba akses langsung dari luar akan error
try {
  eval("console.log(rekening.#saldo)");
} catch (error) {
  console.log("Error mengakses private field langsung:", error.message);
}


// --- 3. Private method ---
class BankAccountV2 {
  #saldo;

  constructor(saldoAwal) {
    this.#saldo = saldoAwal;
  }

  #validasiJumlah(jumlah) {
    return jumlah > 0;
  }

  setor(jumlah) {
    if (!this.#validasiJumlah(jumlah)) {
      console.log("Jumlah tidak valid");
      return;
    }
    this.#saldo += jumlah;
    console.log("Setor berhasil, saldo:", this.#saldo);
  }
}

const rekeningV2 = new BankAccountV2(50000);
rekeningV2.setor(20000); // Setor berhasil, saldo: 70000
rekeningV2.setor(-5000); // Jumlah tidak valid


// --- 4. Konvensi lama dengan underscore (bukan benar-benar privat) ---
class BankAccountLama {
  constructor(saldoAwal) {
    this._saldo = saldoAwal; // hanya konvensi
  }
}

const rekLama = new BankAccountLama(100000);
console.log("Underscore TETAP bisa diakses:", rekLama._saldo); // tetap bisa diakses


// --- 5. Contoh lengkap: class Password dengan validasi via encapsulation ---
class Akun {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  cekPassword(passwordInput) {
    return passwordInput === this.#password;
  }

  gantiPassword(passwordLama, passwordBaru) {
    if (passwordLama !== this.#password) {
      console.log("Password lama salah, gagal mengganti");
      return false;
    }
    this.#password = passwordBaru;
    console.log("Password berhasil diganti");
    return true;
  }
}

const akun = new Akun("budi123", "rahasia123");
console.log("Cek password benar:", akun.cekPassword("rahasia123")); // true
console.log("Cek password salah:", akun.cekPassword("salah")); // false

akun.gantiPassword("salah", "baru123"); // gagal
akun.gantiPassword("rahasia123", "baru123"); // berhasil


// Coba sendiri:
// Buat class "Produk" dengan private field #stok yang tidak bisa
// diakses/diubah langsung, tapi punya method "tambahStok()" dan "kurangiStok()".
