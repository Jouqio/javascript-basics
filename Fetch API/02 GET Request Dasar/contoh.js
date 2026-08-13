// ============================================================
// 02 - GET Request Dasar
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.

// --- Contoh 1: GET dengan .then() ---
fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
  .then((data) => {
    console.log("Nama:", data.name);
    console.log("Bio:", data.bio);
  });

// --- Contoh 2: GET dengan async/await ---
async function ambilUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
}
ambilUser("octocat").then((user) => {
  console.log(user.name, "-", user.location);
});

// --- Contoh 3: dua tahap (response lalu data) ---
async function duaTahap() {
  const response = await fetch("https://api.github.com/users/octocat");
  console.log("Tipe response:", typeof response);

  const data = await response.json();
  console.log("Tipe data:", typeof data);
}
duaTahap();

// --- Latihan: ambilRepo ---
async function ambilRepo(owner, repo) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const data = await response.json();
  return data.stargazers_count;
}
ambilRepo("facebook", "react").then((bintang) => {
  console.log("Jumlah bintang facebook/react:", bintang);
});
