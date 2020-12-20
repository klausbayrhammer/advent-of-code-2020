type SeatPosition = {
    row: number;
    column: number;
}

export function computeRowAndColumn (input: string): SeatPosition {
    const binaryCodes = input.split('');

    const column = parseBinaryCode(binaryCodes, 7, 10, 'R');
    const row = parseBinaryCode(binaryCodes, 0, 7, 'B');

    return {row, column};
}

function parseBinaryCode(binaryCodes: string[], start: number, end: number, upperDigit: string) {
    const columnCode = binaryCodes
        .slice(start, end)
        .map(code => code === upperDigit ? '1' : '0')
        .join('');
    return parseInt(columnCode, 2);
}
