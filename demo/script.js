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

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//map filter reduce - array methods

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);

const evenNumbers = numbers.filter((num) => num % 2 == 0);

const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);

console.log("Doubled: ", doubled); // [2, 4, 6, 8, 10]
console.log("Even Numbers: ", evenNumbers); // [2, 4]
console.log("Sum of Numbers: ", sumOfNumbers); // 15

// for (let i = 0; i < numbers.length; i++) {
//   doubled.push(numbers[i] * 2); //map
//   if (numbers[i] % 2 == 0) evenNumbers.push(numbers[i]); //filter
//   sumOfNumbers += numbers[i]; //reduce
// }

//promises
// request -> fronted -> backend -> database
// response -> database -> backend ->(promise) frontend

//promise declaration
//pending -> fulfilled -> rejected
const promise1 = new Promise((resolve, reject) => {
  //data fetch
  const love = true; // true or false

  if (love) {
    resolve("143");
  } else {
    reject("Broken Heart");
  }
});

promise1
  .then((data) => {
    console.log("String: ", data);
    data = parseInt(data);
    return data; // 143
  })
  .then((data) => {
    data = data + 1;
    console.log("Number: ", data);
  })
  .catch((error) => {
    console.log(error);
  });
