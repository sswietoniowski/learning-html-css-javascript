const removeTask = (event) => {
    const li = event.target.closest("li");
    li.parentNode.removeChild(li);
}

const addTask = () => {
    const inputTask = document.getElementById("input-task");
    const inputTaskName = inputTask.value;

    if (inputTaskName !== "") {
        const newListItem = document.createElement("li");
        newListItem.setAttribute("class", "flex-space-between");
        newListItem.innerHTML =
`
    <div>
        <input type="checkbox">
        <span class="task">${inputTaskName}</span>
    </div>
    <button class="delete-btn">x</button>
`;
        const taskList = document.getElementById("task-list")
        const deleteButton = newListItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", removeTask);
        taskList.appendChild(newListItem);

        inputTask.value = "";
    }
}
