// Basic for loop from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }


  // Summation of numbers from 1 to 10 using a for loop
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Reverse counting from 10 to 1 using a for loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
  }

  // Multiplication table for a given number (e.g., 5)
const number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Pattern printing using a for loop
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '* ';
    }
    console.log(pattern);
  }