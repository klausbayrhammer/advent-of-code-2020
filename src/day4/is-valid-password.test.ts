import {isValidPassword} from './is-valid-password';

const createValidPassport = () => ({ecl: 'gry', pid: '860033327', eyr: '2020', hcl: '#fffffd', byr: '1937', iyr: '2017', hgt: '183cm'});
it('returns true for valid passwords', function () {
    expect(isValidPassword(createValidPassport())).toEqual(true);
});


['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt'].forEach(property => {
    it(`returns false for passwords without ${property}`, () => {
        const invalidPassport = createValidPassport();
        delete invalidPassport[property];
        expect(isValidPassword(invalidPassport)).toEqual(false);

    })
})
