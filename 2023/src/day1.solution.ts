import { processInputAndExecuteCallback } from "./util";

const NUMBER_REGEX = /\d/;

async function day_1_solution() {
  let sumOfCalibrationValues = 0;
  const callback = (line: string) => {
    let index = 0;
    let firstCalibrationValue: string | undefined;
    let secondCalibrationValue: string | undefined;
    while (!firstCalibrationValue || !secondCalibrationValue) {
      if (NUMBER_REGEX.test(line[index]) && !firstCalibrationValue) {
        firstCalibrationValue = line[index];
      }
      if (
        NUMBER_REGEX.test(line[line.length - 1 - index]) &&
        !secondCalibrationValue
      ) {
        secondCalibrationValue = line[line.length - 1 - index];
      }
      index++;
    }
    sumOfCalibrationValues += Number(
      firstCalibrationValue + secondCalibrationValue
    );
  };
  await processInputAndExecuteCallback("day1.input.txt", callback);
  return sumOfCalibrationValues;
}

const x = async () => {
  const result = await day_1_solution();
  console.log(result);
};
x();
