import {computeRowAndColumn} from "./compute-row-column";

it('parses rows correctly', () => {
    expect(computeRowAndColumn('BFFFBBFRRR')).toEqual({row: 70, column: 7});
})
