// ============================================================
// matematika.cjs
// Contoh module CommonJS - diekspor lewat module.exports
// ============================================================

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

module.exports = {
  tambah,
  kurang,
};
