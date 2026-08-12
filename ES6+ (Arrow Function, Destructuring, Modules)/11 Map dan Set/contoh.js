// ============================================================
// 11 - Map dan Set
// ============================================================

// --- Contoh 1: Map dasar ---
const dataUser = new Map();
dataUser.set("nama", "Syauqi");
dataUser.set("umur", 20);
dataUser.set(true, "nilai dengan kunci boolean");

console.log("get nama:", dataUser.get("nama"));
console.log("has umur:", dataUser.has("umur"));
console.log("size:", dataUser.size);

dataUser.delete("umur");
console.log("has umur setelah delete:", dataUser.has("umur"));

// --- Contoh 2: iterasi Map ---
const nilaiSiswa = new Map([
  ["Ani", 90],
  ["Budi", 85],
  ["Citra", 95],
]);
for (const [nama, nilai] of nilaiSiswa) {
  console.log(`${nama}: ${nilai}`);
}

// --- Contoh 3: Set dasar ---
const warna = new Set();
warna.add("merah");
warna.add("hijau");
warna.add("merah"); // duplikat, diabaikan
console.log("Set warna:", warna);
console.log("size:", warna.size);
console.log("has hijau:", warna.has("hijau"));

// --- Contoh 4: menghilangkan duplikat array dengan Set ---
const angkaDenganDuplikat = [1, 2, 2, 3, 3, 3, 4];
const unik = [...new Set(angkaDenganDuplikat)];
console.log("Angka unik:", unik);

// --- Latihan: buah unik ---
const buah = ["apel", "jeruk", "apel", "mangga", "jeruk"];
const buahUnik = [...new Set(buah)];
console.log("Buah unik:", buahUnik);
