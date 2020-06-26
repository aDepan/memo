import {amountStepsToWin} from './toggle-card.js';


const backdropElement = document.getElementById('backdrop');
const rulesWindow = document.getElementById('rules-window');
const helperElement = document.getElementById('helper');

export function showRules () {
    const confirmRulesBtn = document.querySelector('#rules-window button');
    backdropElement.style.display="block";
    rulesWindow.style.display="block";
    backdropElement.addEventListener('click', hideRulesWindow);
    confirmRulesBtn.addEventListener('click', hideRulesWindow);
}

const hideRulesWindow = () => {
    backdropElement.style.display = "none";
    rulesWindow.style.display = "none";
}

export function helperTexts (gameEvent) {
    let memoText;
    switch (gameEvent) {
        case "rules": 
            memoText = "Do you know how to play? \n No? Click me!";
            break;
        case "win":
            memoText = `Congrats! You've found all pairs! \n It took ${amountStepsToWin} steps for you.`;
            break;
        case "again":
            memoText = "You can do it!";
            break;
        case "designerMode":
            memoText = "Find all green cards!";
            break;
        default:
            memoText = "Hi! I'm mr. Memo. Let's play!";
    }
    return memoText;   
}

function addAnimation () {
    helperElement.style.display = "none";
    setTimeout(() => {
        helperElement.style.display = "block";
    }, 5)   
}

export function helperTextDOM (gameEvent) {
    let helperTextEl = document.getElementById('memo-helper-text');

    let memoText = helperTexts(gameEvent);

    if (gameEvent === 'rules') {
        helperElement.addEventListener('click', showRules);
    }

    if (gameEvent === 'win') {
        addAnimation();
    }

    helperTextEl.textContent = memoText;
}