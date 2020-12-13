export function isValidByr(byrString: string): boolean {
    const byr = parseInt(byrString);
    return 1920 <= byr && byr <= 2002;
}
