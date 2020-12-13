export function isValidEyr(eyrString: string): boolean {
    const eyr = parseInt(eyrString);
    return 2020 <= eyr && eyr <= 2030;
}
