// Header and Navbar selectors
const header = document.querySelector('.header');
const navBar = document.querySelector('.navbar');
const aboutSect = document.querySelector('.about_me');
const landSect = document.querySelector('.landing');
const workSect = document.querySelector('.work');
const eduSect = document.querySelector('.education');
const projSect = document.querySelector('.projects');
const contSect = document.querySelector('.contact');
const navBarSections = [aboutSect, workSect, eduSect, projSect, contSect, landSect];


// Make landing page show upon arrival
const displayLanding = () => {
    if (landSect.style.display !== "block"){
        landSect.style.display = "block";
    }
}

displayLanding();

// Toggle which section to display
const toggleSection = (section) => {
    let filteredSections = navBarSections.filter(sect => sect !== section)

    filteredSections.forEach(sect => {
        sect.style.display = 'none';
    })

    if (section === workSect) {
        section.style.display = "flex";
    } else {
        section.style.display = "block";
    }
}

// Click name to show landing page intro
header.addEventListener('click', (e) => {
    if (e.target.className === "header__img header__img--text" || e.target.textContent === "Michael Jiang") {
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

// Work Section
const workNav = document.querySelector('.work__nav');
const sano = document.querySelector('.work__nav--sano-img btn')
const ccny = document.querySelector('.work__nav--ccny-img btn')
const elm = document.querySelector('.work__nav--hplus-img btn')
const math = document.querySelector('.work__nav--math-img btn')

const workNavItems = []

const toggleWorkText = (text) => {

}

workNav.addEventListener('click', (e) => {
    console.log(e.target);
})