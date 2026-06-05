//alert('Hello Syauqi Nuzul Abdi');

//const usia = 20;

//console.log('hello Syauqi Nuzul Abdi, usia saya adalah ' + usia + ' tahun');
//alert('hello Syauqi Nuzul Abdi, usia saya adalah ' + usia + ' tahun');

let nama = "Syauqi Nuzul Abdi"; //string
let usia = 20; //number
let tinggiBadan = 170.5; //tipe data number juga, tapi dengan desimal(double float)
let beratBadan = 60.2; //tipe data number juga, tapi dengan desimal(double float)
let pacar = null; //null, karena belum memiliki pacar
let hobi = ["membaca", "bermain game", "berolahraga"]; //array, tipe data yang bisa menyimpan banyak nilai
let alamat = {
  //object, tipe data yang bisa menyimpan banyak nilai dengan key dan value
  jalan: "Jl. Kapten Piere Tendean, Blok F No 6",
  kota: "Jakarta",
  negara: "Indonesia",
};
let isStudent = true; //boolean, tipe data yang hanya memiliki dua nilai: true atau false

if (pacar == null) {
  //if digunakan untuk memberikan kondisi, jika pacar null maka akan menjalankan kode dibawahnya (jika pacar null maka pacar akan diisi dengan "Belum punya pacar")
  pacar = "Belum punya pacar";
} else {
  //else digunakan untuk memberikan kondisi lain jika kondisi pertama tidak terpenuhi (jika pacar tidak null)
  pacar = "Ada pacar";
}

let saldoAwal = 1000000; //saldo awal
let saldoTambahan = 500000; //saldo tambahan
const hutang = 200000; //hutang, menggunakan const karena hutang tidak akan berubah lagi
const saldoAkhir = saldoAwal + saldoTambahan - hutang; //saldo akhir setelah ditambah saldo tambahan dan dikurangi hutang, menggunakan const karena saldo akhir tidak akan berubah lagi

//switch case digunakan untuk memberikan kondisi yang lebih banyak, jika pacar null maka akan menjalankan kode dibawahnya
//(jika pacar null maka pacar akan diisi dengan "Belum punya pacar", jika pacar tidak null maka pacar akan diisi dengan "Ada pacar")
//switch case lebih efisien daripada if else jika kita memiliki banyak kondisi, karena switch case hanya akan mengecek satu kondisi saja,
// sedangkan if else akan mengecek semua kondisi
//switch (pacar) {
//  case 1:
//    pacar = "Punya 1 pacar";
//    break;
//  case 2:
//    pacar = "Punya 2 pacar, aku Ganteng";
//    break;
//  default:
//    pacar = "Belum ada pacar";
//}

//menampilkan data dengan alert
//alert digunakan paling akhir untuk menampilkan data yang sudah kita buat, karena alert akan menghentikan eksekusi program sampai user menutup alert tersebut
//alert awal
alert(
  "Nama: " +
    nama +
    "\nUsia: " +
    usia +
    " tahun\nTinggi Badan: " +
    tinggiBadan +
    " cm\nBerat Badan: " +
    beratBadan +
    " kg\nPacar: " +
    pacar +
    "\nHobi: " +
    hobi.join(", ") +
    "\nAlamat: " +
    alamat.jalan +
    ", " +
    alamat.kota +
    ", " +
    alamat.negara +
    "\nApakah saya seorang mahasiswa? " +
    isStudent,
);

//alert akhir
alert(
  "Saldo Awal saya sebesar Rp " +
    saldoAwal +
    " & Saldo Tambahan yang saya dapatkan sebesar Rp " +
    saldoTambahan +
    "& Hutang yang saya miliki sebesar Rp " +
    hutang +
    "\njadi Saldo Akhir yang saya miliki sebesar Rp " +  //tanda \n digunakan untuk membuat baris baru pada alert
    saldoAkhir,
);
