// ================================================
// Contoh 1: Callback Synchronous Sederhana
// ================================================
function sapa(nama, callback) {
  const pesan = `Halo, ${nama}!`;
  callback(pesan); // callback dipanggil langsung (synchronous)
}

sapa("Budi", (pesan) => {
  console.log(pesan); // Halo, Budi!
});


// ================================================
// Contoh 2: Callback untuk Proses Asynchronous
// ================================================
function ambilDataUser(id, callback) {
  console.log(`Mengambil data user dengan id ${id}...`);

  // Simulasikan proses lama (misal: request ke server) dengan setTimeout
  setTimeout(() => {
    const dataUser = { id, nama: "Siti", umur: 21 };
    callback(dataUser); // callback dipanggil SETELAH data "didapat"
  }, 1500);
}

ambilDataUser(1, (user) => {
  console.log("Data user diterima:", user);
});

console.log("Baris ini dijalankan duluan, tidak menunggu ambilDataUser selesai");


// ================================================
// Contoh 3: Error-First Callback (konvensi Node.js)
// ================================================
function bagi(a, b, callback) {
  setTimeout(() => {
    if (b === 0) {
      // Kalau ada error, kirim error sebagai parameter pertama
      callback(new Error("Tidak bisa membagi dengan 0"), null);
      return;
    }
    // Kalau sukses, error diisi null, data diisi hasil
    callback(null, a / b);
  }, 500);
}

bagi(10, 2, (error, hasil) => {
  if (error) {
    console.log("Terjadi error:", error.message);
    return;
  }
  console.log("Hasil pembagian:", hasil); // 5
});

bagi(10, 0, (error, hasil) => {
  if (error) {
    console.log("Terjadi error:", error.message); // Tidak bisa membagi dengan 0
    return;
  }
  console.log("Hasil pembagian:", hasil);
});
