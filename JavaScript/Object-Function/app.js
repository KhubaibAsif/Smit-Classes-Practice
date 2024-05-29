//Constructor Function 

function Student(name, fatherName, age, attendence, totalClasses) {
    this.name = name
    this.fatherName = fatherName
    this.age = age
    this.attendence = attendence
    this.isStudentPunctual = function () {
        var userAttendence = attendence / totalClasses;
        if (userAttendence >= 0.9) {
            return true;
        } else {
            return false
        }
    }

}
Student.prototype.totalClasses = 60
Student.prototype.isStudentPunctual = function () {
    var userAttendence = this.attendence / this.totalClasses;
    if (userAttendence >= 0.9) {
        return true;
    } else {
        return false
    }
}

var Student1 = new Student('Khubaib', 'Asif Mehmood', '20', '55', '60',)
var Student2 = new Student('Khizer', 'Jungbahadur', '19', '58', '60',)
var Student3 = new Student('Ubaid', 'Qadirri', '18', '45', '60',)
var Student4 = new Student('Saqib', 'Tahir', '23', '52', '60',)

console.log('Student==>', Student1. isStudentPunctual())
console.log('Student==>', Student2. isStudentPunctual())
console.log('Student==>', Student3. isStudentPunctual())
console.log('Student==>', Student4. isStudentPunctual()) 