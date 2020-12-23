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
    let filteredSections = navBarSections.filter(sect => sect !== section);

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
const sano = document.querySelector('.work__nav--sano-img btn');
const ccny = document.querySelector('.work__nav--ccny-img btn');
const elm = document.querySelector('.work__nav--hplus-img btn');
const math = document.querySelector('.work__nav--math-img btn');
const sanoText = document.querySelector('.work__sanoText');
const ccnyText = document.querySelector('.work__ccnyText');
const elmText = document.querySelector('.work__elmText');
const mathText = document.querySelector('.work__mathText');
const instText = document.querySelector('.work__instructions');

const workNavItems = [sano, ccny, elm, math];
const workNavText = [sanoText, ccnyText, elmText, mathText, instText];

const noneTextDisplay = () => {
    workNavText.forEach(text => text.style.display = "none");
    instText.style.display = "block";
}
// Start by removing all work text except instructions
noneTextDisplay();

const toggleWorkText = (text) => {
    // Remove instructions
    if (instText.style.display === "block") {
        instText.style.display = "none"
    }
    
    let filteredText = workNavText.filter(t => t !== text);
    filteredText.forEach(item => item.style.display = "none");
    text.style.display = "block";

}

workNav.addEventListener('click', (e) => {
    if (e.target.className === "work__nav--sano-img btn") {
        toggleWorkText(sanoText);
    } else if (e.target.className === "work__nav--ccny-img btn") {
        toggleWorkText(ccnyText);
    } else if (e.target.className === "work__nav--hplus-img btn") {
        toggleWorkText(elmText);
    } else if (e.target.className === "work__nav--math-img btn") {
        toggleWorkText(mathText);
    }
})