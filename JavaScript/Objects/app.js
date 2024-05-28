var myInfo = {
    name: "Khubaib",
    fatherName: "Asif Mehmood", 
    isStudent: true, 
    age: 18,
  };
  
  myInfo.CNIC = "4210197022321";
  
  myInfo.dob = new Date("02-18-2006");
  
  myInfo.caluclateAge = function () {
    var now = new Date().getFullYear();
    var userDobYear = new Date(this.dob).getFullYear();
    var userAge = now - userDobYear;
    return userAge;
  }; 
  
  console.log("myInfo:", myInfo);
  
  console.log("Current Age Of The User:", myInfo.caluclateAge());
  
  delete myInfo.age;
  
  console.log("My Info after delete=>", myInfo);
    
  document.getElementById("userName").innerText = myInfo.name;
  document.getElementById("fatherName").innerText = myInfo.fatherName;
  document.getElementById("dob").innerText = new Date(
    myInfo.dob
  ).toLocaleDateString();
  document.getElementById("age").innerText = myInfo.caluclateAge();
  
