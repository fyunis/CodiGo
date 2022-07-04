//DOM (Document Object Model):
const listTasks = document.querySelector("#list");
const inputTask = document.querySelector("#input_newtask");
inputTask.focus();

const arrayTask = [];

//función para agregar tarea
function addTask() {
    if (inputTask.value == "") {
        alert("Enter a text for the task...");
        return;
    }
    //creamos la nueva tarea
    const task = new Task(inputTask.value);
    //agregamos la tarea al arreglo de tareas
    arrayTask.push(task);
    //agregamos la tarea al DOM:
    document.querySelector('.form').before(task.createElement());
    inputTask.value = "";
    inputTask.focus();
}

function checkTask(checkbox) {
    if (checkbox.checked) {
        const task_id = checkbox.parentElement.id;
        const task = arrayTask.find(task => task.id == task_id);
        task.done();
        checkbox.setAttribute('disabled', true);
    }
}

function deleteTask(anchor) {
    const task_id = anchor.parentElement.id;
    const task = arrayTask.find(task => task.id == task_id);
    task.delete();

}