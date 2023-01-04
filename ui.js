// UI Details ------------------------------
import LocalStorage from './localStorage.js';

function Ui(){}

const ls = new LocalStorage();

Ui.prototype.showAllTask = function(){
    let tasks = ls.fetchTask();
    let newHTML = '';
    tasks.forEach((tasks) => {
        newHTML += `
        <div class="task ${tasks.isComplete ? 'completed' : ''}" data-createdat="${tasks.id}">
            <div class="task__details">
                <input type="checkbox" class="task-check" ${tasks.isComplete ? 'checked' : ''} />
                <label class="task-title">${tasks.title}</label>
            </div>
            <div class="task__op">
                <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
                <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
            </div>
        </div>
        `;
        document.querySelector('.task-list').innerHTML = newHTML;
    })
}

Ui.prototype.addToUi = function(task){
    ls.addToLocalStorage(task);
    let newHTML = `
        <div class="task" data-createdat="${task.id}">
            <div class="task__details">
                <input type="checkbox" class="task-check"/>
                <label class="task-title">${task.title}</label>
            </div>
            <div class="task__op">
                <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
                <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
            </div>
        </div>
    `;
    document.querySelector('.task-list').insertAdjacentHTML('afterbegin',newHTML);
};

Ui.prototype.resetForm = function(){
    document.querySelector('#newtaskID').value = '';
};

// Ui.prototype.deleteTask = function(e){
//     const task = e.target.parentElement.parentElement;
//     task.remove();
// }
Ui.prototype.deleteFromLocalStorage = function(e){
    const task = e.target.parentElement.parentElement;
    const id = task.dataset.createdat;
    ls.deleteFromLocalStorage(id);
    task.remove();
}
Ui.prototype.taskCompleted = function(e){
    const taskCom = e.target.parentElement.parentElement;
    const id = taskCom.dataset.createdat;
    ls.taskCompleted(id);
    taskCom.classList.toggle('completed');
}
export default Ui;