const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

//Inilah bentuk dari kode deklaratif. Coba bandingkan dengan kode sebelumnya, tentu ini jauh lebih ringkas
//dan terlihat simpel. Inilah salah satu benefit ketika kita memecahkan masalah dengan gaya deklaratif yang
//notabene dianut dalam paradigma FP. Fungsi .map() yang Anda lihat di atas merupakan salah satu implementasi 
//dari konsep-konsep dalam FP. Konsep utama dalam FP meliputi pure function, high-order function, recursion, dan 
//immutability. Pada modul ini, Anda akan memahami cara kerja fungsi map yang merupakan implementasi dari 
//konsep-konsep dalam FP.

//Tantangan terberat dalam mempelajari FP adalah menghilangkan kebiasaan berpikir dari paradigma imperatif yang 
//sudah sering kita anut. Tentu hal ini membutuhkan waktu yang panjang agar Anda benar-benar terbiasa dengan 
//cara berpikir functional programming. Belajar FP dalam JavaScript sebetulnya bisa dilakukan secara perlahan. 
//Anda masih bisa menggunakan konsep-konsep FP bersama paradigma yang lain, sebelum memutuskan seluruh solusi 
//diselesaikan dengan FP.