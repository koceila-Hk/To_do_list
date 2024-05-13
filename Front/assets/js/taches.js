async function afficherFilms() {
    const body = document.querySelector("body");
    const reponse = await fetch("http://localhost:3000/tasks/hakim");
    const films = await reponse.json();
    console.log(films);
    films.forEach(element => {
        const h=document.createElement('h1');
        h.innerHTML = element.task;
        const p = document.createElement('p')
        p.innerHTML = element.task;
        body.appendChild(h);
        body.appendChild(p);

    });
}

afficherFilms();