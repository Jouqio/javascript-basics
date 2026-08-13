// ============================================
// 04. CLASS DALAM JAVASCRIPT
// ============================================

// --- 1. Membuat class sederhana ---
class Mahasiswa {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log("Halo, saya " + this.nama);
  }
}

const budi = new Mahasiswa("Budi", 20);
const sari = new Mahasiswa("Sari", 21);

budi.sapa(); // Halo, saya Budi
sari.sapa(); // Halo, saya Sari


// --- 2. Perbandingan: constructor function vs class (hasil identik) ---
function MahasiswaLama(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}
MahasiswaLama.prototype.sapa = function () {
  console.log("(Cara lama) Halo, saya " + this.nama);
};

const andiLama = new MahasiswaLama("Andi", 22);
andiLama.sapa();

const andiBaru = new Mahasiswa("Andi", 22);
andiBaru.sapa();


// --- 3. Membuktikan class menggunakan mekanisme yang sama (function + prototype) ---
class Kucing {
  constructor(nama) {
    this.nama = nama;
  }
  mengeong() {
    console.log(this.nama + ": Meong!");
  }
}

console.log("typeof Kucing:", typeof Kucing); // "function"
console.log("Method di prototype:", Kucing.prototype.mengeong);


// --- 4. Membuat beberapa instance dari class yang sama ---
const milo = new Kucing("Milo");
const luna = new Kucing("Luna");

milo.mengeong(); // Milo: Meong!
luna.mengeong(); // Luna: Meong!

console.log("Apakah instance dari Kucing?", milo instanceof Kucing); // true


// --- 5. Class dengan beberapa method ---
class Kalkulator {
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

  getHasil() {
    return this.hasil;
  }
}

const kalk = new Kalkulator();
kalk.tambah(10);
kalk.tambah(5);
kalk.kurang(3);
console.log("Hasil kalkulator:", kalk.getHasil()); // 12


// --- 6. Method chaining (karena tambah/kurang me-return "this") ---
const kalk2 = new Kalkulator();
const hasilChaining = kalk2.tambah(20).tambah(10).kurang(5).getHasil();
console.log("Hasil method chaining:", hasilChaining); // 25


// Coba sendiri:
// Buat class "Buku" dengan constructor(judul, penulis)
// dan method "info()" yang mencetak "judul oleh penulis".
