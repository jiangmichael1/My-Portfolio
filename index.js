const header = document.querySelector('.header');
const navBar = document.querySelector('.navbar');
const aboutSect = document.querySelector('.about_me');
const landSect = document.querySelector('.landing');
const workSect = document.querySelector('.work');
const eduSect = document.querySelector('.education');
const projSect = document.querySelector('.projects');
const contSect = document.querySelector('.contact');
const navBarSections = [aboutSect, workSect, eduSect, projSect, contSect, landSect];

const displayLanding = () => {
    if (landSect.style.display !== "block"){
        landSect.style.display = "block";
    }
}

displayLanding();

const toggleSection = (section) => {
    let filteredSections = navBarSections.filter(sect => sect !== section)

    filteredSections.forEach(sect => {
        sect.style.display = 'none';
    })

    section.style.display = "block";
}

header.addEventListener('click', (e) => {
    if (e.target.textContent === "Michael Jiang") {
        toggleSection(landSect);
    }
})

navBar.addEventListener('click', (e) => {
    if (e.target.className === "navbar--about"){
        toggleSection(aboutSect);
    } else if (e.target.className === "navbar--work") {
        toggleSection(workSect);
    } else if (e.target.className === "navbar--education") {
        toggleSection(eduSect);
    } else if (e.target.className === "navbar--projects") {
        toggleSection(projSect);
    } else if (e.target.className === "navbar--contact") {
        toggleSection(contSect);
    } 
})