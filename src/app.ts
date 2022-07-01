const userName = 'Mat';
// userName = 'Mathis';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if(age > 20){
//   var isOld = true
//   let isOld = true
// }

// console.log(isOld)

// console.log(result);

const add = (a: number, b: number = 10) => a + b;

console.log(add(1));

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

const printOutput = (output: number | string) => console.log(output);

printOutput(add(5, 2));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', (event) => console.log(event));
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

const person = {
  name: 'Max',
  age: 30,
};

// const copiedPerson = person false
const copiedPerson = { ...person };

const newadd = (...numbers: number[]) => {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};
//   return numbers.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
// };

const addedNumbers = newadd(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { name: personName, age: personAge } = person;
