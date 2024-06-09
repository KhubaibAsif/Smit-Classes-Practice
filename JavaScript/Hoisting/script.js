// There are two phases of code execution
// 1.Memory Allocation
// 2. Code Execution


// Declaration se phle console kroge to undefined aayega "MEMORY ALLOCATION" is wjh se
console.log("X=>>", x) //Undefined

var x = 10 
console.log(x)

function sum(a, b,){
    return a + b
}
console.log("x==>", x)

var sum1 = sum(5, 10)
var sum2 = sum(10, 10)
if(true) {
    console.log(sum2)
}

// Differnt B/w var let and const
// 1. varible made using var can be redeclare 
// but variable made using let cannot be redeclare 

let x = 10
x = 20

console.log(x);