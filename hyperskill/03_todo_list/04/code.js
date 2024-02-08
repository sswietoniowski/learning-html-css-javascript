let tasks = []

const retrieveTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
const saveTasks = (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks));

const createTaskListItem = (taskList, task) => {
    const taskListItem = document.createElement("li");
    taskListItem.setAttribute("class", "flex-space-between");
    taskListItem.innerHTML =
`
    <div>
        <input type="checkbox" ${task.complete ? "checked" : ""}>
        <span class="task">${task.name}</span>
    </div>
    <button class="delete-btn">x</button>
`;
    const checkbox = taskListItem.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", changeTaskStateEventHandler)
    const deleteButton = taskListItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", removeTaskEventHandler);
    taskList.appendChild(taskListItem);
}

const buildTasksList = (tasks) => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    for (const task of tasks) {
        createTaskListItem(taskList, task);
    }
}

window.onload = () => {
    tasks = retrieveTasks();
    buildTasksList(tasks);
}

const changeTaskState = (taskName, complete) => {
    for (let task of tasks) {
        if (task.name === taskName) {
            task.complete = complete;
        }
    }
    saveTasks(tasks);
}

const changeTaskStateEventHandler = (event) => {
    const checkbox = event.target;
    const complete = checkbox.checked;
    const li = event.target.closest("li");
    const taskName = li.querySelector(".task").innerText;
    changeTaskState(taskName, complete);
}

const removeTask = (taskName) => {
    let index = -1;
    for (const task of tasks) {
        index++;
        if (task.name === taskName) {
            break;
        }
    }
    if (index !== -1) {
        tasks.splice(index, 1);
    }
    saveTasks(tasks);
}

const removeTaskEventHandler = (event) => {
    const li = event.target.closest("li");
    const taskName = li.querySelector(".task").innerText;
    li.parentNode.removeChild(li);
    removeTask(taskName);
}

const createTask = (taskName) => {
    const task = {name: taskName, complete: false};
    tasks.push(task);
    saveTasks(tasks);
}

const addTask = () => {
    const inputTask = document.getElementById("input-task");
    const inputTaskName = inputTask.value;

    if (inputTaskName !== "") {
        const taskList = document.getElementById("task-list")
        createTaskListItem(taskList, {name: inputTaskName, complete: false});
        inputTask.value = "";
        createTask(inputTaskName);
    }
}
