// ============================================================
// 08 - Async/Await dengan Fetch
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.

// --- Contoh 1: fetch berurutan yang saling bergantung ---
async function ambilUserDanRepo(username) {
  const responseUser = await fetch(`https://api.github.com/users/${username}`);
  const user = await responseUser.json();

  const responseRepo = await fetch(user.repos_url);
  const repos = await responseRepo.json();

  return {
    nama: user.name,
    jumlahRepo: Array.isArray(repos) ? repos.length : "tidak diketahui",
  };
}
ambilUserDanRepo("octocat").then((hasil) => console.log(hasil));

// --- Contoh 2: fungsi pembantu fetchJSON ---
async function fetchJSON(url, opsi = {}) {
  const response = await fetch(url, opsi);
  if (!response.ok) {
    throw new Error(`Fetch gagal (${response.status}): ${url}`);
  }
  return response.json();
}

async function contohPakaiHelper() {
  try {
    const user = await fetchJSON("https://api.github.com/users/octocat");
    console.log("Nama dari helper:", user.name);
  } catch (error) {
    console.error(error.message);
  }
}
contohPakaiHelper();

// --- Latihan: ambilBioUser ---
async function ambilBioUser(username) {
  try {
    const user = await fetchJSON(`https://api.github.com/users/${username}`);
    return user.bio;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
ambilBioUser("octocat").then((bio) => console.log("Bio:", bio));
