import { addTask, addStatus } from "./fetch.js";

//////// Get username from url
const url = new URLSearchParams(window.location.search);
const username = url.get("username");


///////// Task-form
const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    var taskName = document.getElementById('task').value;
    var status = document.querySelector("#status").value;
    const taskData = {
        taskName,
        name: username,
        status: status,
    }
    console.log(taskData);
    const response = await addTask(taskData);
});

// ///////// Status-form
// const statusForm = document.getElementById('status-form');

// statusForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const taskStatus = document.getElementById('status').value;
//     const statusData = {
//         taskStatus,
//         name: username,
//     }
//     console.log(statusData);
//     const response = await addStatus(statusData);
// });
