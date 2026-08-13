// ============================================================
// 05 - POST Request
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.
// Memakai JSONPlaceholder - API publik untuk latihan (data tidak
// benar-benar tersimpan di server mereka).

// --- Contoh 1: JSON.stringify sebelum kirim body ---
const dataObjek = { nama: "Syauqi", umur: 20 };
console.log("Sebelum stringify (tipe):", typeof dataObjek);
const dataString = JSON.stringify(dataObjek);
console.log("Setelah stringify (tipe):", typeof dataString);
console.log("Isi string:", dataString);

// --- Contoh 2: POST request dasar ---
async function buatPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Belajar Fetch API",
      body: "Materi ini membahas POST request",
      userId: 1,
    }),
  });

  const data = await response.json();
  console.log("Data baru dibuat dengan id:", data.id);
  console.log(data);
}
buatPost();

// --- Latihan: buatKomentar ---
async function buatKomentar(postId, nama, isi) {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, name: nama, body: isi }),
  });

  const data = await response.json();
  return data;
}
buatKomentar(1, "Syauqi", "Materi ini sangat membantu!").then((hasil) => {
  console.log("Komentar baru:", hasil);
});
