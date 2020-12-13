import {Passport} from "./parse-passport";

const mandatoryPassowrdProperties = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt'];

export function isValidPassword(passport: Passport) {
    return mandatoryPassowrdProperties.every(prop => passport.hasOwnProperty(prop));
}
