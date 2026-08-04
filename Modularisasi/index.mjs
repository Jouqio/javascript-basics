// index.mjs

// Named import + import alias
import { name, favoriteFood as food, sayHi } from './module.mjs';

console.log(name);
console.log(food);
sayHi(name);

console.log('---');

// Import * (mengimpor semua nilai sekaligus)
import * as user from './module.mjs';

console.log(user.name);
console.log(user.favoriteFood);
user.sayHi(user.name);
