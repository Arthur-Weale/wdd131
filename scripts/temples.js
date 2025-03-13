

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