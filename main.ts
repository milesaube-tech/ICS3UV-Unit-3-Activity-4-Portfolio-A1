/**
 * @author Miles Aube
 * @version 1.0.0
 * @date 2025-12-03
 * @fileoverview This program asks the user how hungry they are and responds accordingly.
 */

// variables
let hungerString: string = "";
let hungerNumber: number = 0;

// input
hungerString = prompt(
  "Hello, how hungry are you on a scale of 1 to 10, where 1 is not hungry and 10 means you must eat? "
) || "0";
hungerNumber = parseInt(hungerString);

// check hunger on scale 1-10
if (hungerNumber > 5) {
  console.log("Please eat!");
} else {
  console.log("You are not really that hungry.");
}

console.log("\nDone.");