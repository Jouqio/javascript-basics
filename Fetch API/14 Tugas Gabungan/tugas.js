// ============================================================
// 14 - Tugas Gabungan: GitHub User Explorer
// ============================================================
// Baca Readme.md di folder ini untuk penjelasan lengkap tiap requirement.
// Lengkapi setiap fungsi di bawah ini sesuai TODO masing-masing.
// Jangan ubah signature fungsi (nama & parameter) agar bagian "Runner"
// di paling bawah tetap bisa memanggilnya.
//
// Butuh koneksi internet aktif. Jalankan dengan: node tugas.js

// ------------------------------------------------------------
// 1. ambilUser(username)  -> materi 02/04 (GET Request & Error Handling)
// ------------------------------------------------------------
// TODO: GET request ke https://api.github.com/users/{username}
// Jika !response.ok, throw Error(`User ${username} tidak ditemukan`)
// Jika berhasil, return data user (hasil response.json())
async function ambilUser(username) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 2. cariRepoPopuler(kataKunci, jumlah)  -> materi 09 (Query Parameters)
// ------------------------------------------------------------
// TODO: Gunakan URLSearchParams untuk query ke
// https://api.github.com/search/repositories dengan parameter:
// q, sort: "stars", order: "desc", per_page: jumlah
// Return array of { nama: repo.full_name, bintang: repo.stargazers_count }
async function cariRepoPopuler(kataKunci, jumlah = 5) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 3. ambilBeberapaUserParalel(usernames)  -> materi 10 (Promise.allSettled)
// ------------------------------------------------------------
// TODO: Ambil semua username secara PARALEL dengan Promise.allSettled.
// Manfaatkan ambilUser() dari langkah 1.
// Return array of { username, berhasil, data }
// - Jika berhasil: data berisi objek user
// - Jika gagal: data berisi pesan error (string)
async function ambilBeberapaUserParalel(usernames) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 4. fetchDenganTimeout(url, timeoutMs)  -> materi 11/12 (AbortController & Timeout)
// ------------------------------------------------------------
// TODO: Fetch generik dengan timeout otomatis via AbortController.
// Jika timeout tercapai, throw Error(`Request timeout setelah ${timeoutMs}ms`)
// Jangan lupa clearTimeout di finally!
// Return hasil response.json() jika berhasil (tanpa cek response.ok di sini,
// biarkan pemanggil yang menentukan validasi lanjutan jika perlu).
async function fetchDenganTimeout(url, timeoutMs = 5000) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 5. ringkasanUser(username)  -> materi 08 (menggabungkan semua)
// ------------------------------------------------------------
// TODO: Fungsi async utama. Ikuti alur di Readme.md:
//   1) fetchDenganTimeout ke https://api.github.com/users/{username}, timeout 5 detik
//   2) fetchDenganTimeout lagi ke data.repos_url milik user tersebut
//   3) Return { nama, username, followers, jumlahRepo }
//   4) Bungkus try/catch, kembalikan null jika gagal + cetak pesan error
async function ringkasanUser(username) {
  // TODO: implementasikan
}

// ============================================================
// Runner - JANGAN diubah, dipakai untuk menguji implementasimu
// ============================================================

async function jalankanSemuaSkenario() {
  console.log("=== 1. Ambil User ===");
  try {
    const user = await ambilUser("octocat");
    console.log("User ditemukan:", user?.login);
  } catch (error) {
    console.log("Error:", error.message);
  }
  try {
    await ambilUser("user-tidak-ada-123");
  } catch (error) {
    console.log("Error (diharapkan):", error.message);
  }

  console.log("\n=== 2. Cari Repo Populer ===");
  const repoPopuler = await cariRepoPopuler("javascript framework", 3);
  console.log(repoPopuler);

  console.log("\n=== 3. Ambil Beberapa User Paralel ===");
  const hasilParalel = await ambilBeberapaUserParalel([
    "octocat",
    "user-tidak-ada-123",
    "torvalds",
  ]);
  console.log(hasilParalel);

  console.log("\n=== 4. Fetch dengan Timeout ===");
  try {
    const data = await fetchDenganTimeout("https://api.github.com/users/octocat", 5000);
    console.log("Berhasil dalam batas waktu:", data?.login);
  } catch (error) {
    console.log("Error:", error.message);
  }

  console.log("\n=== 5. Ringkasan User ===");
  const ringkasan = await ringkasanUser("octocat");
  console.log(ringkasan);
}

jalankanSemuaSkenario();
