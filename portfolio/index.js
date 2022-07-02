
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


// slider
const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
};


// scrolll to top
const footerEle = document.querySelector('.section-footer')
const scrollToTOp = document.createElement('div');
scrollToTOp.classList.add("scrolltop-style")
scrollToTOp.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerEle.after(scrollToTOp);


scrollToTOp.addEventListener("click", () => {
  const heroSection = document.querySelector('.section-hero');
  heroSection.scrollIntoView({ behavior: 'smooth' })
})



// animated count
const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    // console.log(entry);

    // if (entry.isIntersecting == false)
    if (!entry.isIntersecting) return;

    // animate number counter

    const counterNum = document.querySelectorAll(".counter-numbers");

    const speed = 200;

    counterNum.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);

        if (initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incrementNumber}+`;
          setTimeout(updateNumber, 10);
        }
      };

      updateNumber();
    });

    observer.unobserve(workSection);
  },
  {
    root: null,
    threshold: 0,
  }
);



// workObserver.observe(workSection);














