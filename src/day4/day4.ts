import {readFileSync} from 'fs';
import {parsePassport} from "./parse-passport";
import {allMandatoryFieldsPresent} from "./all-mandatory-fields-present";
import {allFieldsValid} from "./all-fields-valid";

const input = readFileSync(__dirname + '/input.txt').toString();
console.log(parsePassport(input).filter(allMandatoryFieldsPresent).length)
console.log(parsePassport(input).filter(allFieldsValid).length)
