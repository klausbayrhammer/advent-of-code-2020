import {allFieldsValid} from './all-fields-valid';

it('returns true for valid passwords', function () {
    expect(allFieldsValid({ecl: 'gry', pid: '860033327', eyr: '2020', hcl: '#fffffd', byr: '1937', iyr: '2017', hgt: '183cm'})).toEqual(true);
});

it('returns false if ecl is missing', function () {
    expect(allFieldsValid({pid: '860033327', eyr: '2020', hcl: '#fffffd', byr: '1937', iyr: '2017', hgt: '183cm'})).toEqual(false);
});
it('returns false for invalid hgt', function () {
    expect(allFieldsValid({ecl: 'gry', pid: '860033327', eyr: '2020', hcl: '#fffffd', byr: '1937', iyr: '2017', hgt: '1in'})).toEqual(false);
});
it('returns false for invalid ecl', function () {
    expect(allFieldsValid({ecl: 'xxx', pid: '860033327', eyr: '2020', hcl: '#fffffd', byr: '1937', iyr: '2017', hgt: '183cm'})).toEqual(false);
});
it('returns false for invalid pid', function () {
    expect(allFieldsValid({ecl: 'gry', pid: 'x', eyr: '2020', hcl: '#fffffd', byr: '1937', iyr: '2017', hgt: '183cm'})).toEqual(false);
});
it('returns false for invalid eyr', function () {
    expect(allFieldsValid({ecl: 'gry', pid: '860033327', eyr: '1900', hcl: '#fffffd', byr: '1937', iyr: '2017', hgt: '183cm'})).toEqual(false);
});
it('returns false for invalid hcl', function () {
    expect(allFieldsValid({ecl: 'gry', pid: '860033327', eyr: '2020', hcl: 'x', byr: '1937', iyr: '2017', hgt: '183cm'})).toEqual(false);
});
it('returns false for invalid byr', function () {
    expect(allFieldsValid({ecl: 'gry', pid: '860033327', eyr: '2020', hcl: '#fffffd', byr: '1900', iyr: '2017', hgt: '183cm'})).toEqual(false);
});
it('returns false for invalid iyr', function () {
    expect(allFieldsValid({ecl: 'gry', pid: '860033327', eyr: '2020', hcl: '#fffffd', byr: '1937', iyr: 'x', hgt: '183cm'})).toEqual(false);
});
