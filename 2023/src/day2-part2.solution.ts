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
  let sumOfGamePower = 0;
  const callback = (line: string) => {
    let gameValid = true;
    const gameColorMaxCounter: Record<Color, number> = {
      [Color.Green]: 0,
      [Color.Red]: 0,
      [Color.Blue]: 0,
    };
    const [gameTitle, fullPullDataString] = line.split(": ");
    const gameId = Number(gameTitle.split(" ")[1]);
    // ['Game 1', '3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green']
    const pullDataStrings = fullPullDataString.split("; ");
    // ['3 blue, 4 red', '1 red, 2 green, 6 blue', '2 green']
    for (const pullData of pullDataStrings) {
      const pullDataParts = pullData.split(", ");

      // ['3 blue', '4 red']
      for (const pullDataPart of pullDataParts) {
        const [countString, color] = pullDataPart.split(" ");
        console.log("countString is: ", countString);
        const count = Number(countString);
        if (count > gameColorMaxCounter[color as Color]) {
          gameColorMaxCounter[color as Color] = count;
        }
      }
    }
    sumOfGamePower +=
      gameColorMaxCounter[Color.Green] *
      gameColorMaxCounter[Color.Red] *
      gameColorMaxCounter[Color.Blue];
  };
  await processInputAndExecuteCallback("day2.input.txt", callback);
  return sumOfGamePower;
}

(async () => {
  const result = await day_2_solution();
  console.log(result);
})();
