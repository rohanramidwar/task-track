
const todoListContainer = document.getElementById("todoListContainer")
const iTask = document.getElementById("iTask")

function addTask()
{
    if(iTask.value === "")
    {
        alert("Add a task first!!")
    }
    else
    {
        // add task 
        let todoContainer = document.createElement("li")
        todoContainer.classList.add("todoContainer")
        todoListContainer.appendChild(todoContainer)
         
        let taskComplete = document.createElement("span")
        taskComplete.classList.add("material-symbols-outlined")
        taskComplete.classList.add("circle")
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
    }
    iTask.value = ""
}

function addBtnActive()
{
    document.querySelector(".add-btn").style.color = "#3459c1"
    document.querySelector(".add-btn").style.border = "1px solid #78BAFD"
}


todoListContainer.addEventListener("click", function(e)
{
    // delete task 
    if(e.target.classList.contains("rm-task"))
    {
        e.target.parentElement.remove()
    }
    // task complete 
    else if(e.target.classList.contains("task") || e.target.classList.contains("circle"))
    {
        e.target.parentElement.children[1].classList.toggle("line-through")
        if(e.target.parentElement.children[1].classList.contains("line-through"))
        {
            e.target.parentElement.children[0].innerHTML = "check_circle"
            e.target.parentElement.children[0].style.color = "#008000"
        }
        else
        {
            e.target.parentElement.children[0].innerHTML = "circle"
            e.target.parentElement.children[0].style.color = "#78BAFD"
        }
    }

})

