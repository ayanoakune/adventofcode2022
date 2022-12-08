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

function calcScenicScore(grid: number[][], y: number, x: number): number {
  const tree: number = grid[y][x];

  const fromTop = () => {
    let treesOnWay: number[] = [];
    for (let t = 0; t < y; t++) {
      treesOnWay.push(grid[t][x]);
    }

    let count = 0;
    treesOnWay = treesOnWay.reverse();
    for (let c = 0; c < treesOnWay.length; c++) {
      count += 1;
      if (treesOnWay[c] >= tree) {
        break;
      }
    }

    return count;
  };

  const fromBot = () => {
    let treesOnWay: number[] = [];
    for (let b = y + 1; b < grid[y].length; b++) {
      treesOnWay.push(grid[b][x]);
    }

    let count = 0;
    for (let c = 0; c < treesOnWay.length; c++) {
      count += 1;
      if (treesOnWay[c] >= tree) {
        break;
      }
    }

    return count;
  };

  const fromLeft = () => {
    let treesOnWay: number[] = [];
    for (let l = 0; l < x; l++) {
      treesOnWay.push(grid[y][l]);
    }

    let count = 0;
    treesOnWay = treesOnWay.reverse();
    for (let c = 0; c < treesOnWay.length; c++) {
      count += 1;
      if (treesOnWay[c] >= tree) {
        break;
      }
    }

    return count;
  };

  const fromRight = () => {
    let treesOnWay: number[] = [];
    for (let r = grid[y].length - 1; r > x; r--) {
      treesOnWay.push(grid[y][r]);
    }

    let count = 0;
    treesOnWay = treesOnWay.reverse();

    for (let c = 0; c < treesOnWay.length; c++) {
      count += 1;
      if (treesOnWay[c] >= tree) {
        break;
      }
    }

    return count;
  };

  const top = fromTop();
  const bot = fromBot();
  const left = fromLeft();
  const right = fromRight();

  return top * left * bot * right;
}

export function day8part2() {
  const lines = input.split(/\r?\n/);
  const grid = createGrid(lines);

  let scenicScore: number = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      let newScenicScore = calcScenicScore(grid, y, x);
      if (newScenicScore > scenicScore) {
        scenicScore = newScenicScore;
      }
    }
  }

  return scenicScore;
}
