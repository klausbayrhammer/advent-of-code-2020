import 'jest';
import {findProductOfTwoSums} from './find-product-of-two-sums';

it('returns the product of two sums if their sum equals a specific value', function () {
    expect(findProductOfTwoSums([2,3].join('\n'), 5)).toEqual(6);
});

it('returns the product of two sums if their sum equals a specific value', function () {
    expect(findProductOfTwoSums([1,2,3].join('\n'), 3)).toEqual(2);
});
