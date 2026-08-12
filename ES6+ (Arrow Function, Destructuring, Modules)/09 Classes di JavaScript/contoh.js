// ============================================================
// 09 - Classes di JavaScript
// ============================================================

// --- Contoh 1: class dasar ---
class Hewan {
  constructor(nama, suara) {
    this.nama = nama;
    this.suara = suara;
  }

  bersuara() {
    return `${this.nama} berbunyi ${this.suara}`;
  }
}
const kucing = new Hewan("Kucing", "Meong");
console.log(kucing.bersuara());

// --- Contoh 2: inheritance dengan extends dan super ---
class HewanDasar {
  constructor(nama) {
    this.nama = nama;
  }
  perkenalan() {
    return `Saya adalah ${this.nama}`;
  }
}
class Anjing extends HewanDasar {
  constructor(nama, ras) {
    super(nama);
    this.ras = ras;
  }
  bersuara() {
    return "Guk guk!";
  }
}
const anjing = new Anjing("Rex", "Herder");
console.log(anjing.perkenalan());
console.log(anjing.bersuara());
console.log("Ras:", anjing.ras);

// --- Contoh 3: getter ---
class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }
  get luas() {
    return this.sisi * this.sisi;
  }
}
const kotak = new Persegi(5);
console.log("Luas:", kotak.luas);

// --- Latihan: Kendaraan dan Motor ---
class Kendaraan {
  constructor(merek, kecepatanMaks) {
    this.merek = merek;
    this.kecepatanMaks = kecepatanMaks;
  }
  info() {
    return `${this.merek} - maks ${this.kecepatanMaks} km/jam`;
  }
}
class Motor extends Kendaraan {
  bunyikanKlakson() {
    return "Teet teet!";
  }
}
const motor1 = new Motor("Honda", 120);
console.log(motor1.info());
console.log(motor1.bunyikanKlakson());
