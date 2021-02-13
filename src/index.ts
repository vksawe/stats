import { MatchReader } from "./MatchReader";
import { matchResult } from "./MatchResult";
//const reader = new CsvFileReader("football.csv");
//reader.read();

const reader = new MatchReader("football.csv");
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === matchResult.Homewin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === matchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
