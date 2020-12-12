import {readFileSync} from 'fs';
import {countTrees} from "./count-trees";

const input = readFileSync(__dirname + '/input.txt').toString();
console.log(countTrees(input))
