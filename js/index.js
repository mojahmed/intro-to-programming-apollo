let today = new Date();
var thisYear = today.getFullYear();



let footer = document.querySelector("#copyright");

if (footer) {
    let copyright = document.createElement("p")
    copyright.innerHTML = `&copy; Mohammed Ahmed ${thisYear}`;
    footer.appendChild(copyright);

}
let skills = ["HTML", "CSS", "JavaScript", "Python", "GitHub"];

// const showSkills = () => {

let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {

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

    removeButton.type = "button";
    removeButton.addEventListener("click", function (event) {
        let entry = removeButton.parentNode;
        entry.remove();
    });

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


