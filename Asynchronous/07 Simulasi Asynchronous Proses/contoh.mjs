// ================================================
// Simulasi 1: Loading Data (seperti loading spinner)
// ================================================
function simulasiLoadingData() {
  return new Promise((resolve) => {
    console.log("⏳ Loading data...");
    setTimeout(() => {
      resolve({ id: 1, judul: "Artikel Asynchronous JavaScript" });
    }, 1500);
  });
}

async function tampilkanData() {
  const data = await simulasiLoadingData();
  console.log("✅ Data berhasil dimuat:", data, "\n");
}

tampilkanData();


// ================================================
// Simulasi 2: Antrian Tugas (Task Queue) - diproses satu per satu
// ================================================
function prosesTugas(nama, durasi) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Tugas "${nama}" selesai diproses`);
      resolve();
    }, durasi);
  });
}

async function jalankanAntrianTugas() {
  console.log("--- Simulasi Antrian Tugas ---");
  const daftarTugas = [
    { nama: "Kirim Email", durasi: 800 },
    { nama: "Generate Laporan", durasi: 1000 },
    { nama: "Backup Database", durasi: 600 },
  ];

  // Diproses BERURUTAN, satu tugas harus selesai sebelum tugas berikutnya dimulai
  for (const tugas of daftarTugas) {
    await prosesTugas(tugas.nama, tugas.durasi);
  }

  console.log("🎉 Semua tugas dalam antrian selesai!\n");
}

setTimeout(() => jalankanAntrianTugas(), 2000);


// ================================================
// Simulasi 3: Proses dengan Kemungkinan Gagal (seperti request API)
// ================================================
function simulasiRequestAPI(namaEndpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const berhasil = Math.random() > 0.5; // 50% peluang gagal
      if (berhasil) {
        resolve(`Data dari ${namaEndpoint} berhasil didapat`);
      } else {
        reject(`Gagal mengambil data dari ${namaEndpoint} (timeout)`);
      }
    }, 700);
  });
}

async function ambilDataDenganRetry(namaEndpoint, maksimalPercobaan = 3) {
  for (let percobaan = 1; percobaan <= maksimalPercobaan; percobaan++) {
    try {
      const hasil = await simulasiRequestAPI(namaEndpoint);
      console.log(`✅ [Percobaan ${percobaan}]`, hasil);
      return hasil; // berhasil, hentikan retry
    } catch (error) {
      console.log(`⚠️  [Percobaan ${percobaan}]`, error);
      if (percobaan === maksimalPercobaan) {
        console.log("❌ Gagal setelah beberapa kali percobaan, menyerah.\n");
      }
    }
  }
}

setTimeout(() => {
  console.log("--- Simulasi Request API dengan Retry ---");
  ambilDataDenganRetry("/api/produk");
}, 5000);


// ================================================
// Simulasi 4: Progress Bar (proses bertahap)
// ================================================
function tunggu(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function simulasiUploadFile() {
  console.log("--- Simulasi Upload File dengan Progress ---");
  for (let progres = 0; progres <= 100; progres += 25) {
    console.log(`📤 Upload progress: ${progres}%`);
    await tunggu(400);
  }
  console.log("✅ Upload selesai 100%!\n");
}

setTimeout(() => simulasiUploadFile(), 9000);
