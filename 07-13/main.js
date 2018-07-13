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
function go(arg1, arg2) {
    if (arg2 > 75) {
        console.log(`The car is moving ${arg1}, at ${arg2} mph.`);
        console.log("SLOW DOWN!");
    } else {
        console.log(`The car is moving ${arg1}, at ${arg2} mph.`);
    }
}
go("backwards", "80");