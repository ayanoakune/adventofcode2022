import { input } from "./day4-input";

function isOverlapping(setA: Set<number>, setB: Set<number>): boolean {
  const intersection = new Set(
    [...setA].filter((element) => setB.has(element))
  );

  return intersection.size > 0;
}

function createRangeSet(section: string): Set<number> {
  let [start, end] = section.split("-");
  return new Set(
    [...Array(parseInt(end, 10) + 1).keys()].slice(parseInt(start, 10))
  );
}

export function day4part2() {
  let overlappingCount = 0;
  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) {
      return;
    }

    let [sectionA, sectionB] = lines[i].split(",");
    let rangeSetA = createRangeSet(sectionA);
    let rangeSetB = createRangeSet(sectionB);

    if (isOverlapping(rangeSetA, rangeSetB)) {
      overlappingCount += 1;
    }
  }

  return overlappingCount;
}
