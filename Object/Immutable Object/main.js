const user = {
  name: 'John',
  email: 'jouqio@.com',
};

// Membekukan objek user
Object.freeze(user);

// Mencoba mengubah properti dari objek yang dibekukan
user.email = 'jouqio@.com';
console.log(user); // Output: { name: 'John', email: 'jouqio@.com' }