// ============================================================
// 07 - PUT dan DELETE Request
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.

// --- Contoh 1: PUT - memperbarui data ---
async function perbaruiPost(id, dataBaru) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataBaru),
  });
  const data = await response.json();
  return data;
}
perbaruiPost(1, {
  id: 1,
  title: "Judul yang Sudah Diperbarui",
  body: "Isi konten yang baru",
  userId: 1,
}).then((hasil) => console.log("Hasil PUT:", hasil));

// --- Contoh 2: DELETE - menghapus data ---
async function hapusPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    console.log(`Post dengan id ${id} berhasil dihapus`);
  } else {
    console.log("Gagal menghapus, status:", response.status);
  }
}
hapusPost(1);

// --- Latihan: perbaruiJudulPost ---
async function perbaruiJudulPost(id, judulBaru) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, title: judulBaru }),
  });
  const data = await response.json();
  console.log("Hasil latihan:", data);
}
perbaruiJudulPost(1, "Judul Baru dari Latihan");
