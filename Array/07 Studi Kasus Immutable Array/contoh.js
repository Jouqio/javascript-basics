// ============================================
// 07. STUDI KASUS: TODO LIST IMMUTABLE - Contoh Kode
// ============================================

const todosAwal = [
  { id: 1, teks: "Belajar Array", selesai: false },
  { id: 2, teks: "Olahraga", selesai: false },
  { id: 3, teks: "Baca Buku", selesai: true },
];

// --- 1. Menambah Todo Baru (Immutable) ---
function tambahTodo(todos, teksBaru) {
  const todoBaru = { id: Date.now(), teks: teksBaru, selesai: false };
  return [...todos, todoBaru];
}

// --- 2. Menghapus Todo ---
function hapusTodo(todos, id) {
  return todos.filter((t) => t.id !== id);
}

// --- 3. Mengubah Status Selesai ---
function toggleSelesai(todos, id) {
  return todos.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t));
}

// --- 4. Mengedit Teks Todo ---
function editTodo(todos, id, teksBaru) {
  return todos.map((t) => (t.id === id ? { ...t, teks: teksBaru } : t));
}

// --- 5. Menghitung Statistik ---
function hitungStatistik(todos) {
  const totalSelesai = todos.filter((t) => t.selesai).length;
  const totalBelum = todos.length - totalSelesai;
  return { total: todos.length, selesai: totalSelesai, belum: totalBelum };
}

// --- Menjalankan Semua Fungsi ---
console.log("todosAwal:", todosAwal);

let todos = todosAwal;
todos = tambahTodo(todos, "Belajar Reduce");
console.log("\nSetelah tambahTodo:", todos);

todos = toggleSelesai(todos, 1);
console.log("\nSetelah toggleSelesai(id=1):", todos);

todos = hapusTodo(todos, 2);
console.log("\nSetelah hapusTodo(id=2):", todos);

todos = editTodo(todos, 3, "Baca Buku Fiksi");
console.log("\nSetelah editTodo(id=3):", todos);

console.log("\nStatistik akhir:", hitungStatistik(todos));

// todosAwal (variabel paling pertama) TETAP tidak berubah
console.log("\ntodosAwal (tidak pernah berubah):", todosAwal);

// ============================================
// LATIHAN (kerjakan sendiri di bawah ini)
// ============================================

// 1. filterByStatus(todos, selesai)
function filterByStatus(todos, selesai) {
  return todos.filter((t) => t.selesai === selesai);
}
console.log("\nJawaban No 1 - Belum selesai:", filterByStatus(todosAwal, false));
console.log("Jawaban No 1 - Sudah selesai:", filterByStatus(todosAwal, true));

// 2. urutkanTodo(todos) berdasarkan teks (A-Z), tanpa mutasi
function urutkanTodo(todos) {
  return [...todos].sort((a, b) => a.teks.localeCompare(b.teks));
}
console.log("\nJawaban No 2 - Terurut:", urutkanTodo(todosAwal));
console.log("Jawaban No 2 - todosAwal tetap:", todosAwal);

// 3. Simulasi skenario penggunaan sederhana
console.log("\n=== Jawaban No 3: Simulasi ===");
let daftarTugas = [];
daftarTugas = tambahTodo(daftarTugas, "Tugas 1");
daftarTugas = tambahTodo(daftarTugas, "Tugas 2");
console.log("Setelah tambah 2 tugas:", daftarTugas);

daftarTugas = toggleSelesai(daftarTugas, daftarTugas[0].id);
console.log("Setelah toggle tugas pertama:", daftarTugas);

daftarTugas = hapusTodo(daftarTugas, daftarTugas[1].id);
console.log("Setelah hapus tugas kedua:", daftarTugas);
