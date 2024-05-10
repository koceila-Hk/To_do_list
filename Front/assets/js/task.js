import { addTask, addStatus } from "./fetch.js";

const url = new URLSearchParams(window.location.search);
const username = url.get("username");

const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    var name = document.querySelector("#username").value
    name = username;
    console.log(name);
    // Récupérer les valeurs du formulaire
    var taskName = document.getElementById('task').value;

    const taskData = {
        taskName,
        name,
    }

    const response = await addTask(taskData);
    //Réinitialiser le formulaire
    //document.getElementById('task-form').reset();
});

const statusForm = document.getElementById('status-form');

    statusForm.addEventListener('submit', async (e) => {
        e.preventDefault();
    
        var name = document.querySelector("#username").value
        name = username;
        // console.log(name);
    
        const taskStatus = document.getElementById('status').value;
        const statusData = {
            taskStatus,
            name,
        }
        console.log(statusData);
        const response = await addStatus(statusData);
        //Réinitialiser le formulaire
        //document.getElementById('task-form').reset();
    });
