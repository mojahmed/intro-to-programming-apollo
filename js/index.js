let today = new Date();
var thisYear = today.getFullYear();



let footer = document.querySelector("footer");
let copyright = document.createElement("p")
copyright.innerHTML = `${thisYear} Mohammed`;
footer.appendChild(copyright);

let skills = ["HTML", "CSS", "JavaScript"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul")

//for (let i = 0; i < skills.length; i++);
for (let skill of skills) {
    let skill = document.createElement("li");
    skill.innerHTML = `${skills}`;
    skillsList.appendChild(skill);

};




