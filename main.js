const students = [];

const form = document.getElementById("student-form");

const updateStudentsHtml = function () {
  const app = document.getElementById("app");
  app.innerHTML = "";
  for (student of students) {
    app.innerHTML += `<div class="card col-2" id="${student.id}"> ${student.name}, ${student.house}<input type="button" class="expelButton" onclick="expelStudent(event)" value="Expel"/></div>`;
  }
  console.log(app);
};

const addNewStudent = function (event) {
  event.preventDefault();
  let name = document.querySelector(".name").value;
  let house = getRandomHouse();
  let id = Math.floor(Math.random() * 1000);
  let newStudent = { name: name, house: house, id: id };

  students.push(newStudent);
  updateStudentsHtml();
  document.querySelector(".modal").style.display = "none";
  document.querySelector("form").reset();
};
form.addEventListener("submit", addNewStudent);

const expelStudent = function (event) {
  let studentId = event.target.parentElement.id;
  event.target.parentElement.style.backgroundColor = "red";
  event.target.value = "Expelled";
  console.log("id: ", studentId);
};

const getRandomHouse = function () {
  let houses = ["Ravenclaw", "Gryffindor", "Slytherin", "Hufflepuff"];
  let randomNumber = Math.floor(Math.random() * houses.length);
  let randomHouse = houses[randomNumber];

  return randomHouse;
};

let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};
