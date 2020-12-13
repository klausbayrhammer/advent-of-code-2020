export function isValidHgt(passportHeight: string) {
    const match = passportHeight.match(/(\d+)(cm|in)/);
    if(!match) {
        return false;
    }
    const height = parseInt(match[1]);
    const unit = match[2];

    if(unit === 'cm') {
        return 150 <= height && height <= 193;
    }
    if(unit === 'in') {
        return 59 <= height && height <= 76;
    }
    return false;

}
