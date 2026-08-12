// ============================================
// 08. RANGKUMAN ARRAY - Contoh Kode (Cheat Sheet Praktik)
// ============================================

const contoh = [3, 1, 4, 1, 5, 9, 2, 6];

// --- Method Mutable (mengubah array asli) ---
console.log("=== Method Mutable ===");
const mutableArr = [...contoh]; // salin dulu supaya `contoh` tidak ikut rusak
console.log("Sebelum:", mutableArr);
mutableArr.push(10);
console.log("push(10):", mutableArr);
mutableArr.pop();
console.log("pop():", mutableArr);
mutableArr.unshift(0);
console.log("unshift(0):", mutableArr);
mutableArr.shift();
console.log("shift():", mutableArr);
mutableArr.sort((a, b) => a - b);
console.log("sort():", mutableArr);
mutableArr.reverse();
console.log("reverse():", mutableArr);

// --- Method Immutable (menghasilkan array/nilai baru) ---
console.log("\n=== Method Immutable ===");
console.log("map (x2):", contoh.map((n) => n * 2));
console.log("filter (>3):", contoh.filter((n) => n > 3));
console.log("reduce (total):", contoh.reduce((a, b) => a + b, 0));
console.log("slice(1,4):", contoh.slice(1, 4));
console.log("concat([100]):", contoh.concat([100]));
console.log("spread copy:", [...contoh]);
console.log("find (>4):", contoh.find((n) => n > 4));
console.log("some (>8):", contoh.some((n) => n > 8));
console.log("every (>0):", contoh.every((n) => n > 0));
console.log("includes(5):", contoh.includes(5));

console.log("\ncontoh asli (tidak pernah berubah oleh method immutable):", contoh);

// --- Pola Immutable Update yang Sering Dipakai ---
console.log("\n=== Pola Immutable Update ===");

const daftar = [{ id: 1, nama: "A" }, { id: 2, nama: "B" }];

// Tambah elemen
const tambah = [...daftar, { id: 3, nama: "C" }];
console.log("Tambah:", tambah);

// Hapus elemen (by id)
const hapus = daftar.filter((x) => x.id !== 1);
console.log("Hapus id=1:", hapus);

// Ubah 1 elemen (by id)
const ubah = daftar.map((x) => (x.id === 2 ? { ...x, nama: "B-Update" } : x));
console.log("Ubah id=2:", ubah);

// Gabung 2 array
const gabung = [...daftar, ...tambah];
console.log("Gabung:", gabung);

// Urutkan tanpa mutasi
const urut = [...daftar].sort((a, b) => a.nama.localeCompare(b.nama));
console.log("Urut (tanpa mutasi):", urut);
console.log("daftar asli tetap:", daftar);
