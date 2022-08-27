let navbar = document.querySelector('.navbar');
let cartItem = document.querySelector('.cart-items-container');



document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    // searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');


}