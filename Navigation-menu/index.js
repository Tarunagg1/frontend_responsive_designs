const mobile_navbar_button = document.querySelector('.mobile-navbar-button');
const header = document.querySelector('.header');

const toggleNavbar = () => {
    header.classList.toggle("active");
}

mobile_navbar_button.addEventListener('click', toggleNavbar)


