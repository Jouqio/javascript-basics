// ============================================================
// 06 - Request Headers dan Content-Type
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.

// --- Contoh 1: mengirim custom header ---
async function contohHeaders() {
  const response = await fetch("https://api.github.com/users/octocat", {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });
  const data = await response.json();
  console.log("Login:", data.login);
}
contohHeaders();

// --- Contoh 2: membaca headers dari response ---
async function bacaResponseHeaders() {
  const response = await fetch("https://api.github.com/users/octocat");
  console.log("Content-Type:", response.headers.get("content-type"));
  console.log("Rate limit tersisa:", response.headers.get("x-ratelimit-remaining"));
}
bacaResponseHeaders();

// --- Latihan: ambilContentType ---
async function ambilContentType(url) {
  const response = await fetch(url);
  return response.headers.get("content-type");
}
ambilContentType("https://api.github.com/users/octocat").then((tipe) => {
  console.log("Content-Type hasil latihan:", tipe);
});
