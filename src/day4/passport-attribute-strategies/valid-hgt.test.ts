import {isValidHgt} from './valid-hgt';

it('returns false if no unit defined', () => {
    expect(isValidHgt('150')).toEqual(false)
})

describe('cm', function () {
    it('is a valid height if at least 150cm', function () {
        expect(isValidHgt('150cm')).toEqual(true)
    });
    it('is invalid height if at below 150cm', function () {
        expect(isValidHgt('149cm')).toEqual(false)
    })
    it('is invalid height if at above 193cm', function () {
        expect(isValidHgt('194cm')).toEqual(false)
    });
});

describe('inch', function () {
    it('is a valid height if at least 59in', function () {
        expect(isValidHgt('59in')).toEqual(true)
    });
    it('is invalid height if at below 59in', function () {
        expect(isValidHgt('58in')).toEqual(false)
    })
    it('is invalid height if at above 76in', function () {
        expect(isValidHgt('77in')).toEqual(false)
    });
});

it('is invalid if unit is not cm or in', () => {
    expect(isValidHgt('77xx')).toEqual(false)
})
