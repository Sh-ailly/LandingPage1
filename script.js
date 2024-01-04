/*/ Get all anchor tags within the "menu" div
var links = document.querySelectorAll(".menu a");
// Add click event listeners to the anchor tags
links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Link clicked, but we're handling it with JavaScript!");
    });
});
var links = document.querySelectorAll(".menu i");
// Add click event listeners to the anchor tags
links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Link clicked, but we're handling it with JavaScript!");
    });
});*/

// Get the "Home" link
var homeLink = document.getElementById("home");

// Add a click event listener to the "Home" link
homeLink.addEventListener("click", function(event) {
    event.preventDefault();

    // Extract the target section ID from the link's href
    var targetSectionId = homeLink.getAttribute("href").substring(1);

    // Get a reference to the target section by its ID
    var targetSection = document.getElementById(targetSectionId);

    // Scroll to the target section smoothly
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
});


// Get all anchor tags within the "menu" div
var links = document.querySelectorAll("aboutme");

// Add click event listeners to the anchor tags
links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        // Extract the target section ID from the link's href
        var targetSectionId = link.getAttribute("href").substring(1);

        // Get a reference to the target section by its ID
        var targetSection = document.getElementById("bio");

        // Scroll to the target section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

var links = document.querySelectorAll("myskills");

// Add click event listeners to the anchor tags
links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        // Extract the target section ID from the link's href
        var targetSectionId = link.getAttribute("href").substring(1);

        // Get a reference to the target section by its ID
        var targetSection = document.getElementById("skills");

        // Scroll to the target section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
// Get the "About Me" link
var aboutMeLink = document.getElementById("mywork");

// Add a click event listener to the "About Me" link
aboutMeLink.addEventListener("click", function(event) {
    event.preventDefault();

    // Extract the target section class from the link's href
    var targetSectionClass = aboutMeLink.getAttribute("href").substring(1);

    // Get a reference to the target section by its class
    var targetSection = document.querySelector("." + targetSectionClass);

    // Scroll to the target section smoothly
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
});
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000, // Adjust the speed as needed
});
