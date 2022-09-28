/* 1. TODO: Include packages needed for this application. 
Go to root directory of folder and type <npm install inquierer@8.2.4> in the termainl to install inquirer*/

const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const {generateMarkdown} = require("./Develop/utils/generateMarkdown.js");

// 2. TODO: Create an array of questions for user input*/
const questions = function(questionData){
    return inquirer
    .prompt (
    [
        {
            type: 'input',
            message: "What is the name of your project?",
            name: "title"
        },
        {
            type: 'input',
            message: "Please provide a Table of Contents for this project.",
            name: "tableOfContents"
        },
        {
            type: 'input',
            message: "What's your username?",
            name: "username"
        },
        {
            type: 'input',
            message: "Please provide a description of the project.",
            name: "projectDescripton"
        },
    ]);
}

/* 3. TODO: Create a function to write README file
function writeToFile(fileName, data) {}*/

function writeToFile(fileName, data) {
    questions ()
    .then(questionData => {
        const pageMD = generateMarkdown(questionData)
        fs.writeFile('./README.md', pageMD, err => {
            if (err) throw new Error (err);
            console.log('ReadMe File Created!');
        })
    })
} 

/* TODO: Create a function to initialize app
function init() {}*/

function init () {
    writeToFile()
}

/* Function call to initialize app
init()*/

init ();