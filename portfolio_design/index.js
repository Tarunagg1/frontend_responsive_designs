
const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
})


document.addEventListener("scroll", () => {
    let scroll_Position = window.scrollY;
    if (scroll_Position > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
})

