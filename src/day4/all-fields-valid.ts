import {Passport} from "./parse-passport";
import {allMandatoryFieldsPresent} from "./all-mandatory-fields-present";
import {isValidHgt} from "./passport-attribute-strategies/valid-hgt";
import {isValidEcl} from "./passport-attribute-strategies/valid-ecl";
import {isValidPid} from "./passport-attribute-strategies/valid-pid";
import {isValidEyr} from "./passport-attribute-strategies/valid-eyr";
import {isValidHcl} from "./passport-attribute-strategies/valid-hcl";
import {isValidByr} from "./passport-attribute-strategies/valid-byr";
import {isValidIyr} from "./passport-attribute-strategies/valid-iyr";

export function allFieldsValid(passport: Passport) {
    if(!allMandatoryFieldsPresent(passport)) {
        return false;
    }
    if(!isValidHgt(passport.hgt)) {
        return false;
    }
    if(!isValidEcl(passport.ecl)) {
        return false;
    }
    if(!isValidPid(passport.pid)) {
        return false;
    }
    if(!isValidEyr(passport.eyr)) {
        return false;
    }
    if(!isValidHcl(passport.hcl)) {
        return false;
    }
    if(!isValidByr(passport.byr)) {
        return false;
    }
    if(!isValidIyr(passport.iyr)) {
        return false;
    }
    return true;
}
