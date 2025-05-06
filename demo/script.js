console.log("Hello, world!");
console.log("This is a demo script.");

let a = 5;
let b = 10;
let sum = a + b;
console.log("The sum of " + a + " and " + b + " is: " + sum);

// arrow function
const add = (a, b) => {
  a = a * 2;
  b = b * 2;
  return a + b;
};
console.log("The sum of " + a + " and " + b + " is: " + add(100, 200));

const diff = (a, b) => a - b;
console.log("The difference of " + a + " and " + b + " is: " + diff(100, 200));

const user = (name, age) => ({ name: "Dinesh", age: 34 });
console.log(user("Dinesh", 34)); // { name: "Dinesh", age: 34 }

//single-thread, non-blocking, asynchronous
//callback function

const square = (num) => num * num;
const cube = (num) => num * num * num;

//a,b = a2 + b2 + 2ab
//a,b = a3 + b3 + 2ab
const quadratic = (a, b, callback) => {
  return callback(a) + callback(b) + 2 * a * b;
};

console.log("Square: ", quadratic(2, 3, square)); // 25
console.log("Cube: ", quadratic(2, 3, cube)); // 125

console.log("Start");

setTimeout(() => {
  console.log("Zero");
}, 0); // non-blocking

setTimeout(() => {
  console.log("5000");
}, 5000); // non-blocking

setTimeout(() => {
  console.log("3000");
}, 3000); // non-blocking

console.log("End");
