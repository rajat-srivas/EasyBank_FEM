const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

header.addEventListener('click', () => {
    console.log('open hamburger');
    if (header.classList.contains('open')) { // close burger
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElements.forEach((element) => {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });

    } else {
        header.classList.add('open');
        body.classList.add('noscroll');
        fadeElements.forEach((element) => {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        })
    }
});