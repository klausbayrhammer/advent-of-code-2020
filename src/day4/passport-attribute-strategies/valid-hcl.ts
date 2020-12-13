export function isValidHcl(hcl: string) {
    return /^#[\da-f]{6}$/.test(hcl);
}
