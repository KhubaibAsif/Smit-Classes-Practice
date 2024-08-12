let userName: string = "Khubaib Asif";
let userAge: number = 28;
let userFavDishes: string[] = ["Biryani", "Pizza"];
let userIsMarried: boolean = false;

console.log("userName=>", userName);
console.log("userAge=>", userAge);

userIsMarried = false;

interface User {
  firstName: string;
  lastName: string;
  age: number | string;
  CNIC?: number;
  favSubjects: string[];
  favNumbers: number[];
}

const User: User = {
  firstName: "Khubaib",
  lastName: "Asif",         
  favNumbers: [10, 12],
  favSubjects: ["English", "Urdu"],
  age: 20,
};

function greet(name: string): string {
    return `Hello ${name}`;
  }
  
  let msg : string =  greet("Khubaib Asif");
  
  console.log(msg)