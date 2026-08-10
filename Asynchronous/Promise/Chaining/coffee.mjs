export function makeCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 2000;
    let isSuccess = false;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

    setTimeout(() => {
      const number = Math.random();
      if (number > 0.3) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error('Maaf, kopi gagal dibuatkan.'));
        return;
      }

      console.log('Pramusaji selesai membuat kopi.');
      resolve(name);
    }, estimationTime);
  });
}

export function sendCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 1000;
    let isSuccess = false;

    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    setTimeout(() => {
      const number = Math.random();
      if (number > 0.1) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error('Maaf, kopi gagal diantarkan.'));
        return;
      }

      console.log('Pramusaji sudah sampai ke meja.');
      resolve(name);
    }, estimationTime);
  });
}