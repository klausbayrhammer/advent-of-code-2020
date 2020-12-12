import {countTrees} from './count-trees';

it('counts a no tree', function () {
    expect(countTrees(".")).toEqual(0);
});

it('counts a single tree', function () {
    expect(countTrees("#")).toEqual(1);
});

it('counts trees with doing a second step', function () {
    expect(countTrees("#...\n...#")).toEqual(2);
});

it('counts trees with overflow', function () {
    expect(countTrees("#.....\n...#..\n#.....")).toEqual(3);
});
