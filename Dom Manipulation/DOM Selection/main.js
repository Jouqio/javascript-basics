// Dom Selection

// 1. getElementById()

// Tolong buat sebuah file HTML dengan nama js_dom_manipulation_lesson.
// html, lalu tambahkan kode berikut di dalamnya:
const judul = document.getElementById("judul");
console.log(judul);

// Kemudian, tambahkan kode berikut untuk mengubah gaya
// dari elemen dengan id "judul":
judul.style.color = "red";
judul.style.backgroundColor = "black";
judul.style.fontSize = "50px";
judul.style.textAlign = "center";
judul.innerHTML = "Belajar DOM Manipulation";

// 2. getElementsByTagName()
// --> HTMLCollection
// intinya kalo pake getElementsByTagName itu hasilnya berupa HTMLCollection,
// yang merupakan kumpulan elemen-elemen yang memiliki tag tertentu dalam dokumen HTML.
const p = document.getElementsByTagName("p");

// Kemudian, tambahkan kode berikut untuk mengubah gaya dari semua elemen <p> yang ditemukan:

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
  p[i].style.padding = "10px";
  p[i].style.borderRadius = "5px";
  p[i].style.marginBottom = "10px";
}

//ini adalah contoh lain untuk mengubah gaya dari elemen <h1> yang ditemukan menggunakan getElementsByTagName:
const h1 = document.getElementsByTagName("h1")[0];
h1.style.color = "green";
h1.style.fontSize = "36px";
h1.style.textAlign = "center";

// 3. document.getElementsByClassName()
// --> HTMLCollection
// intinya kalo pake getElementsByClassName itu hasilnya berupa HTMLCollection,
// yang merupakan kumpulan elemen-elemen yang
// memiliki kelas tertentu dalam dokumen HTML.
const box = document.getElementsByClassName("box");
// Kemudian, tambahkan kode berikut untuk mengubah gaya dari semua elemen dengan kelas "box" yang ditemukan:
for (let i = 0; i < box.length; i++) {
  box[i].style.backgroundColor = "lightgreen";
  box[i].style.padding = "15px";
  box[i].style.borderRadius = "10px";
  box[i].style.marginBottom = "10px";
}

//contoh lain
const p1 = document.getElementsByClassName("p1")[0];
p1.style.color = "blue";
p1.style.fontSize = "24px";
p1.innerHTML =
  "Paragraf dengan kelas p1 telah diubah gayanya menggunakan getElementsByClassName";

//document.querySelector() --> Element

//document.querySelectorAll() --> NodeList
