// ============================================
// 13. KUNCI JAWABAN LATIHAN CODING
// Cocokkan hasil pengerjaanmu di latihan.js dengan file ini
// ============================================

// ---------- JAWABAN SOAL 1: Membuat Class Dasar ----------
class Buku {
  constructor(judul, penulis) {
    this.judul = judul;
    this.penulis = penulis;
  }

  info() {
    console.log(`${this.judul} oleh ${this.penulis}`);
  }
}

const buku1 = new Buku("Laskar Pelangi", "Andrea Hirata");
buku1.info(); // Laskar Pelangi oleh Andrea Hirata


// ---------- JAWABAN SOAL 2: Method dengan Perhitungan ----------
class Lingkaran {
  constructor(jariJari) {
    this.jariJari = jariJari;
  }

  luas() {
    return Math.PI * this.jariJari * this.jariJari;
  }

  keliling() {
    return 2 * Math.PI * this.jariJari;
  }
}

const lingkaran1 = new Lingkaran(7);
console.log("Luas:", lingkaran1.luas().toFixed(2));         // 153.94
console.log("Keliling:", lingkaran1.keliling().toFixed(2)); // 43.98


// ---------- JAWABAN SOAL 3: Encapsulation ----------
class Loker {
  #kodeAkses;

  constructor(kodeAkses) {
    this.#kodeAkses = kodeAkses;
  }

  buka(kodeInput) {
    return kodeInput === this.#kodeAkses;
  }
}

const loker1 = new Loker("1234");
console.log(loker1.buka("1234")); // true
console.log(loker1.buka("0000")); // false


// ---------- JAWABAN SOAL 4: Inheritance ----------
class Kendaraan {
  constructor(merek) {
    this.merek = merek;
  }

  jalan() {
    console.log(this.merek + " sedang berjalan");
  }
}

class Motor extends Kendaraan {
  kickstarter() {
    console.log(this.merek + " dinyalakan dengan kickstarter");
  }
}

const motor1 = new Motor("Honda");
motor1.jalan();        // Honda sedang berjalan (dari Kendaraan)
motor1.kickstarter();  // Honda dinyalakan dengan kickstarter (khusus Motor)


// ---------- JAWABAN SOAL 5: Polymorphism ----------
class Kucing {
  bersuara() {
    console.log("Meong!");
  }
}

class Anjing {
  bersuara() {
    console.log("Guk guk!");
  }
}

class Bebek {
  bersuara() {
    console.log("Kwek kwek!");
  }
}

const daftarHewan = [new Kucing(), new Anjing(), new Bebek()];
daftarHewan.forEach(hewan => hewan.bersuara());
// Meong!
// Guk guk!
// Kwek kwek!


// ---------- JAWABAN SOAL 6: Getter dan Setter ----------
class Suhu {
  #celsius;

  constructor(celsius) {
    this.#celsius = celsius;
  }

  get celsius() {
    return this.#celsius;
  }

  set celsius(nilai) {
    this.#celsius = nilai;
  }

  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }
}

const suhu1 = new Suhu(30);
console.log("Celsius:", suhu1.celsius);       // 30
console.log("Fahrenheit:", suhu1.fahrenheit); // 86


// ---------- JAWABAN SOAL 7 (BONUS): Sistem Perpustakaan Sederhana ----------
class Perpustakaan {
  static namaPerpustakaan = "Perpustakaan Kota";
  #daftarBuku = [];

  tambahBuku(judul) {
    this.#daftarBuku.push(judul);
  }

  jumlahBuku() {
    return this.#daftarBuku.length;
  }
}

const perpus = new Perpustakaan();
perpus.tambahBuku("Laskar Pelangi");
perpus.tambahBuku("Bumi Manusia");

console.log("Nama perpustakaan:", Perpustakaan.namaPerpustakaan);
console.log("Jumlah buku:", perpus.jumlahBuku()); // 2


// ---------- JAWABAN SOAL 8 (BONUS): Static Factory Method ----------
class Pengguna {
  constructor(nama, role = "member") {
    this.nama = nama;
    this.role = role;
  }

  static buatAdmin(nama) {
    return new Pengguna(nama, "admin");
  }
}

const memberBiasa = new Pengguna("Budi");
const admin1 = Pengguna.buatAdmin("Sari");

console.log(memberBiasa); // Pengguna { nama: 'Budi', role: 'member' }
console.log(admin1);      // Pengguna { nama: 'Sari', role: 'admin' }
