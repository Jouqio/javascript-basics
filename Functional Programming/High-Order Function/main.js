// HOF memungkinkan kita untuk membuat fungsi yang fleksibel. 
// Misalnya, kita bisa membuat fungsi apply yang menerima fungsi operation sebagai 
// argumen untuk melakukan sebuah operasi pada dua nilai argumen lain.

function apply(operation, ...args) {
  // kita bisa menambahkan kode lain sebelum operation dijalankan.
  
  return operation(...args)
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - ((disc / 100) * value);
}

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log('Product price:', productPrice); // Output: Product price: 400
console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300
