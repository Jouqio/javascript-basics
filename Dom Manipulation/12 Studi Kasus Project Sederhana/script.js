// ============================================
// 12. STUDI KASUS: TO-DO LIST
// Menggabungkan semua konsep DOM Manipulation
// ============================================

// --- Ambil semua elemen yang dibutuhkan (cache ke variabel) ---
const form = document.querySelector("#form-todo");
const input = document.querySelector("#input-todo");
const errorTodo = document.querySelector("#error-todo");
const daftar = document.querySelector("#daftar-todo");
const infoSisa = document.querySelector("#info-sisa");
const tombolFilter = document.querySelectorAll(".filter-btn");

let filterAktif = "semua"; // state filter yang sedang dipilih


// --- 1. Menambah tugas baru (Form Handling) ---
form.addEventListener("submit", function (event) {
  event.preventDefault(); // mencegah reload halaman

  const teksTugas = input.value.trim();

  // Validasi input tidak boleh kosong
  if (teksTugas === "") {
    errorTodo.textContent = "Tugas tidak boleh kosong!";
    return;
  }
  errorTodo.textContent = "";

  tambahTugas(teksTugas);
  input.value = "";
  input.focus();
});


// --- 2. Fungsi membuat elemen <li> tugas baru ---
function tambahTugas(teks) {
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="teks-todo">${escapeHTML(teks)}</span>
    <button class="btn-hapus">Hapus</button>
  `;

  daftar.appendChild(li);
  perbaruiInfoSisa();
}

// Fungsi kecil untuk mencegah XSS saat memakai innerHTML dengan data user
function escapeHTML(teks) {
  const div = document.createElement("div");
  div.textContent = teks;
  return div.innerHTML;
}


// --- 3. Event Delegation: menangani klik "selesai" & "hapus" ---
// Satu listener di parent #daftar-todo, bekerja untuk SEMUA item,
// termasuk item yang baru ditambahkan setelah halaman dimuat.
daftar.addEventListener("click", function (event) {
  const li = event.target.closest("li"); // cari <li> terdekat dari yang diklik
  if (!li) return;

  // Klik tombol hapus
  if (event.target.classList.contains("btn-hapus")) {
    li.remove();
    perbaruiInfoSisa();
    console.log("Tugas dihapus");
    return;
  }

  // Klik teks tugas -> toggle status selesai
  if (event.target.classList.contains("teks-todo")) {
    li.classList.toggle("selesai");
    perbaruiInfoSisa();
    console.log("Status tugas diubah");
  }
});


// --- 4. Menghitung & menampilkan jumlah tugas tersisa ---
function perbaruiInfoSisa() {
  const semuaTugas = daftar.querySelectorAll("li");
  const belumSelesai = daftar.querySelectorAll("li:not(.selesai)");

  infoSisa.textContent = belumSelesai.length + " dari " + semuaTugas.length + " tugas tersisa";
  terapkanFilter(); // pastikan filter tetap konsisten setelah data berubah
}


// --- 5. Filter: Semua / Belum Selesai / Selesai ---
tombolFilter.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    // Ubah tombol filter mana yang aktif (class "aktif")
    tombolFilter.forEach(btn => btn.classList.remove("aktif"));
    tombol.classList.add("aktif");

    filterAktif = tombol.dataset.filter; // ambil dari data-filter
    terapkanFilter();
  });
});

function terapkanFilter() {
  const semuaLi = daftar.querySelectorAll("li");

  semuaLi.forEach(function (li) {
    const sudahSelesai = li.classList.contains("selesai");

    if (filterAktif === "semua") {
      li.style.display = "flex";
    } else if (filterAktif === "belum") {
      li.style.display = sudahSelesai ? "none" : "flex";
    } else if (filterAktif === "selesai") {
      li.style.display = sudahSelesai ? "flex" : "none";
    }
  });
}


// --- 6. Data awal contoh (opsional) ---
tambahTugas("Belajar DOM Selection");
tambahTugas("Belajar Event Handling");


// Coba sendiri (tantangan):
// 1. Tambahkan localStorage agar data tidak hilang saat refresh
// 2. Tambahkan tombol "Hapus Semua yang Selesai"
