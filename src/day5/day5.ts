import {readFileSync} from 'fs';
import {seatIds} from "./seat-ids";
import {mySeat} from "./my-seat";

const input = readFileSync(__dirname + '/input.txt').toString();
console.log(Math.max(...seatIds(input.trim())));
mySeat(input.trim());
