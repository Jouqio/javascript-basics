// Fungsi untuk menghitung total harga belanjaan
function calculateTotal(shoppingCart) {
  const total = 0;

  return shoppingCart.reduce((accumulator, cartItem) => {
    if (typeof cartItem.price === 'number') {
      return accumulator + cartItem.price;
    } else {
      console.error(`Tipe data cartItem.price tidak valid:`, cartItem);
      return accumulator;
    }
  }, total);
}

// Contoh data belanjaan dengan beberapa kasus edge
const shoppingCart = [
  { name: 'Apple', price: 300 },
  { name: 'Banana', price: 120 },
  { name: 'Orange', price: 130 },
  { name: 'Watermelon', price: '160' },
  { name: 'Pineapple', price: null },
  { name: 'Grape', price: null },
];

// Memanggil fungsi dan mencetak hasilnya
console.log(`Total belanjaan: Rp ${calculateTotal(shoppingCart)}`);