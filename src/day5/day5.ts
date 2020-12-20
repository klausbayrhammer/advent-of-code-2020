import {readFileSync} from 'fs';
import {seatIds} from "./seat-ids";

const input = readFileSync(__dirname + '/input.txt').toString();
console.log(Math.max(...seatIds(input.trim())));
