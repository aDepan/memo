import {newColorsSet} from './util.js';
import {cards, numberOfPairs} from './render-card-set.js';
import {helperTextDOM} from './helper-func.js';

export let numberOfSteps = 0;
export let confirmedPairs = 0;
export let amountStepsToWin = 0;

let considerCards = [];

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
        helperTextDOM("win");
        confirmedPairs = 0;
        numberOfSteps = 0;
    }
}
