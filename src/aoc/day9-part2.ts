import { input } from "./day9-input";

type Coord = { x: number; y: number };

function createGrid(x: number, y: number) {
  let grid: string[][] = [];

  for (let i = 0; i < y; i++) {
    grid[i] = Array(x).fill(" ");
  }

  return grid;
}

function tailHeadDiff(tail: Coord, head: Coord) {
  const xDiff = tail.x - head.x;
  const yDiff = tail.y - head.y;

  return {
    x: xDiff,
    y: yDiff,
  };
}

function moveTail(tail: Coord, diff: Coord): Coord {
  if (2 !== Math.abs(diff.x) && 2 !== Math.abs(diff.y)) {
    return tail;
  }

  if (2 === Math.abs(diff.x)) {
    if (Math.abs(diff.y)) {
      tail.y = diff.y > 0 ? tail.y - 1 : tail.y + 1;
    }
    tail.x = diff.x > 0 ? tail.x - 1 : tail.x + 1;
    return { ...tail };
  }

  if (2 === Math.abs(diff.y)) {
    if (Math.abs(diff.x)) {
      tail.x = diff.x > 0 ? tail.x - 1 : tail.x + 1;
    }
    tail.y = diff.y > 0 ? tail.y - 1 : tail.y + 1;
    return { ...tail };
  }

  return { ...tail };
}

function move(
  grid: string[][],
  knots: Coord[],
  direction: string,
  count: number
) {
  for (let i = 0; i < count; i++) {
    switch (direction) {
      case "U":
        knots[0].y -= 1;
        break;
      case "D":
        knots[0].y += 1;
        break;
      case "L":
        knots[0].x -= 1;
        break;
      case "R":
        knots[0].x += 1;
        break;
    }

    for (let j = 0; j < knots.length - 1; j++) {
      const diff = tailHeadDiff(knots[j + 1], knots[j]);

      knots[j + 1] = moveTail(knots[j + 1], diff);
    }

    grid[knots[knots.length - 1].y][knots[knots.length - 1].x] = "#";
  }
}

function countTailLocations(grid: string[][]): number {
  let count: number = 0;
  for (let i = 0; i < grid.length; i++) {
    count += grid[i].filter((v) => "#" === v).length;
  }

  return count;
}

export function day9part2() {
  const size = 1000;

  let grid = createGrid(size, size);
  let knot = { x: size / 2 - 1, y: size / 2 - 1 };
  let knots = [
    { ...knot },
    { ...knot },
    { ...knot },
    { ...knot },
    { ...knot },
    { ...knot },
    { ...knot },
    { ...knot },
    { ...knot },
    { ...knot },
  ];

  grid[knots[0].x][knots[0].y] = "#";

  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) {
      continue;
    }

    const [direction, count] = lines[i].split(" ");
    move(grid, knots, direction, parseInt(count, 10));
  }

  return countTailLocations(grid);
}
