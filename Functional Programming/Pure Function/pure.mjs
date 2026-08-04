// Menghitung total harga pesanan tanpa mengubah input
function calculateTotalPrice(orderItems) {
  return orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}
 
// Memfilter dan memetakan data tanpa mengubah array asli
function getActiveUsernames(users) {
  return users
    .filter(user => user.isActive)
    .map(user => user.username);
}
 
// Membuat objek baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: address.street,
      city: address.city,
      country: address.country
    }
  };
}
 
// Menggabungkan dua objek tanpa mengubah objek asli
function mergeSettings(defaultSettings, userSettings) {
  return {
    ...defaultSettings,
    ...userSettings
  };
}