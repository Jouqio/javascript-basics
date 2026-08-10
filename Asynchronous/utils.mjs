function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    resolve('You did it!');
  }, 2000);
}

export function doSomething() {
  return new Promise(promiseExecutor);
}