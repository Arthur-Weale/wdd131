



const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

const displayProphets = (prophets) =>{
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const paraOne = document.createElement("p");
        const paraTwo = document.createElement("p");
        //console.log(prophet.name);
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        paraOne.textContent =`Date of Birth: ${prophet.birthdate}`;
        paraTwo.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `This is an image of the Prophet ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340px");
        portrait.setAttribute("height","440px");
        card.appendChild(fullName);
        card.appendChild(paraOne);
        card.appendChild(paraTwo);
        card.appendChild(portrait);
        cards.appendChild(card);
        
    })
}

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();