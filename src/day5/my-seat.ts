import {computeRowAndColumn} from "./compute-row-column";


export function mySeat(input: string) {
    const seatCodes = input.split('\n')
        .map(computeRowAndColumn);

    for (let row = 0; row < 128; row++) {
        for (let column = 0; column < 8; column++) {
            if (!seatCodes.some(code => code.row === row && code.column === column)) {
                console.log(`${row}:${column}`)
            }
        }
    }
}
