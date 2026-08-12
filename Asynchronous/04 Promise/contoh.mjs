// ================================================
// Contoh 1: Membuat dan Menggunakan Promise Sederhana
// ================================================
function cekCuaca(cerah) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cerah) {
        resolve("Cuaca cerah, jadi piknik!");
      } else {
        reject("Cuaca hujan, piknik dibatalkan.");
      }
    }, 1000);
  });
}

// Kasus sukses (resolve)
cekCuaca(true)
  .then((pesan) => {
    console.log("Berhasil:", pesan);
  })
  .catch((pesan) => {
    console.log("Gagal:", pesan);
  })
  .finally(() => {
    console.log("Pengecekan cuaca selesai.\n");
  });


// ================================================
// Contoh 2: Kasus Gagal (reject)
// ================================================
cekCuaca(false)
  .then((pesan) => {
    console.log("Berhasil:", pesan);
  })
  .catch((pesan) => {
    console.log("Gagal:", pesan);
  })
  .finally(() => {
    console.log("Pengecekan cuaca selesai.\n");
  });


// ================================================
// Contoh 3: Membungkus fungsi berbasis callback menjadi Promise
// (teknik ini disebut "promisify")
// ================================================
function ambilDataUserCallback(id, callback) {
  setTimeout(() => {
    callback(null, { id, nama: "Rina" });
  }, 800);
}

function ambilDataUserPromise(id) {
  return new Promise((resolve, reject) => {
    ambilDataUserCallback(id, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

ambilDataUserPromise(1).then((user) => {
  console.log("Data user (dari Promise):", user);
});
