import {pickLevel} from './util.js';

test('Chosen correct number of pairs', () => {
    const results= pickLevel('medium');
    expect(results[0]).toBe(6);
})

test('Chosen correct colorset', () => {
    const results= pickLevel('medium');
    expect(results[1]).toBe('basic');
})