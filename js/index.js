let today = new Date();
var thisYear = today.getFullYear();



let footer = document.querySelector("footer");
let copyright = document.createElement("p")
copyright.innerHTML = `${thisYear} Mohammed`;
footer.appendChild(copyright);

let skills = ["HTML", "Css", "JavaScript"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList = skillsList.appendChild(skill);
}






let messageForm = name

