function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    console.log('Melakukan sesuatu sebelum Promise diselesaikan.');

    // Penentuan hasil dari proses asinkron
    const number = Math.random();

    // Nilai fulfillment dari Promise
    if (number > 0.5) {
      resolve('You did it!');
    }
    // Nilai rejection dari Promise
    else {
      reject('Sorry, something went wrong!');
    }
  }, 2000);
}

export function doSomething() {
  return new Promise(promiseExecutor);
}