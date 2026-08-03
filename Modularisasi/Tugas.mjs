/**
 * TODO:
 * 1. Impor fungsi unique dari utils.mjs secara default
 * 2. Impor fungsi splitString dari utils.mjs secara named
 *
 * Catatan.
 * Jangan ubah kode apa pun yang sudah tersedia sebelumnya
 */

function splitString(string) {
  if (typeof string !== 'string') {
    return [];
  }
  return Array.from(string);
}
function unique(array) {
  const set = new Set(array)
  return Array.from(set.values());
}
/**
 * TODO:
 * 1. Ekspor fungsi splitString secara named export
 * 2. Ekspor fungsi unique secara default export
 */

export { splitString };
export default unique;