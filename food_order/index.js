const navIcon = document.querySelector('.nav__icon');
const navClose = document.querySelector('.nav__close');
const nav_List = document.querySelector('.nav__list');
const nav__bgOverlay = document.querySelector('.nav__bgOverlay');

const navOpen = () => {
    nav_List.classList.add('show');
    nav__bgOverlay.classList.add('active');
    document.body.style = 'visibility: visible; height: 100vh; width:100vw; overflow: hidden;'
}

const closeOpen = () => {
    nav_List.classList.remove('show');
    nav__bgOverlay.classList.remove('active');
    document.body.style = 'visibility: visible; height: initial; width:100vw; overflow-x: hidden;'
}

navIcon.addEventListener('click', navOpen);
nav__bgOverlay.addEventListener('click', closeOpen);
navClose.addEventListener('click', closeOpen);


AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
});


