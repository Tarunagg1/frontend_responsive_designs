const billtotalinput = document.getElementById("billTotalInput");
const tipinput = document.getElementById("tipInput");
const numberOfpeople = document.getElementById("numberOfPeople");
const perpersontotal = document.getElementById("perPersonTotal");


let numberOfPeopleCount = Number(numberOfPeople.innerText);

const calculateBill = (e) => {
    const amount = Number(billtotalinput.value);
    const tipAmoount = tipinput.value;

    const tipPercentage = Number(tipAmoount) / 100;

    const tipAmount = amount * tipPercentage;

    let total = tipAmount + amount;

    let perPersonTotal = total / numberOfPeopleCount;

    perpersontotal.innerText = `$${perPersonTotal.toFixed(2)}`;
}


const increasePeople = () => {
    numberOfPeopleCount++;
    numberOfpeople.innerText = numberOfPeopleCount;
    calculateBill();
}



const decreasePeople = () => {
    if (numberOfPeopleCount <= 1) return;
    numberOfPeopleCount--;
    numberOfpeople.innerText = numberOfPeopleCount;
    calculateBill();
}
