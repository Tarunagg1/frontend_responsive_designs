console.log('Welcome to tic tac Toe');

let music = new Audio('/img/music.mp3');
let ting = new Audio('/img/ting.mp3');
let gameover = new Audio('/img/gameover.mp3');
let resetbtn = document.getElementById("reset")

let isgameOver = false;

let turn = "X";

// change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// check for win
const checkForWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2,5,5,0],
        [3, 4, 5,5,14,0],
        [6, 7, 8,5,25,0],
        [0, 3, 6,-5,15,90],
        [1, 4, 7,5,15,90],
        [2, 5, 8,15,15,90],
        [0, 4, 8,5,15,45],
        [2, 4, 6,5,15,135]
    ];
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== '')) {
            console.log('here');
            document.getElementById('info').innerText = boxtexts[e[0]].innerText + " Won";
            document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width = '200px';
            console.log(document.querySelector('.line'));
            document.querySelector('.line').style.width = '20vw';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            isgameOver = true;
        }

    })
}

// game main logic
// music.play();

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(ele => {
    let boxtext = ele.querySelector('.boxtext')
    ele.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkForWin();
            if (!isgameOver) {
                document.getElementById('info').innerText = "Turn for " + turn;
            }
        }
    })
})


// resetbtn

resetbtn.addEventListener('click', () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(ele => {
        ele.innerText = "";
    })
    turn = "X";
    document.querySelector('.line').style.width = '0vw';
    document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width = '0px';
    isgameOver = false;
    document.getElementById('info').innerText = "Turn for " + turn;
})















































