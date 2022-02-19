const placeholderName = document.querySelector('#name');
const placeholderEmail = document.querySelector('#email');
const labelName = document.querySelector('.name__lbl');
const labelEmail = document.querySelector('.email__lbl')
const inputs = document.querySelectorAll('.callback__input_field');

inputs.forEach((input) => input.addEventListener('focusin', placeholderUp));
inputs.forEach((input) => input.addEventListener('focusout',placeholderDown));

function placeholderUp(e) {
    if(e.target.id === 'name') {
        labelName.style.top = "-26px";
    }
    if(e.target.id === 'email') {
        labelEmail.style.top = "50px";
    }
}

function placeholderDown() {
    if (placeholderName.value.trim() === '') {
        labelName.style.top = "8px";
    }
    if (placeholderEmail.value.trim() === '') {
        labelEmail.style.top = "84px";
    } 
}
