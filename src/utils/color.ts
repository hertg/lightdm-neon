// attribution: https://coderwall.com/p/z8uxzw/javascript-color-blender
export const blend = (a: string, b: string, amount: number) => {
    a = toFullHex(a || '#000000');
    b = toFullHex(b || '#ffffff');
    amount = amount || 0.5;
    let rgbA = hexToRgb(a.substring(1))
    let rgbB = hexToRgb(b.substring(1))
    let blended = [
        (1 - amount) * rgbA[0] + amount * rgbB[0],
        (1 - amount) * rgbA[1] + amount * rgbB[1],
        (1 - amount) * rgbA[2] + amount * rgbB[2],
    ]
    return rgbToHex(blended);
}

// convert 3 char hex to 6 char hex
export const toFullHex = (c: string) => {
    if (c.length == 4) {
        c = c[1] + c[1] + c[2] + c[2] + c[3] + c[3];
    }
    return c;
}

export const hexToRgb = (c: string) => {
    return [parseInt(c[0] + c[1], 16), parseInt(c[2] + c[3], 16), parseInt(c[4] + c[5], 16)]
}

export const rgbToHex = (c: number[]) => {
    return '#' + intToHex(c[0]) + intToHex(c[1]) + intToHex(c[2]);
}

export const intToHex = (n: number) => {
    let hex = Math.round(n).toString(16);
    if (hex.length == 1)
        hex = '0' + hex;
    return hex;
}

// credits: https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgb-to-hsl
export const hexToHsl = (hex: string) => {
  let rgb: number[] = hexToRgb(hex.substring(1));
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;
  let cmin = Math.min(r,g,b);
  let cmax = Math.max(r,g,b);
  let delta = cmax - cmin;
  let h: number = 0;
  let s: number = 0;
  let l: number = 0;

  if (delta === 0) h = 0
  else if (cmax === r) h = ((g - b) / delta) % 6
  else if (cmax === g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4
  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(2);
  l = +(l * 100).toFixed(2);

  return [h, s, l];
}

// credits: https://css-tricks.com/converting-color-spaces-in-javascript/#aa-hsl-to-rgb
export const hslToHex = (hsl: number[]) => {
  let h = hsl[0];
  let s = hsl[1] / 100;
  let l = hsl[2] / 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c/2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;  
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return rgbToHex([r, g, b]);
}

// credits: https://gist.github.com/mjackson/5311256
export const hexToHsv = (hex: string) => {
  let rgb = hexToRgb(hex.substring(1));
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h, s, v = max;
  let d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max == min) {
    h = 0;
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h, s, v];
}

// credits: https://gist.github.com/mjackson/5311256
export const hsvToHex = (hsv: number[]) => {
  let h = hsv[0];
  let s = hsv[1];
  let v = hsv[2];
  let r, g, b;
  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }

  return rgbToHex([r * 255, g * 255, b * 255]);
}