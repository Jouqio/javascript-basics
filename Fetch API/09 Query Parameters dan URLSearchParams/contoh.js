// ============================================================
// 09 - Query Parameters dan URLSearchParams
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.

// --- Contoh 1: URLSearchParams dasar ---
const params = new URLSearchParams({
  q: "react framework",
  sort: "stars",
  order: "desc",
});
console.log("Query string:", params.toString());
console.log("URL lengkap:", `https://api.github.com/search/repositories?${params}`);

// --- Contoh 2: mencari repository di GitHub ---
async function cariRepo(kataKunci, jumlah = 5) {
  const p = new URLSearchParams({
    q: kataKunci,
    sort: "stars",
    order: "desc",
    per_page: jumlah,
  });

  const response = await fetch(`https://api.github.com/search/repositories?${p}`);
  const data = await response.json();

  return data.items.map((repo) => ({
    nama: repo.full_name,
    bintang: repo.stargazers_count,
  }));
}
cariRepo("javascript framework", 3).then((hasil) => console.log(hasil));

// --- Latihan: cariUserGitHub ---
async function cariUserGitHub(kataKunci) {
  const p = new URLSearchParams({ q: kataKunci, per_page: 3 });
  const response = await fetch(`https://api.github.com/search/users?${p}`);
  const data = await response.json();
  return data.items.map((user) => user.login);
}
cariUserGitHub("syauqi").then((hasil) => console.log("Hasil pencarian user:", hasil));
