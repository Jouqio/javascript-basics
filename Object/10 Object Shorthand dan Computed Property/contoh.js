// ================================================
// Contoh 1: Property Shorthand
// ================================================
console.log("--- Property Shorthand ---");
let nama = "Andi";
let umur = 20;

// Cara lama
let userLama = { nama: nama, umur: umur };
console.log("Cara lama:", userLama);

// Cara modern (shorthand)
let userBaru = { nama, umur };
console.log("Cara modern:", userBaru);


// ================================================
// Contoh 2: Property Shorthand dalam Fungsi
// ================================================
console.log("\n--- Shorthand dalam Fungsi ---");
function buatUser(nama, umur, kota) {
  return { nama, umur, kota }; // lebih ringkas
}
console.log(buatUser("Budi", 21, "Bontang"));


// ================================================
// Contoh 3: Method Shorthand (Review dari Materi 04)
// ================================================
console.log("\n--- Method Shorthand ---");
let objLama = {
  sapa: function () {
    console.log("Halo (cara lama)");
  },
};
let objBaru = {
  sapa() {
    console.log("Halo (cara modern)");
  },
};
objLama.sapa();
objBaru.sapa();


// ================================================
// Contoh 4: Computed Property Names
// ================================================
console.log("\n--- Computed Property Names ---");
let namaKey = "warnaFavorit";

// Tanpa computed property
let obj1 = {};
obj1[namaKey] = "Biru";
console.log("Tanpa computed property:", obj1);

// Dengan computed property
let obj2 = {
  [namaKey]: "Biru",
};
console.log("Dengan computed property:", obj2);


// ================================================
// Contoh 5: Computed Property dengan Parameter Fungsi
// ================================================
console.log("\n--- Computed Property + Fungsi ---");
function buatStatistik(namaKategori, jumlah) {
  return {
    [namaKategori]: jumlah,
  };
}

console.log(buatStatistik("totalPenjualan", 150));
console.log(buatStatistik("totalPengunjung", 500));


// ================================================
// Contoh 6: Computed Property dengan Ekspresi
// ================================================
console.log("\n--- Computed Property + Ekspresi ---");
let index = 1;
let data = {
  [`item${index}`]: "Data pertama",
  [`item${index + 1}`]: "Data kedua",
};
console.log(data); // { item1: "Data pertama", item2: "Data kedua" }


// ================================================
// Contoh 7: Studi Kasus - Menghitung Frekuensi Kata (Word Count)
// ================================================
console.log("\n--- Studi Kasus: Hitung Frekuensi Kata ---");
function hitungFrekuensi(daftarKata) {
  let hasil = {};
  daftarKata.forEach((kata) => {
    // computed property: nama key berasal dari isi variabel "kata"
    hasil[kata] = (hasil[kata] || 0) + 1;
  });
  return hasil;
}

let kataKata = ["apel", "jeruk", "apel", "mangga", "jeruk", "apel"];
console.log(hitungFrekuensi(kataKata));
// { apel: 3, jeruk: 2, mangga: 1 }


// ================================================
// Contoh 8: Studi Kasus - Membuat Object Konfigurasi Dinamis
// ================================================
console.log("\n--- Studi Kasus: Konfigurasi Dinamis ---");
function buatKonfigurasi(mode, nilai) {
  return {
    [`konfigurasi_${mode}`]: nilai,
    dibuatPada: new Date().getFullYear(),
  };
}

console.log(buatKonfigurasi("gelap", true));
console.log(buatKonfigurasi("bahasa", "id"));
