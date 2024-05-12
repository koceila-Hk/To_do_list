import { connectUser } from "./fetch.js";
const form_connection = document.getElementById('connection');

form_connection.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('pass').value;

    const userData = {
        username,
        password,
    };
    const response = await connectUser(userData);
    window.location.href = './task.html?username=' + username;
});