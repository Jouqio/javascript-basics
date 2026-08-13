// ============================================================
// format.cjs - jawaban latihan materi ini
// ============================================================

function kapital(teks) {
  return teks.charAt(0).toUpperCase() + teks.slice(1);
}

function potong(teks, panjang) {
  return teks.slice(0, panjang);
}

module.exports = { kapital, potong };
