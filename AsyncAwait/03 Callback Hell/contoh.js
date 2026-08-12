// ============================================================
// 03 - Callback Hell
// ============================================================
// Catatan: fungsi login/ambilProfil/ambilPesanan/tampilkanUI di bawah
// adalah SIMULASI (mock) agar contoh bisa langsung dijalankan.

function login(user, pass, cb) {
  setTimeout(() => cb({ id: 1, nama: user }), 300);
}
function ambilProfil(userId, cb) {
  setTimeout(() => cb({ id: userId, bio: "Mahasiswa TI" }), 300);
}
function ambilPesanan(profilId, cb) {
  setTimeout(() => cb(["Pesanan #1", "Pesanan #2"]), 300);
}
function tampilkanUI(pesanan, cb) {
  setTimeout(() => cb("UI diperbarui dengan " + pesanan.length + " pesanan"), 300);
}

// --- Contoh: callback hell / pyramid of doom ---
login("syauqi", "rahasia", (user) => {
  ambilProfil(user.id, (profil) => {
    ambilPesanan(profil.id, (pesanan) => {
      tampilkanUI(pesanan, (hasil) => {
        console.log("Selesai:", hasil);
      });
    });
  });
});
