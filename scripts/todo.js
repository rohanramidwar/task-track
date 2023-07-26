// alert("Linked todo.js")

const todoListContainer = document.getElementById("todoListContainer")
const iTask = document.getElementById("iTask")

let todoContainer
let taskComplete
let task
let rmTask

function addTask()
{
    if(iTask.value === "")
    {
        alert("Add a task first!!")
    }
    else
    {

        todoContainer = document.createElement("li")
        todoContainer.classList.add("todoContainer")
        todoListContainer.appendChild(todoContainer)
    
        taskComplete = document.createElement("span")
        taskComplete.classList.add("material-symbols-outlined")
        taskComplete.innerHTML = "circle"
        todoContainer.appendChild(taskComplete)
    
        task = document.createElement("span")
        task.classList.add("task")
        task.innerHTML = iTask.value
        todoContainer.appendChild(task)
    
        rmTask = document.createElement("span")
        rmTask.classList.add("material-symbols-outlined")
        rmTask.classList.add("rm-task")
        rmTask.setAttribute("onclick", "deleteTask()")
        rmTask.innerHTML = "close"
        todoContainer.appendChild(rmTask)
    
    }
    iTask.value = ""
}

todoListContainer.addEventListener("click", function(e)
{
    if(e.target.classList.contains('rm-task'))
    {
        e.target.parentElement.remove()
    }
})








