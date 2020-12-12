enum Geology {
    Empty,
    Tree
}

type Strategy = {
    right: number;
    down: number;
}

export function countTrees(input: string, strategies: Strategy[]): number {
    const rows = input.split('\n')
        .map(row => row.split('')
            .map(char => char === '.' ? Geology.Empty : Geology.Tree)
        );
    return strategies.map(strategy =>
        rows
            .filter((row, idx) => idx % strategy.down === 0)
            .map((row, rowIndex) => row[(rowIndex * strategy.right) % row.length])
            .filter(space => space === Geology.Tree).length)
        .reduce((a,b) => a*b, 1);
}
