import {readFileSync} from 'fs';
import {parseInput} from "./parse-input";
import {countValidPasswordsByOccurence} from "./count-valid-passwords-by-char-occurence";
import {countValidPasswordsByPosition} from "./count-valid-passwords-by-char-position";

const input = readFileSync(__dirname + '/input.txt').toString();
console.log(countValidPasswordsByOccurence(parseInput(input.trim())));
console.log(countValidPasswordsByPosition(parseInput(input.trim())));
