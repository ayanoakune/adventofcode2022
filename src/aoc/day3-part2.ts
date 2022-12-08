import { input } from "./day3-input";

function calcPriority(group: string[]) {
  let firstValues = new Set();
  let secondValues = new Set();

  for (let i = 0; i < group[0].length; i++) {
    firstValues.add(group[0].charCodeAt(i));
  }
  for (let i = 0; i < group[1].length; i++) {
    secondValues.add(group[1].charCodeAt(i));
  }

  let common = null;
  for (let i = 0; i < group[2].length; i++) {
    if (
      firstValues.has(group[2].charCodeAt(i)) &&
      secondValues.has(group[2].charCodeAt(i))
    ) {
      common = group[2].charCodeAt(i);
      break;
    }
  }

  if (!common) {
    throw new Error("No common character found");
  }

  // Lowercase letter.
  if (common > 91) {
    return common - 96;
  }
  // Uppercase letter.
  return common - 38;
}

export function day3part2() {
  let group: string[] = [];
  let sumOfPriorities = 0;
  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) {
      return;
    }

    if (group.length < 3) {
      group.push(lines[i]);
      if (3 === group.length) {
        const priority = calcPriority(group);
        sumOfPriorities += priority;
        group = [];
      }
    }
  }

  return sumOfPriorities;
}
