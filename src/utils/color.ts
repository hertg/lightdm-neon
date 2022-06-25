
// attribution: https://coderwall.com/p/z8uxzw/javascript-color-blender
export const blend = (a: string, b: string, amount: number) => {
    a = toFullHex(a || '#000000');
    b = toFullHex(b || '#ffffff');
    amount = amount || 0.5;

    console.log(a, b)

    let rgbA = toRgb(a.substring(1))
    let rgbB = toRgb(b.substring(1))

    console.log(rgbA, rgbB)

    let blended = [
        (1 - amount) * rgbA[0] + amount * rgbB[0],
        (1 - amount) * rgbA[1] + amount * rgbB[1],
        (1 - amount) * rgbA[2] + amount * rgbB[2],
    ]

    return toHex(blended);
}

// convert 3 char hex to 6 char hex
const toFullHex = (c: string) => {
    if (c.length == 4) {
        c = c[1] + c[1] + c[2] + c[2] + c[3] + c[3];
    }
    return c;
}

const toRgb = (c: string) => {
    return [parseInt(c[0] + c[1], 16), parseInt(c[2] + c[3], 16), parseInt(c[4] + c[5], 16)]
}

const toHex = (c: number[]) => {
    return '#' + intToHex(c[0]) + intToHex(c[1]) + intToHex(c[2]);
}

const intToHex = (n: number) => {
    let hex = Math.round(n).toString(16);
    if (hex.length == 1)
        hex = '0' + hex;
    return hex;
}