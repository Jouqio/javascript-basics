class CoffeeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.temperature = 90;
  }

  makeCoffe() {
    console.log('Membuat kopi dengan suhu', this.temperature);
  }
}

const coffee = new CoffeMachine(100);
coffee.temperature = 60;

coffee.makeCoffe(); // Output: Membuat kopi dengan suhu 60