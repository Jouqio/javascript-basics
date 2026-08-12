// ============================================================
// 10 - Async Await Dasar
// ============================================================

function tunggu(detik) {
  return new Promise((resolve) => setTimeout(resolve, detik * 1000));
}
function ambilUser(id) {
  return new Promise((resolve) => setTimeout(() => resolve({ id, nama: "Syauqi" }), 400));
}
function ambilProfil(userId) {
  return new Promise((resolve) => setTimeout(() => resolve({ userId, bio: "Mahasiswa TI" }), 400));
}

// --- Contoh 1: async & await dasar ---
async function jalankan() {
  console.log("Mulai");
  await tunggu(1);
  console.log("1 detik kemudian");
}
jalankan();

// --- Contoh 2: async/await menggantikan Promise chaining ---
async function ambilDataUserV2() {
  try {
    const user = await ambilUser(1);
    const profil = await ambilProfil(user.id);
    console.log("Bio:", profil.bio);
  } catch (error) {
    console.error(error);
  }
}
ambilDataUserV2();

// --- Latihan: konversi ke async/await ---
function ambilData() {
  return new Promise((resolve) => setTimeout(() => resolve([1, 2, 3]), 300));
}
async function proses() {
  const data = await ambilData();
  return data.length;
}
proses().then((panjang) => console.log("Panjang data:", panjang));
