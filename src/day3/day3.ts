import {readFileSync} from 'fs';
import {countTrees} from "./count-trees";

const input = readFileSync(__dirname + '/input.txt').toString();
console.log(countTrees(input, [{down:1, right:3}]))
console.log(countTrees(input, [{down:1, right:1},{down:1, right:3},{down:1, right:5},{down:1, right:7}, {down:2, right: 1}]))
