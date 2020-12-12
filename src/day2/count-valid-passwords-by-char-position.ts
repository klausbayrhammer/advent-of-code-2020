import {InputEntry} from "./parse-input";

export function countValidPasswordsByPosition(entries: InputEntry[]) {
    const validPasswords = entries.filter(({min, max, char, password}) => {
        const validCharOnMinPosition = password.charAt(min - 1) === char;
        const validCharOnMaxPosition = password.charAt(max - 1) === char;
        return validCharOnMinPosition && !validCharOnMaxPosition || !validCharOnMinPosition && validCharOnMaxPosition;
    })
    return validPasswords.length;
}
