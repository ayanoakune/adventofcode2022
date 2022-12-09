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
  }

  if (2 === Math.abs(diff.y)) {
    if (Math.abs(diff.x)) {
      tail.x = diff.x > 0 ? tail.x - 1 : tail.x + 1;
    }
    tail.y = diff.y > 0 ? tail.y - 1 : tail.y + 1;
  }

  return tail;
}

function move(
  grid: string[][],
  tail: Coord,
  head: Coord,
  direction: string,
  count: number
) {
  for (let i = 0; i < count; i++) {
    switch (direction) {
      case "U":
        head.y -= 1;
        break;
      case "D":
        head.y += 1;
        break;
      case "L":
        head.x -= 1;
        break;
      case "R":
        head.x += 1;
        break;
    }

    const diff = tailHeadDiff(tail, head);

    tail = moveTail(tail, diff);
    console.log(tail);

    grid[tail.y][tail.x] = "#";
  }
}

function countTailLocations(grid: string[][]): number {
  let count: number = 0;
  for (let i = 0; i < grid.length; i++) {
    count += grid[i].filter((v) => "#" === v).length;
  }

  return count;
}

export function day9part1() {
  const size = 1000;

  let grid = createGrid(size, size);
  let tail = {
    x: size / 2 - 1,
    y: size / 2 - 1,
  };
  let head = {
    x: size / 2 - 1,
    y: size / 2 - 1,
  };
  grid[head.x][head.y] = "#";

  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) {
      continue;
    }

    const [direction, count] = lines[i].split(" ");
    move(grid, tail, head, direction, parseInt(count, 10));
  }

  return countTailLocations(grid);
}
