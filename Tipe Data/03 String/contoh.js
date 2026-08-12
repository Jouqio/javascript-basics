// ================================================
// Contoh 1: 3 Cara Menulis String
// ================================================
let a = "Pakai kutip dua";
let b = 'Pakai kutip satu';
let c = `Pakai backtick`;

console.log(a);
console.log(b);
console.log(c);


// ================================================
// Contoh 2: Template Literal - String Interpolation
// ================================================
console.log("\n--- Template Literal ---");
let nama = "Rina";
let umur = 22;

// Cara lama: concatenation dengan +
let caraLama = "Nama saya " + nama + ", umur " + umur + " tahun";
console.log(caraLama);

// Cara modern: template literal, lebih rapi & mudah dibaca
let caraModern = `Nama saya ${nama}, umur ${umur} tahun`;
console.log(caraModern);

// Template literal juga bisa berisi ekspresi/operasi
console.log(`Tahun depan umur saya akan menjadi ${umur + 1} tahun`);


// ================================================
// Contoh 3: Template Literal Multi-baris
// ================================================
console.log("\n--- Multi-baris ---");
let puisi = `Belajar JavaScript
Setahap demi setahap
Pasti bisa!`;
console.log(puisi);


// ================================================
// Contoh 4: String Bersifat Immutable
// ================================================
console.log("\n--- Immutable ---");
let kata = "Halo";
kata[0] = "J"; // ini TIDAK berpengaruh
console.log(kata); // tetap "Halo"

// Untuk "mengubah", kita sebenarnya membuat string BARU
let kataBaru = "J" + kata.slice(1);
console.log(kataBaru); // "Jalo"


// ================================================
// Contoh 5: Method String yang Sering Dipakai
// ================================================
console.log("\n--- Method String ---");
let teks = "  Belajar JavaScript itu Seru  ";

console.log("Panjang:", teks.length);
console.log("Uppercase:", teks.toUpperCase());
console.log("Lowercase:", teks.toLowerCase());
console.log("Trim:", `"${teks.trim()}"`);
console.log("Includes 'Seru' ?", teks.includes("Seru"));
console.log("Slice(0,10):", teks.trim().slice(0, 10));
console.log("Replace:", teks.trim().replace("Seru", "Menyenangkan"));

let csv = "apel,jeruk,mangga";
console.log("Split:", csv.split(","));


// ================================================
// Contoh 6: Studi Kasus - Membuat Format Nama Pengguna
// ================================================
console.log("\n--- Studi Kasus: Format Nama ---");
function buatUsername(namaDepan, namaBelakang) {
  return `${namaDepan.toLowerCase()}_${namaBelakang.toLowerCase()}`.replace(/\s/g, "");
}

console.log(buatUsername("Ahmad", "Fauzi"));   // ahmad_fauzi
console.log(buatUsername("Siti", "Nurhaliza")); // siti_nurhaliza
