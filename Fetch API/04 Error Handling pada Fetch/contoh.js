// ============================================================
// 04 - Error Handling pada Fetch
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.

// --- Contoh 1: pola error handling yang benar ---
async function ambilUserAman(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`Gagal mengambil data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
    return null;
  }
}
ambilUserAman("octocat").then((user) => console.log("Hasil 1:", user?.login));
ambilUserAman("user-tidak-ada-123").then((user) => console.log("Hasil 2:", user));

// --- Contoh 2: error jaringan asli (domain tidak ada) ---
async function contohErrorJaringan() {
  try {
    await fetch("https://domain-ini-tidak-pernah-ada-12345.com");
  } catch (error) {
    console.log("Contoh error jaringan asli:", error.message);
  }
}
contohErrorJaringan();

// --- Latihan: ambilRepo dengan error handling lengkap ---
async function ambilRepo(owner, repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

    if (!response.ok) {
      throw new Error(`Repo tidak ditemukan. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Gagal:", error.message);
    return null;
  }
}
ambilRepo("facebook", "react").then((data) => console.log("Repo:", data?.full_name));
ambilRepo("facebook", "repo-ngasal-tidak-ada").then((data) => console.log("Repo:", data));
