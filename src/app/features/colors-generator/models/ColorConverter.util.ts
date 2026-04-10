export class ColorConverter {
  public static RGBAToHex(r: number, g: number, b: number, a: number): string {
    const toHex = (v: number) => {
      if(v < 0 || v > 255) return "00";
      return Math.round(v).toString(16).padStart(2, '0');
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`
  }
}
