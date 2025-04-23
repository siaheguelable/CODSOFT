const projets = document.querySelector('#projects');

const url = "https://siaheguelable.github.io/CODSOFT/data/projets_info.json";

async function getData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data.projets);
    } else {
        console.error("an error occured while fetching data")
    }

}


const displayInfo = (projets) => {

    projets.forEach(projet => {
        const card = document.createElement('div');
        card.classList.add('member-card'); // optional for styling

        const icon = document.createElement('img');
        icon.setAttribute('src', projet.image);
        icon.setAttribute('alt', `Logo of ${projet.name}`);
        icon.setAttribute('loading', 'lazy');

        const name = document.createElement('p');
        name.textContent = projet.name;

        const description = document.createElement('p');
        description.textContent = projet.description;
        const link = document.createElement('p');
        link.textContent = projet.link;

        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(link);
        projets.appendChild(card);

    });

}

getData();
