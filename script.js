// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("enrollButton").addEventListener("click", function () {
    document.getElementById("overview").scrollIntoView({ behavior: "smooth" });
});
