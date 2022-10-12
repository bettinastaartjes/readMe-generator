

//1. TODO: Include packages needed for this application.
    //Go to root directory of folder and type <npm install inquierer@8.2.4> in the termainl to install inquirer
    //ASKBCS: Make sure everything is out of the Develop folder; this is why I was getting the Module Not Found error

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");
console.log(generateMarkdown);

// 2. TODO: Create an array of questions for user input
//Why is it const questions and not function promptUser() bc I was getting an error when using that
const questions = function(questionData){     
    return inquirer.prompt ([
        {
            type: 'input',
            message: "What is the title of your project?",
            name: "title",
            //validate property to check that the user provided a value//
            validate: (value)=>{ if(value){return true} else {return 'Please provide an answer to continue'}},
        },
        {
            type: 'input',
            message: "Please provide a Table of Contents for this project.",
            name: "tableOfContents",
            //validate property to check that the user provided a value//
            validate: (value)=>{ if(value){return true} else {return 'Please provide an answer to continue'}},
        },
        {
            type: 'input',
            message: "What's your username?",
            name: "username",
            //validate property to check that the user provided a value//
            validate: (value)=>{ if(value){return true} else {return 'Please provide an answer to continue'}},
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: 'input',
            message: "Please provide a description of the project.",
            name: "projectDescripton",
            //validate property to check that the user provided a value//
            validate: (value)=>{ if(value){return true} else {return 'Please provide an answer to continue'}},
        },
    ]);
}

/* 3. TODO: Create a function to write README file
function writeToFile(fileName, data) {}*/

function writeToFile(fileName, data) {
    questions ()
    .then(questionData => {
        const pageMD = generateMarkdown(questionData)
        fs.writeFile('./READMEE.md', pageMD, err => {
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