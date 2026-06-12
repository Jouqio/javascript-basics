//Tugas Loop

let text = "";
let i = 0;

do {
  text += "<br>Angka tersebut adalah" + i;
  i++;
} while (i < 10);

document.getElementById("demo").innerHTML = text;
