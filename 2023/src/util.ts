import fs from "fs";
import readline from "readline";

export async function processInputAndExecuteCallback(
  inputFile: fs.PathLike,
  callback: (line: string) => void
) {
  const rl = readline.createInterface({
    input: fs.createReadStream(inputFile),
    crlfDelay: Infinity,
  });
  rl.on("line", callback);
  await new Promise((res) => rl.once("close", res));
}

// module.exports = { processInputAndExecuteCallback };
