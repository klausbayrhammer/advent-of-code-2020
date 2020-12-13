import {isValidEcl} from './valid-ecl';

['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].forEach(eyeColor => {
    it(`${eyeColor} is a valid eyecolor`, () => {
        expect(isValidEcl(eyeColor)).toEqual(true);
    })
})

it(`xxx is an invalid eyecolor`, () => {
    expect(isValidEcl('xxx')).toEqual(false);
})

