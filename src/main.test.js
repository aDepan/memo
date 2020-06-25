const { pickLevel } = require('./util');

test('test for picking level', () => {
    const testGameSet = pickLevel('easy');
    expect(testGameSet[0]).toBe(4);
    expect(textGameSet[1]).toBe('basic');
})