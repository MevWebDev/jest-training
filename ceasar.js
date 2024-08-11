export function ceasar(string, n) {
  return string
    .split("")
    .map((char) => {
      let ascii = char.charCodeAt(0);
      if (ascii >= 65 && ascii <= 90) {
        ascii = ascii + n;
        if (ascii > 90) ascii = ascii - 26;
      }
      if (ascii > 90 && ascii <= 122) {
        ascii = ascii + n;
        if (ascii > 122) ascii = ascii - 26;
      } else {
        ascii = ascii;
      }

      return String.fromCharCode(ascii);
    })
    .join("");
}
