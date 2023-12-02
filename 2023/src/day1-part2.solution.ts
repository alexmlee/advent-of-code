import { processInputAndExecuteCallback } from "./util";

const NUMBER_REGEX = /\d/;

async function day_1_solution() {
  let sumOfCalibrationValues = 0;
  const callback = (line: string) => {
    const digitWords: { [key: string]: number } = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };
    console.log("Object.keys(digitWords) is: ", Object.keys(digitWords));
    const regexPattern = new RegExp(
      `^(${Object.keys(digitWords).join("|")}|\\d)$`
    );

    const matches: string[] = [];
    for (let i = 0; i < line.length; i++) {
      for (let j = i + 1; j <= line.length; j++) {
        const substring = line.slice(i, j);
        if (regexPattern.test(substring)) {
          matches.push(substring);
        }
      }
    }

    if (!matches.length) {
      throw new Error("No matches found");
    }
    console.log("matches are: ", matches);
    const translateMatch = (match: string): string | number => {
      return digitWords[match] ?? match;
    };

    const firstMatch = translateMatch(matches[0]);
    const lastMatch = translateMatch(matches[matches.length - 1]);
    console.log("-------------------");
    console.log("Line is: ", line);
    console.log("Calibration values are: ", firstMatch, lastMatch);
    const value = String(firstMatch) + String(lastMatch);
    console.log("Value is: ", value);
    console.log("sumOfCalibrationValues is: ", sumOfCalibrationValues);
    sumOfCalibrationValues += Number(value);
    console.log("sumOfCalibrationValues is: ", sumOfCalibrationValues);
  };
  await processInputAndExecuteCallback("day1.input.txt", callback);
  return sumOfCalibrationValues;
}

const x = async () => {
  const result = await day_1_solution();
  console.log(result);
};
x();
