// ============================================================
// kalkulator.mjs
// Menggabungkan named export dan default export dalam satu file
// ============================================================

export const versi = "1.0.0";

export function tambah(a, b) {
  return a + b;
}

export default class Kalkulator {
  hitung(a, b, operator) {
    if (operator === "+") return tambah(a, b);
    throw new Error("Operator tidak dikenali");
  }
}
