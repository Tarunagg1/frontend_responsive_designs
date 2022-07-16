const arrow = document.querySelectorAll('.arrow');
const moovieLists = document.querySelectorAll('.movie-list');


arrow.forEach((ele, i) => {
    const itemLen = moovieLists[i].querySelectorAll('img').length;
    let clickCounter = 0;

    ele.addEventListener('click', () => {
        clickCounter++;
        if (itemLen - (4 + clickCounter) >= 0) {
            console.log(i);
            console.log(moovieLists[i]);
            moovieLists[i].style.transform = `translateX(${moovieLists[i].computedStyleMap().get("transform")[0].x.value - 270}px)`;
        } else {
            moovieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    })
    console.log();
})




// theam

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbarcontainer,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});

