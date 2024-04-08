#! /usr/bin/env  node

import inquirer from "inquirer"

const answer = await inquirer.prompt (
    [
    {
        message: "enter your first number", 
        type: "number",
        name: "firstNumber"
    },
   {
       message: "enter your second number", 
       type: "number", 
       name: "secondNumber"

     },
     {
        name: "operator",
        message: "select one of the operator to perform actions",
        type:  "list",
        choices: ["Addition", "Substraction", "Multiplication", "Division"]
     },
]
);

if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}

else if 
 (answer.operator === "Substraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if 
 (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if
(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}

else {
    console.log("kindly select valid operator")
}