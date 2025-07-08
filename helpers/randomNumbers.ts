function generateRandomNumbers(
  count: number = 4,
  options: {
    min?: number;
    max?: number;
    integer?: boolean;
    unique?: boolean;
  } = {}
): number[] {
  const { min = 0, max = 9, integer = true, unique = true } = options;

  const numbers: number[] = [];

  while (numbers.length < count) {
    const randomNum = min + Math.random() * (max - min);

    const finalNum = integer ? Math.floor(randomNum) : randomNum;

    if (!unique || !numbers.includes(finalNum)) {
      numbers.push(finalNum);
    }
  }
  return numbers;
}
