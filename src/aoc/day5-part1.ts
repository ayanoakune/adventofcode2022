import { input } from "./day5-input";

let cargo = [
  ["B", "Z", "T"],
  ["V", "H", "T", "D", "N"],
  ["B", "F", "M", "D"],
  ["T", "J", "G", "W", "V", "Q", "L"],
  ["W", "D", "G", "P", "V", "F", "Q", "M"],
  ["V", "Z", "Q", "G", "H", "F", "S"],
  ["Z", "S", "N", "R", "L", "T", "C", "W"],
  ["Z", "H", "W", "D", "J", "N", "R", "M"],
  ["S", "Q", "L", "F", "D", "S"],
];

export function day5part1() {
  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) {
      return;
    }

    // @ts-ignore
    const [amount, from, to] = lines[i].match(/[0-9]+/gm);

    for (let x = 0; x < amount; x++) {
      const element = cargo[parseInt(from, 10) - 1].pop();

      if (element) {
        cargo[parseInt(to, 10) - 1].push(element);
      }
    }
  }

  const result = [];
  for (let i = 0; i < cargo.length; i++) {
    result.push(cargo[i][cargo[i].length - 1]);
  }

  return result.join("");
}
