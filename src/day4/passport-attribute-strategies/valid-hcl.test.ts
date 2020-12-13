import {isValidHcl} from './valid-hcl';

it('returns false for fewer than 6 chars', () => {
    expect(isValidHcl('12345')).toEqual(false)
})
it('returns true for a # followed by exactly six characters 0-9 or a-f', () => {
    expect(isValidHcl('#123abc')).toEqual(true)
})
