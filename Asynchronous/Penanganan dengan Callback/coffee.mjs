export function makeCoffee(callback) {
  const estimationTime = 5000;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

  setTimeout(() => {
    // Do some tasks to make coffee...

    console.log('Pramusaji selesai membuat kopi.');
    callback();
  }, estimationTime);
}

export function sendCoffee(callback) {
  const estimationTime = 2000;

  console.log('Pramusaji sedang mengantarkan kopi pesanan');

  setTimeout(() => {
    // Do some tasks to send coffee...

    console.log('Pramusaji sudah sampai ke meja.');
    callback();
  }, estimationTime);
}