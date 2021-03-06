import { helperTexts } from './helper-func.js';

test ('Correct message for a new game', ()=> {
    let textHelper = helperTexts('again');
    expect(textHelper).toBe('You can do it!');
})

test ('Correct message for a wrong type', ()=> {
    let textHelper = helperTexts('balbala');
    expect(textHelper).toBe("Hi! I'm mr. Memo. Let's play!");
})