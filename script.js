const list = JSON.parse(localStorage.getItem("taskList")) || [];
const input = document.querySelector(".inp-task");
const listContainer = document.querySelector(".list-container");
const addBtn = document.querySelector(".add-btn");

document.addEventListener("DOMContentLoaded", updateTask);

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const task = input.value;
  if (task.trim() !== "") {
    list.push(task);
    updateTask();
    input.value = "";
  } else {
    window.alert("Please enter a Task...");
  }
}

function updateTask() {
  localStorage.setItem("taskList", JSON.stringify(list));

  let taskList = "";

  for (let i = 0; i < list.length; i++) {
    taskList += `<div class="list" data-index="${i}">
            <div class="para">
              <i class="ri-arrow-right-s-line"></i>
              <li>${list[i]}</li>
            </div>
            <div class="del-btn">
              <i class="ri-close-circle-fill"></i>Delete
            </div>
          </div>
          <div class="line"></div>`;
  }

  listContainer.innerHTML = taskList;

  const delBtn = document.querySelectorAll(".del-btn");
  delBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.parentElement.getAttribute("data-index");
      list.splice(index, 1);
      updateTask();
    });
  });
}

const day = document.querySelector(".day");
const date = new Date();

day.innerHTML = date.toLocaleDateString();
