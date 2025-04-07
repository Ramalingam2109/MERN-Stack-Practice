let userAge = 25;
let userName = "John Doe";

console.log(userAge);
console.log(userName);
/*
// hey this 
// is multiline comment 
// example 
*/

// declaring two varibales
let num1 = 1;
let num2 = 5;
// operations in js
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

console.log("Addition operation result ", addition);
console.log("subtraction operation result ", subtraction);
console.log("multiplication operation result ", multiplication);
console.log("division operation result ", division);

// data types

let exampleString = "Hello, world";

let exampleNumber = 69;

let exampleArray = [1, "two", Boolean, false, 4.5];


console.log("exampleString:", exampleString);
console.log("exampleNumber:", exampleNumber);
console.log("exampleArray:", exampleArray);


// creating functions in javascript 

function greetUser(name){
    return 'Helo, ${name} !, Welcome to the website'
}

let greetings = greetUser("Ram");
console.log(greetings)

// conditional statements in javascript 
let temperature = 28;

if (temperature > 40) {
    console.log("It's a hot day!, please don't go outside");
} else if (temperature >30 && temperature <40) {
    console.log("The temperature is pleasant.");
}
else{
    console.log("The temprature is freezing , please wear seaters and raincoats ");
}

// for loop exercise 

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log(5 == "5"); 
console.log(5 === "5");

console.log(0 == false); 
console.log(0 === false); 

console.log(null == undefined); 
console.log(null === undefined); 