"use strict"

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
  }
});
