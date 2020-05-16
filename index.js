/* 1. var, let and const * /

/* Old Version of JavaScript*/

// var name = "fitsum";

// var name = "helen";

// name = "adil";

// console.log(name);

/* talk about about scoping */

var num = 5;

function number() {
  var num2 = 8;
  console.log(num2);
}

// number();
// console.log(num2);
// console.log(num);

/* ES6 */
// let and const
const birthYear = 2020;

// birthYear = 1989;

// console.log(birthYear);

/* talk about scoping here */

const list = [1, 3, 4, 5, 6];
for (var i = 0; i < list.length; i++) {
  // console.log(i);
}

console.log(i);

/*2. template literal */

/* Old Version of JS */

let name = "Bezawit";

// console.log("hello my name is " + name);
/* ES6 */

let firstName = "fitsum";

let lastName = "belayneh";

let age = 15;

console.log(
  `Hello my full name is ${firstName} ${lastName} and I am ${age} years old`
);
