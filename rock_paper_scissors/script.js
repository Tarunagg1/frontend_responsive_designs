let SCORE = 0;

const handOptions = {
    rock: "./assets/Rock.png",
    paper: "./assets/Paper.png",
    scissors: "./assets/Scissors.png"
}

const picUseHand = (hand) => {
    let hands = document.querySelector('.hands');
    hands.style.display = "none";

    let contest = document.querySelector('.contest');

    contest.style.display = "flex";

    document.getElementById("userpicimage").src = handOptions[hand];

    let cphand = pickComputerHand();
    referee(hand, cphand);
}


const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];
    let cphand = hands[Math.round(Math.random() * 3)];
    document.getElementById("computerPickImage").src = handOptions[cphand];
    
    return cphand;
}



const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
};

const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
    console.log(newScore);
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
}















































