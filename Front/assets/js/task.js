import { addTask, addStatus } from "./fetch.js";

//////// Get username from url
const url = new URLSearchParams(window.location.search);
const username = url.get("username");

///////// Username form
let name = document.querySelector("#username").value

///////// Task-form
const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    var taskName = document.getElementById('task').value;
    const taskData = {
        taskName,
        name: username,
    }
    console.log(taskData);
    const response = await addTask(taskData);
    //Réinitialiser le formulaire
    //document.getElementById('task-form').reset();
});

///////// Status-form
const statusForm = document.getElementById('status-form');

statusForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const taskStatus = document.getElementById('status').value;
    const statusData = {
        taskStatus,
        name: username,
    }
    console.log(statusData);
    const response = await addStatus(statusData);
});
