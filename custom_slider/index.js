
const slides = Array.from(document.querySelectorAll('.slide'));
const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.buttons div');
const dots = document.querySelector('.dots');
let timeOutId;

function getnextPrev() {
    const activeSlide = document.querySelector('.slide.active');
    const activeIndex = slides.indexOf(activeSlide);

    let next, prev;

    if (activeIndex === slides.length - 1) {
        next = slides[0];
    } else {
        next = slides[activeIndex + 1];
    }

    if (activeIndex === 0) {
        prev = slides[slides.length - 1];
    } else {
        prev = slides[activeIndex - 1];
    }

    return [next, prev];
}

function getPosition() {
    const activeSlide = document.querySelector('.slide.active');
    const activeIndex = slides.indexOf(activeSlide);
    const [next, prev] = getnextPrev();

    slides.forEach((slide, index) => {
        if (index === activeIndex) {
            slide.style.transform = 'translateX(0)';
        } else if (slide === prev) {
            slide.style.transform = 'translateX(-100%)';
        } else if (slide === next) {
            slide.style.transform = 'translateX(100%)';
        } else {
            slide.style.transform = 'translateX(100%)';
        }

        slide.addEventListener('transitionend', () => {
            slide.classList.remove("top");
        })
    })

}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('next')) {
            getNextSlide();
        } else {
            getPreviousSlide();
        }
    })
})


function getNextSlide() {
    clearTimeout(timeOutId);
    const currentSlide = document.querySelector('.slide.active');
    const [next, prev] = getnextPrev();

    currentSlide.classList.add("top");
    next.classList.add("top");

    currentSlide.classList.remove("active");
    currentSlide.style.transform = "translateX(-100%)";
    next.classList.add("active");
    next.style.transform = "translate(0)";
    getPosition();
    getActiveDot();
    autoLoop();
}

function getPreviousSlide() {
    clearTimeout(timeOutId);
    const currentSlide = document.querySelector('.slide.active');
    const [next, prev] = getnextPrev();

    currentSlide.classList.add("top");
    prev.classList.add("top");

    currentSlide.classList.remove("active");

    currentSlide.style.transform = "translateX(-100%)";
    prev.classList.add("active");
    prev.style.transform = "translate(0)";
    getPosition();
    getActiveDot();
    autoLoop();
}


// dots

slides.forEach(slide => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot); //
})


function getActiveDot() {
    const allDots = document.querySelectorAll(".dots .dot");
    const activeSlide = document.querySelector('.slide.active');
    const activeIndex = slides.indexOf(activeSlide);

    allDots.forEach((ele) => {
        ele.classList.remove("active");
    })

    allDots[activeIndex].classList.add("active");
}


function getDocSlide(index) {
    clearTimeout(timeOutId);
    slides.forEach((ele, index) => {
        ele.classList.remove("active");
    })
    slides[index].classList.add("active");
    getActiveDot();
    getPosition();
    allDots();
}


function functioNalDots() {
    const allDots = document.querySelectorAll(".dots .dot");
    allDots.forEach((ele, index) => {
        ele.addEventListener("click", () => {
            getDocSlide(index);
        })
    })
}


function autoLoop() {
    timeOutId = setTimeout(() => {
        getNextSlide();
    }, 5000)
}

autoLoop();
functioNalDots();
getActiveDot();


