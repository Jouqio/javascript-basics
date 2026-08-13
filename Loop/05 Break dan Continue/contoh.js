// ================================================
// Contoh 1: break - Menghentikan Loop
// ================================================
console.log("--- break ---");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log("(loop berhenti total di angka 5)");


// ================================================
// Contoh 2: continue - Melompati Iterasi
// ================================================
console.log("\n--- continue ---");
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
console.log("(angka 2 dilewati, tapi loop tetap lanjut sampai selesai)");


// ================================================
// Contoh 3: Studi Kasus - Mencari Data dengan break
// ================================================
console.log("\n--- Studi Kasus: Mencari Data ---");
let daftarSiswa = ["Andi", "Budi", "Citra", "Dedi"];
let dicari = "Citra";
let ditemukan = false;

for (let i = 0; i < daftarSiswa.length; i++) {
  console.log(`Mengecek index ${i}: ${daftarSiswa[i]}`);
  if (daftarSiswa[i] === dicari) {
    console.log(`✅ Ditemukan "${dicari}" di index ${i}`);
    ditemukan = true;
    break; // langsung berhenti, hemat waktu
  }
}
if (!ditemukan) {
  console.log(`❌ "${dicari}" tidak ditemukan`);
}


// ================================================
// Contoh 4: Studi Kasus - Melewati Data dengan continue
// ================================================
console.log("\n--- Studi Kasus: Total Angka Positif ---");
let angka = [1, -2, 3, -4, 5, -6];
let totalPositif = 0;

for (let i = 0; i < angka.length; i++) {
  if (angka[i] < 0) {
    continue; // lewati angka negatif
  }
  totalPositif += angka[i];
}
console.log("Angka:", angka);
console.log("Total angka positif:", totalPositif); // 1+3+5 = 9


// ================================================
// Contoh 5: Kombinasi break dan continue
// ================================================
console.log("\n--- Kombinasi break dan continue ---");
let nilaiUjian = [80, 45, 90, -1, 70, 60]; // -1 menandakan "akhir data"

for (let i = 0; i < nilaiUjian.length; i++) {
  if (nilaiUjian[i] === -1) {
    console.log("Menemukan tanda akhir data, berhenti memproses.");
    break; // berhenti total kalau ketemu -1
  }
  if (nilaiUjian[i] < 50) {
    console.log(`Nilai ${nilaiUjian[i]} terlalu rendah, dilewati.`);
    continue; // lewati nilai yang terlalu rendah
  }
  console.log(`Memproses nilai: ${nilaiUjian[i]}`);
}


// ================================================
// Contoh 6: Label untuk Nested Loop
// ================================================
console.log("\n--- Label pada Nested Loop ---");
luar: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      break luar; // menghentikan LOOP LUAR sepenuhnya, bukan cuma loop dalam
    }
    console.log(`i=${i}, j=${j}`);
  }
}
console.log("(loop berhenti total saat j=1 di iterasi pertama i)");
