// ============================================
// 10. DESTRUCTURING ASSIGNMENT
// ============================================

// --- 1. Array destructuring dasar ---
let buah = ["Apel", "Jeruk", "Mangga"];
let [buah1, buah2, buah3] = buah;
console.log(buah1, buah2, buah3); // Apel Jeruk Mangga


// --- 2. Melewati (skip) elemen tertentu ---
let angka = [1, 2, 3, 4, 5];
let [pertama, , ketiga] = angka; // elemen kedua dilewati
console.log(pertama, ketiga); // 1 3


// --- 3. Nilai default pada array destructuring ---
let warna = ["Merah"];
let [warna1, warna2 = "Biru"] = warna;
console.log(warna1, warna2); // Merah Biru


// --- 4. Menukar nilai dua variabel (swap) ---
let a = 1;
let b = 2;
console.log("Sebelum swap:", a, b);

[a, b] = [b, a];
console.log("Setelah swap:", a, b); // 2 1


// --- 5. Object destructuring dasar ---
let user = { nama: "Budi", umur: 25, kota: "Jakarta" };
let { nama, umur } = user;
console.log(nama, umur); // Budi 25


// --- 6. Mengganti nama variabel saat destructuring ---
let { nama: namaUser, umur: umurUser } = user;
console.log(namaUser, umurUser); // Budi 25


// --- 7. Nilai default pada object destructuring ---
let userTanpaKota = { nama: "Andi" };
let { nama: namaAndi, kota = "Tidak diketahui" } = userTanpaKota;
console.log(namaAndi, kota); // Andi Tidak diketahui


// --- 8. Destructuring pada parameter fungsi ---
function tampilkanUser({ nama, umur }) {
  console.log(`Nama: ${nama}, Umur: ${umur}`);
}

tampilkanUser({ nama: "Sari", umur: 30 }); // Nama: Sari, Umur: 30
tampilkanUser(user); // Nama: Budi, Umur: 25


// --- 9. Destructuring bersarang (nested) ---
let dataLengkap = {
  nama: "Rina",
  alamat: {
    kota: "Bandung",
    kodePos: "40123"
  }
};

let { nama: namaRina, alamat: { kota: kotaRina } } = dataLengkap;
console.log(namaRina, kotaRina); // Rina Bandung


// --- 10. Destructuring array hasil fungsi (contoh: mengambil beberapa nilai sekaligus) ---
function ambilKoordinat() {
  return [10, 20]; // return array berisi x dan y
}

let [x, y] = ambilKoordinat();
console.log("Koordinat:", x, y); // 10 20


// Coba sendiri:
// Buat object/array sendiri, lalu coba destructuring-kan
// dengan berbagai variasi (skip, default, rename, nested).
