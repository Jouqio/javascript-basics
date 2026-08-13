// ============================================
// 09. POLYMORPHISM
// ============================================

// --- 1. Polymorphism lewat method overriding ---
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  bersuara() {
    console.log(this.nama + " mengeluarkan suara");
  }
}

class Kucing extends Hewan {
  bersuara() {
    console.log(this.nama + ": Meong!");
  }
}

class Anjing extends Hewan {
  bersuara() {
    console.log(this.nama + ": Guk guk!");
  }
}

class Sapi extends Hewan {
  bersuara() {
    console.log(this.nama + ": Moo!");
  }
}

const daftarHewan = [
  new Kucing("Milo"),
  new Anjing("Rex"),
  new Sapi("Betty")
];

daftarHewan.forEach(function (hewan) {
  hewan.bersuara(); // method sama, hasil berbeda tergantung objeknya
});


// --- 2. Menambah jenis baru tanpa mengubah kode forEach ---
class Bebek extends Hewan {
  bersuara() {
    console.log(this.nama + ": Kwek kwek!");
  }
}

daftarHewan.push(new Bebek("Donald"));

console.log("--- Setelah menambah Bebek ---");
daftarHewan.forEach(hewan => hewan.bersuara());


// --- 3. Contoh praktis: sistem bentuk geometri ---
class BentukGeometri {
  hitungLuas() {
    return 0; // default, akan di-override
  }
}

class Persegi extends BentukGeometri {
  constructor(sisi) {
    super();
    this.sisi = sisi;
  }

  hitungLuas() {
    return this.sisi * this.sisi;
  }
}

class Lingkaran extends BentukGeometri {
  constructor(jariJari) {
    super();
    this.jariJari = jariJari;
  }

  hitungLuas() {
    return Math.PI * this.jariJari * this.jariJari;
  }
}

class Segitiga extends BentukGeometri {
  constructor(alas, tinggi) {
    super();
    this.alas = alas;
    this.tinggi = tinggi;
  }

  hitungLuas() {
    return 0.5 * this.alas * this.tinggi;
  }
}

const daftarBentuk = [
  new Persegi(4),
  new Lingkaran(3),
  new Segitiga(6, 4)
];

console.log("--- Luas berbagai bentuk ---");
daftarBentuk.forEach(function (bentuk) {
  console.log(bentuk.constructor.name + " - Luas: " + bentuk.hitungLuas().toFixed(2));
});


// --- 4. Polymorphism tanpa inheritance (duck typing) ---
const kucingObjek = {
  bersuara() { console.log("Meong!"); }
};

const robotObjek = {
  bersuara() { console.log("Beep boop!"); }
};

const daftarObjek = [kucingObjek, robotObjek];

console.log("--- Duck typing (tanpa inheritance) ---");
daftarObjek.forEach(obj => obj.bersuara());


// --- 5. Contoh lengkap: sistem pembayaran dengan polymorphism ---
class MetodePembayaran {
  proses(jumlah) {
    console.log("Memproses pembayaran generik sebesar Rp" + jumlah);
  }
}

class KartuKredit extends MetodePembayaran {
  proses(jumlah) {
    console.log("Membayar Rp" + jumlah + " via Kartu Kredit (+ biaya admin Rp2500)");
  }
}

class TransferBank extends MetodePembayaran {
  proses(jumlah) {
    console.log("Membayar Rp" + jumlah + " via Transfer Bank");
  }
}

class EWallet extends MetodePembayaran {
  proses(jumlah) {
    console.log("Membayar Rp" + jumlah + " via E-Wallet (dapat cashback 2%)");
  }
}

function checkout(metodePembayaran, jumlah) {
  // fungsi ini TIDAK PEDULI jenis metode pembayaran spesifiknya
  metodePembayaran.proses(jumlah);
}

checkout(new KartuKredit(), 100000);
checkout(new TransferBank(), 150000);
checkout(new EWallet(), 75000);


// Coba sendiri:
// Tambahkan class "QRIS extends MetodePembayaran" dengan pesan proses sendiri,
// lalu panggil checkout(new QRIS(), 50000) tanpa mengubah fungsi checkout sama sekali.
