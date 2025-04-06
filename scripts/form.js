// form.js
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
];

const selectElement = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


// // Get the existing count from localStorage (if any), or start at 0
// let reviewCount = localStorage.getItem("reviewCount");

// if (reviewCount === null) {
//     reviewCount = 0;
// }

// // Increment the count
// reviewCount++;

// // Save it back to localStorage
// localStorage.setItem("reviewCount", reviewCount);

// // Display the updated count
// // Get query parameters
// const params = new URLSearchParams(window.location.search);

// // Get values
// const name = params.get("username") || "";
// const product = params.get("product");
// const stars = params.get("stars");
// const installDate = params.get("install-date");
// const features = params.getAll("features");
// const review = params.get("review");

// // Thank you message
// const thankYouMsg = name.trim()
//   ? `Thank you for your review, ${name.trim()}!`
//   : "Thank you for your review!";
// document.getElementById("thankYou").textContent = thankYouMsg;

// // Review summary
// const summary = document.getElementById("summary");
// summary.innerHTML = `
//   <p><strong>Product:</strong> ${product}</p>
//   <p><strong>Rating:</strong> ${stars} star${stars === "1" ? "" : "s"}</p>
//   <p><strong>Installed on:</strong> ${installDate}</p>
//   <p><strong>Features you liked:</strong> ${features.length > 0 ? features.join(", ") : "None"}</p>
//   <p><strong>Your comments:</strong> ${review ? review : "No comment"}</p>
// `;

// // Review counter logic
// //let reviewCount = localStorage.getItem("reviewCount");
// reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
// localStorage.setItem("reviewCount", reviewCount);
// document.getElementById("reviewCount").textContent = `You've submitted ${reviewCount} review${reviewCount > 1 ? 's' : ''}.`;