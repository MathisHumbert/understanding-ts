// const names: Array<string> = []; // same as string[]

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   data.split(' ')
// })

// CONSTRAINS: <T extends object, U extends object> extends force us to pass object for T and U
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Math' }, { age: 23 });
// const mergedObjBis = merge<{ name: string }, { age: number }>(
//   { name: 'Math' },
//   { age: 23 }
// ); // TS does this by it's own behind the scene
// const mergedObj = merge({ name: 'Math' }, { age: 23 }) as {name: string, age: number};
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + 'elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sport', 'Cooking']));
// console.log(countAndDescribe(10));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

// extractAndConvert({}, 'name');
extractAndConvert({ name: 'Mathis' }, 'name');

class DataStorage<T extends string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.addItem('Mat');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = { name: 'max' };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: 'manu' });
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

// PARTIAL
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

// READONLY
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop()
