// ============================================
// 08. INHERITANCE
// ============================================

// --- 1. Inheritance dasar dengan extends ---
class Hewan {
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

class Kucing extends Hewan {
  mengeong() {
    console.log(this.nama + " berkata: Meong!");
  }
}

const milo = new Kucing("Milo");
milo.makan();    // method dari Hewan
milo.tidur();    // method dari Hewan
milo.mengeong(); // method khusus Kucing


// --- 2. super() untuk memanggil constructor parent ---
class HewanV2 {
  constructor(nama, jenisSuara) {
    this.nama = nama;
    this.jenisSuara = jenisSuara;
  }
}

class KucingV2 extends HewanV2 {
  constructor(nama) {
    super(nama, "Meong"); // WAJIB dipanggil sebelum pakai "this"
    this.jenis = "Kucing";
  }
}

const miloV2 = new KucingV2("Milo");
console.log(miloV2.nama, miloV2.jenisSuara, miloV2.jenis);


// --- 3. super.method() untuk memanggil method parent ---
class HewanV3 {
  bersuara() {
    console.log(this.nama + " mengeluarkan suara");
  }
}

class KucingV3 extends HewanV3 {
  bersuara() {
    super.bersuara(); // panggil versi Hewan dulu
    console.log(this.nama + " berkata: Meong!");
  }
}

const miloV3 = new KucingV3();
miloV3.nama = "Milo";
miloV3.bersuara();
// Output:
// Milo mengeluarkan suara
// Milo berkata: Meong!


// --- 4. Overriding method (menimpa total, tanpa super) ---
class HewanV4 {
  bersuara() {
    console.log("Hewan mengeluarkan suara umum");
  }
}

class Anjing extends HewanV4 {
  bersuara() {
    console.log("Guk guk!");
  }
}

const anjing1 = new Anjing();
anjing1.bersuara(); // Guk guk!


// --- 5. Multi-level inheritance ---
class HewanV5 {
  makan() {
    console.log("Hewan sedang makan");
  }
}

class Mamalia extends HewanV5 {
  menyusui() {
    console.log("Mamalia menyusui anaknya");
  }
}

class KucingV5 extends Mamalia {
  mengeong() {
    console.log("Meong!");
  }
}

const miloV5 = new KucingV5();
miloV5.makan();    // dari HewanV5
miloV5.menyusui(); // dari Mamalia
miloV5.mengeong(); // dari KucingV5


// --- 6. Contoh lengkap: sistem Karyawan dengan inheritance ---
class Karyawan {
  constructor(nama, gajiPokok) {
    this.nama = nama;
    this.gajiPokok = gajiPokok;
  }

  hitungGaji() {
    return this.gajiPokok;
  }

  info() {
    console.log(`${this.nama}: Rp${this.hitungGaji()}`);
  }
}

class Manager extends Karyawan {
  constructor(nama, gajiPokok, tunjangan) {
    super(nama, gajiPokok);
    this.tunjangan = tunjangan;
  }

  // Override: menambahkan tunjangan ke perhitungan gaji
  hitungGaji() {
    return this.gajiPokok + this.tunjangan;
  }
}

const karyawanBiasa = new Karyawan("Andi", 5000000);
const manager = new Manager("Sari", 8000000, 2000000);

karyawanBiasa.info(); // Andi: Rp5000000
manager.info();       // Sari: Rp10000000 (gajiPokok + tunjangan)


// Coba sendiri:
// Buat class "Kendaraan" (constructor: merek, kecepatan) dengan method "jalan()",
// lalu buat class "Motor" dan "Mobil" yang extends Kendaraan dengan
// method tambahan khusus masing-masing (misal "kickstarter()" untuk Motor).
