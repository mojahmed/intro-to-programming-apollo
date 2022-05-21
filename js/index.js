// var today = new Date(); var time = today.getHours() + ":" + today



let today = new Date();
var thisYear = today.getFullYear();



let footer = document.querySelector("#copyright");

if (footer) {
    let copyright = document.createElement("p")
<<<<<<< HEAD
    copyright.innerHTML = `&copy; Mohammed Ahmed ${thisYear}`;
=======
    copyright.innerHTML = ` &copy; Mohammed Ahmed ${thisYear} `;
>>>>>>> 963d4e2d892c469b6f2149e6149c60073fa368cb
    footer.appendChild(copyright);

}
let skills = ["HTML", "CSS", "JavaScript", "Python", "GitHub"];

// const showSkills = () => {

let skillsSection = document.getElementById("skills");
<<<<<<< HEAD
let skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {

=======
let skillsList = skillsSection.querySelector("ul")
for (let i = 0; i < skills.length; i++) {
>>>>>>> 963d4e2d892c469b6f2149e6149c60073fa368cb
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skill.setAttribute("class", "skill")
    skillsList.appendChild(skill);
}








let messageForm = document.getElementsByName("Leave_Message")[0];

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();


    let name = event.target.user_name.value;
    let email = event.target.user_email.value;
    let message = event.target.user_message.value;
    console.log(name, email, message);

    event.target.reset();

    // Display Messages 
    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href= 'mailto:${email}'>${name}</a>  wrote: <span>${message}</span>`;
    messageList.appendChild(newMessage);
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-button")
    removeButton.innerHTML = "remove";
    // let editButton = document.createElement("button");
    // editButton.innerHTML = "edit";

    removeButton.type = "button";
    removeButton.addEventListener("click", function (event) {
        let entry = removeButton.parentNode;
        entry.remove();


    });
    // editButton.type = "button";
    // editButton.addEventListener("click", function (event) {
    //     let moh = editButton.parentNode;
    //     moh.edit();
    // });
    // newMessage.appendChild(editButton);
    // messageList.appendChild(newMessage);


    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});
fetch("https://api.github.com/users/mojahmed/repos")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let projects = data

        let projectSection = document.getElementById("projects");
        let projectList = projectSection.querySelector("ul");
        for (let i = 0; i < projects.length; i++) {

            let projectElement = document.createElement("li");
            projectElement.textContent = projects[i].name;
            // projectElement.setAttribute("class", "skill")
            projectList.appendChild(projectElement);
        }
    })


