
const p_buttons = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const images_overlay = document.querySelectorAll('.img-overlay');


p_buttons.addEventListener('click', function (e) {
    const p_btnClicked = e.target;

    p_btn.forEach((ele) => {
        ele.classList.remove('p-btn-active');
    });


    p_btnClicked.classList.add('p-btn-active');

    const btnId = p_btnClicked.dataset.btnNum;

    const img_active = document.querySelectorAll(`.p-btn--${btnId}`);

    images_overlay.forEach((ele) => {
        ele.classList.add('p-image-not-active');
    })

    img_active.forEach((ele) => {
        ele.classList.remove('p-image-not-active')
    })

})

























