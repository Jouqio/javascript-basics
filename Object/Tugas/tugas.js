const employees = [
  {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
   
}

const employees = [
  {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
  const newEmployee = {
    name: name,
    email: email,
    joinYear: joinYear,
  };

  employees.push(newEmployee);
}

// Contoh pemanggilan
addEmployee('Indra', 'indra@dicoding.com', 2022);

console.log(employees);
/* Output:
[
  { name: 'Fulan', email: 'fulan@dicoding.com', joinYear: 2020 },
  { name: 'Indra', email: 'indra@dicoding.com', joinYear: 2022 }
]
*/