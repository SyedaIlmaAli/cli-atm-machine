#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter Your Pin Number",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select From The Following Options",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "How Much Money You Want To Withdraw?",
        type: "number",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log(
        `Sorry! Your current amount is ${myBalance}. Please try again!!`
      );
    } else {
      myBalance -= amountAns.amount;
      console.log(
        `You successfully withdrawal ${amountAns.amount} \nYour remaining balance is ${myBalance}`
      );
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`Your Current Accout Balance is ${myBalance}`);
  } else if (operationAns.operation === "fast cash") {
    let fast = await inquirer.prompt([
      {
        name: "fastCash",
        message: "Please Select The Withdrawl Amount",
        type: "list",
        choices: [10, 20, 30, 40, 50, 60, 70, 100],
      },
    ]);
    myBalance -= fast.fastCash;
    console.log(
      `You successfully withdrawal ${fast.fastCash}\nYour remaining balance is ${myBalance}`
    );
  }
} else {
  console.log("Your Pin Code is Wrong. Please Try Again.");
}
