export function analyzeArray(arr) {
  const average =
    arr.reduce((curr, next) => {
      return curr + next;
    }) / arr.length;

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const length = arr.length;
  return { average: average, min: min, max: max, length: length };
}
