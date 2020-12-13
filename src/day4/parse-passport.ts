export type Passport = {
    ecl?: string;
    pid?: string;
    eyr?: string;
    hcl?: string;
    byr?: string;
    iyr?: string;
    cid?: string;
    hgt?: string;
}

export function parsePassport(input: string): Passport[] {
    return input.split('\n\n')
        .map(passportEntry => passportEntry.split(/[ \n]/)
            .reduce<Passport>((acc, fragment) => {
                const [key, value] = fragment.split(':');
                return Object.assign(acc, {[key]: value});
            }, {})
        );
}
