import {readFileSync} from 'fs';
import {parsePassport} from "./parse-passport";
import {isValidPassword} from "./is-valid-password";

const input = readFileSync(__dirname + '/input.txt').toString();
console.log(parsePassport(input).filter(isValidPassword).length)
