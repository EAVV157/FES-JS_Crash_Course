/** *********************
 * DATA TYPES & VARIABLES
 * ******************** */

let str = "Edgar";
console.log(str[str.length - 1]);
console.log(str.length);

console.log(typeof str);

/* Modular - remainder of the division */
console.log(15 % 2);

console.log(5 < 10);
console.log(5 > 10);

/** Null & Undefined
 * Null is that the value of a variable set to 'Nothing'
 * Undefined is a value that was never established or not set */
// NaN - Not a Number
console.log("Ed" / 2);

/** How to define a variable
 * var - not commonly used anymore
 * let
 * const
 */

let fullName = "Edgar Vargas";
let isRaining = true;
let temperature = 20;
const planet = "Earth";

temperature = temperature + 2;

console.log(temperature);

/** Converting Temperatures
 * Celsius-to-Fahrenheit formula:
 *
 *      F = C x 1.8 + 32
 */
let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log("Temp - C: " + celsius + "° to F: " + fahrenheit + "°");

/** Equality
 * Double equals checks the values
 * Triple equals checks the values AND the types
 */
let boolA = "1" == 1;
console.log(boolA);
let boolB = "1" === 1;
console.log(boolB);

let boolC = "1" != 1;
console.log(boolC);
let boolD = "1" !== 1;
console.log(boolD);

/** ************
 * CONDITIONALS
 * *********** */

let subscribed = false;
let loggedIn = true;

if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell the user to upgrade their subsciption");
} else {
  console.log("tell user to log into account");
}

let cash = 50;
let price = 40;
let diff = cash - price;

if (cash > price) {
  console.log("you paid extra - here's $" + diff + " change");
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day!");
} else {
  console.log("not enough money - you still owe $" + diff * -1 + " dollars.");
}

/** Comparison Operatiors
 * == equal values
 * === equal values and types
 * != not equal
 * !== not equal value and equal type
 *
 * > greater than
 * < less than
 * >= greater than or equal to
 * <= less than or equal to
 */

/** Logical Operators
 * && checks if the left AND right side of the comparison is true
 * true && true --> true
 * true && false --> false
 * false && true --> false
 * false && false --> false
 *
 * || cheks if the left OR right side of the comparison is true
 * true || true -> true
 * true || false -> true
 * false || true -> true
 * false || false -> false
 */

cash = 50;
price = 40;
let isStoreOpen = true;

if (cash >= price && isStoreOpen) {
  console.log("we have enough cash to buy the products");
}

if (cash >= price || isStoreOpen) {
  console.log("print the receipt");
}

/** Falsy Values
 * A falsy value is considered as 'false' when converted to a boolean
 * When you change a different type of value to boolean as such will turn to false
 *  - undefined
 *  - null
 *  - NaN
 *  - 0
 *  - ""
 *  - false
 */
let val = "Edgar";

if (val) {
  console.log("Truthy Value", val, !!val);
} else {
  console.log("Falsy Value", val, !!val);
}

/** Ternary Operators
 * A shortcut for an if else condition
 * used moslty on just one type of conditional, if else for multiple
 */

let hot = true;

hot ? console.log("weather is hot outside") : console.log("weather is cold");

subscribed = false;
loggedIn = true;

str = subscribed && loggedIn ? "show the video" : "hide the video";
console.log(str);
str = subscribed || loggedIn ? "show the video" : "hide the video";
console.log(str);

cash = 50;
price = 40;
isStoreOpen = true;

str = cash >= price && isStoreOpen ? "print receipt" : "do not print receipt";
console.log(str);

/** ****
 * LOOPS
 * D.R.Y.  --> Don't Repeat Yourself
 *  - for loop
 *  - while loop
 *  - do while loop
 * ***** */

/* let count = 1

while (count <= 100) {
    console.log(count)
    count = count + 1 OR count++
} */

for (let i = 0; i < 100; i++) {
  console.log(i);
}

//FIZZBUZZ

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " -> Frontend Simplified");
  } else if (i % 5 == 0) {
    console.log(i + " -> Simplified");
  } else if (i % 3 == 0) {
    console.log(i + " -> Frontend");
  } else {
    console.log(i + " -> " + i);
  }
}

//Print out letter for letter in a dynamic for loop
const forStr = "Frontend Simplified";

for (let i = 0; i < forStr.length; i++) {
  console.log(forStr[i]);
}

/** ********
 * FUNCTIONS
 *  - It is a block of code designed to perform a particular task
 * ********* */

//Function Definition
function welcomeNameToFES(nameF, nameL) {
  console.log(`"Welcome to FES, ${nameF} ${nameL}`);
}

//Calling the Function with different arguments
welcomeNameToFES("Edgar", "Vargas");
welcomeNameToFES("Kevin", "Sorto");
welcomeNameToFES("David", "Bragg");

function fn() {
  return 5;
}

console.log(fn());

function sumOfTwoNumbers(num1, num2) {
  return num1 / num2;
}

console.log(sumOfTwoNumbers(10, 20));

function convertCelsiusToFahrenheit(celsius) {
  console.log(`${celsius} -> ${celsius * 1.8 + 32}`);
}

convertCelsiusToFahrenheit(0);
convertCelsiusToFahrenheit(10);
convertCelsiusToFahrenheit(30);

const convCelToFahr = (cel) => {
  return cel * 1.8 + 32;
};

console.log(convCelToFahr(20));

/** ********
 * ARRAYS
 *  - Data structure that can hold multiple data values in one variable
 * ********* */

/* let item1 = 20
let item2 = 30
let item3 = 40
let item4 = 50
let item5 = 100 */

let arr = [20, 30, 40, 50, 100];

// First element of array:
console.log(arr[0]);

