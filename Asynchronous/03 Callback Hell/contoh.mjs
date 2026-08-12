// ================================================
// Contoh Callback Hell
// Skenario: Login -> Ambil Profil -> Ambil Pesanan -> Hitung Total
// ================================================

function login(username, callback) {
  setTimeout(() => {
    console.log(`Login sebagai ${username}...`);
    callback(null, "TOKEN123");
  }, 500);
}

function ambilProfil(token, callback) {
  setTimeout(() => {
    console.log(`Mengambil profil dengan token ${token}...`);
    callback(null, { nama: "Andi", id: 99 });
  }, 500);
}

function ambilPesanan(userId, callback) {
  setTimeout(() => {
    console.log(`Mengambil pesanan untuk user id ${userId}...`);
    callback(null, [50000, 75000, 25000]);
  }, 500);
}

function hitungTotal(pesanan, callback) {
  setTimeout(() => {
    const total = pesanan.reduce((a, b) => a + b, 0);
    callback(null, total);
  }, 500);
}

// Perhatikan bentuk kodenya: semakin ke bawah, semakin menjorok ke kanan.
// Inilah yang disebut "Callback Hell" / "Pyramid of Doom"
login("andi123", (err1, token) => {
  if (err1) return console.log("Error login:", err1);

  ambilProfil(token, (err2, profil) => {
    if (err2) return console.log("Error ambil profil:", err2);

    ambilPesanan(profil.id, (err3, pesanan) => {
      if (err3) return console.log("Error ambil pesanan:", err3);

      hitungTotal(pesanan, (err4, total) => {
        if (err4) return console.log("Error hitung total:", err4);

        // Proses akhirnya baru di sini, sudah 4 tingkat ke dalam!
        console.log(`Total belanja ${profil.nama}: Rp${total}`);
      });
    });
  });
});

// Bandingkan dengan versi Promise (folder 04) dan Async/Await (folder 06)
// yang menyelesaikan skenario yang SAMA PERSIS dengan kode yang jauh lebih rapi.
