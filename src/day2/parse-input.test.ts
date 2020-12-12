import {parseInput} from './parse-input'

it('parses the input file correctly', () => {
    const input = `1-2 a: b\n11-22 b: c`;
    expect(parseInput(input)).toEqual([
        {min: 1, max: 2, char: 'a', password: 'b'},
        {min: 11, max: 22, char: 'b', password: 'c'}
    ]);
})
