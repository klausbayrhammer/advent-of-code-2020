export function findProductOfTwoSums(input: string, expectedSum: number): number {
    const numbers = input.split('\n').map(Number);
    for (let a of numbers) {
        for (let b of numbers) {
            if (a + b === expectedSum) {
                return a * b;
            }
        }
    }
}
