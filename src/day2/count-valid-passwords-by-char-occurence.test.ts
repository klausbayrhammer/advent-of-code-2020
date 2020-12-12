import {countValidPasswordsByOccurence} from './count-valid-passwords-by-char-occurence'

it('counts valid passwords by char occurences', () => {
    expect(countValidPasswordsByOccurence([{min:1, max:1, char: 'a', password:'a'}])).toEqual(1);
})
