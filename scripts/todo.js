// alert("Linked todo.js")

const todoListContainer = document.getElementById("todoListContainer")
const iTask = document.getElementById("iTask")

function addTask()
{

    let todoContainer = document.createElement("li")
    todoContainer.classList.add("todoContainer")
    todoListContainer.appendChild(todoContainer)

    let taskComplete = document.createElement("span")
    taskComplete.classList.add("material-symbols-outlined")
    taskComplete.innerHTML = "circle"
    todoContainer.appendChild(taskComplete)

    let task = document.createElement("span")
    task.classList.add("task")
    task.innerHTML = iTask.value
    todoContainer.appendChild(task)

    let rmTask = document.createElement("span")
    rmTask.classList.add("material-symbols-outlined")
    rmTask.classList.add("rm-task")
    rmTask.innerHTML = "close"
    todoContainer.appendChild(rmTask)

    iTask.value = ""
}

