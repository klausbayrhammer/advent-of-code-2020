export function isValidPid(pid: string) {
    return /^\d{9}$/.test(pid);
}
