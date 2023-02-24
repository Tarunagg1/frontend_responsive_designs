
const FRUITS = [
    "apple",
    "mango",
    "banana",
    "lichi",
    "orange"
]


const getSuggestion = (keyword) => {
    const result = FRUITS.filter(i => i.substr(0, keyword.length).toLocaleLowerCase() === keyword.toLocaleLowerCase());
    // return result;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 1000);
    })
}

const resetState = () => {
    suggestionBox.classList.remove('suggestion-visible');
}

// console.log(getSuggestion("pp"));

const inputBox = document.getElementById('search-input');
const suggestionBox = document.getElementById('suggestion');

const renderItems = (data) => {
    const suggfrag = document.createDocumentFragment();
    data.map((item) => {
        const el = document.createElement('div');
        el.innerHTML = item;
        el.classList.add('suggested-item');
        suggfrag.appendChild(el);
    })
    suggestionBox.innerHTML = "";
    suggestionBox.appendChild(suggfrag);
}

const debounce = (fn, delay = 500) => {
    let timer;
    return function () {
        const self = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(self, args);
        }, delay);
    }
}

const handelSearch = async (val) => {
    const result = await getSuggestion(val);
    console.log(result);
    if (result.length) {
        suggestionBox.classList.add('suggestion-visible');
        // suggestionBox.innerHTML = "hell"
        renderItems(result);
    } else {
        resetState();
    }
}

const handelOnChange = (e) => {
    let inVal = e.target.value;
    if (inVal) {
        handelSearch(inVal);
    } else {
        resetState();
    }
}


inputBox.addEventListener('input', debounce(handelOnChange, 100))
















