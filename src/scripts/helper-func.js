import {amountStepsToWin} from './util.js';


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
    let helperText = document.getElementById('memo-helper-text');
    switch (gameEvent) {
        case "rules": 
            helperText.textContent = "Do you know how to play? \n No? Click me!";
            helperElement.addEventListener('click', showRules);
            break;
        case "win":
            helperElement.removeEventListener('click',showRules);
            helperText.textContent = `Congrats! You've found all pairs! \n It took ${amountStepsToWin} steps for you.`;
            helperElement.style.display = "none";
            setTimeout(() => {
                helperElement.style.display = "block";
            }, 5)   
            break;
        case "again":
            helperText.textContent = "You can do it!";
            break;
        case "designerMode":
            helperText.textContent = "Find all green cards!";
            break;
        default:
            helperText.textContent = "Hi! I'm mr.Memo. Let's play!";
    }

}