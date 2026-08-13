// ================================================
// Contoh 1: Method Dasar
// ================================================
console.log("--- Method Dasar ---");
let mobil = {
  merk: "Toyota",
  nyalakanMesin: function () {
    console.log("Mesin dinyalakan!");
  },
};
mobil.nyalakanMesin();


// ================================================
// Contoh 2: Method Shorthand (Cara Modern)
// ================================================
console.log("\n--- Method Shorthand ---");
let mobil2 = {
  merk: "Honda",
  nyalakanMesin() { // tanpa keyword 'function', lebih ringkas
    console.log(`Mesin ${this.merk} dinyalakan!`);
  },
};
mobil2.nyalakanMesin();


// ================================================
// Contoh 3: this Merujuk ke Object Pemanggil
// ================================================
console.log("\n--- this Dasar ---");
let siswa = {
  nama: "Rina",
  jurusan: "Teknik Informatika",
  perkenalan() {
    console.log(`Halo, saya ${this.nama}, jurusan ${this.jurusan}`);
  },
};
siswa.perkenalan();


// ================================================
// Contoh 4: Nilai this Bergantung Cara Pemanggilan
// ================================================
console.log("\n--- this Bergantung Cara Pemanggilan ---");
let objA = {
  nama: "Objek A",
  tampilkan() {
    console.log(this.nama);
  },
};

objA.tampilkan(); // "Objek A" -> this merujuk ke objA

let fungsiLepas = objA.tampilkan;
console.log("Hasil fungsiLepas() (this tidak lagi merujuk ke objA):", fungsiLepas());
// undefined, karena dipanggil TANPA konteks object (this jadi tidak jelas)


// ================================================
// Contoh 5: Kesalahan Umum - Arrow Function sebagai Method
// ================================================
console.log("\n--- Kesalahan: Arrow Function sebagai Method ---");
let siswaSalah = {
  nama: "Budi",
  perkenalanSalah: () => {
    // this DI SINI bukan merujuk ke siswaSalah!
    console.log(`Halo, saya ${this.nama}`); // this.nama akan undefined
  },
};
siswaSalah.perkenalanSalah(); // "Halo, saya undefined" -> SALAH!

// Perbaikannya: gunakan method shorthand / function biasa
let siswaBenar = {
  nama: "Budi",
  perkenalanBenar() {
    console.log(`Halo, saya ${this.nama}`);
  },
};
siswaBenar.perkenalanBenar(); // "Halo, saya Budi" -> BENAR!


// ================================================
// Contoh 6: Studi Kasus - Kalkulator Sederhana dengan Method
// ================================================
console.log("\n--- Studi Kasus: Kalkulator ---");
let kalkulator = {
  hasil: 0,
  tambah(angka) {
    this.hasil += angka;
    return this; // return this supaya bisa "chaining" (dipanggil berantai)
  },
  kurang(angka) {
    this.hasil -= angka;
    return this;
  },
  tampilkanHasil() {
    console.log("Hasil akhir:", this.hasil);
  },
};

kalkulator.tambah(10).tambah(5).kurang(3).tampilkanHasil(); // 10 + 5 - 3 = 12
