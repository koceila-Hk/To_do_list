import { register_user } from "./fetch.js";

const form_register = document.getElementById('register');

form_register.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('pass').value;

    const userData = {
        username,
        password,
    };
    const response = await register_user(userData);
    window.location.href = './task.html?username='+username;
});

