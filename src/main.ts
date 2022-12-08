import "./style.css";

import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/arta.css";
hljs.registerLanguage("typescript", typescript);

import { day1part1 } from "./aoc/day1-part1";
import { day1part2 } from "./aoc/day1-part2";
import { day2part1 } from "./aoc/day2-part1";
import { day2part2 } from "./aoc/day2-part2";
import { day3part1 } from "./aoc/day3-part1";
import { day3part2 } from "./aoc/day3-part2";
import { day4part1 } from "./aoc/day4-part1";
import { day4part2 } from "./aoc/day4-part2";
import { day5part1 } from "./aoc/day5-part1";
import { day5part2 } from "./aoc/day5-part2";
import { day6part1 } from "./aoc/day6-part1";
import { day6part2 } from "./aoc/day6-part2";
import { day7part1 } from "./aoc/day7-part1";
import { day7part2 } from "./aoc/day7-part2";

import day1part1code from "./aoc/day1-part1?raw";
import day1part2code from "./aoc/day1-part2?raw";
import day2part1code from "./aoc/day2-part1?raw";
import day2part2code from "./aoc/day2-part2?raw";
import day3part1code from "./aoc/day3-part1?raw";
import day3part2code from "./aoc/day3-part2?raw";
import day4part1code from "./aoc/day4-part1?raw";
import day4part2code from "./aoc/day4-part2?raw";
import day5part1code from "./aoc/day5-part1?raw";
import day5part2code from "./aoc/day5-part2?raw";
import day6part1code from "./aoc/day6-part1?raw";
import day6part2code from "./aoc/day6-part2?raw";
import day7part1code from "./aoc/day7-part1?raw";
import day7part2code from "./aoc/day7-part2?raw";

const aoc = [
  [
    [day1part1, day1part2],
    [day1part1code, day1part2code],
  ],
  [
    [day2part1, day2part2],
    [day2part1code, day2part2code],
  ],
  [
    [day3part1, day3part2],
    [day3part1code, day3part2code],
  ],
  [
    [day4part1, day4part2],
    [day4part1code, day4part2code],
  ],
  [
    [day5part1, day5part2],
    [day5part1code, day5part2code],
  ],
  [
    [day6part1, day6part2],
    [day6part1code, day6part2code],
  ],
  [
    [day7part1, day7part2],
    [day7part1code, day7part2code],
  ],
];

function aocCode(): string {
  let html = ``;
  for (let i = 0; i < aoc.length; i++) {
    const part1 = aoc[i][0][0] as () => any;
    const part1code = aoc[i][1][0] as string;
    const part2 = aoc[i][0][1] as () => any;
    const part2code = aoc[i][1][1] as string;

    html += `
<h3>Day ${i + 1}</h3>
<p>Part 1</p>
<pre><code class="hljs">
${hljs.highlight(part1code, { language: "typescript" }).value}
</code></pre>
<p>Result: ${part1()}</p>
<br />
<p>Part 2</p>
<pre><code class="hljs">
${hljs.highlight(part2code, { language: "typescript" }).value}
</code></pre>
<p>Result: ${part2()}</p>
    `;
  }

  return html;
}

document.querySelector<HTMLDivElement>("#aoc")!.innerHTML = aocCode();
