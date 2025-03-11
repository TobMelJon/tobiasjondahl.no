let currentStyle = "CSS/style1.css";

function switchStyle() {
    const themeLink = document.getElementById("theme-link");
    
    // Toggle between the two stylesheets
    if (currentStyle === "CSS/style1.css") {
        themeLink.setAttribute("href", "CSS/style2.css");
        currentStyle = "CSS/style2.css";
    } else {
        themeLink.setAttribute("href", "CSS/style1.css");
        currentStyle = "CSS/style1.css";
    }
}
