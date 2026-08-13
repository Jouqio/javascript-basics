// ============================================================
// 11 - Membatalkan Request dengan AbortController
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.

// --- Contoh 1: membatalkan fetch dengan AbortController ---
const controller = new AbortController();

fetch("https://api.github.com/users/octocat", {
  signal: controller.signal,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Request dibatalkan!");
    } else {
      console.log("Error lain:", error.message);
    }
  });

controller.abort(); // dibatalkan segera setelah dikirim

// --- Contoh 2: pola "batalkan yang lama, mulai yang baru" ---
let controllerSaatIni = null;

async function cariUser(kataKunci) {
  if (controllerSaatIni) {
    controllerSaatIni.abort();
  }
  controllerSaatIni = new AbortController();

  try {
    const params = new URLSearchParams({ q: kataKunci });
    const response = await fetch(`https://api.github.com/search/users?${params}`, {
      signal: controllerSaatIni.signal,
    });
    const data = await response.json();
    console.log("Hasil pencarian untuk", kataKunci, ":", data.items?.length, "user");
  } catch (error) {
    if (error.name === "AbortError") {
      console.log(`Pencarian "${kataKunci}" dibatalkan (digantikan pencarian baru)`);
    } else {
      console.log("Error:", error.message);
    }
  }
}

cariUser("syauqi");
cariUser("octocat");
