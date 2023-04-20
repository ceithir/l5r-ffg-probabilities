# Probabilities for FFG/Edge _Legends of the Five Rings_ dice system

You likely just want to reach for the `probabilities.csv` file, which contains most common results already compiled.

The definition of columns is as follow:

Ring: Number of ring dice rolled (also number of dice kept)
Skill: Number of skill dice rolled
TN: Number of success wished for (_at least_)
Compromised?: Treat dice sides with strife as blank if set to 1
Opportunities: Number of opportunities wanted (_at least_)
Result (%): Result, in percents, rounded

See the `maths.js` file if you're interested in the algorithm which was used to determine them.

Everything else is "code to make code" and of little relevance on its own.

Project inspired by and checked against the results of https://l5r-dice-sim.vercel.app/
