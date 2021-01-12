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

// Projects Section
const projNav = document.querySelector('.projects__nav');

const projNavPort = document.querySelector('.projects__nav--portfolio btn');
const projNavDate = document.querySelector('.projects__nav--date btn');
const projNavNews = document.querySelector('.projects__nav--news btn');
const projNavGame = document.querySelector('.projects__nav--game btn');
const projNavBeer = document.querySelector('.projects__nav--beer btn');

const projPort = document.querySelector('.projects__portfolio');
const projDate = document.querySelector('.projects__date');
const projNews = document.querySelector('.projects__news');
const projGame = document.querySelector('.projects__game');
const projBeer = document.querySelector('.projects__beer');

const projNavText = [projPort, projDate, projNews, projGame, projBeer];
const projInst = document.querySelector('.projects__instructions');

const noneProjTextDisplay = () => {
    projNavText.forEach(text => text.style.display = "none");
    projInst.style.display = "block";
}

noneProjTextDisplay();

const toggleProjText = (text) => {
    // Remove instructions
    if (projInst.style.display === "block") {
        projInst.style.display = "none"
    }
    let filteredText = projNavText.filter(t => t !== text);
    filteredText.forEach(item => item.style.display = "none");
    text.style.display = "block";
}

projNav.addEventListener('click', (e) => {
    if (e.target.className === "projects__nav--portfolio btn") {
        toggleProjText(projPort);
    } else if (e.target.className === "projects__nav--date btn") {
        toggleProjText(projDate);
    } else if (e.target.className === "projects__nav--news btn") {
        toggleProjText(projNews);
    } else if (e.target.className === "projects__nav--game btn") {
        toggleProjText(projGame);
    } else if (e.target.className === "projects__nav--beer btn") {
        toggleProjText(projBeer);
    }
})

anime({
    targets: [".navbar--about", ".navbar--education", ".navbar--work", ".navbar--projects", ".navbar--contact"],
    delay: anime.stagger(100, {start: 1500}),
    translateX: 100,
    background: "#CBEDC0",
    direction: "alternate"
})
