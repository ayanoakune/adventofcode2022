import { input } from "./day6-input";

function isUniqueLetters(arr: string[]): boolean {
  return arr.length === [...new Set(arr)].length;
}

export function day6part2() {
  let lettersProcessed = null;
  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) {
      return;
    }

    const arr = lines[i].split("");
    let temp4Letters: string[] = [
      arr[0],
      arr[1],
      arr[2],
      arr[3],
      arr[4],
      arr[5],
      arr[6],
      arr[7],
      arr[8],
      arr[9],
      arr[10],
      arr[11],
      arr[12],
    ];

    for (let x = 3; x < arr.length; x++) {
      temp4Letters.push(arr[x]);

      if (isUniqueLetters(temp4Letters)) {
        lettersProcessed = x + 1;
        break;
      }

      temp4Letters.shift();
    }
  }

  return lettersProcessed;
}
