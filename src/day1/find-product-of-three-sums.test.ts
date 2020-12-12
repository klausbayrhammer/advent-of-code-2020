import 'jest';
import {findProductOfThreeSums} from './find-product-of-three-sums';

it('returns the product of three sums if their sum equals a specific value', function () {
    expect(findProductOfThreeSums([2,3,4].join('\n'), 9)).toEqual(24);
});
