// ============================================================
// 08 - Promise Chaining
// ============================================================

function ambilUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: id, nama: "Syauqi" }), 500);
  });
}
function ambilProfil(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ userId: userId, bio: "Mahasiswa TI" }), 500);
  });
}
function ambilPesanan(profilId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Pesanan #1", "Pesanan #2"]), 500);
  });
}

// --- Contoh: chaining yang benar ---
ambilUser(1)
  .then((user) => {
    console.log("User:", user.nama);
    return ambilProfil(user.id);
  })
  .then((profil) => {
    console.log("Bio:", profil.bio);
    return ambilPesanan(profil.userId);
  })
  .then((pesanan) => {
    console.log("Pesanan:", pesanan);
  })
  .catch((error) => {
    console.error("Gagal:", error);
  });

// --- Latihan: perbaikan versi "lupa return" ---
ambilUser(1).then((user) => {
  return ambilProfil(user.id); // ditambahkan return
}).then((profil) => {
  console.log("Hasil setelah diperbaiki:", profil);
});
