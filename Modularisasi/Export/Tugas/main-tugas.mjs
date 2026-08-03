// main-tugas.mjs
// Jalankan file ini untuk menguji hasil pengerjaan math.mjs
// Cara jalankan: node main-tugas.mjs

import kalkulator, { PI, luasLingkaran } from './math.mjs';

console.log('--- Named Export ---');
console.log('Nilai PI:', PI); // Output: 3.14159
console.log('Luas lingkaran r=7:', luasLingkaran(7)); // Output: 153.93791

console.log('\n--- Default Export ---');
console.log('5 + 3 =', kalkulator(5, 3, '+')); // Output: 8
console.log('5 - 3 =', kalkulator(5, 3, '-')); // Output: 2
console.log('5 * 3 =', kalkulator(5, 3, '*')); // Output: 15
console.log('5 / 3 =', kalkulator(5, 3, '/')); // Output: 1.6666666666666667

console.log('\n--- Error Handling ---');
try {
  kalkulator(5, 3, '%');
} catch (error) {
  console.log(error.message); // Output: "Operator tidak dikenali"
}
