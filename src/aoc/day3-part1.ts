import { input } from "./day3-input";

function splitWord(word: string) {
  const firstHalf = word.substring(0, word.length / 2);
  const lastHalf = word.substring(word.length / 2, word.length);

  return [firstHalf, lastHalf];
}

function calcPriority(first: string, last: string) {
  let firstValues = new Set();

  for (let i = 0; i < first.length; i++) {
    firstValues.add(first.charCodeAt(i));
  }

  let common = null;
  for (let i = 0; i < last.length; i++) {
    if (firstValues.has(last.charCodeAt(i))) {
      common = last.charCodeAt(i);
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

export function day3part1() {
  let sumOfPriorities = 0;
  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) {
      continue;
    }

    const [firstHalf, lastHalf] = splitWord(lines[i]);
    const priority = calcPriority(firstHalf, lastHalf);
    sumOfPriorities += priority;
  }

  return sumOfPriorities;
}
