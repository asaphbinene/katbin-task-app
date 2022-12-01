let katbinNewTaskForm = document.getElementById("katbinHtmlNewTaskForm")
let katbinEnteredTask = document.getElementById("katbinHtmlEnteredTask")
let katbinListOfTasks = document.getElementById("katbinHtmlListOfTasks")

katbinNewTaskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    katbinProcessOfAddTaskToList(katbinEnteredTask.value)
})

function katbinProcessOfAddTaskToList(x) {
    if(katbinEnteredTask.value.length > 0){
        katbinNewAddedTaskToList = ` <li>${x} <button onclick="katbinTaskDelete(this)">Delete</butto></li>`
        katbinListOfTasks.insertAdjacentHTML("beforeend", katbinNewAddedTaskToList)
        katbinEnteredTask.value = ""
    }
    //katbinNewAddedTaskToList = ` <li>${x} <button onclick="katbinTaskDelete(this)">Delete</butto></li>`
    //katbinListOfTasks.insertAdjacentHTML("beforeend", katbinNewAddedTaskToList)
    katbinEnteredTask.focus()
}

function katbinTaskDelete(katbinHtmlExistingTaskTobeDelete) {
    katbinHtmlExistingTaskTobeDelete.parentElement.remove()
}