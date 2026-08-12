// ============================================================
// 12 - Studi Kasus Async Await
// ============================================================
// Catatan: fungsi tampilkanLoading/tampilkanPesanError/renderDashboard
// di bawah adalah SIMULASI (mock) agar contoh bisa langsung dijalankan.

function tampilkanLoading(status) { console.log(status ? "Loading..." : "Loading selesai"); }
function tampilkanPesanError(pesan) { console.log("Error:", pesan); }
function renderDashboard(profil, statistik) {
  console.log("Dashboard tampil:", profil, statistik);
}
function tunggu(detik) {
  return new Promise((resolve) => setTimeout(resolve, detik * 1000));
}
function verifikasiSesi(userId) {
  return new Promise((resolve) => setTimeout(() => resolve({ userId }), 300));
}
function ambilProfil(userId) {
  return new Promise((resolve) => setTimeout(() => resolve({ nama: "Syauqi" }), 400));
}
function ambilStatistik(userId) {
  return new Promise((resolve) => setTimeout(() => resolve({ postingan: 12 }), 500));
}

// --- Contoh 1: dashboard - kombinasi berurutan + paralel ---
async function muatDashboard(userId) {
  tampilkanLoading(true);
  try {
    const sesi = await verifikasiSesi(userId);
    const [profil, statistik] = await Promise.all([
      ambilProfil(sesi.userId),
      ambilStatistik(sesi.userId),
    ]);
    renderDashboard(profil, statistik);
  } catch (error) {
    tampilkanPesanError("Gagal memuat dashboard: " + error.message);
  } finally {
    tampilkanLoading(false);
  }
}
muatDashboard(1);

// --- Contoh 2: retry sederhana ---
async function ambilDenganRetry(mintaData, maksimalPercobaan = 3) {
  for (let percobaan = 1; percobaan <= maksimalPercobaan; percobaan++) {
    try {
      return await mintaData();
    } catch (error) {
      console.warn("Percobaan " + percobaan + " gagal:", error.message);
      if (percobaan === maksimalPercobaan) throw error;
      await tunggu(1);
    }
  }
}

let percobaanKe = 0;
function permintaanTidakStabil() {
  return new Promise((resolve, reject) => {
    percobaanKe++;
    setTimeout(() => {
      if (percobaanKe < 2) reject(new Error("Jaringan tidak stabil"));
      else resolve("Data berhasil diambil");
    }, 300);
  });
}
ambilDenganRetry(permintaanTidakStabil).then((hasil) => console.log(hasil));
