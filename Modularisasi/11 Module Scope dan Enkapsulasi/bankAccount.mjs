// ============================================================
// bankAccount.mjs
// ============================================================

let saldo = 0;

export function setor(jumlah) {
  saldo += jumlah;
  return saldo;
}

export function tarik(jumlah) {
  if (jumlah > saldo) {
    throw new Error("Saldo tidak cukup");
  }
  saldo -= jumlah;
  return saldo;
}

export function cekSaldo() {
  return saldo;
}
