import { input } from "./day1-input";

export function day1part1() {
  let calories: number = 0;
  let caloriesTemp: number = 0;

  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) {
      if (caloriesTemp > calories) {
        calories = caloriesTemp;
      }
      caloriesTemp = 0;
    } else {
      caloriesTemp += parseInt(lines[i], 10);
    }
  }

  return calories;
}
