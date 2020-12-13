export function isValidIyr(iyrString: string): boolean {
    const iyr = parseInt(iyrString);
    return 2010 <= iyr && iyr <= 2020;
}
