## ES6 Class

Cara yang lebih modern untuk membuat object dan class adalah menggunakan ES6. ES6 sudah mendukung class sehingga membuat JavaScript mirip dengan bahasa lain yang berbasis class seperti Java, C++, dan C#. Berikut cara untuk membuat class.

main.js

1
class Person {
2
  constructor(name, age) {
3
    this.name = name;
4
    this.age = age;
5
  }
6
​
7
  eat() {
8
    console.log(`${this.name} is eating`);
9
  }
10
}
11
​
12
// Membuat instance dari Person
13
const person1 = new Person('Alice', 30);
14
const person2 = new Person('Bob', 25);
15
​
16
console.log(person1.name); // Output: Alice
17
console.log(person2.name); // Output: Bob
18
​
19
person1.eat(); // Output: Alice is eating
20
person2.eat(); // Output: Bob is eating

Input 
Reset

Jalankan

            
Dengan adanya ES6, penerapan salah satu pilar OOP akan lebih mudah terutama bagi Anda yang merupakan programmer Java, C++, dan C#. Selain itu, ES6 Class juga memungkinkan kita untuk menggunakan method super untuk memanggil constructor SuperClass (akan kita bahas di materi berikutnya).

Walaupun di JavaScript sudah mendukung class, hal itu tidak mengubah JavaScript menjadi bahasa pemrograman berbasis class. Faktanya, sintaks class di JavaScript hanyalah syntactic sugar atau cara alternatif dalam mendefinisikan constructor function. Untuk membuktikan hal tersebut, kita bisa mengecek tipe class melalui operator typeof.

main.js

1
class Person {};
2
console.log(typeof Person); // Output: function

Input 
Reset

Jalankan

            
Dapat terlihat bahwa outputnya adalah function. Sejauh ini, Anda sudah mengetahui cara membuat object dan class.