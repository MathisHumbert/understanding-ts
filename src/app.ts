// type AddFn = (a: number, b: number) => number
// in this case type is better than interface
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn = (n1, n2) => {
  return n1 + n2;
};

// type User {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
// we use interface for object

interface User {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: User = {
  name: 'Mathis',
  age: 23,
  greet(phrase) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hi there');

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 23;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi');
    }
  }
}

const person1: Greetable = new Person();
person1.greet("Hi there, I'm");
console.log(person1);
