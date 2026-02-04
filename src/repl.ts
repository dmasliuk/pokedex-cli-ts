
export function cleanInput(str: string): string[] {
    return str.toLowerCase().split(" ").filter(word => word !== "");
}