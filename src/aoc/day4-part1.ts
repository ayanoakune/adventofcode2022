import { input } from "./day4-input";

function createRange(section: string): number[] {
  let [start, end] = section.split("-");
  return [...Array(parseInt(end, 10) + 1).keys()].slice(parseInt(start, 10));
}

function overlap(rangeA: number[], rangeB: number[]): boolean {
  let longer = rangeA.length > rangeB.length ? rangeA : rangeB;
  let shorter = rangeA.length > rangeB.length ? rangeB : rangeA;

  return shorter.every((value) => longer.includes(value));
}

export function day4part1() {
  let overlapCount = 0;
  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) {
      return;
    }

    let [sectionA, sectionB] = lines[i].split(",");

    let rangeA = createRange(sectionA);
    let rangeB = createRange(sectionB);

    if (overlap(rangeA, rangeB)) {
      overlapCount += 1;
    }
  }

  return overlapCount;
}
