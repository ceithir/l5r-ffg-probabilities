#!/usr/bin/env node

import { chances } from "../maths.js";
import { createWriteStream } from "fs";

const roundedChances = (params) => {
  let result = chances(params);
  // Rounding errors when near zero
  if (result < 0) {
    result = 0;
  }

  return (result * 100).toFixed(2);
};

const filename = "probabilities.csv";
const columns = ["Ring", "Skill", "TN", "Compromised?", "Result (%)"];

let writeableStream = createWriteStream(filename);

writeableStream.write(columns.join(",") + "\n");

for (let ring = 1; ring <= 5; ring++) {
  for (let skill = 0; skill <= 5; skill++) {
    for (let tn = 1; tn <= 8; tn++) {
      for (let compromised = 0; compromised <= 1; compromised++) {
        writeableStream.write(
          [
            ring,
            skill,
            tn,
            compromised,
            roundedChances({ ring, skill, tn, options: { compromised } }),
          ].join(",") + "\n"
        );
      }
    }
  }
}
