// ============================================================
// counter.mjs
// ============================================================

let hitung = 0; // privat terhadap module ini

export function tambah() {
  hitung++;
  return hitung;
}

export function ambilNilai() {
  return hitung;
}
