export type InputEntry = {
    min: number;
    max: number;
    char: string;
    password: string;
}

export function parseInput(input: string): InputEntry[] {
    const passwordEntries = input.split('\n');
    return passwordEntries.map(entry => {
        const [_, min, max, char, password] = entry.match(/^(\d+)-(\d+) (.): (.*)$/)
        return {min: Number(min), max: Number(max), char, password};
    })
}
