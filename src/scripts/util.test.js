import {pickLevel} from './util.js';

test('test1', () => {
    const results= pickLevel('easy');
    expect(results[0]).toBe(4);
})

test('test1', () => {
    const results= pickLevel('easy');
    expect(results[1]).toBe('basic');
})