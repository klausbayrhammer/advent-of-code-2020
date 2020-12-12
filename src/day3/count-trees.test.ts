import {countTrees} from './count-trees';

const defaultStrategy = {down: 1, right: 3};
it('counts a no tree', function () {
    expect(countTrees(".", [defaultStrategy])).toEqual(0);
});

it('counts a single tree', function () {
    expect(countTrees("#", [defaultStrategy])).toEqual(1);
});

it('counts trees with doing a second step', function () {
    expect(countTrees("#...\n...#", [defaultStrategy])).toEqual(2);
});

it('counts trees with overflow', function () {
    expect(countTrees("#.....\n...#..\n#.....", [defaultStrategy])).toEqual(3);
});

it('counts trees with multiple strategies', function () {
    expect(countTrees("#...\n.##.", [{down: 1, right: 1}, {down: 1, right: 2}])).toEqual(4);
});

it('counts trees with multiple steps downwards', function () {
    expect(countTrees("#...\n....\n.#..", [{down: 2, right: 1}])).toEqual(2);
});
