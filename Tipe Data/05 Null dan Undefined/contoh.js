// ================================================
// Contoh 1: undefined - Muncul Otomatis
// ================================================
console.log("--- undefined ---");

let belumDiisi;
console.log("Variabel belum diisi:", belumDiisi); // undefined

let obj = { nama: "Budi" };
console.log("Properti tidak ada:", obj.alamat); // undefined

function tanpaReturn() {
  console.log("Fungsi ini tidak me-return apa-apa");
}
console.log("Hasil fungsi tanpa return:", tanpaReturn());

function sapa(nama) {
  console.log(`Halo, ${nama}`);
}
sapa(); // parameter tidak diisi -> nama menjadi undefined
// Output: Halo, undefined


// ================================================
// Contoh 2: null - Sengaja Dikosongkan
// ================================================
console.log("\n--- null ---");

let dataUser = null; // sengaja dikosongkan, misal karena belum login
console.log("Data user (belum login):", dataUser);

// Simulasi: setelah user login, data diisi
function login(nama) {
  dataUser = { nama }; // data yang tadinya null, sekarang diisi
  return dataUser;
}
console.log("Data user (setelah login):", login("Rina"));


// ================================================
// Contoh 3: Perbandingan null dan undefined
// ================================================
console.log("\n--- Perbandingan ---");
console.log("null == undefined ->", null == undefined);   // true (loose equality)
console.log("null === undefined ->", null === undefined); // false (strict, tipe beda)

console.log("typeof undefined ->", typeof undefined); // "undefined"
console.log("typeof null ->", typeof null);            // "object" (bug historis!)


// ================================================
// Contoh 4: Studi Kasus - Membedakan "Belum Diisi" vs "Sengaja Kosong"
// ================================================
console.log("\n--- Studi Kasus: Profil User ---");

function buatProfilAwal() {
  return {
    nama: "Ahmad",
    email: "ahmad@email.com",
    nomorHP: null,      // SENGAJA kosong, user memang belum punya/isi nomor HP
    tanggalLahir: undefined, // belum sempat diisi sama sekali (jarang dipakai secara manual, tapi untuk ilustrasi)
  };
}

let profil = buatProfilAwal();
console.log(profil);

// Cek apakah nomor HP sudah diisi
if (profil.nomorHP === null) {
  console.log("Nomor HP belum diisi oleh user.");
}


// ================================================
// Contoh 5: Optional Chaining (?.) untuk Menghindari Error
// ================================================
console.log("\n--- Optional Chaining ---");
let dataKosong = null;

// Tanpa optional chaining, ini akan ERROR:
// console.log(dataKosong.nama); // Uncaught TypeError!

// Dengan optional chaining, aman dan menghasilkan undefined jika null/undefined
console.log("dataKosong?.nama ->", dataKosong?.nama); // undefined, TIDAK error