// Last element of array:
console.log(arr[arr.length - 1]);

// Adding elements to an existing array:
arr.push(200);

console.log(arr);

// Callback function for an array
let newArr = arr.filter((element) => element < 50);

console.log(newArr);

let grades1 = ["A+", "A", "FAIL"];
let grades2 = ["FAIL", "FAIL", "B"];
let grades3 = ["FAIL"];

function filterGrades(grades) {
  let newGrades = grades.filter((element) => element !== "FAIL");
  console.log(`[${grades}] => [${newGrades}]`);
}

filterGrades(grades1);
filterGrades(grades2);
filterGrades(grades3);

// For cycle to print all elements from array:
for (let i = 0; i < grades1.length; i++) {
  console.log(grades1[i]);
}

function notFilterGrades(grades) {
  newGrades = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== "FAIL") {
      newGrades.push(grades[i]);
    }
  }
  return newGrades;
}

console.log(`[${grades1}] => [${notFilterGrades(grades1)}]`);
console.log(`[${grades2}] => [${notFilterGrades(grades2)}]`);
console.log(`[${grades3}] => [${notFilterGrades(grades3)}]`);

arr = [1, 4, 9, 16];

let newArray = arr.map((elem) => undefined);

console.log(newArray);

let dollars1 = [1, 5, 10, 3];
let dollars2 = [0, 10, 20];

function dollarsToCentsLong(dollars) {
  let cents = dollars.map((element) => {
    return element * 100;
  });
  console.log(cents);
}

dollarsToCentsLong(dollars1);
dollarsToCentsLong(dollars2);

function dollarsToCentsShort(dollars) {
  let cents = dollars.map((elem) => elem * 100);
  console.log(`[${dollars}] => [${cents}]`);
}

dollarsToCentsShort(dollars1);
dollarsToCentsShort(dollars2);

function dollarsToCentsForLoop(dollars) {
  cents = [];
  for (let i = 0; i < dollars.length; i++) {
    cents.push(dollars[i] * 100);
  }
  return cents;
}

console.log(`[${dollars1}] => [${dollarsToCentsForLoop(dollars1)}]`);
console.log(`[${dollars2}] => [${dollarsToCentsForLoop(dollars2)}]`);

/** ******
 * OBJECTS
 *  - Used to store multiple properties of different types in a variable
 * ******* */

/* let userFirstName
let userLastName
let userDiscordId
let userSubscriptionStatus */

let users = [
  {
    username: "Edgar",
    email: "edvargas1817@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "Edgar Vargas #1817",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Zen",
    email: "Zen@gmail.com",
    password: "zen123",
    subscriptionStatus: "VIP",
    discordId: "Zen #9876",
    lessonsCompleted: [0, 1, 2, 3, 4],
  },
  {
    username: "Mitri",
    email: "Mitri@gmail.com",
    password: "mitri123",
    subscriptionStatus: "VIP",
    discordId: "Mitri #0123",
    lessonsCompleted: [0, 1, 2],
  },
];

console.log(users[0].username);
console.log(users[0].subscriptionStatus);

console.log(users[1].lessonsCompleted);
console.log(users[1].lessonsCompleted.map((elem) => elem * 2));

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].username);
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("log the user in - the details are correct");
      } else {
        console.log("password is incorrect - try again");
      }
      return;
    }
  }
  console.log(email, password);
}

login("edvargas1817@gmail.com", "test123");

function register(user) {
  users.push(user);
}

register({
  username: "Alexis",
  email: "H3ROZz112211@gmail.com",
  password: "alexis1122",
  subscriptionStatus: "VIP",
  discordId: "H3RO#0002",
  lessonsCompleted: [0, 1],
});

console.log(users[3]);

/** ******
 * DOM - Document Object Model
 * The DOM allows you to access and change the styling and content of elements on your website
 * ******* */

// First way of accessing an element *This one most used
console.log(document.querySelector("#title"));

// Second way of accessing an element
console.log(document.getElementById("title"));

// Change HTML
document.querySelector("#title").innerHTML += " Frontend Simplified";

/* let a = 1;
a += 2;

console.log(a) */

// Change CSS
document.querySelector("#title").style.fontSize = "16px";

function changeTitleToRed() {
  document.querySelector("#title").style.color = "red";
  console.log("clicked");
}

function toggleDarkMode() {
  document.querySelector("body").classList.toggle("dark-theme");
}

/** *******
 * PROMISES
 * Something that gives you a value some time in the future
 * ******** */
const emailRef = document.querySelector(".email");

// ********** 1.Then **********
/* fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    response.json().then(data => {
        console.log(data)
        emailRef.innerHTML = data.email;
    })
}) */

/* fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email;
  }); */

// ********** 2. Async/Await ********** PREFERED
async function main1() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    console.log(data)
    emailRef.innerHTML = data.email
}

main1();

const statusRef = document.querySelector('.status')
const videoRef = document.querySelector('.video')

// 1. Then
function getSubscriptionStatus() {
    return new Promise ((resolve, reject) => {
        resolve("FREE")
    })
}

getSubscriptionStatus().then(response => console.log(response))

// 2. Aysnc/Await
async function main2() {
    const status = (await getSubscriptionStatus())
    statusRef.innerHTML = status;
}

main2();
// *********************************************************


function getVideo(subscriptionStatus) {
    return new Promise ((resolve, reject) => {
        if(subscriptionStatus == 'VIP') {
            resolve("show video")
        }
        else if (subscriptionStatus == 'FREE') {
            resolve("show trailer")
        }
        reject("no video")
    })
}

async function mainTest() {
    const status = await getSubscriptionStatus();
    try {
        videoRef.innerHTML = await getVideo(status)
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e;
    }
}

mainTest();