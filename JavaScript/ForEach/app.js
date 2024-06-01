var students = [
    { name: "Khubaib" },
    { name: "Khizer Butt" },
    { name: "Ubaid Raza" },
    { name: "Hassan" },
    { name: "Usman" },
];

var list = document.getElementById("list");
function renderData() {
    list.innerHTML = "";
    students.forEach(function (data, index) {

        var ele = ` <li id=${index}> <span>${data.name}</span>  <button onclick="editObj(this)">Edit</button> <button onclick="deleteObj(this)">Delete</button></li>`;

        list.innerHTML += ele;
    });
}
renderData();

function editObj(ele) {
    console.log(ele.parentElement.id);
    students[ele.parentElement.id].name = prompt("Username");
    console.log(students);
    renderData();
}
function deleteObj(ele) {
    students.splice(ele.parentElement.id, 1);
    console.log("After delete=>", students);
    renderData();
}
