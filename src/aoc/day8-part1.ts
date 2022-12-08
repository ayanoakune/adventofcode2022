import { input } from "./day8-input";

function createGrid(treeLines: string[]): number[][] {
  let grid: number[][] = [];

  for (let y = 0; y < treeLines.length; y++) {
    let treeLine = treeLines[y];
    let trees = treeLine.split("");
    grid[y] = [];
    for (let x = 0; x < trees.length; x++) {
      grid[y][x] = parseInt(trees[x], 10);
    }
  }

  return grid;
}

function isTreeVisible(grid: number[][], y: number, x: number): number {
  const tree: number = grid[y][x];

  const fromTop = () => {
    let treesOnWay: number[] = [];
    for (let t = 0; t < y; t++) {
      treesOnWay.push(grid[t][x]);
    }

    return treesOnWay.every((v) => tree > v);
  };

  const fromBot = () => {
    let treesOnWay: number[] = [];
    for (let b = y + 1; b < grid[y].length; b++) {
      treesOnWay.push(grid[b][x]);
    }

    return treesOnWay.every((t) => tree > t);
  };

  const fromLeft = () => {
    let treesOnWay: number[] = [];
    for (let l = 0; l < x; l++) {
      treesOnWay.push(grid[y][l]);
    }

    return treesOnWay.every((t) => tree > t);
  };

  const fromRight = () => {
    let treesOnWay: number[] = [];
    for (let r = grid[y].length - 1; r > x; r--) {
      treesOnWay.push(grid[y][r]);
    }

    return treesOnWay.every((t) => tree > t);
  };

  const top = fromTop();
  const bot = fromBot();
  const left = fromLeft();
  const right = fromRight();

  return top || bot || left || right ? 1 : 0;
}

export function day8part1() {
  const lines = input.split(/\r?\n/);
  const grid = createGrid(lines);

  // Instantly adding outer trees to visible list.
  let visibleTrees: number = grid.length * 2 + grid[0].length * 2 - 4;

  for (let y = 1; y < grid.length - 1; y++) {
    for (let x = 1; x < grid[y].length - 1; x++) {
      visibleTrees += isTreeVisible(grid, y, x);
    }
  }

  return visibleTrees;
}
