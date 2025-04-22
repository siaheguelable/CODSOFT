const url = "https://siaheguelable.github.io/CODSOFT/data/projets_info.json";

async function getData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }

}

getData();