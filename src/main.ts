import "./style.css";
import typescriptLogo from "./typescript.svg";

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

import day1part1code from "./aoc/day1-part1?raw";
import day1part2code from "./aoc/day1-part2?raw";
import day2part1code from "./aoc/day2-part1?raw";
import day2part2code from "./aoc/day2-part2?raw";
import day3part1code from "./aoc/day3-part1?raw";
import day3part2code from "./aoc/day3-part2?raw";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div style="text-align: center;">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Advent Of Code 2022</h1>
    <h2><i>powered by</i> Vite + TypeScript</h2>
  </div>
  <br />
  <h3> Day 1 </h3>
  <p>Part 1</p>
<pre><code class="hljs">
${hljs.highlight(day1part1code, { language: "typescript" }).value}
</code></pre>
  <p>Result: ${day1part1()}</p>
  <br />
  <p>Part 2</p>
<pre><code class="hljs">
${hljs.highlight(day1part2code, { language: "typescript" }).value}
</code></pre>
  <p>Result: ${day1part2()}</p>
  <h3> Day 2 </h3>
  <p>Part 1</p>
<pre><code class="hljs">
${hljs.highlight(day2part1code, { language: "typescript" }).value}
</code></pre>
  <p>Result: ${day2part1()}</p>
  <br />
  <p>Part 2</p>
<pre><code class="hljs">
${hljs.highlight(day2part2code, { language: "typescript" }).value}
</code></pre>
  <p>Result: ${day2part2()}</p>
  <h3> Day 3 </h3>
  <p>Part 1</p>
<pre><code class="hljs">
${hljs.highlight(day3part1code, { language: "typescript" }).value}
</code></pre>
  <p>Result: ${day3part1()}</p>
  <br />
  <p>Part 2</p>
<pre><code class="hljs">
${hljs.highlight(day3part2code, { language: "typescript" }).value}
</code></pre>
  <p>Result: ${day3part2()}</p>
`;
