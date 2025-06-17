
const expertises = document.querySelector('#expertises'); // Select the expertise section in the HTML
const url="https://siaheguelable.github.io/CODSOFT/Landing_page_online_course/data/expertise.json";




 async function getData() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data.expertise);
            displayInfo(data.expertise);
        
        } else {    
            console.error("Error fetching data:", response.status, response.statusText);
        }
       }catch (error) {
        console.error("Error fetching data:", error);
        
    }
 }


 const displayInfo = (expertise) => {
    expertise.forEach(info => {
        const card = document.createElement('div');
        card.classList.add('member-card'); // optional for styling

        const icon = document.createElement('img');
        icon.setAttribute('src', info.icon);
        icon.setAttribute('alt', `Logo of ${info.title}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '20');
        icon.setAttribute('height', '300');

        const name = document.createElement('h2');
        name.textContent = info.title;

        const description = document.createElement('p');
        description.textContent = info.description;
        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(description);
        
        expertises.appendChild(card);

    });
 }


 getData();
  