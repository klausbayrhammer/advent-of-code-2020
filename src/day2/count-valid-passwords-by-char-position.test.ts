import {countValidPasswordsByPosition} from './count-valid-passwords-by-char-position'

it('1-3 a: abcde is valid: position 1 contains a and position 3 does not', () => {
    expect(countValidPasswordsByPosition([{min:1, max:3, char: 'a', password:'abcde'}])).toEqual(1);
})
it('1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b', () => {
    expect(countValidPasswordsByPosition([{min:1, max:3, char: 'b', password:'cdefg'}])).toEqual(0);
})
it('2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c', () => {
    expect(countValidPasswordsByPosition([{min:2, max:9, char: 'c', password:'ccccccccc'}])).toEqual(0);
})

it('2-9 c: aaccccccc is invalid: both position 2 and position 9 contain c', () => {
    expect(countValidPasswordsByPosition([{min:2, max:9, char: 'c', password:'aaccccccc'}])).toEqual(1);
})
