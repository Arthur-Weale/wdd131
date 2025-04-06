    // Only runs on review.html
    const params = new URLSearchParams(window.location.search);

    // Get values
    const name = params.get("username") || "";
    const product = params.get("product");
    const stars = params.get("stars");
    const installDate = params.get("install-date");
    const features = params.getAll("features");
    const review = params.get("review");

    // Thank you message
    const thankYouMsg = name.trim()
    ? `Thank you for your review, ${name.trim()}!`
    : "Thank you for your review!";
    document.getElementById("thankYou").textContent = thankYouMsg;

    // Summary
    const summary = document.getElementById("summary");
    summary.innerHTML = `
    <p><strong>Product:</strong> ${product}</p>
    <p><strong>Rating:</strong> ${stars} star${stars === "1" ? "" : "s"}</p>
    <p><strong>Installed on:</strong> ${installDate}</p>
    <p><strong>Features you liked:</strong> ${features.length > 0 ? features.join(", ") : "None"}</p>
    <p><strong>Your comments:</strong> ${review ? review : "No comment"}</p>
    `;

    // Counter
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("reviewCount").textContent = `You've submitted ${reviewCount} review${reviewCount > 1 ? 's' : ''}.`;
