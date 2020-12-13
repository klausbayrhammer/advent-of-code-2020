import {isValidIyr} from './valid-iyr';

it('is a invalid if lower than 1920', () => {
    expect(isValidIyr('2009')).toEqual(false);
})
it('is a valid if below  than 2002', () => {
    expect(isValidIyr('2010')).toEqual(true);
})
it('is a invalid if above  than 2002', () => {
    expect(isValidIyr('2021')).toEqual(false);
})
