const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

export function isValidEcl(eyecolor: string) {
    return validEyeColors.includes(eyecolor);
}
