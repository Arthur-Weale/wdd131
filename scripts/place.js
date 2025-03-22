const lastMod = document.lastModified;
const date = new Date().getFullYear();
const currentDate = document.querySelector("#currentYear");
const modification = document.querySelector("#lastModified");
const windChillSpan = document.querySelector(".windchill-value");


currentDate.textContent = date;
modification.textContent = lastMod;

/* 
WindChill formula is:

WindChill = 13.12 + (0.6215 * T) - (11.37 * (V ** 0.16)) + (0.3965 * T * (V ** 0.16))

where :
    T = temperature
    V = Windspeed

*/
let temperature = 10;
let Windspeed = 5;
let windChill = "N/A";

const calculateWindChill = (T, V) => 13.12 + (0.6215 * T) - (11.37 * (V ** 0.16)) + (0.3965 * T * (V ** 0.16));

if (temperature <= 10 && Windspeed > 4.8) {
    windChill = calculateWindChill(temperature, Windspeed);
    windChillSpan.textContent = `${windChill.toPrecision(2)}°C`;
} else {
    windChillSpan.textContent = windChill;
}

