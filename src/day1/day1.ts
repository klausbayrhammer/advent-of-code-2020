import {readFileSync} from 'fs';
import {findProductOfTwoSums} from "./find-product-of-two-sums";
import {findProductOfThreeSums} from "./find-product-of-three-sums";

const input = readFileSync(__dirname + '/input.txt').toString()
const productofTwoSums = findProductOfTwoSums(input, 2020);
console.log(productofTwoSums);

const productofThreeSums = findProductOfThreeSums(input, 2020);
console.log(productofThreeSums);
