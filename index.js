// Index Details ------------------------------
import Ui from './ui.js';
import LocalStorage from './localStorage.js';
import Task from './task.js';


const ui = new Ui();
ui.showAllTask();
document.querySelector('.AddTaskBtn').addEventListener('click',(e) => {
    const taskTitle = document.querySelector('#newtaskID').value;
    if(taskTitle.length > 0 ){
        const task = new Task(taskTitle);
        ui.addToUi(task);
        ui.resetForm();
    }
});

document.querySelector('.task-list').addEventListener('click', (e) => {
    if(e.target.className.includes('task__op_delete')){
        ui.deleteFromLocalStorage(e);
    }
    if(e.target.className.includes('task-check')){
        ui.taskCompleted(e);
    }
});