import {InputEntry} from "./parse-input";

export function countValidPasswordsByOccurence(entries: InputEntry[]): number {
    const validPasswords = entries.filter(({min, max, char, password}) => {
        const numberOfValidChars = password.split('').filter(e => e === char).length;
        return min <= numberOfValidChars && numberOfValidChars <= max;
    });
    return validPasswords.length;
}
