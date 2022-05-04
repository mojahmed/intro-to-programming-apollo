let today = new Date();
var thisYear = today.getFullYear();



let footer = document.querySelector("footer");

if (footer) {
    let copyright = document.createElement("p")
    copyright.innerHTML = `© ${thisYear} Mohammed Ahmed`;
    footer.appendChild(copyright);

}


let skills = ["HTML", "Css", "JavaScript"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList = skillsList.appendChild(skill);
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
    removeButton.innerHTML = "remove";

    removeButton.type = "button";
    removeButton.addEventListener("click", function (event) {
        let entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});