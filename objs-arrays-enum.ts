// const person: { name: string; age: number }
// const person: {
//   name: string; //string
//   age: number; //number
//   hobbies: string[]; //array of string
//   role: [number, string]; //tuple => exact amount and type of an array
// } = {
//   name: 'Mathis',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOUR = 2;

enum Role {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOUR, // 2
}

// enum Role {
//   ADMIN = 'ADMIN',
//   READ_ONLY = 100,
//   AUTHOUR,
// }

const person = {
  name: 'Mathis',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin'];

let favoriteActivities: any[];
favoriteActivities = ['Sport', 5];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) ERROR
}

if (person.role === Role.AUTHOUR) {
  console.log('is author');
}
