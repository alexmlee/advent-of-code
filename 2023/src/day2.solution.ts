import { processInputAndExecuteCallback } from "./util";

enum Color {
  Green = "green",
  Red = "red",
  Blue = "blue",
}
const colorLimit: Record<Color, number> = {
  [Color.Green]: 13,
  [Color.Red]: 12,
  [Color.Blue]: 14,
};

function compareColorRecords(
  possibleRecord: Record<Color, number>,
  limitRecord: Record<Color, number>
): boolean {
  for (const color in possibleRecord) {
    if (possibleRecord[color as Color] > limitRecord[color as Color]) {
      return false;
    }
  }
  return true;
}

async function day_2_solution() {
  let sumofPossibleGameIds = 0;
  const callback = (line: string) => {
    let gameValid = true;
    // const gameColorCounter: Record<Color, number> = {
    //   [Color.Green]: 0,
    //   [Color.Red]: 0,
    //   [Color.Blue]: 0,
    // };
    const [gameTitle, fullPullDataString] = line.split(": ");
    const gameId = Number(gameTitle.split(" ")[1]);
    // ['Game 1', '3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green']
    const pullDataStrings = fullPullDataString.split("; ");
    // ['3 blue, 4 red', '1 red, 2 green, 6 blue', '2 green']
    for (const pullData of pullDataStrings) {
      const pullDataParts = pullData.split(", ");
      // const gameColorCounter: Record<Color, number> = {
      //   [Color.Green]: 0,
      //   [Color.Red]: 0,
      //   [Color.Blue]: 0,
      // };
      // ['3 blue', '4 red']
      for (const pullDataPart of pullDataParts) {
        const [countString, color] = pullDataPart.split(" ");
        console.log("countString is: ", countString);
        const count = Number(countString);
        if (count > colorLimit[color as Color]) {
          console.log("count is: ", count);
          gameValid = false;
        }
        // gameColorCounter[color as Color] += count;
      }
      // const validGame = compareColorRecords(gameColorCounter, colorLimit);
      // if (!validGame) {
      //   break;
      // }
    }
    if (gameValid) {
      sumofPossibleGameIds += gameId;
    }
  };
  await processInputAndExecuteCallback("day2.input.txt", callback);
  return sumofPossibleGameIds;
}

(async () => {
  const result = await day_2_solution();
  console.log(result);
})();
