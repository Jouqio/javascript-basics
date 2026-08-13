// ============================================================
// 01 - Pengantar Fetch API
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.

async function ambilDataGitHub() {
  const response = await fetch("https://api.github.com/users/octocat");
  const data = await response.json();
  console.log("Username:", data.login);
  console.log("Jumlah repo publik:", data.public_repos);
}

ambilDataGitHub();
