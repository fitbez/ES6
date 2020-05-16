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

// const list = [1, 3, 4, 5, 6];
// for (var i = 0; i < list.length; i++) {
//   // console.log(i);
// }

// console.log(i);

/*2. template literal */

/* Old Version of JS */

let name = "Bezawit";

// console.log("hello my name is " + name);

/* ES6 */

let firstName = "fitsum";

let lastName = "belayneh";

let age = 15;

// console.log(
//   `Hello my full name is ${firstName} ${lastName} and I am ${age} years old`
// );

/* 3. Object literal */

/* Old JS */
function getCar(make, model) {
  return {
    make: make,
    model: model,
  };
}

var car = getCar("Honda", "Civic");

// console.log(car);

/* ES6 */
function getCar(make, model) {
  return {
    make,
    model,
  };
}

var car = getCar("Honda", "Civic");

// console.log(car);

/* 4. Object destructuring */

/* Old Js */

var user = {
  name: "fitusm",
  age: 15,
};

var myName = user.name;

console.log(myName);

/* ES6 */

const list = {
  names: "todo list",
  todos: ["shoping", "gym", "study"],
};

const { names, todos } = list;

console.log(names, todos);

/* 5. arrow function */
/* old Js */

function sayName() {
  console.log("Hello I am Fitsum");
}

var sayAge = function () {
  console.log("my age is ......");
};

sayName();
sayAge();

/* ES6 */

const sayLocation = (location) => console.log(`my location is ${location}`);

sayLocation("silver spring");
