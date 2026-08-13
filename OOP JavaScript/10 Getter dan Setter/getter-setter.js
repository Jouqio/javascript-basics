// ============================================
// 10. GETTER DAN SETTER
// ============================================

// --- 1. Masalah tanpa getter/setter ---
class PersegiTanpaValidasi {
  constructor(sisi) {
    this.sisi = sisi;
  }
}

const pTanpaValidasi = new PersegiTanpaValidasi(5);
pTanpaValidasi.sisi = -10; // tidak ada yang mencegah nilai tidak masuk akal
console.log("Sisi jadi negatif (bug):", pTanpaValidasi.sisi);


// --- 2. Getter dasar ---
class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  get luas() {
    return this.sisi * this.sisi;
  }
}

const p = new Persegi(5);
console.log("Luas (getter):", p.luas); // diakses tanpa (), seperti properti


// --- 3. Getter dan setter dengan validasi ---
class PersegiValidasi {
  constructor(sisi) {
    this._sisi = sisi;
  }

  get sisi() {
    return this._sisi;
  }

  set sisi(nilaiBaru) {
    if (nilaiBaru <= 0) {
      console.log("Sisi harus lebih dari 0, perubahan diabaikan");
      return;
    }
    this._sisi = nilaiBaru;
  }
}

const pValid = new PersegiValidasi(5);
console.log("Sisi awal:", pValid.sisi); // 5

pValid.sisi = 10; // memanggil setter
console.log("Sisi setelah diubah:", pValid.sisi); // 10

pValid.sisi = -5; // ditolak setter
console.log("Sisi setelah dicoba diubah negatif:", pValid.sisi); // tetap 10


// --- 4. Getter/setter dengan private field (lebih aman) ---
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

  set fahrenheit(nilaiF) {
    this.#celsius = ((nilaiF - 32) * 5) / 9;
  }
}

const suhu = new Suhu(25);
console.log("Celsius:", suhu.celsius);       // 25
console.log("Fahrenheit:", suhu.fahrenheit); // 77

suhu.fahrenheit = 100;
console.log("Celsius setelah set via fahrenheit:", suhu.celsius.toFixed(2)); // 37.78


// --- 5. Contoh lengkap: class NamaLengkap dengan getter computed property ---
class Orang {
  #namaDepan;
  #namaBelakang;

  constructor(namaDepan, namaBelakang) {
    this.#namaDepan = namaDepan;
    this.#namaBelakang = namaBelakang;
  }

  get namaDepan() {
    return this.#namaDepan;
  }

  set namaDepan(nilai) {
    this.#namaDepan = nilai;
  }

  get namaBelakang() {
    return this.#namaBelakang;
  }

  set namaBelakang(nilai) {
    this.#namaBelakang = nilai;
  }

  get namaLengkap() { // computed property, dihitung dari 2 properti lain
    return this.#namaDepan + " " + this.#namaBelakang;
  }
}

const orang = new Orang("Budi", "Santoso");
console.log("Nama lengkap:", orang.namaLengkap); // Budi Santoso

orang.namaDepan = "Andi";
console.log("Nama lengkap setelah diubah:", orang.namaLengkap); // Andi Santoso


// --- 6. Contoh: validasi email dengan setter ---
class User {
  #email;

  constructor(email) {
    this.email = email; // memanggil setter di bawah
  }

  get email() {
    return this.#email;
  }

  set email(nilai) {
    if (!nilai.includes("@")) {
      console.log("Email tidak valid, harus mengandung '@'");
      return;
    }
    this.#email = nilai;
  }
}

const user1 = new User("budi@email.com");
console.log("Email valid:", user1.email);

user1.email = "email-tanpa-at"; // ditolak
console.log("Email setelah dicoba diubah tidak valid:", user1.email); // tetap yang lama


// Coba sendiri:
// Buat class "Produk" dengan private field #harga, getter/setter "harga"
// yang menolak nilai negatif, dan getter computed "hargaSetelahPajak" (harga * 1.11).
