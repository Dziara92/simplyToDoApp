//Selectors
const addTaskBtn = document.querySelector(".addTaskBtn");
const input = document.querySelector("input");
const ulToDoList = document.querySelector(".todo-list");
const warrning = document.querySelector(".worning");
const clearAllTasks = document.querySelector(".trash");
const deleteAllP = document.querySelector(".deleteAll");
let tasks = [];

//add Event Listeners

addTaskBtn.addEventListener("click", addToDoTask);

//Function
function addToDoTask(e) {
  e.preventDefault();
  const taskValue = input.value;

  if (!taskValue) {
    warrning.classList.add("showworning");
    return;
  } else {
    warrning.classList.remove("showworning");
    let randomIndex = Math.floor(Math.random() * 100);
    tasks.push({
      index: randomIndex,
      taskName: taskValue,
    });
    input.value = "";
    displayTasks();
  }
}

const displayTasks = () => {
  const tasksToDisplay = tasks.map((task) => {
    return ` <div class="task" id="${task.index}">
        <li>${task.taskName}</li>
        <button class="checkedBtn"><i class="fa-solid fa-check"></i></button>
        <button class="deleteBtn" onclick="deleteTask(${task.index})">delete</button>
    </div>`;
  });

  ulToDoList.innerHTML = tasksToDisplay;

  const checkedBtn = document.querySelectorAll(".checkedBtn");
  chcekedTask(checkedBtn);
  deleteAllTasks();
};

const chcekedTask = (checkedBtn) => {
  checkedBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      let btnItem = e.target;
      console.log(btnItem);
      btn.classList.toggle("green");
    })
  );
};

const deleteTask = (index) => {
  let newArrayTasks = tasks.filter((task) => task.index !== index);
  tasks = newArrayTasks;
  displayTasks();
};

const deleteAllTasks = () => {
  if (tasks.length < 1) {
    clearAllTasks.classList.remove("showtrash");
    deleteAllP.classList.remove("showDeleteAll");
    return;
  } else {
    clearAllTasks.classList.add("showtrash");
    deleteAllP.classList.add("showDeleteAll");
    clearAllTasks.addEventListener("click", () => {
      clearAllTasks.classList.remove("showtrash");
      tasks = [];
      displayTasks();
    });
  }
};
