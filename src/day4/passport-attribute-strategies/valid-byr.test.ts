import {isValidByr} from './valid-byr';

it('is a invalid byr if lower than 1920', () => {
    expect(isValidByr('1919')).toEqual(false);
})
it('is a valid byr if below  than 2002', () => {
    expect(isValidByr('2001')).toEqual(true);
})
it('is a invalid byr if above  than 2002', () => {
    expect(isValidByr('2003')).toEqual(false);
})
