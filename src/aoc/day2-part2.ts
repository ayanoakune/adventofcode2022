import { input } from "./day2-input";

const ROCK = "A";
const PAPER = "B";
const SCISSORS = "C";

function convert(second: string) {
  switch (second) {
    case "X":
      return ROCK;
    case "Y":
      return PAPER;
    case "Z":
      return SCISSORS;
  }

  return "";
}

const pick = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const result = {
  win: 6,
  draw: 3,
  lose: 0,
};

/**
 * X - lose
 * Y - draw
 * Z - win
 */

function calcGameResult(first: string, second: string) {
  let pickPoints = 0;
  let resultPoints = 0;

  second = convert(second);

  switch (first) {
    case ROCK:
      if (ROCK === second) {
        // Lose
        pickPoints = pick["scissors"];
        resultPoints = result["lose"];
      } else if (PAPER === second) {
        // Draw
        pickPoints = pick["rock"];
        resultPoints = result["draw"];
      } else {
        // Win
        pickPoints = pick["paper"];
        resultPoints = result["win"];
      }
      break;
    case PAPER:
      if (ROCK === second) {
        // Lose
        pickPoints = pick["rock"];
        resultPoints = result["lose"];
      } else if (PAPER === second) {
        // Draw
        pickPoints = pick["paper"];
        resultPoints = result["draw"];
      } else {
        // Win
        pickPoints = pick["scissors"];
        resultPoints = result["win"];
      }
      break;
    case SCISSORS:
      if (ROCK === second) {
        // Lose
        pickPoints = pick["paper"];
        resultPoints = result["lose"];
      } else if (PAPER === second) {
        // Draw
        pickPoints = pick["scissors"];
        resultPoints = result["draw"];
      } else {
        // Win
        pickPoints = pick["rock"];
        resultPoints = result["win"];
      }
      break;
  }

  return pickPoints + resultPoints;
}

export function day2part2() {
  let points = 0;
  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    const [first, second] = lines[i].split(" ");

    const result = calcGameResult(first, second);
    points += result;
  }

  return points;
}
