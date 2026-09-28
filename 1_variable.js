// 1
var name = "Angel";
let age = 17;
const PI = 3.14159;

console.log(name);
console.log(age);
console.log(PI);


// 2
let score = 0;

score += 10;
console.log(score);

score += 5;
console.log(score);

score -= 3;
console.log(score);

const maxScore = 100;
console.log(maxScore);

// maxScore = 120;


// 3
let myNumber = 42;
let myDecimal = 3.14;
let myText = "Hello";
let isReady = true;
let notReady = false;
let nothing;
let emptyValue = null;
let myBigInt = 123456789012345678901234567890n;

console.log("myNumber:", myNumber, "Type:", typeof myNumber);
console.log("myDecimal:", myDecimal, "Type:", typeof myDecimal);
console.log("myText:", myText, "Type:", typeof myText);
console.log("isReady:", isReady, "Type:", typeof isReady);
console.log("notReady:", notReady, "Type:", typeof notReady);
console.log("nothing:", nothing, "Type:", typeof nothing);
console.log("emptyValue:", emptyValue, "Type:", typeof emptyValue);
console.log("myBigInt:", myBigInt, "Type:", typeof myBigInt);


// 4
let x;
let y = null;

console.log("x =", x);
console.log("y =", y);

console.log("typeof x:", typeof x);
console.log("typeof y:", typeof y);

console.log("x == y:", x == y);
console.log("x === y:", x === y);

// undefined: variable declared but no value assigned.
// null: intentionally represents an empty or absent value.


// 5
let student = {
  name: "Angel",
  age: 17,
  isEnrolled: true
};

console.log(student);
console.log(student.name);
console.log(student.age);

let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
console.log(mixed);

// Single data type arrays are easier to understand and process.

function greet(name) {
  return "Hello, " + name + "!";
}

let message1 = greet("Alice");
let message2 = greet("Bob");

console.log(message1);
console.log(message2);


// 6
let a = 10;
let b = "10";
let c = true;
let d;
let e = null;
let f = { name: "Ali" };
let g = [1, 2, 3];
let h = function() {
  return 5;
};

console.log("a =", a, "Type:", typeof a);
console.log("b =", b, "Type:", typeof b);
console.log("c =", c, "Type:", typeof c);
console.log("d =", d, "Type:", typeof d);
console.log("e =", e, "Type:", typeof e);
console.log("f =", f, "Type:", typeof f);
console.log("g =", g, "Type:", typeof g);
console.log("h =", h, "Type:", typeof h);

// e gives "object".
// h gives "function".


// 7
let firstName = "Angel";
let _private = "private";
let $element = "element";
let user123 = "user";

// let 123user;   // Cannot start with a number.
// let my-var;    // Hyphens are not allowed.
// let function;  // Reserved keyword.


// 8
let message;

console.log(message);

message = "Hello, World!";
console.log(message);

let name2 = "Alice";
let age2 = 25;
let isStudent = true;

const MAX_USERS = 100;

console.log(name2);
console.log(age2);
console.log(isStudent);
console.log(MAX_USERS);


// 9
let count = 0;

let firstNumber = 1;
let secondNumber = 2;
let thirdNumber = 3;

const PI2 = 3.14159;

let userName = "John";

let itemCount = 0;

console.log(count);
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
console.log(PI2);
console.log(userName);
console.log(itemCount);
