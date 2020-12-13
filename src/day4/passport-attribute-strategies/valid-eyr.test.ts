import {isValidEyr} from './valid-eyr';

it('is a invalid if lower than 1920', () => {
    expect(isValidEyr('2019')).toEqual(false);
})
it('is a valid if below  than 2002', () => {
    expect(isValidEyr('2020')).toEqual(true);
})
it('is a invalid if above  than 2002', () => {
    expect(isValidEyr('2031')).toEqual(false);
})
