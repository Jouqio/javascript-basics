// ============================================================
// 03 - Menangani Response
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.

// --- Contoh 1: informasi pada objek Response ---
async function cekResponse() {
  const response = await fetch("https://api.github.com/users/octocat");
  console.log("status:", response.status);
  console.log("statusText:", response.statusText);
  console.log("ok:", response.ok);
  console.log("url:", response.url);
}
cekResponse();

// --- Contoh 2: memakai response.ok untuk cek keberhasilan ---
async function cekUserAda(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (response.ok) {
    console.log(username, "ditemukan!");
  } else {
    console.log(username, "tidak ditemukan. Status:", response.status);
  }
}
cekUserAda("octocat");
cekUserAda("user-tidak-ada-123");

// --- Contoh 3: .json() vs .text() ---
async function bacaJSON() {
  const response = await fetch("https://api.github.com/users/octocat");
  const data = await response.json();
  console.log("Login (JSON):", data.login);
}
bacaJSON();

// --- Latihan: cekStatusRepo ---
async function cekStatusRepo(owner, repo) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (response.ok) {
    console.log("Repo ditemukan");
  } else {
    console.log(`Repo tidak ditemukan, status: ${response.status}`);
  }
}
cekStatusRepo("facebook", "react");
cekStatusRepo("facebook", "repo-ngasal-tidak-ada");
