import {Passport} from "./parse-passport";

const mandatoryPassowrdProperties = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt'];

export function allMandatoryFieldsPresent(passport: Passport) {
    return mandatoryPassowrdProperties.every(prop => passport.hasOwnProperty(prop));
}
