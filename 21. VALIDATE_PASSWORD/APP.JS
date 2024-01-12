const button = document.querySelector('.button');
button.addEventListener('click',function(){
    button.style.backgroundColor = "green";
});

function displayMessage(message, messageType) {
    const messageElement = document.getElementById("validationMessage");
    messageElement.textContent = message;
    messageElement.className = messageType;
  }

document.querySelector('.form-sign-in').addEventListener("submit",function(event){
    event.preventDefault();

const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

if(email.includes('@') && password.length >= 8){
    displayMessage("Valid email and password","success");
} else {
    displayMessage("Invalid email or password","error");
}
});





