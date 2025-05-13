const projets = document.querySelector('#projects');

const url = "https://siaheguelable.github.io/CODSOFT/Portifolio/data/projets_info.json";

async function getData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data.projets_info);
            displayInfo(data.projets_info);
        } else {
            console.error("an error occured while fetching data")
        }

    } catch (error) {
        console.error("Error fetching links:", error);

    }


}


const displayInfo = (projets_info) => {

    projets_info.forEach(info => {
        const card = document.createElement('div');
        card.classList.add('member-card'); // optional for styling

        const icon = document.createElement('img');
        icon.setAttribute('src', info.image);
        icon.setAttribute('alt', `Logo of ${info.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '200');
        icon.setAttribute('height', '300');

        const name = document.createElement('p');
        name.textContent = info.name;

        const description = document.createElement('p');
        description.textContent = info.description;



        const link = document.createElement('a'); // Change this to <a> tag
        link.href = info.link;
        link.textContent = "Visit project";
        link.target = "_blank";

        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(link);
        projets.appendChild(card);

    });

}

getData();
