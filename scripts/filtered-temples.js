

const currentYear = document.querySelector(".currentYear");
const lastMod = document.lastModified;
const current = new Date();
const lastModDate = document.querySelector(".lastModified");

currentYear.textContent = current.getFullYear();
lastModDate.textContent = `Last Modified ${lastMod.toLocaleString()}`;

const hamburger = document.querySelector(".hamburger");
const listContainer = document.querySelector(".list-container");

hamburger.addEventListener("click", () => {
    console.log("I have been clicked");
    hamburger.classList.toggle("active");
    listContainer.classList.toggle("active");
})

//Temples Array

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
        {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
    // Add more temple objects here...
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl:
        "images/jhbtemple.webp"
        },

    {
        templeName: "Harare Zimbabwe ",
        location: "Harare, Zimbabwe",
        dedicated: "2025, January , 14",
        area: 17250,
        imageUrl:
        "images/hararetemple.webp"
        },

    {
        templeName: "Orem Utah Utah",
        location: "Orem Utah, Utah",
        dedicated: "2024, January, 21",
        area: 71998,
        imageUrl:
        "images/oremutah.webp"
        },
];

const homeButton = document.getElementById("home-btn");
const oldButton = document.getElementById("old-btn");
const newButton = document.getElementById("new-btn");
const largeButton = document.getElementById("large-btn");
const smallButton = document.getElementById("small-btn");

oldButton.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const yearDedicated = parseInt(temple.dedicated.split(",")[0]); // Convert to number
        return yearDedicated < 1900; // Return only temples dedicated before 1900
    });

    mainContainer.innerHTML = ""; // ✅ Clear the container before adding new cards

    populateContainer(filteredTemples); // Now this will log the correct filtered list
});


newButton.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const yearDedicated = parseInt(temple.dedicated.split(",")[0]); // Convert to number
        return yearDedicated > 2000; // Return only temples dedicated before 1900
    });

    mainContainer.innerHTML = ""; // ✅ Clear the container before adding new cards

    populateContainer(filteredTemples); // Now this will log the correct filtered list
});

largeButton.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const area = parseInt(temple.area); // Convert to number
        return area > 90000; // Return only temples dedicated before 1900
    });

    mainContainer.innerHTML = ""; // ✅ Clear the container before adding new cards

    populateContainer(filteredTemples); // Now this will log the correct filtered list
});

smallButton.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => {
        const area = parseInt(temple.area); // Convert to number
        return area < 10000; // Return only temples dedicated before 1900
    });

    mainContainer.innerHTML = ""; // ✅ Clear the container before adding new cards

    populateContainer(filteredTemples); // Now this will log the correct filtered list
});

homeButton.addEventListener("click", () => {

    mainContainer.innerHTML = ""; // ✅ Clear the container before adding new cards

    populateContainer(temples); // Now this will log the correct filtered list
});


const mainContainer = document.querySelector(".image-container");


function populateContainer (templeRes){

    const templeCard = templeRes.forEach(templeCardEnt => {

    //Create main elements for the card
    const cardContainer = document.createElement("div");
    const countryHeading = document.createElement("h2");
    const countryLocationSmallHeading = document.createElement("h6");
    const dedicationHeading = document.createElement("h6");
    const sizeHeading = document.createElement("h6");

    //Create span elements 
    const countryHeadingSpan = document.createElement("span");
    const countryLocationSmallHeadingSpan = document.createElement("span");
    const dedicationHeadingSpan = document.createElement("span");
    const sizeHeadingSpan = document.createElement("span");

    const templeImage = document.createElement("img"); 

    //Creating Classes and Id for the span tags
    cardContainer.classList.add("card-container");
    countryHeadingSpan.classList.add("country-heading");
    countryLocationSmallHeadingSpan.classList.add("small-country-heading");
    dedicationHeadingSpan.classList.add("dedication");
    sizeHeadingSpan.classList.add("area-size");
    templeImage.classList.add("temple-image");

    //Appending the text content
    countryHeadingSpan.textContent = templeCardEnt.templeName;
    countryLocationSmallHeadingSpan.textContent = `Location: ${templeCardEnt.location}`;
    dedicationHeadingSpan.textContent = `Dedicated: ${templeCardEnt.dedicated}`;
    sizeHeadingSpan.textContent = `Size: ${templeCardEnt.area} sq ft`;

    templeImage.src = templeCardEnt.imageUrl;
    //templeImage.setAttribute("src", temple.imageUrl);
    templeImage.setAttribute("loading", "lazy");
    templeImage.setAttribute(`alt`, `An image of the ${templeCardEnt.templeName} temple`); //To be reviewed

    countryHeading.appendChild(countryHeadingSpan);
    countryLocationSmallHeading.appendChild(countryLocationSmallHeadingSpan);
    dedicationHeading.appendChild(dedicationHeadingSpan);
    sizeHeading.appendChild(sizeHeadingSpan);
    

    cardContainer.appendChild(countryHeading);
    cardContainer.appendChild(countryLocationSmallHeading);
    cardContainer.appendChild(dedicationHeading);
    cardContainer.appendChild(sizeHeading);
    cardContainer.appendChild(templeImage);

    mainContainer.appendChild(cardContainer);
})
}

populateContainer(temples);