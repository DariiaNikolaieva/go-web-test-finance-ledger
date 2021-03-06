window.addEventListener('scroll', headerScroll);

const header = document.querySelector('.header');
const fixedPosition = header.offsetTop;

function headerScroll() {
    if(window.scrollY > fixedPosition) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
};
