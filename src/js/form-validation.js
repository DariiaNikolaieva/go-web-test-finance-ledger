const submitBtn = document.querySelector('.callback__btn');

submitBtn.addEventListener('click', validateInput);

function validateInput() {
    const inputRequired = document.querySelector('.email');
    const warning = document.querySelector('.callback__warning');
    if(inputRequired.value === '') {
        warning.style.display = 'flex';
    } else {
        warning.style.display = 'none';
    }
}
