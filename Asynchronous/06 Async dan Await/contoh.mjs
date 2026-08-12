// ================================================
// Fungsi bantu (sama seperti materi sebelumnya)
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
      resolve(pesanan.reduce((a, b) => a + b, 0));
    }, 500);
  });
}


// ================================================
// Contoh 1: Skenario yang SAMA (login->profil->pesanan->total)
// tapi ditulis dengan Async/Await -> paling mudah dibaca!
// ================================================
async function prosesCheckout() {
  try {
    const token = await login("andi123");
    const profil = await ambilProfil(token);
    const pesanan = await ambilPesanan(profil.id);
    const total = await hitungTotal(pesanan);

    console.log(`Total belanja ${profil.nama}: Rp${total}`);
  } catch (error) {
    // Menangkap error dari proses manapun di atas
    console.log("Terjadi error:", error);
  }
}

prosesCheckout();


// ================================================
// Contoh 2: async function selalu mengembalikan Promise
// ================================================
async function ambilAngka() {
  return 42; // otomatis dibungkus jadi Promise.resolve(42)
}

ambilAngka().then((angka) => {
  console.log("\nHasil dari async function:", angka);
});


// ================================================
// Contoh 3: await dengan Promise.all() untuk proses PARALEL
// ================================================
function ambilDataToko(nama, waktu) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Data toko ${nama} selesai`), waktu);
  });
}

async function ambilSemuaTokoParalel() {
  console.log("\n--- Async/Await + Promise.all (paralel) ---");
  const waktuMulai = Date.now();

  const hasil = await Promise.all([
    ambilDataToko("A", 1000),
    ambilDataToko("B", 1200),
    ambilDataToko("C", 800),
  ]);

  console.log(hasil);
  console.log(`Selesai dalam ~${Date.now() - waktuMulai}ms (paralel, bukan dijumlah)`);
}

// Jalankan setelah contoh sebelumnya selesai supaya log tidak bercampur
setTimeout(() => ambilSemuaTokoParalel(), 3000);


// ================================================
// Contoh 4: Kesalahan umum pemula - await berurutan padahal bisa paralel
// ================================================
async function ambilSemuaTokoBerurutanSalah() {
  console.log("\n--- Versi TIDAK OPTIMAL (await satu-satu) ---");
  const waktuMulai = Date.now();

  const a = await ambilDataToko("X", 1000); // menunggu 1000ms dulu
  const b = await ambilDataToko("Y", 1200); // baru mulai SETELAH a selesai
  const c = await ambilDataToko("Z", 800);  // baru mulai SETELAH b selesai

  console.log([a, b, c]);
  // Total waktu ~3000ms (1000+1200+800), jauh lebih lambat dari versi paralel!
  console.log(`Selesai dalam ~${Date.now() - waktuMulai}ms (berurutan, lebih lambat)`);
}

setTimeout(() => ambilSemuaTokoBerurutanSalah(), 6000);
