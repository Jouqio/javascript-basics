// ============================================================
// 10 - Multiple Requests Paralel dengan Promise.all
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.

// --- Contoh 1: fetch paralel dengan Promise.all ---
async function ambilTigaUserParalel() {
  const [user1, user2, user3] = await Promise.all([
    fetch("https://api.github.com/users/octocat").then((r) => r.json()),
    fetch("https://api.github.com/users/torvalds").then((r) => r.json()),
    fetch("https://api.github.com/users/gaearon").then((r) => r.json()),
  ]);
  return [user1.login, user2.login, user3.login];
}
ambilTigaUserParalel().then((hasil) => console.log("Tiga user paralel:", hasil));

// --- Contoh 2: Promise.allSettled untuk fetch yang mungkin gagal ---
async function ambilBeberapaUserAman(usernames) {
  const hasil = await Promise.allSettled(
    usernames.map((username) =>
      fetch(`https://api.github.com/users/${username}`).then((r) => {
        if (!r.ok) throw new Error(`${username} tidak ditemukan`);
        return r.json();
      })
    )
  );

  return hasil.map((item, index) => {
    if (item.status === "fulfilled") {
      return { username: usernames[index], berhasil: true, data: item.value.login };
    } else {
      return { username: usernames[index], berhasil: false, error: item.reason.message };
    }
  });
}
ambilBeberapaUserAman(["octocat", "user-tidak-ada-123", "torvalds"]).then((hasil) =>
  console.log("Hasil allSettled:", hasil)
);

// --- Latihan: ambilBeberapaRepo ---
async function ambilBeberapaRepo(daftarRepo) {
  const hasil = await Promise.all(
    daftarRepo.map(({ owner, repo }) =>
      fetch(`https://api.github.com/repos/${owner}/${repo}`).then((r) => r.json())
    )
  );
  return hasil.map((data) => data.stargazers_count);
}
ambilBeberapaRepo([
  { owner: "facebook", repo: "react" },
  { owner: "vuejs", repo: "vue" },
]).then((hasil) => console.log("Bintang beberapa repo:", hasil));
