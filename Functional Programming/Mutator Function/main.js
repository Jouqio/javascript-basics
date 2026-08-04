function max(arrayOfNumbers) {
  return arrayOfNumbers
    .sort((a, b) => a - b)
    .pop();
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]