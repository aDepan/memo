import {numberOfPairs} from './render-card-set.js';
import {helperTextDOM} from './helper-func.js';

const basicSet=["red", "yellow", "blue", "pink", "green", "lightblue", "brown", "darkgreen", "purple", "lime"];
const designerSet=["green0", "green1", "green2", "green3", "green4", "green5", "green6", "green7", "green8", "green9"];

export const newColorsSet=[];

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
        helperTextDOM('designerMode');
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



