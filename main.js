const form = document.getElementById('contactForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkInputName();
})

function checkInputName() {
    const nameValue = name.value;

    if(nameValue === '') {
        //mostrar aviso
    }
}


function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("span")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}




    
    
