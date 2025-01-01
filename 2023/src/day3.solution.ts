import { processInputAndExecuteCallback } from "./util";

const processLine = (
  currentLine: string[],
  previousLine: string[],
  nextLine: string[]
): number => {
  let sumOfLinePartNumbers = 0;

  // problem,not escaping from forEach early if number is not a digit
  // also, need to evaluate whole numbers, not just single digits

  // find digit
  // get whole number
  // get starting an end index

  // check current row, just before, just after
  // check above row, just before, just after, and all indices in between
  // check after row, just before, just after, and all indices in between


  let index = 0;
  let itemsToProcess: { digits: number, startIndex: number}[] = [];
  while (index < currentLine.length) {
    if (!isNaN(Number(currentLine[index]))) {
      let digits = currentLine[index];
      while (!isNaN(Number(currentLine[index + 1]))) {
        digits += currentLine[index + 1];
        index++;
      }
    }

    index += digits.length
    itemsToProcess.push({ number: Number(digits), startIndex: index }})
  }

  currentLine.forEach((item, index) => {
    

  });

  return sumOfLinePartNumbers;
};

async function day_3_solution() {
  let sumofPossibleGameIds = 0;
  let previousLine: string[] = [];
  let currentLine: string[] = [];
  let nextLine: string[] = [];
  const callback = (line: string) => {
    previousLine = currentLine;
    currentLine = nextLine;
    nextLine = line.split("");
    const sumOfPartNumbersInCurrentLine = processLine(
      currentLine,
      previousLine,
      nextLine
    );
    sumofPossibleGameIds += sumOfPartNumbersInCurrentLine;
  };
  await processInputAndExecuteCallback("day3.input.txt", callback);
  return sumofPossibleGameIds;
}

(async () => {
  const result = await day_3_solution();
  console.log(result);
})();

// currentLine.forEach((item, index) => {
//   let isPartNumber = false;
//   // to the left, same line
//   if (
//     currentLine[index - 1] &&
//     currentLine[index - 1] !== "." &&
//     isNaN(Number(currentLine[index - 1]))
//   ) {
//     isPartNumber = true;
//   }
//   // to the right, same line
//   if (
//     currentLine[index + 1] &&
//     currentLine[index + 1] !== "." &&
//     isNaN(Number(currentLine[index + 1]))
//   ) {
//     isPartNumber = true;
//   }

//   // above, to the left
//   if (
//     previousLine[index - 1] &&
//     previousLine[index - 1] !== "." &&
//     isNaN(Number(previousLine[index - 1]))
//   ) {
//     isPartNumber = true;
//   }
//   // above, same column
//   if (
//     previousLine[index] &&
//     previousLine[index] !== "." &&
//     isNaN(Number(previousLine[index]))
//   ) {
//     isPartNumber = true;
//   }
//   // above, to the right
//   if (
//     previousLine[index + 1] &&
//     previousLine[index + 1] !== "." &&
//     isNaN(Number(previousLine[index + 1]))
//   ) {
//     isPartNumber = true;
//   }
//   // below, to the left
//   if (
//     nextLine[index - 1] &&
//     nextLine[index - 1] !== "." &&
//     isNaN(Number(nextLine[index - 1]))
//   ) {
//     isPartNumber = true;
//   }
//   // below, same column
//   if (
//     nextLine[index] &&
//     nextLine[index] !== "." &&
//     isNaN(Number(nextLine[index]))
//   ) {
//     isPartNumber = true;
//   }
//   // below, to the right
//   if (
//     nextLine[index + 1] &&
//     nextLine[index + 1] !== "." &&
//     isNaN(Number(nextLine[index + 1]))
//   ) {
//     isPartNumber = true;
//   }

//   if (isPartNumber) {
//     sumOfLinePartNumbers += Number(item);
//   }
// });
