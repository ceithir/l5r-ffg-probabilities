#!/usr/bin/env node

import { chances } from "../maths.js";
import { writeFile, appendFile } from "fs";

const roundedChances = (params) => {
  return (chances(params) * 100).toFixed(2);
};

const filename = "probabilities.csv";
const columns = ["Ring", "Skill", "TN", "Result (%)"];
const callback = (err) => {
  if (err) throw err;
};

await writeFile(filename, columns.join(",") + "\n", callback);

for (let ring = 1; ring <= 5; ring++) {
  for (let skill = 0; skill <= 5; skill++) {
    for (let tn = 1; tn <= 8; tn++) {
      appendFile(
        filename,
        [ring, skill, tn, roundedChances({ ring, skill, tn })].join(",") + "\n",
        callback
      );
    }
  }
}
