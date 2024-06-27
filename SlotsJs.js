// 1. Deposit money -complete
// 2. Determine line bet
// 3. Collect bet amount
// 4. Spin Slots
// 5. Check if they won
// 6. Give or take winnings/loss
// 7. play again?

const prompt = require("prompt-sync")();
const deposit = () => {
  // while loop to keep asking until input is valid
  // valid input type breaks while loop
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numDepositAmount = parseFloat(depositAmount);

    if (isNaN(numDepositAmount) || numDepositAmount <= 0) {
      console.log("Invalid Input, mortal!");
    } else {
      return numDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("How many lines for you? (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid Input, mortal!");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("How much would you wager per line?: ");
    const numberBet = parseFloat(bet);
    const maximumBet = Math.floor(balance / lines);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log(
        `Invalid Input, mortal! Your maximum bet for this many lines is ${maximumBet}`
      );
    } else {
      return numberBet;
    }
  }
};

let balance = deposit();
// console.log(depositAmount);
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
