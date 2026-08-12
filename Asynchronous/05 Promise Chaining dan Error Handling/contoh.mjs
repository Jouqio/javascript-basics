// ================================================
// Contoh 1: Promise Chaining
// Skenario SAMA seperti folder "03 Callback Hell"
// tapi ditulis dengan Promise -> lebih rapi & datar
// ================================================
function login(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Login sebagai ${username}...`);
      resolve("TOKEN123");
    }, 500);
  });
}

function ambilProfil(token) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Mengambil profil dengan token ${token}...`);
      resolve({ nama: "Andi", id: 99 });
    }, 500);
  });
}

function ambilPesanan(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Mengambil pesanan untuk user id ${userId}...`);
      resolve([50000, 75000, 25000]);
    }, 500);
  });
}

function hitungTotal(pesanan) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = pesanan.reduce((a, b) => a + b, 0);
      resolve(total);
    }, 500);
  });
}

// Perhatikan: kodenya DATAR, tidak menjorok seperti callback hell!
let namaUser; // dipakai lagi di step terakhir
login("andi123")
  .then((token) => ambilProfil(token))
  .then((profil) => {
    namaUser = profil.nama;
    return ambilPesanan(profil.id);
  })
  .then((pesanan) => hitungTotal(pesanan))
  .then((total) => {
    console.log(`Total belanja ${namaUser}: Rp${total}`);
  })
  .catch((error) => {
    // Kalau ADA SAJA error di salah satu tahap di atas, akan ditangkap di sini
    console.log("Terjadi error:", error);
  });


// ================================================
// Contoh 2: Promise.all() - Jalankan paralel, tunggu semua
// ================================================
function ambilDataToko(nama, waktu) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Data toko ${nama} berhasil diambil`), waktu);
  });
}

setTimeout(() => {
  console.log("\n--- Contoh Promise.all() ---");
  const waktuMulai = Date.now();

  Promise.all([
    ambilDataToko("A", 1000),
    ambilDataToko("B", 1500),
    ambilDataToko("C", 800),
  ]).then((hasilSemua) => {
    const durasi = Date.now() - waktuMulai;
    console.log(hasilSemua);
    // Total waktu ~1.5 detik (waktu TERLAMA), bukan 1000+1500+800 = 3.3 detik
    // karena ketiganya berjalan BERSAMAAN (paralel), bukan berurutan
    console.log(`Selesai dalam ~${durasi}ms (bandingkan jika berurutan: ~3300ms)`);
  });
}, 3000);


// ================================================
// Contoh 3: Promise.allSettled() - tetap lanjut walau ada yang gagal
// ================================================
function prosesToko(nama, sukses) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sukses) resolve(`Toko ${nama} berhasil diproses`);
      else reject(`Toko ${nama} gagal diproses`);
    }, 500);
  });
}

setTimeout(() => {
  console.log("\n--- Contoh Promise.allSettled() ---");
  Promise.allSettled([
    prosesToko("X", true),
    prosesToko("Y", false),
    prosesToko("Z", true),
  ]).then((hasil) => {
    hasil.forEach((item) => {
      if (item.status === "fulfilled") {
        console.log("Sukses:", item.value);
      } else {
        console.log("Gagal:", item.reason);
      }
    });
  });
}, 5000);
