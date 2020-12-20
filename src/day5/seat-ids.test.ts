import {seatIds} from './seat-ids';
import {mocked} from 'ts-jest/utils';

import {computeRowAndColumn} from "./compute-row-column";

jest.mock('./compute-row-column');
const mockedComputeRowAndColumn = mocked(computeRowAndColumn);

it('computes all seat-ids for a single input', function () {
    mockedComputeRowAndColumn.mockReturnValue({row: 70, column: 7});

    expect(seatIds("BFFFBBFRRR")).toEqual([567]);

    expect(mockedComputeRowAndColumn).toBeCalledWith("BFFFBBFRRR");
});

it('computes all seat-ids for a two inputs', function () {
    mockedComputeRowAndColumn
        .mockReturnValueOnce({row: 70, column: 7})
        .mockReturnValueOnce({row: 14, column: 7});

    expect(seatIds("BFFFBBFRRR\nFFFBBBFRRR")).toEqual([567, 119]);

    expect(mockedComputeRowAndColumn).toBeCalledWith("BFFFBBFRRR");
    expect(mockedComputeRowAndColumn).toBeCalledWith("FFFBBBFRRR");
});
