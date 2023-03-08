//Selectors
const addTaskBtn = document.querySelector(".addTaskBtn");
const input = document.querySelector("input");
const ulToDoList = document.querySelector(".todo-list");
let tasks = [];

//add Event Listeners

addTaskBtn.addEventListener("click", addToDoTask);

//Function
function addToDoTask(e) {
  e.preventDefault();
  const taskValue = input.value;

  if (!taskValue) {
    alert("please fill task");
    return;
  }
  let randomIndex = Math.floor(Math.random() * 100);

  tasks.push({
    index: randomIndex,
    taskName: taskValue,
  });
  input.value = "";
  displayTasks();
}

const displayTasks = () => {
  const tasksToDisplay = tasks.map((task) => {
    return ` <div class="task" id="${task.index}">
        <li>${task.taskName}</li>
        <button class="checkedBtn">checked</button>
        <button class="deleteBtn" onclick="deleteTask(${task.index})">delete</button>
    </div>`;
  });

  ulToDoList.innerHTML = tasksToDisplay;

  const checkedBtn = document.querySelectorAll(".checkedBtn");
  chcekedTask(checkedBtn);
};

const chcekedTask = (checkedBtn) => {
  checkedBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      let btnItem = e.target;
      btnItem.classList.toggle("green");
    })
  );
};

const deleteTask = (index) => {
  let newArrayTasks = tasks.filter((task) => task.index !== index);
  tasks = newArrayTasks;
  displayTasks();
};
