import { input } from "./day1-input";

export function day1part2() {
  let top: number[] = [0, 0, 0];
  let calories: number = 0;

  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) {
      if (top.some((value) => calories > value)) {
        // Sort by descending order.
        top = [...top, calories].sort((a, b) => b - a);
        // Removing smaller number.
        top.pop();
      }
      calories = 0;
    } else {
      calories += parseInt(lines[i], 10);
    }
  }

  return top.reduce((a, b) => a + b, 0);
}
