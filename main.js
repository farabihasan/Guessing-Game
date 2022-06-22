let totalWon = 0;
let totalLoss = 0;
let totalAttempts = 5;
let attempt = 0
let button = document.querySelector('#button');
let gessNumber = document.querySelector('#number');
let cardFooter = document.querySelector('.card-footer');
let winingMassage = document.createElement('p');
let attempts = document.createElement('p');
let copyRightMassage = document.createElement('p');
button.addEventListener('click', (e) => {
        e.preventDefault();
        if (attempt == 5) {
            button.disabled = true;
            gessNumber.disabled = true;
        } else if (attempt < 6) {
            checkResult(gessNumber.value);
        }
        gessNumber.value = "";
    }

);

function checkResult(gessNumber) {
    const random = randomNumber(5);
    if (gessNumber == random) {
        let win = document.createElement('h1');
        cardFooter.appendChild(win);
        cardFooter.innerHTML = `you have won!`;
        totalWon++;
    } else {
        cardFooter.innerHTML = `you have loss: random number was ${random}`;
        totalLoss++;
    }
    attempt++;
    attempts.innerHTML = `Remain Attempts:${ totalAttempts - attempt}`;
    cardFooter.appendChild(attempts);
    winingMassage.innerHTML = `Won:${totalWon} | Loss:${totalLoss}`;
    cardFooter.appendChild(winingMassage);
    copyRightMassage.innerHTML = `copyright by farabihasan`;
    cardFooter.appendChild(copyRightMassage);
}


function randomNumber(limitedNumber) {
    return Math.floor(Math.random() * limitedNumber) + 1;
}