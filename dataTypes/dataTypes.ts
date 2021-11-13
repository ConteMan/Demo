/**
 * string
 */
let enName: string = 'Bob';
let age: number = 18;

let info: string = `Hello, my name is ${enName}, I'm ${age + 1} years old.`;

console.log(info);

/**
 * void
 */
function showName(): void {
  alert('My name is Bob');
}

/**
 * Union Types
 */
function getString(something: number | string): string {
  return something.toString();
}

/***** Interfaces *****/

/**
 * readonly
 */
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

const tom: Person = {
  id: 111,
  name: 'Tome',
  gender: 'male',
};
console.log(tom);

/***** Function *****/
/**
 * Function Expression
 */
let mySum: (x: number, y: number ) => number = function (x: number, y: number): number {
  return x + y;
};
console.log(mySum);

/**
 * Interface for function
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): boolean {
  return source.search(subString) !== -1;
}

/***** Enum *****/
/**
 * Days
 */
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
console.log(Days["Sun"] === 0); // true
console.log(Days[0] === "Sun"); // true

/***** Generics *****/
/**
 * Create Array
 */
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
createArray<string>(4, 'x'); // ['x', 'x', 'x', 'x']