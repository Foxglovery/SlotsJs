// 1. Deposit money
// 2. Determine line bet
// 3. Collect bet amount
// 4. Spin Slots
// 5. Check if they won
// 6. Give or take winnings/loss
// 7. play again?

const prompt = require("prompt-sync")();
const deposit = () => {
  // while loop to keep asking until input is valid
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

deposit();
