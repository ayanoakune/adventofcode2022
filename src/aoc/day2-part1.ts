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

function calcGameResult(first: string, second: string) {
  let pickPoints = 0;
  let resultPoints = 0;

  second = convert(second);

  switch (first) {
    case ROCK:
      if (ROCK === second) {
        pickPoints = 1;
        resultPoints = 3;
      } else if (PAPER === second) {
        pickPoints = 2;
        resultPoints = 6;
      } else {
        pickPoints = 3;
        resultPoints = 0;
      }
      break;
    case PAPER:
      if (ROCK === second) {
        pickPoints = 1;
        resultPoints = 0;
      } else if (PAPER === second) {
        pickPoints = 2;
        resultPoints = 3;
      } else {
        pickPoints = 3;
        resultPoints = 6;
      }
      break;
    case SCISSORS:
      if (ROCK === second) {
        pickPoints = 1;
        resultPoints = 6;
      } else if (PAPER === second) {
        pickPoints = 2;
        resultPoints = 0;
      } else {
        pickPoints = 3;
        resultPoints = 3;
      }
      break;
  }

  return pickPoints + resultPoints;
}

export function day2part1() {
  let points = 0;
  const lines = input.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    const [first, second] = lines[i].split(" ");

    const result = calcGameResult(first, second);
    points += result;
  }

  return points;
}
