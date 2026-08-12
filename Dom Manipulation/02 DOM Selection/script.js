// ============================================
// 02. DOM SELECTION
// ============================================

// --- 1. getElementById ---
const judul = document.getElementById("judul");
console.log("getElementById:", judul);


// --- 2. getElementsByClassName ---
const items = document.getElementsByClassName("item");
console.log("getElementsByClassName (HTMLCollection):", items);
console.log("Item pertama:", items[0].textContent);


// --- 3. getElementsByTagName ---
const semuaLi = document.getElementsByTagName("li");
console.log("getElementsByTagName jumlah <li>:", semuaLi.length);


// --- 4. querySelector (elemen pertama yang cocok) ---
const itemPertama = document.querySelector(".item");
console.log("querySelector .item (elemen pertama saja):", itemPertama.textContent);

const spanDalamCard = document.querySelector(".card span");
console.log("querySelector selector kompleks:", spanDalamCard.textContent);


// --- 5. querySelectorAll (semua elemen yang cocok) ---
const semuaItem = document.querySelectorAll(".item");
console.log("querySelectorAll (NodeList):", semuaItem);

semuaItem.forEach(function (item, index) {
  console.log("Item ke-" + index + ":", item.textContent);
});


// --- 6. Mengubah HTMLCollection jadi Array ---
const itemsArray = Array.from(items);
const namaBuah = itemsArray.map(item => item.textContent);
console.log("Hasil .map() setelah dikonversi ke array:", namaBuah);


// --- 7. Menangani elemen yang tidak ditemukan (null) ---
const takAda = document.querySelector("#tidak-ada");
console.log("Elemen yang tidak ditemukan:", takAda); // null

if (takAda) {
  console.log(takAda.textContent);
} else {
  console.log("Elemen #tidak-ada tidak ditemukan di halaman");
}


// Coba sendiri:
// Tambahkan <li class="item"> baru di index.html, refresh browser,
// lalu lihat bagaimana hasil querySelectorAll ikut berubah.
