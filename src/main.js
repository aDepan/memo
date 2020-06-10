const cardsSet = document.getElementById('cards');

const levelElement = document.getElementById('levels');

const startGameBtn = document.getElementById('selected-levels');
const greetElement = document.getElementById('greet');
const helperElement = document.getElementById('helper');
const backdropElement = document.getElementById('backdrop');
const rulesWindow = document.getElementById('rules-window');
const confirmRulesBtn = document.querySelector('#rules-window button');
let helperText = document.getElementById('memo-helper-text');

//let level;

const basicSet=["red", "yellow", "blue", "pink", "green", "lightblue", "brown", "darkgreen", "purple", "lime"];
const designerSet=["green0", "green1", "green2", "green3", "green4", "green5", "green6", "green7", "green8", "green9"];
let cardColors;


const newColorsSet=[];
let considerCards = [];
let cards;

let numberOfPairs;
let confirmedPairs = 0;
let numberOfSteps = 0;

const showRules = () => {
    backdropElement.style.display="block";
    rulesWindow.style.display="block";
    backdropElement.addEventListener('click', hideRulesWindow);
    confirmRulesBtn.addEventListener('click', hideRulesWindow);
}

const pickLevel = (level) => {
    switch (level) {
        case "easy": 
            numberOfPairs = 4;
            cardColors = basicSet;
            break;
        
        case "medium": 
            numberOfPairs = 6;
            cardColors = basicSet;
            break;       
        case 'hard': 
            numberOfPairs = 10;
            cardColors = basicSet;
            break;
        case 'designer':
            numberOfPairs = 10;
            cardColors = designerSet;
            console.log('design');
            helperTexts("designerMode");
            break;
        default: 
            numberOfPairs = 4;
    }
}


const cleanParent = (parentEl) => {
    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild)
      }
}

const renderCardsSet = () => {
    cards = null;
    helperTexts("rules");
    greetElement.style.display = "none";
    helperElement.style.display = "block";

    if (cardsSet.firstChild) {
        console.log('again');
        helperTexts("again");
        cleanParent(cardsSet);
    }

    let level = levelElement.value;
    pickLevel(level);
    
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
    cards.forEach(el => el.addEventListener('click', toggleCard.bind(null, el)));
    randomColor();
    //console.log(cards);
    numberOfSteps = 0;
    confirmedPairs = 0;
}

const randomColor = () => {
    newColorsSet.length = 0;
    let cardColor;
    while (newColorsSet.length<numberOfPairs*2) {
        let coef = Math.random() * (numberOfPairs - 1);
        coef = coef.toFixed(0);
        cardColor = cardColors[coef];
        let amountCard = newColorsSet.filter(clr => clr==cardColor).length;
        //console.log(amountCard, cardColor, newColorsSet);
        if (amountCard < 2) {
            newColorsSet.push(cardColor);
        }
    }
    //console.log(newColorsSet);
}

const toggleCard = (element) => {
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
            //console.log(considerCards);
            numberOfSteps++;
            let card1 = document.getElementById(considerCards[0].id);
            let card2 = document.getElementById(considerCards[1].id);
            if (considerCards[0].classList.value === considerCards[1].classList.value){
                if (considerCards[0].id !== considerCards[1].id) {
                    card1.classList.add("confirmed");
                    card2.classList.add("confirmed");
                    considerCards = [];
                    confirmedPairs++;
                    console.log(confirmedPairs);
                } else {
                    considerCards.pop();
                    //console.log(considerCards);
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
        helperElement.removeEventListener('click',showRules);
        helperTexts("win");
    }
}

const hideRulesWindow = () => {
    backdropElement.style.display = "none";
    rulesWindow.style.display = "none";
}


const helperTexts = (gameEvent) => {
    switch (gameEvent) {
        case "rules": 
            helperText.textContent = "Do you know how to play? \n No? Click me!";
            helperElement.addEventListener('click', showRules);
            break;
        case "win":
            helperText.textContent = `Congrats! You've found all pairs! \n It took ${numberOfSteps} steps for you.`;
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

startGameBtn.addEventListener('click', renderCardsSet);






