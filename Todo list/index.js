"use strict"

// function myfunc() {
//   let inputTask = document.getElementById("add-task__input");
//   let taskList = inputTask.value;
//   console.log(taskList);
//   let addTask = document.getElementById("task-list");
//   if (taskList !== null) {
//     let task = document.createElement("li");
//     task.textContent = taskList;
//     addTask.appendChild(task);
//     taskList = "";
//   } else {
//     return;
//   }
//   // addTask.style.display = "block";
//   // addTask.style.color = "white";
//   // addTask.style.backgroundColor = "green";
//   // addTask.style.padding = "10px";
//   // addTask.style.borderRadius = "5px";
//   // addTask.style.width = "200px";
//   // addTask.style.height = "50px";
//   // addTask.style.fontSize = "20px";
//   // addTask.style.margin = "10px";
//   // addTask.style.textAlign = "center";
//   // addTask.style.lineHeight = "50px";
//   // addTask.style.cursor = "pointer";
//   // addTask.style.transition = "all .5s";
//   // addTask.style.boxShadow = "0 0 10px green";
//   // addTask.style.border = "none";
//   // addTask.style.outline = "none";
//   // addTask.style.position = "absolute";
//   // addTask.style.top = "50%";
//   // addTask.style.left = "50%";
//   // addTask.style.transform = "translate(-50%, -50%)";
//   // addTask.style.zIndex = "100";
//   // addTask.style.transition = "all .5s";
//   // addTask.style.cursor = "pointer";
// }

let getTask = document.getElementById("add-task__input");
let clickButton = document.getElementById("add-task-button");
let taskList = document.getElementById("task-list");

clickButton.addEventListener("click", function () {
  let inputTask = getTask.value.trim();
  if (inputTask !== "") {
    let listTask = document.createElement("li");
    listTask.textContent = inputTask;
    taskList.appendChild(listTask);
    getTask.value = '';
    listTask.style.backgroundColor = 'green'; // temporary color added.
  }
});
