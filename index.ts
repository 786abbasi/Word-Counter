#! /usr/bin/env node    
//THIS IS THE SHEBANG FILE

import inquirer from "inquirer";   //Import 'inquirer' modules is a CLI Interface for NODE.JS

const answer: {
  sentences: string;
} = await inquirer.prompt([
  {
    name: "sentences",
    type: "input",
    message: "Enter your sentences to count the words",
  },
]);

const words = answer.sentences.trim().split(" "); /***USES OF SPLIT--->ELEMENT K LIST KO ARRAY ME CONVERT KERDYGA****/

console.log(words);

console.log(`The words in your sentence count are: ${words.length}`);
