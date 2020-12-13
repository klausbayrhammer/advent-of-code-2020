import {parsePassport} from './parse-passport';

it('single passport with all fields in a single row', function () {
    expect(parsePassport('ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm')).toEqual([{
        ecl: 'gry',
        pid: '860033327',
        eyr: '2020',
        hcl: '#fffffd',
        byr: '1937',
        iyr: '2017',
        cid: '147',
        hgt: '183cm'
    }]);
});

it('single passport with fields in multiple rows', function () {
    expect(parsePassport('a:1\nb:2')).toEqual([{a:'1', b:'2'}]);
});

it('multiple passports with all fields in single rows', function () {
    expect(parsePassport('a:1\n\nb:2\nc:3')).toEqual([{a:'1'}, {b:'2', c:'3'}]);
});

