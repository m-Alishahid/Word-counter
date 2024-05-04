#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";
console.log(chalk.yellowBright("WORD COUNTER (By:m.a.s)"));
const ans: {
    sent: string;
} = await inquirer.prompt([{
    name: "sent",
    type: "input",
    message: "Enter your sentence"

}])
const done = ans.sent.trim().split(" ")
console.log(done)
console.log(`Your sentence word count is ${done.length}`)