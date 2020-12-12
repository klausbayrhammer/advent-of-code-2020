export function findProductOfThreeSums(input: string, expectedSum: number): number {
    const numbers = input.split('\n').map(Number);
    for (let a of numbers) {
        for (let b of numbers) {
            for (let c of numbers) {
                if (a + b + c === expectedSum) {
                    return a * b * c;
                }
            }
        }
    }
}
