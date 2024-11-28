const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');


// Generando el evento para tomar la entrada del input
taskForm.addEventListener('submit', (event) => {
    
    // prevent page recharge
    event.preventDefault();

    // 
    const taskInput = document.getElementById('task-input');

    const task = taskInput.value;
    console.log(task);

    if (task) {
        taskList.append(createTaskElement(task))
        taskInput.value="";
    }

})

function createTaskElement(task) {
    const li = document.createElement('li');
    li.textContent = task;
    li.append(createButton("❌", "delete-btn"), createButton("✏️", 'edit-btn'));
    return li;
}

function createButton(text, className) {
    const btn = document.createElement('span');
    btn.textContent = text;
    btn.className = className;
    return btn;
}

taskList.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete-btn')) {
        deleteTask(event.target.parentElement)
    } else if (event.target.classList.contains('edit-btn')) {
        editTask(event.target.parentElement);
    }
})

function deleteTask(taskItem) {
    if(confirm('Are you sure?')){
        taskItem.remove();
    }
}

function editTask(taskItem) {
    const newTask = prompt('Edita la tarea:', taskItem.firstChild.textContent);
    if(newTask !== null) {
        taskItem.firstChild.textContent = newTask;
    }
}

