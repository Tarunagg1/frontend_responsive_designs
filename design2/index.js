let menubtn = document.getElementById("menubtn");
let sidenav = document.getElementById("sidenav");
sidenav.style.right = "-250px";


menubtn.addEventListener('click', function () {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0px";
    } else {
        sidenav.style.right = "-250px";
    }
})

