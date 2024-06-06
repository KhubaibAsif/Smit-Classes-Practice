

// 1.setitem
// 2.getitem
// 3.removeitem
// 4.clear


console.log(localStorage)

// Save data in local storage
// local storage mein hamesha string save hota he
//  simple string to store krna


localStorage.setItem("email", "Khubaib@gmail.com");
// array ya object to store krna

var todos = ["Fajr Namaz", "Tilawat", "Araam", "Nashta", "Class"];

var todosString = JSON.stringify(todos);
localStorage.setItem("todos", todosString);

//Get data from local storage
var email = localStorage.getItem("email");
var todos = localStorage.getItem("todos");
todos = JSON.parse(todos);
console.log("todos=>", todos);