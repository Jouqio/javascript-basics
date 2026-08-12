// ============================================
// 10. FORM HANDLING
// ============================================

const form = document.querySelector("#form-daftar");
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputSetuju = document.querySelector("#setuju");
const selectKota = document.querySelector("#kota");

const errorUsername = document.querySelector("#error-username");
const errorPassword = document.querySelector("#error-password");
const errorSetuju = document.querySelector("#error-setuju");
const pesanSukses = document.querySelector("#pesan-sukses");


// --- 1. Validasi real-time saat mengetik ---
inputPassword.addEventListener("input", function () {
  if (inputPassword.value.length > 0 && inputPassword.value.length < 8) {
    errorPassword.textContent = "Password minimal 8 karakter";
  } else {
    errorPassword.textContent = "";
  }
});


// --- 2. Menangani submit form + validasi lengkap ---
form.addEventListener("submit", function (event) {
  event.preventDefault(); // mencegah reload halaman

  let valid = true;

  // Validasi username
  if (inputUsername.value.trim() === "") {
    errorUsername.textContent = "Username tidak boleh kosong";
    valid = false;
  } else {
    errorUsername.textContent = "";
  }

  // Validasi password
  if (inputPassword.value.length < 8) {
    errorPassword.textContent = "Password minimal 8 karakter";
    valid = false;
  } else {
    errorPassword.textContent = "";
  }

  // Validasi checkbox
  if (!inputSetuju.checked) {
    errorSetuju.textContent = "Kamu harus menyetujui syarat & ketentuan";
    valid = false;
  } else {
    errorSetuju.textContent = "";
  }

  if (!valid) {
    console.log("Form tidak valid, submit dibatalkan");
    pesanSukses.textContent = "";
    return;
  }

  // Jika semua valid
  console.log("Data form:", {
    username: inputUsername.value,
    password: inputPassword.value,
    setuju: inputSetuju.checked,
    kota: selectKota.value
  });

  pesanSukses.textContent = "Pendaftaran berhasil untuk " + inputUsername.value + "!";
  form.reset(); // mengosongkan form setelah berhasil
});


// Coba sendiri:
// - Submit form dalam keadaan kosong untuk melihat pesan error
// - Ketik password kurang dari 8 karakter untuk melihat validasi real-time
