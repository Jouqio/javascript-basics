// ============================================================
// validasiPassword.mjs
// ============================================================

const PANJANG_MINIMAL = 8;
const POLA_ANGKA = /[0-9]/;

function cekPanjang(password) {
  return password.length >= PANJANG_MINIMAL;
}

function cekAdaAngka(password) {
  return POLA_ANGKA.test(password);
}

export function passwordValid(password) {
  return cekPanjang(password) && cekAdaAngka(password);
}
