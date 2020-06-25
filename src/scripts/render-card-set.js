import * as utilFunc from './util.js';
import * as helperFunc from './helper-func.js'

const cardsSet = document.getElementById('cards');

const greetElement = document.getElementById('greet');
const helperElement = document.getElementById('helper');

const levelElement = document.getElementById('levels');

export let numberOfPairs;
export let cards;



export function renderCardsSet () {
    cards = null;

    helperFunc.helperTexts("rules");
    greetElement.style.display = "none";
    helperElement.style.display = "block";

    if (cardsSet.firstChild) {
        helperFunc.helperTexts("again");
        utilFunc.cleanParent(cardsSet);
    }

    let level = levelElement.value;
    const newGameSet = utilFunc.pickLevel(level);
    
    numberOfPairs = newGameSet[0];
    let colorset = utilFunc.pickColorset(newGameSet[1]);

    if (numberOfPairs > 8) {
        cardsSet.style.gridTemplateColumns=`repeat(5, 130px)`;
    } else {
        cardsSet.style.gridTemplateColumns=`repeat(4, 130px)`;
    }
        
    for (let j=1; j<=numberOfPairs*2; j++) {
        const card = document.createElement('div');
        card.classList.add('card','backside');
        card.classList.add('card');
        card.setAttribute("id", j);
        cardsSet.appendChild(card);
    }
    
    cards = document.querySelectorAll(".card");
    cards.forEach(el => el.addEventListener('click', utilFunc.toggleCard.bind(null, el)));

    utilFunc.randomColor(colorset);
}
