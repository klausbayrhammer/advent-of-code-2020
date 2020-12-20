import {computeRowAndColumn} from "./compute-row-column";

export function seatIds(input: string): number[] {
    const seatCodes = input.split('\n');
    return seatCodes
        .map(seatCode => {
            const {row, column} = computeRowAndColumn(seatCode);
            return row * 8 + column;
        });
}
