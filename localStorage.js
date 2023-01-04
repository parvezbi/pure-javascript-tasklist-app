// Local Storage Details ------------------------------
function LocalStorage(){}
LocalStorage.prototype.fetchTask = function(){
    let tasks = localStorage.getItem('tasks');
    if(tasks){
        tasks = JSON.parse(tasks);
    } else{
        tasks = [];
    }
    return tasks;
}
LocalStorage.prototype.addToLocalStorage = function(task){
    let tasks = this.fetchTask();
    tasks.unshift(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
LocalStorage.prototype.deleteFromLocalStorage = function(id){
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
LocalStorage.prototype.taskCompleted = function(id){
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task) => task.id === id);
    if(tasks[index].isComplete){
        tasks[index].isComplete = false;
    }else{
        tasks[index].isComplete = true;
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
export default LocalStorage;