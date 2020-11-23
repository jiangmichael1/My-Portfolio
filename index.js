const navBar = document.querySelector('.navbar');
const aboutSect = document.querySelector('.about_me');
const workSect = document.querySelector('.work');
const eduSect = document.querySelector('.education');
const projSect = document.querySelector('.projects');
const contSect = document.querySelector('.contact');
const navBarSections = [aboutSect, workSect, eduSect, projSect, contSect]



navBar.addEventListener('click', (e) => {
    if (e.target.className === "navbar--about"){
        aboutSect.style.display = "block";
        workSect.style.display = "none";
        eduSect.style.display = "none";
        projSect.style.display = "none";
        contSect.style.display = "none";
    } else if (e.target.className === "navbar--work") {
        console.log("work!");
    } else if (e.target.className === "navbar--education") {
        console.log("education!")
    } else if (e.target.className === "navbar--projects") {
        console.log("projects!");
    } else if (e.target.className === "navbar--contact") {
        console.log("contact!");
    } 
})