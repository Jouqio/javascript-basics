// anggaplah kita ingin membuat fungsi yang dapat menghasilkan array berisi elemen deret angka dari 0 hingga n.
// Berikut adalah contoh implementasi jika kita menerapkan for loop.

function generateArray(n) {
  const result = [];
  for (let counter = 0; counter <= n; counter += 1) {
    result.push(counter);
  }
  return result;
}

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

// Dengan cara di atas, masalah memang dapat terselesaikan, tetapi sekali lagi dalam FP tidak ada
// memperbolehkan perubahan data sehingga kita tidak bisa mengubah nilai dari variabel counter.

// Lalu, bagaimana solusi yang ditawarkan dengan rekursi? Berikut jawabannya.

function generateArray(n) {
  if (n < 0) {
    return [];
  }

  return [...generateArray(n - 1), n];
}

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

// pada contoh di atas, kita memanfaatkan rekursi untuk menghasilkan array berisi deret angka dari 0 hingga n.
// Fungsi generateArray akan memanggil dirinya sendiri dengan argumen n - 1 hingga mencapai kondisi dasar (base case) yaitu n < 0.
// Setelah mencapai kondisi dasar, fungsi akan mulai mengembalikan nilai dan membangun array secara bertahap hingga mencapai nilai n yang diinginkan.
// Dengan cara ini, kita dapat menghasilkan array tanpa mengubah nilai dari variabel counter, sehingga tetap sesuai dengan prinsip FP.
