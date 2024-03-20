// Function to display a message when a project is clicked
function projectClicked(projectName) {
    alert("You clicked on " + projectName);
}

// Function to change the theme
function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-theme");

    var themeButton = document.getElementById("theme-button");
    if (body.classList.contains("dark-theme")) {
        themeButton.innerText = "Switch to Light Theme";
    } else {
        themeButton.innerText = "Switch to Dark Theme";
    }
}

document.getElementById("theme-button").addEventListener("click", toggleTheme);

function displayCurrentYear() {
    var yearSpan = document.getElementById("current-year");
    var currentYear = new Date().getFullYear();
    yearSpan.innerText = currentYear;
}

window.onload = function() {
    displayCurrentYear();
};
