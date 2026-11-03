const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user to enter a number
rl.question(
  "Enter the number whose table you want to display: ",
  function (string) {
    const userInput = parseInt(string);

    // Validate input
    if (isNaN(userInput)) {
      console.log("Please enter a valid number.");
    } else {
      console.log("\nTable of " + userInput + " using for loop:");
      console.log(forLoop(userInput));

      console.log("\nTable of " + userInput + " using while loop:");
      console.log(whileLoop(userInput));

      console.log("\nTable of " + userInput + " using do-while loop:");
      console.log(doWhileLoop(userInput));
    }

    // Close input stream
    rl.close();
  },
);

// FOR LOOP
function forLoop(n) {
  let f = parseInt(n);
  let res = "";

  for (let i = 1; i <= 10; i++) {
    const r = i * f;

    res += f + " x " + i + " = " + r + "\n";
  }

  return res;
}
// WHILE LOOP
function whileLoop(n) {
  let f = parseInt(n);
  let res = "";

  let i = 1;

  while (i <= 10) {
    const r = i * f;

    res += f + " x " + i + " = " + r + "\n";

    i++;
  }

  return res;
}
// DO-WHILE LOOP

function doWhileLoop(n) {
  let f = parseInt(n);
  let res = "";

  let i = 1;

  do {
    const r = i * f;

    res += f + " x " + i + " = " + r + "\n";

    i++;
  } while (i <= 10);

  return res;
}
