enum Geology {
    Empty,
    Tree
}

export function countTrees(input: string): number {
    const rows = input.split('\n')
        .map(row => row.split('')
            .map(char => char === '.' ? Geology.Empty : Geology.Tree)
        );
    return rows
        .map((row, rowIndex) => row[(rowIndex * 3) % row.length])
        .filter(space => space === Geology.Tree).length;
}
