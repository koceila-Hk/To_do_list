async function register_user(userData) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    };

    try {
        const response = await fetch('http://localhost:3000/user', requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
    }
}

async function addTask(taskData) {
    const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(taskData)
    };

    try {
        const response = await fetch('http://localhost:3000/task', requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout de tâche :', error);
    }
}

async function addStatus(statusData) {
    const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(statusData)
    };

    try {
        const response = await fetch('http://localhost:3000/status', requestOptions);
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Erreur lors de l\'ajout de status :', error);
    }
}

export { register_user, addTask, addStatus }