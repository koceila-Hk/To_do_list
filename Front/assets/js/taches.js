import {showTasks} from './fetch.js';

const url = new URLSearchParams(window.location.search);
const nom = url.get("username");

async function allTasks() {
    const body = document.querySelector("body");
    const reponse = await showTasks(nom);
    
    console.log(reponse);
    reponse.forEach(element => {
        const h=document.createElement('h1');
        h.innerHTML = element.task;
        const p = document.createElement('p')
        p.innerHTML = element.task;
        body.appendChild(h);
        body.appendChild(p);

    });
}

allTasks();