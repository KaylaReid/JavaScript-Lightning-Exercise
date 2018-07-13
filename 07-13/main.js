// console.log("Hello World");
// Create a function called `go` that takes 2 arguments: 
// 1. direction (forwards, backwards, etc.)
// 1. speed (mph).

// The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.


// MY Stuff *****
// function go (arg1, arg2) {
//     console.log(`The car is moving ${arg1}, at ${arg2} mph.`);
// }
// go("backwards", "3");

// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!

// My Stuff *****
// function go(arg1, arg2) {
//     if (arg2 > 75) {
//         console.log(`The car is moving ${arg1}, at ${arg2} mph.`);
//         console.log("SLOW DOWN!");
//     } else {
//         console.log(`The car is moving ${arg1}, at ${arg2} mph.`);
//     }
// }
// go("backwards", "80");


// My Stuff *****
const birthRates = [
  { year: 1969, birthRate: 13}, 
  { year: 1970, birthRate: 16}, 
  { year: 1971, birthRate: 15}, 
  { year: 1972, birthRate: 11}, 
  { year: 1973, birthRate: 18}, 
  { year: 1974, birthRate: 17}, 
  { year: 1975, birthRate: 9}
]
const bestYears = [];


    for (let i = 0; i < birthRates.length; i++) { //Just a simple for loop
        const currentYear = birthRates[i]; //declare a variable to store the iterations of the array
        if (currentYear.birthRate > 15) { 
            // . is a way to access the proporty you want out of the array
            // conditional to call that specific iteration, the dot to denote the method (object property), and state that if greater than 15 yrs ....
            bestYears.push(currentYear) // take that section of the array and push it to the empty array
        }
    }
console.log(bestYears)

birthRates.forEach(function (currentYear){ //forEach. just iniates a loop on the array birthRates. For each iteration of this birthRates array, i want you to do this (a new function). forEach also requires an argument to pass the data around, which is currentYear here.
    if(currentYear.birthRate > 15){ //same argument, same data
        bestYears.push(currentYear) //push the data to the new array
    }
 });
 console.log(bestYears); // again log to make sure it worked.
 
 
 ///////////////////// Yet Another Way \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 
 for (currentYear of birthRates) { // for/of loop, pass an argument (data container) that will iterate through the birthRates array and grab object data
    if(currentYear.birthRate > 15){ // data-container.property,essentially
        bestYears.push(currentYear) // push data from container to the empty array
    }
 };
 console.log(bestYears); //again log to ensure it worked


// this is an object with objects in it
const politicain = {
    platform: {
        money: ["I like it", "I have lots of it", "I don't want other people to have it"],
        health: "I'm against it"
    },
    district: "Michigan 13"
}
// use the dots to drill into the object to get to the one you want 
// you can use [] select what index of the array within the object you that you woulld like to access
console.log(politicain.platform.money[2]) 

// My Stuff
// 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
// 3. Invoke each function a couple times with different argument values.
// 

console.log("hello world")

function addUp (num1, num2){
    let sum = num1 + num2
    console.log(sum)
}
addUp(4,10);

function takeAway (num1, num2) {
    let dif = num1 - num2
    console.log(dif)
}
takeAway(8, 2);

// Below is a function being passed to a function
function calculate(num1, num2, operator) {
    operator(num1, num2)
}
calculate(1, 3, addUp)