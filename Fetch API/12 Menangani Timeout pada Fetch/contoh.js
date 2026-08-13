// ============================================================
// 12 - Menangani Timeout pada Fetch
// ============================================================
// Contoh di file ini butuh koneksi internet aktif.

// --- Contoh: fetch dengan timeout ---
async function fetchDenganTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal });
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error(`Request timeout setelah ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timerId);
  }
}

fetchDenganTimeout("https://api.github.com/users/octocat", 5000)
  .then((data) => console.log("Berhasil:", data.login))
  .catch((error) => console.log("Gagal:", error.message));

// --- Latihan: fetchDenganTimeout + cek response.ok ---
async function fetchDenganTimeoutDanErrorHandling(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal });

    if (!response.ok) {
      throw new Error(`Fetch gagal, status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error(`Request timeout setelah ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timerId);
  }
}

fetchDenganTimeoutDanErrorHandling("https://api.github.com/users/user-tidak-ada-123", 5000)
  .then((data) => console.log(data))
  .catch((error) => console.log("Gagal (latihan):", error.message));
