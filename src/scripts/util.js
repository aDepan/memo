import {cards, numberOfPairs} from './render-card-set.js';
import {helperTexts} from './helper-func.js';

const basicSet=["red", "yellow", "blue", "pink", "green", "lightblue", "brown", "darkgreen", "purple", "lime"];
const designerSet=["green0", "green1", "green2", "green3", "green4", "green5", "green6", "green7", "green8", "green9"];


let considerCards = [];
const newColorsSet=[];

export let numberOfSteps = 0;
export let confirmedPairs = 0;
export let amountStepsToWin = 0;

export function pickLevel (level) {
    let pairs;
    let colors = 'basic';
    switch (level) {
        case 'easy': 
            pairs = 4;
            break;    
        case 'medium': 
            pairs = 6;
            break;       
        case 'hard': 
            pairs = 10;
            break;
        case 'designer':
            pairs = 10;
            colors = 'design';
            break;
        default: 
            pairs = 4;
    }
    return [pairs, colors];
}

export function pickColorset (name) {
    let colorset;
    if (name === 'design') {
        colorset = designerSet;
        helperTexts('designerMode');
    } else {
        colorset = basicSet;
    }
    return colorset;
}


export function cleanParent (parentEl) {
    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild)
      }
}


export function randomColor (colorsetName) {
    newColorsSet.length = 0;
    let cardColor;
    while (newColorsSet.length<numberOfPairs*2) {
        let coef = Math.random() * (numberOfPairs - 1);
        coef = coef.toFixed(0);
        cardColor = colorsetName[coef];
        let amountCard = newColorsSet.filter(clr => clr==cardColor).length;
        if (amountCard < 2) {
            newColorsSet.push(cardColor);
        }
    }
}

export function toggleCard (element) {
    let elId = element.getAttribute("id");
    if (element.classList.contains("confirmed")) {
        return;
    }

    cards[elId-1].classList.add(newColorsSet[elId-1] +"-card");
    cards[elId-1].classList.remove("backside");
    considerCards.push(cards[elId-1]);
    //console.log(considerCards[0].id);

    //console.log(considerCards);
    if (considerCards.length === 2) {
            numberOfSteps++;
            let card1 = document.getElementById(considerCards[0].id);
            let card2 = document.getElementById(considerCards[1].id);
            if (considerCards[0].classList.value === considerCards[1].classList.value){
                if (considerCards[0].id !== considerCards[1].id) {
                    card1.classList.add("confirmed");
                    card2.classList.add("confirmed");
                    considerCards = [];
                    confirmedPairs++;
                } else {
                    considerCards.pop();
                }
            } else {
                considerCards = [];
                setTimeout(() => {
                    card1.className = "card backside";
                    card2.className = "card backside";
                }, 800)
            }
    }
    if (confirmedPairs === numberOfPairs) {
        amountStepsToWin = numberOfSteps;
        helperTexts("win");
        confirmedPairs = 0;
        numberOfSteps = 0;
    }
}


