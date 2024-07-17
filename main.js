// console.log("Hello world");
// console.log(a);
/*
function greet(fName, lName) {
    return fName + ' ' + lName;
}

const myName = greet('Mohammad', 'Waliullah');


const gender = 'Male';

if (gender) {
    console.log('Mr.', myName);
} else {
    console.log('Ms.', myName);
}
    

for (let i = 0; i <= 1000; i++) {
    console.log(i);
}
    */

// const arr1 = [2, 5, 6, 7, 9, 23, 22];
// let bigNum = arr1[0];
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > bigNum) {
//         bigNum = arr1[i];
//     }
// }
// arr1.reverse();
// console.log(arr1)
/*
const people = {
    person1: {
        gender: 'Male',
        fName: 'Md.',
        lName: 'Wali'
    },
    person1: {
        gender: 'Male',
        fName: 'Md.',
        lName: 'Fahim'
    },
    person1: {
        gender: 'Female',
        fName: 'Ms.',
        lName: 'Rani'
    },
}
console.log('first')
if (people.person1.gender === 'Male') {
    console.log(people.person1.lName);
}
    
let a = 2;
a = 3;
console.log(a);

const lName = "Wali";
const age = 31;
const isLoggedIn = false;

if (isLoggedIn) {
    console.log(lName + ' is logged in');
} else {
    console.log(lName + ' is not logged in');
}

let ans = 0;
for (let i = 0; i <= 100; i++) {
    ans = ans + i;
}
console.log(ans);

const people = [
    {
        gender: 'M',
        lName: 'wali'
    },
    {
        gender: 'M',
        lName: 'hasib'
    },
    {
        gender: 'F',
        lName: 'rani'
    },
];

for (let item of people) {
    if (item.gender === 'M') {
        console.log(item.lName);
    } 
}


const num1 = 12;
const num2 = 13;

function addNums(a, b, callbackFn) {
    const ans = a + b;
    const result = callbackFn(ans);
    return result;
}

function prettyFormat(result) {
    return `The two number addition is ${result}`;
}

function passiveTense(result) { 
    return `${result} is given as addition.`
}

console.log(passiveTense(addNums(num1, num2)));
console.log(addNums(num1, num2, passiveTense));

function calculate(num1, num2, callbackFn) {
    const result = callbackFn(num1, num2); // sub(5, 2) 3
    return result;
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

console.log(calculate(5, 2, sub)); // 3


function greetings() {
    console.log('hello');
}

setTimeout(greetings, 2 * 1000);

#create a counter in js that counts from 30 to 0


function greetings() {
    
}
for (let i = 30; i >= 0; i--) {
    setInterval(() => console.log(i), 1000);
}
for (let i = 30; i >= 0; i--) {

}

setInterval(() => console.log(num), 1000);


const Day = new Date();
const hour = Day.getHours();
const minute = Day.getMinutes();
const second = Day.getSeconds();
function clock() {
    console.log(hour + ':' + minute + ':' + second);
}
setInterval(clock, 1000);


function clearTerminal() {
    process.stdout.write('\033c');
}

function displayTime() {
    const now = new Date();
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());
    const time = `${hours}:${minutes}:${seconds}`;
    
    clearTerminal();
    console.log(time);
}

Update the clock every second
setInterval(displayTime, 1000);

Display the time once on initial run
displayTime();


let counter = 30;
const interval = setInterval(() => {
    console.log(counter);
    if (counter === 0) {
        clearInterval(interval);
    } else {
        counter--;
    }
}, 1000);

function greetings() {
  return "hello";
}
let ans = 0;
const start = performance.now();
greetings();
for (let i = 0; i < 1000000; i++) {
    ans += i;
}
const end = performance.now();
console.log(end - start);
*/

const startTime = Date.now();

setTimeout(() => {
    const endTime = Date.now();
    const timeDifference = endTime - startTime;
    console.log(`Time difference: ${timeDifference} ms`);
}, 1000);

