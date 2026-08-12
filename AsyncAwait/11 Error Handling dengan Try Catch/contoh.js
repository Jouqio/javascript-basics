// ============================================================
// 11 - Error Handling dengan Try Catch
// ============================================================
// Catatan: fungsi tampilkanLoading/tampilkanData/tampilkanPesanError
// di bawah adalah SIMULASI (mock) via console.log agar contoh runnable.

function tampilkanLoading(status) {
  console.log(status ? "Loading..." : "Loading selesai");
}
function tampilkanData(data) {
  console.log("Data:", data);
}
function tampilkanPesanError(pesan) {
  console.log("Error:", pesan);
}
function ambilData(gagal = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (gagal) reject(new Error("Koneksi terputus"));
      else resolve({ nama: "Produk A" });
    }, 400);
  });
}
function apiLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "rahasia") resolve({ username });
      else reject(new Error("Password salah"));
    }, 400);
  });
}

// --- Contoh 1: try/catch dasar ---
async function ambilDataAman() {
  try {
    const data = await ambilData();
    console.log(data);
  } catch (error) {
    console.error("Gagal mengambil data:", error.message);
  }
}
ambilDataAman();

// --- Contoh 2: try/catch/finally ---
async function muatHalaman() {
  tampilkanLoading(true);
  try {
    const data = await ambilData(true); // sengaja gagal untuk demo
    tampilkanData(data);
  } catch (error) {
    tampilkanPesanError(error.message);
  } finally {
    tampilkanLoading(false);
  }
}
muatHalaman();

// --- Latihan: fungsi login ---
async function login(username, password) {
  tampilkanLoading(true);
  try {
    const user = await apiLogin(username, password);
    return user;
  } catch (error) {
    console.error("Login gagal:", error.message);
    throw error;
  } finally {
    tampilkanLoading(false);
  }
}
login("syauqi", "salah").catch(() => {}); // contoh pemanggilan
