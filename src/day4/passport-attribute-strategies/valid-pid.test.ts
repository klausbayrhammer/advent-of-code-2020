import {isValidPid} from './valid-pid';

it('is an invalid pid if there with fewer than 0 chars', () => {
    expect(isValidPid('a')).toEqual(false);
})
it('is a valid pid with 9 digits', () => {
    expect(isValidPid('123456789')).toEqual(true);
})
it('is a invalid pid with more than 9 digits', () => {
    expect(isValidPid('8812414708')).toEqual(false);
})
