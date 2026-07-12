"use strict";

function addTask(tasks, title) {
    let new_tasks = tasks.map(task => ({...task}));
    new_tasks.push({"id": tasks.length + 1, "title": title, "completed": false});
    return new_tasks;
};

function completeTask(tasks, taskId) {
    let new_tasks = tasks.map(task => ({...task}));
    const task = new_tasks.find(task => task.id === taskId);
    task.completed = true;
    const index = new_tasks.findIndex(task => task.id === taskId);
    new_tasks[index] = task;
    return new_tasks;
};

function removeTask(tasks, taskId) {
    let new_tasks = tasks.map(task => ({...task}));
    new_tasks = new_tasks.filter(task => task.id !== taskId);
    return new_tasks;
};

function countIncompleteTasks(tasks) {
    let incompleted_count = 0;
    for (const task of tasks) {
        if (!task.completed) {
            incompleted_count++;
        };
    };
    return incompleted_count;
};

const tasks = [
  { id: 1, title: 'Review variables', completed: true },
  { id: 2, title: 'Practice functions', completed: false },
];
const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));
const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));
console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));
