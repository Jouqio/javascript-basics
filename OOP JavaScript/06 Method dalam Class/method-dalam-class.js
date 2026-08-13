// ============================================
// 06. METHOD DALAM CLASS
// ============================================

// --- 1. Method sederhana ---
class Manusia {
  constructor(nama) {
    this.nama = nama;
  }

  makan() {
    console.log(this.nama + " sedang makan");
  }

  tidur() {
    console.log(this.nama + " sedang tidur");
  }
}

const budi = new Manusia("Budi");
budi.makan();
budi.tidur();


// --- 2. Method dengan parameter ---
class Kalkulator {
  constructor() {
    this.hasil = 0;
  }

  tambah(angka) {
    this.hasil += angka;
  }

  kali(angka) {
    this.hasil *= angka;
  }
}

const kalk = new Kalkulator();
kalk.tambah(10);
kalk.kali(3);
console.log("Hasil kalkulator:", kalk.hasil); // 30


// --- 3. Method yang me-return nilai ---
class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  hitungLuas() {
    return this.sisi * this.sisi;
  }

  hitungKeliling() {
    return this.sisi * 4;
  }

  info() {
    console.log("Luas: " + this.hitungLuas() + ", Keliling: " + this.hitungKeliling());
  }
}

const persegi1 = new Persegi(5);
let luas = persegi1.hitungLuas();
console.log("Luas (disimpan ke variabel):", luas);
persegi1.info(); // Luas: 25, Keliling: 20


// --- 4. Method chaining ---
class KalkulatorChain {
  constructor() {
    this.hasil = 0;
  }

  tambah(angka) {
    this.hasil += angka;
    return this;
  }

  kurang(angka) {
    this.hasil -= angka;
    return this;
  }
}

const kalkChain = new KalkulatorChain();
kalkChain.tambah(10).tambah(5).kurang(3);
console.log("Hasil method chaining:", kalkChain.hasil); // 12


// --- 5. Method mutasi vs method baca saja ---
class Keranjang {
  constructor() {
    this.items = [];
  }

  // Method mutasi: mengubah state
  tambahItem(nama) {
    this.items.push(nama);
  }

  hapusItem(nama) {
    this.items = this.items.filter(item => item !== nama);
  }

  // Method baca saja: tidak mengubah apapun
  jumlahItem() {
    return this.items.length;
  }

  daftarItem() {
    return this.items.join(", ");
  }
}

const keranjang = new Keranjang();
keranjang.tambahItem("Buku");
keranjang.tambahItem("Pulpen");
keranjang.tambahItem("Penggaris");

console.log("Jumlah item:", keranjang.jumlahItem()); // 3
console.log("Daftar item:", keranjang.daftarItem()); // Buku, Pulpen, Penggaris

keranjang.hapusItem("Pulpen");
console.log("Setelah hapus:", keranjang.daftarItem()); // Buku, Penggaris


// --- 6. Contoh lengkap: class BankAccount dengan beberapa method ---
class BankAccount {
  constructor(pemilik, saldoAwal = 0) {
    this.pemilik = pemilik;
    this.saldo = saldoAwal;
  }

  setor(jumlah) {
    this.saldo += jumlah;
    console.log(`Setor Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`);
  }

  tarik(jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi");
      return;
    }
    this.saldo -= jumlah;
    console.log(`Tarik Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`);
  }

  cekSaldo() {
    return this.saldo;
  }
}

const rekening = new BankAccount("Budi", 100000);
rekening.setor(50000);   // Setor Rp50000. Saldo sekarang: Rp150000
rekening.tarik(30000);   // Tarik Rp30000. Saldo sekarang: Rp120000
rekening.tarik(500000);  // Saldo tidak mencukupi
console.log("Saldo akhir:", rekening.cekSaldo()); // 120000


// Coba sendiri:
// Tambahkan method "transfer(rekeningTujuan, jumlah)" pada class BankAccount
// yang menarik saldo dari rekening ini dan menyetorkannya ke rekening lain.
