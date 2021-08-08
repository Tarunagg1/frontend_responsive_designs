console.log('kjioijjiji');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

menuIcon.onclick = function(){
    sidebar.classList.toggle('smallSidebar');
    container.classList.toggle('large-container');
    
}



