const item = document.getElementsByClassName("item");
const iconOpen = document.getElementsByClassName('iconOpen');
const iconClose = document.getElementsByClassName('iconClose');


Array.from(item).map((ele,i) => {
    ele.addEventListener('click',()=>{
        const result = ele.classList.toggle('active');
        if(result){
            iconOpen[i].style.display = "none";
            iconClose[i].style.display = "block";
        }else{
            iconOpen[i].style.display = "block";
            iconClose[i].style.display = "none";
        }
    })
})

