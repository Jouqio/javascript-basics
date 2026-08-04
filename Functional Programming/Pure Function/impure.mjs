// Mengubah nilai variabel global
let count = 0;
function increment() {
  count++;
}
 
// Mengakses waktu sistem
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
 
// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
  user.name = "Updated Name";
}
 
// Menulis ke berkas
const fs = require('fs');
 
function writeToFile(data) {
  fs.writeFileSync('data.txt', data);
}