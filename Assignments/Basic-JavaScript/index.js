// 1. Alert:

var number = prompt("hello World");
alert("Wellcome To Javascript Basic Assignment");

// 2. Variables For Strings

var FavoriteFood = ("Pizza");
console.log("FavoriteFood");

// 3. Variables For Numbers 

var number1 = 10;
var number2 = 5;
console.log("Addition:", number1 + number2);
console.log("Subraction:", number1 - number2);
console.log("Multiplication:", number1 * number2);
console.log("Division:", number1 / number2);

// 4. Variable Names Legal and Illegal:
// Legal variable names: snake_case, camelCase, PascalCase
// Illegal variable names: 1stVariable (starting with a digit), my-variable (containing hyphens), my variable (containing spaces)

// 5. Math Expressions: Familiar Operators:

var result = (number1 + number2) * (number1 - number2) / (number2);
console.log("Result:", result);

// 6. Math Expression: Unfamiliar Operators:

// % (modulus) operator gives the remainder of the division operation 
var remainder = number1 % number2;
console.log("Remainder:", remainder);

// post increment & pre increment
var x = 5;
x++
console.log("Post Increment:",x); // Prints 5, then increment x to 6 
console.log("Pre Increment:", ++x) // Incremnet x to 7, then prints 7

// 7. Contatenating Text Strings:

var firstName ="Khubaib";
var lastName ="Asif";
var fullName = firstName + " " + lastName;
console.log("fullName:", fullName)

// 8. Prompts

var userAge =prompt("Please Enter Your Age");
console.log("User's Age:", userAge);

// 9. if Statements

var number =prompt("Enter A Number");
if(number % 2 == 0) {
    console.log(number+ " ", "is even.")
}else{
    console.log(number+ " ", "is odd.")
}

// 10. if Else....And Else if Statements

var grade = prompt("Enter Your Numerical Grade:");
if(grade >= 90) {
    console.log("A Grade")
} else if(grade >= 80) {
    console.log(" B Grade")
}else if(grade >= 70) {
    console.log("C Grade")
}else if(grade >= 60) {
    console.log("D Grade")
}else if(grade >= 50) {
    console.log("Failed!")
}