
const currentUserName = "currentUserName",
      userName = localStorage.getItem(currentUserName),
      askName = document.querySelector(".js-askName");
      greeting = document.querySelector(".js-greeting")

function saveName(name){
    localStorage.setItem(currentUserName,name);
}

function handleNameSubmit(event){
    event.preventDefault();
    const nameValue = document.getElementById("nameId").value;
    displayName(nameValue);
    saveName(nameValue);
}

function getName(){
    askName.classList.add("showing");
    askName.addEventListener("submit", handleNameSubmit);
}

function displayName(userName){
    askName.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerHTML = `Hi, ${userName}`;
}

function loadName(){
    if (userName) {
        displayName(userName);
    } else {
        getName();
    }
}

function init() {
    loadName();
}

init();