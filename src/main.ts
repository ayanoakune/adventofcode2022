import "./style.css";
import typescriptLogo from "./typescript.svg";

import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/arta.css";
hljs.registerLanguage("typescript", typescript);

import { day1part1 } from "./aoc/day1-part1";
import { day1part2 } from "./aoc/day1-part2";

import day1part1code from "./aoc/day1-part1?raw";
import day1part2code from "./aoc/day1-part2?raw";

console.log(day1part1());

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
`;

// console.log(day1part1());
