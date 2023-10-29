export function capitalize(x: string) {
    return x.slice(0, 1).toUpperCase() + x.slice(1)
}

export function deCleanText(x: string) {
    return x.split(' ').map(word => word.toLowerCase()).join("_")
}