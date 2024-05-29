// 1.Variables and Math Expressions

// Declare two variables and assign them values
var num1 = 10;
var num2 = 5;

// Calculate the sum
var sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

// Calculate the difference
var difference = num1 - num2;
console.log("The difference of " + num1 + " and " + num2 + " is " + difference);

// Calculate the product
var product = num1 * num2;
console.log("The product of " + num1 + " and " + num2 + " is " + product);

// Calculate the quotient
var quotient = num1 / num2;
console.log("The quotient of " + num1 + " and " + num2 + " is " + quotient);

// 2.Conditionals
var age = 20;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// 3. Array Initialization and Manipulation
var fruits = [];
fruits.push("apple", "banana", "orange", "grape", "kiwi");
console.log("Fruits:", fruits);

// 4. Looping through Arrays
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 5. Pattern Printing with Nested Loops
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}
// 6. Mathematical Operations with Loops
let sumOfNaturalNumbers = 0;
for (let i = 1; i <= 10; i++) {
    sumOfNaturalNumbers += i;
}
console.log("Sum of first 10 natural numbers:", sumOfNaturalNumbers);

// 7. Array Manipulation with Loop
var colors = [];
colors.push("red", "green", "blue", "yellow", "orange");
console.log("Colors:", colors);

// 8. Accessing Array Elements
for (let i = 0; i < colors.length; i++) {
    console.log("Index:", i, "Color:", colors[i]);
}

// 9. Reversing Array Elements
var reversedColors = colors.reverse();
console.log("Reversed Colors:", reversedColors);